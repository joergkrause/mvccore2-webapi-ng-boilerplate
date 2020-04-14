using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication.Extensions;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Middleware;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.ServiceProxy.Authentication;
using JoergIsAGeek.ServiceProxy.MachineData;
using NSwag;
using NSwag.Generation.Processors.Security;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{
  public class Startup
  {
    /// <summary>
    /// All environment variables we use to configure containerized use this prefix.
    /// </summary>
    const string ENV_PREFIX = "WORKSHOP_";

    public Startup(IWebHostEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      Func<string, string> getEnv = (name) => Environment.GetEnvironmentVariable($"{ENV_PREFIX}{name}", EnvironmentVariableTarget.Machine);
      // Add framework services
      services.AddHttpContextAccessor();
      services.AddMvc(option => option.EnableEndpointRouting = false);
      // Security using custom backend
      services.AddIdentity<UserViewModel, RoleViewModel>().AddDefaultTokenProviders();
      var rootHandler = new HttpClientHandler();
      // Configuration: 
      //   if an env variable exists we use this, otherwise we fallback to appsettings.json
      //   this way we can configure the services in containers with pre-built images and now access to appsettings.json
      var authServiceUri = getEnv($"{nameof(AuthServiceClient)}_backEndUri") ?? Configuration.GetValue<string>($"{nameof(AuthServiceClient)}_backEndUri");
      var machineServiceUri = getEnv($"{nameof(MachineServiceClient)}_backEndUri") ?? Configuration.GetValue<string>($"{nameof(MachineServiceClient)}_backEndUri");
      // Add backend REST services
      services.AddSingleton(ctx =>
      {
        var httpContextAccessor = ctx.GetService<IHttpContextAccessor>();
        var degHandler = new ApiAuthDelegatingHandler(httpContextAccessor, Configuration);
        var backendUri = new Uri(authServiceUri);
        var httpClient = new HttpClient(degHandler);
        var apiClientAuthService = new AuthServiceClient(httpClient);
        apiClientAuthService.BaseUrl = backendUri.AbsoluteUri;
        return apiClientAuthService;
      });
      services.AddSingleton(ctx =>
      {
        var httpContextAccessor = ctx.GetService<IHttpContextAccessor>();
        var degHandler = new ApiAuthDelegatingHandler(httpContextAccessor, Configuration);
        var backendUri = new Uri(machineServiceUri);
        var httpClient = new HttpClient(degHandler);
        var apiClientMachineService = new MachineServiceClient(httpClient);
        apiClientMachineService.BaseUrl = backendUri.AbsoluteUri;
        return apiClientMachineService;
      });
      // WFE logic and identity based on view models
      services.AddScoped<UserManager<UserViewModel>, CustomUserManager>(); // calls IUSerStore
      services.AddScoped<RoleManager<RoleViewModel>, CustomRoleManager>(); // calls IRoleStore
      services.AddScoped<IUserStore<UserViewModel>, CustomUserStore>();
      services.AddScoped<IRoleStore<RoleViewModel>, CustomRoleStore>();
      services.AddScoped<SignInManager<UserViewModel>, SignInManager<UserViewModel>>();
      services.AddScoped<IJwtFactory, JwtFactory>();
      // user account settings, consider moving to config file
      services.Configure<IdentityOptions>(options =>
      {
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
      var SecretKey = getEnv("TokenSecret") ?? Configuration.GetSection("Keys").GetValue<string>("TokenSecret");
      var _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

      services.Configure<JwtIssuerOptions>(options =>
      {
        // Get options from app settings, but read env variables first
        var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
        options.Issuer = getEnv("Issuer") ?? jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        options.Audience = getEnv("Audience") ?? jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
        options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
      });

      var tokenValidationParameters = new TokenValidationParameters
      {
        // The signing key must match
        ValidateIssuerSigningKey = true,
        // Audience we set but don't check actually --> it's not a federation service, it's just self issued token 
        ValidateAudience = false,
        // Issuer we set but don't check actually --> it's not a federation service, it's just self issued token 
        ValidateIssuer = false,
        IssuerSigningKeys = new List<SecurityKey> { _signingKey },
        // Validate the token expiry
        ValidateLifetime = true,
      };

      // Per default failed requests redirect to Account/Logon, 
      // but here we have SPA with API and need to inform SPA app to handle this.
      _ = services.AddAuthentication(options =>
        {
          options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
          options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
          options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
          options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
          options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
          options.IncludeErrorDetails = true;
          options.TokenValidationParameters = tokenValidationParameters;
#pragma warning disable CS1998 // #warning directive for await/async violation, it's just while debug code is in here
          options.Events = new JwtBearerEvents
          {
            OnMessageReceived = async (context) =>
            {
              Debug.WriteLine("====>  JWT Message received");
            },
            OnTokenValidated = async (context) =>
            {
              Debug.WriteLine("====>  JWT token validated");
            },
            OnAuthenticationFailed = c =>
            {
              Debug.WriteLine($"====>  JWT auth failed: {c.Exception}");
              c.NoResult();
              c.Response.StatusCode = 403;
              c.Response.ContentType = "text/plain";
              c.Response.WriteAsync(c.Exception.ToString()).Wait();
              return Task.CompletedTask;
            },
            OnChallenge = c =>
            {
              c.HandleResponse();
              return Task.CompletedTask;
            }
          };
#pragma warning restore CS1998 // #warning directive
        });
      services.AddAuthorization(options =>
      {
        options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
        .RequireAuthenticatedUser()
        .Build();
        // API users just need to have this particular claim to use the API        
        options.AddPolicy("ApiUser", policy =>
        {
          // this is in Roles/UserRoles and connecting it to the policy simplifies the [Authorize] attribute
          policy.RequireRole("User");
          // this is in the UserClaims table connected to particular users. weirdguest has no access, all others have access
          policy.RequireClaim("api_access");
        });
      });
      // common API options
      services.Configure<ApiBehaviorOptions>(options =>
      {
        options.InvalidModelStateResponseFactory = actionContext =>
        {
          var errors = actionContext.ModelState
              .Where(e => e.Value.Errors.Count > 0)
              .Select(e => new
              {
                Name = e.Key,
                Message = e.Value.Errors.First().ErrorMessage
              }).ToArray();

          return new BadRequestObjectResult(errors);
        };
      });
      // for TS generator
      services.AddOpenApiDocument(cfg =>
      {
        cfg.Title = "Frontend API";
        cfg.Description = "OpenAPI 3 backend for Angular app.";
        cfg.DocumentName = "v1";
        cfg.PostProcess = document =>
        {
          document.Info.Contact = new OpenApiContact
          {
            Name = "Jörg Krause",
            Email = "joerg@krause.net",
            Url = "https://twitter.com/joergisageek"
          };
          document.Info.License = new OpenApiLicense
          {
            Name = "Use under MIT",
            Url = "https://github.com/joergkrause/mvccore2-webapi-ng-boilerplate/blob/master/LICENSE"
          };          
        };
      });

      // support for object mappings using Automapper
      services.AddAutoMapper(typeof(ViewModelToDtoMappingProfile));
    }

    /// <summary>
    /// Unauthenticated ajax or API request returns 403 rather than Redirect to forbidden page
    /// </summary>
    private static Task DontRedirectAjaxOrApiRequestToForbidden(AuthenticationFailedContext ctx)
    {
      bool isAjaxRequest = ctx.HttpContext.Request.Headers["x-requested-with"] == "XMLHttpRequest";
      if (isAjaxRequest || (ctx.Request.Path.StartsWithSegments("/api")))
      {
        ctx.Response.StatusCode = 403; // this is where the Angular interceptor comes into the game (401 will work, too)
      }
      else
      {
        ctx.Response.StatusCode = 400; // API only
      }
      return Task.CompletedTask;
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
    {

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseOpenApi();
        app.UseSwaggerUi3();
      }
      else
      {
        // TODO: Figure out how to handle global errors with SPA front end??
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseExceptionHandler(
      builder =>
      {
        builder.Run(async context =>
        {
          context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
          context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

          var error = context.Features.Get<IExceptionHandlerFeature>();
          if (error != null)
          {
            context.Response.AddApplicationError(error.Error.Message);
            await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
          }
        });
      });
      // run auth
      app.UseAuthentication();
      app.UseAuthorization();
      // default file is index.html to serve out SPA
      app.UseDefaultFiles();
      // static parts such as JS, CSS, ...
      app.UseStaticFiles();
      // Sites
      app.UseMvc();
    }
  }
}
