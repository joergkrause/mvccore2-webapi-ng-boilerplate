﻿using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication.Extensions;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Middleware;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy;
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
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication {
  public class Startup {

    private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
    private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

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
      services.AddSingleton<IJwtFactory, JwtFactory>();
      // Security using custom backend
      services.AddIdentity<ApplicationUser, ApplicationIdentityRole>()
        .AddDefaultTokenProviders();
      // Backend API, this is the DEBUG configuration's port
      var backendUri = new Uri(Configuration.GetValue<string>("backEndUri"));
      // The API as created by AutoREST from swagger definition
      var rootHandler = new HttpClientHandler();
      // current context to get access to current user
      var httpContextInstance = services.BuildServiceProvider().GetService<IHttpContextAccessor>();
      ApiAuthDelegatingHandler degHandler = new ApiAuthDelegatingHandler(httpContextInstance);
      var apiClient = new EnterpriseServiceAPI(backendUri, rootHandler, degHandler);
      // Alternative way: static authentication of backend
      //var byteArray = Encoding.ASCII.GetBytes("username:password1234");
      //apiClient.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
      services.AddSingleton<IEnterpriseServiceAPI>(apiClient);
      // WFE logic and identity
      services.AddScoped<UserManager<ApplicationUser>, CustomUserManager>();
      services.AddScoped<RoleManager<ApplicationIdentityRole>, CustomRoleManager>();
      services.AddScoped<IUserStore<ApplicationUser>, CustomUserStore>();
      services.AddScoped<IRoleStore<ApplicationIdentityRole>, CustomRoleStore>();
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
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(options => {
        options.IncludeErrorDetails = true;
        options.TokenValidationParameters = tokenValidationParameters;
        options.Events = new JwtBearerEvents {
          OnAuthenticationFailed = c => {
            c.NoResult();
            c.Response.StatusCode = 403;
            c.Response.ContentType = "text/plain";
            return c.Response.WriteAsync(c.Exception.ToString());
          },
        };
      });
      //options => {
      //  options.Events..OnRedirectToAccessDenied = DontRedirectAjaxOrApiRequestToForbidden;
      //  options.Events.OnRedirectToLogin = DontRedirectAjaxOrApiRequestToForbidden;
      //  options.Events.OnRedirectToLogout = DontRedirectAjaxOrApiRequestToForbidden;
      //  options.Events.OnRedirectToReturnUrl = DontRedirectAjaxOrApiRequestToForbidden;
      //});
      services.AddAuthorization(options => {
        options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
        .RequireAuthenticatedUser()
        .Build();
        // API users just need to have this particular claim to use the API
        // This is in the UserClaims table connected to particular users. weirdguest has no access, all others have access
        options.AddPolicy("ApiUser",
          policy => policy.RequireClaim(
            "role",
            "api_access"));
      });

      // support for object mappings
      services.AddAutoMapper(typeof(ViewModelToEntityMappingProfile));
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
      // keep authenticated user in a header and forward to backend
      app.UseUserForwarder();
      // default file is index.html to serve out SPA
      app.UseDefaultFiles();
      // static parts such as JS, CSS, ...
      app.UseStaticFiles();
      // default route
      app.UseMvc(routes => {
        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=Index}/{id?}");
      });
    }
  }
}
