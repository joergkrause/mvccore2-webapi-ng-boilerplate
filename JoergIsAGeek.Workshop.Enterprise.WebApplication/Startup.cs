using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication.Extensions;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Middleware;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.MachineData;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication {
  public class Startup {


    public Startup(IHostingEnvironment env) {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services) {
      // Add framework services.
      services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
      services.AddMvc();
      // Security using custom backend
      services.AddIdentity<UserViewModel, RoleViewModel>()
        .AddDefaultTokenProviders();
      // Backend API, this is the DEBUG configuration's port
      var backendUri = new Uri(Configuration.GetValue<string>("backEndUri"));
      // The API as created by AutoREST from swagger definition
      var rootHandler = new HttpClientHandler();
      // current context to get access to current user
      var httpContextInstance = services.BuildServiceProvider().GetService<IHttpContextAccessor>();
      ApiAuthDelegatingHandler degHandler = new ApiAuthDelegatingHandler(httpContextInstance, Configuration);
      var apiClientAuthService = new AuthenticationAPI(backendUri, rootHandler, degHandler);
      var apiClientMachineService = new MachineDataAPI(backendUri, rootHandler, degHandler);
      // Alternative way: static authentication of backend
      //var byteArray = Encoding.ASCII.GetBytes("username:secretKey");
      //apiClient.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
      services.AddSingleton<IAuthenticationAPI>(apiClientAuthService);
      services.AddSingleton<IMachineDataAPI>(apiClientMachineService);
      // WFE logic and identity based on view models
      services.AddScoped<UserManager<UserViewModel>, CustomUserManager>(); // calls IUSerStore
      services.AddScoped<RoleManager<RoleViewModel>, CustomRoleManager>(); // calls IRoleStore
      services.AddScoped<IUserStore<UserViewModel>, CustomUserStore>();
      services.AddScoped<IRoleStore<RoleViewModel>, CustomRoleStore>();
      services.AddScoped<SignInManager<UserViewModel>, SignInManager<UserViewModel>>();
      services.AddScoped<IJwtFactory, JwtFactory>();
      // user account settings, consider moving to config file
      services.Configure<IdentityOptions>(options => {
        // Password settings
        options.Password.RequireDigit = true;
        options.Password.RequiredLength = 8;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = true;
        options.Password.RequireLowercase = false;
        options.Password.RequiredUniqueChars = 6;

        // Lockout settings
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
        options.Lockout.MaxFailedAccessAttempts = 10;
        options.Lockout.AllowedForNewUsers = true;

        // User settings
        options.User.RequireUniqueEmail = true;

        options.SignIn.RequireConfirmedEmail = false;
      });

      // JSON Web Token wire up
      // Get options from app settings
      var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

      var SecretKey = Configuration.GetSection("Keys").GetValue<string>("TokenSecret");
      var _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

    // TODO: Needed? Configure JwtIssuerOptions
    services.Configure<JwtIssuerOptions>(options => {
        options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
        options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
      });

      var tokenValidationParameters = new TokenValidationParameters {
        // The signing key must match!
        ValidateIssuerSigningKey = true,
        ValidateAudience = false,
        ValidateIssuer = false,
        IssuerSigningKeys = new List<SecurityKey> { _signingKey },

        // Validate the token expiry
        ValidateLifetime = true,
      };

      // Per default failed requests redirect to Account/Logon, 
      // but here we have SPA with API and need to inform SPA app to handle this.
      services.AddAuthentication(options => {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(options => {
        options.IncludeErrorDetails = true;
        options.TokenValidationParameters = tokenValidationParameters;
        options.Events = new JwtBearerEvents {
          OnMessageReceived = async (context) => {
            Debug.WriteLine("====>  JWT Message received");
          },
          OnTokenValidated = async (context) => {
            Debug.WriteLine("====>  JWT token validated");
          },
          OnAuthenticationFailed = c => {
            Debug.WriteLine($"====>  JWT auth failed: {c.Exception}");
            c.NoResult();
            c.Response.StatusCode = 403;
            c.Response.ContentType = "text/plain";
            c.Response.WriteAsync(c.Exception.ToString()).Wait();
            return Task.CompletedTask;
          },
          OnChallenge = c => {
            c.HandleResponse();
            return Task.CompletedTask;
          }
        };
      });
      services.AddAuthorization(options => {
        options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
        .RequireAuthenticatedUser()
        .Build();
        // API users just need to have this particular claim to use the API        
        options.AddPolicy("ApiUser", policy => {
          // this is in Roles/UserRoles and connecting it to the policy simplifies the [Authoize] attribute
          policy.RequireRole("User");
          // this is in the UserClaims table connected to particular users. weirdguest has no access, all others have access
          policy.RequireClaim("api_access");
        });
      });

      // support for object mappings
      services.AddAutoMapper(typeof(ViewModelToDtoMappingProfile));
    }

    /// <summary>
    /// Unauthenticated ajax or API request returns 403 rather than Redirect to forbidden page
    /// </summary>
    private static Task DontRedirectAjaxOrApiRequestToForbidden(AuthenticationFailedContext ctx) {
      bool isAjaxRequest = ctx.HttpContext.Request.Headers["x-requested-with"] == "XMLHttpRequest";
      if (isAjaxRequest || (ctx.Request.Path.StartsWithSegments("/api"))) {
        ctx.Response.StatusCode = 403; // this is where the Angular interceptor comes into the game (401 will work, too)
      }
      else {
        ctx.Response.StatusCode = 400; // API only
      }
      return Task.CompletedTask;
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {

      if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
      }
      else {
        // TODO: Figure out how to handle global errors with SPA front end??
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseExceptionHandler(
      builder => {
        builder.Run(async context => {
          context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
          context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

          var error = context.Features.Get<IExceptionHandlerFeature>();
          if (error != null) {
            context.Response.AddApplicationError(error.Error.Message);
            await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
          }
        });
      });
      // run auth
      app.UseAuthentication();
      // default file is index.html to serve out SPA
      app.UseDefaultFiles();
      // static parts such as JS, CSS, ...
      app.UseStaticFiles();
      // default route
      app.UseMvc();
    }
  }
}
