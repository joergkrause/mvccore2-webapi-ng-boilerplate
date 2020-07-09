using AutoMapper;
using JoergIsAGeek.ServiceProxy.Authentication;
using JoergIsAGeek.ServiceProxy.MachineData;
using JoergIsAGeek.Workshop.Enterprise.WebApi.Authentication.Extensions;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication.Extensions;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Middleware;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.Twitter;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authentication.WsFederation;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NSwag;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using System.Runtime.InteropServices.ComTypes;
using JoergIsAGeek.Workshop.Enterprise.WebApi.Middleware;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication {
  public class Startup {
    /// <summary>
    /// All environment variables we use to configure containerized use this prefix.
    /// </summary>
    const string ENV_PREFIX = "WORKSHOP_";

    public Startup(IWebHostEnvironment env) {
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
      static string getEnv(string name) => Environment.GetEnvironmentVariable($"{ENV_PREFIX}{name}", EnvironmentVariableTarget.Machine);
      // Add framework services
      services.AddHttpContextAccessor();
      services.AddMvc(option => option.EnableEndpointRouting = false);
      services.AddCors();
      var rootHandler = new HttpClientHandler();
      // Configuration: 
      //   if an env variable exists we use this, otherwise we fallback to appsettings.json
      //   this way we can configure the services in containers with pre-built images and now access to appsettings.json
      var authServiceUri = getEnv($"AuthenticationServiceClient_backEndUri") ?? Configuration.GetValue<string>($"AuthenticationServiceClient_backEndUri");
      var machineServiceUri = getEnv($"{nameof(MachineServiceClient)}_backEndUri") ?? Configuration.GetValue<string>($"{nameof(MachineServiceClient)}_backEndUri");
      // Add backend REST services
      HttpClient getClient(IServiceProvider ctx) {
        var httpContextAccessor = ctx.GetService<IHttpContextAccessor>();
        var degHandler = new ApiAuthDelegatingHandler(httpContextAccessor, Configuration);
        var httpClient = new HttpClient(degHandler);
        return httpClient;
      }
      var authBackendUri = new Uri(authServiceUri);
      services.AddSingleton(ctx => {
        var apiUserService = new UserServiceClient(getClient(ctx)) {
          BaseUrl = authBackendUri.AbsoluteUri
        };
        return apiUserService;
      });
      services.AddSingleton(ctx => {
        var apiRoleService = new RoleServiceClient(getClient(ctx)) {
          BaseUrl = authBackendUri.AbsoluteUri
        };
        return apiRoleService;
      });
      services.AddSingleton(ctx => {
        var apiClaimsService = new ClaimsServiceClient(getClient(ctx)) {
          BaseUrl = authBackendUri.AbsoluteUri
        };
        return apiClaimsService;
      });
      services.AddSingleton(ctx => {
        var backendUri = new Uri(machineServiceUri);
        var apiClientMachineService = new MachineServiceClient(getClient(ctx)) {
          BaseUrl = backendUri.AbsoluteUri
        };
        return apiClientMachineService;
      });
      // The whole user management setup for INTERNAL authentication (own backend with own token generation)
      // use cli to add secrets: 
      // One time: dotnet user-secrets init
      // Than: dotnet user-secrets set "key" "value"
      // Or right click solution, "Manage User Secrets" and edit secrets.json in your profile
      // More info: https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-3.1&tabs=windows
      services.AddIdentity<UserViewModel, RoleViewModel>()
        .AddDefaultTokenProviders()
        .AddUserStore<CustomUserStore>()
        .AddRoleStore<CustomRoleStore>()
        .AddUserManager<CustomUserManager>()
        .AddRoleManager<CustomRoleManager>();
      services.AddScoped<SignInManager<UserViewModel>, SignInManager<UserViewModel>>();
      // The whole JWT setup for INTERNAL authentication (own backend with own token generation)
      services.AddLocalJwtAuthentication(getEnv, Configuration);
      // Configure EXTERNAL Authentication mechanisms
      if (false) {
        // Windows
        //services.AddAuthentication(NegotiateDefaults.AuthenticationScheme).AddNegotiate();
        //// Client Cert
        //services.AddAuthentication(CertificateAuthenticationDefaults.AuthenticationScheme)
        //        .AddCertificate(options => // code from ASP.NET Core sample
        //        {
        //          options.AllowedCertificateTypes = CertificateTypes.All;
        //          options.Events = new CertificateAuthenticationEvents {
        //            OnCertificateValidated = context => {
        //              var validationService =
        //              context.HttpContext.RequestServices.GetService<MyCertificateValidationService>();

        //              if (validationService.ValidateCertificate(context.ClientCertificate)) {
        //                var claims = new[]
        //                {
        //        new Claim(ClaimTypes.NameIdentifier, context.ClientCertificate.Subject, ClaimValueTypes.String, context.Options.ClaimsIssuer),
        //        new Claim(ClaimTypes.Name, context.ClientCertificate.Subject, ClaimValueTypes.String, context.Options.ClaimsIssuer)
        //        };

        //                context.Principal = new ClaimsPrincipal(new ClaimsIdentity(claims, context.Scheme.Name));
        //                context.Success();
        //              } else {
        //                context.Fail("invalid cert");
        //              }

        //              return Task.CompletedTask;
        //            }
        //          };
        //        });

        //// Azure AD
        //services.AddAuthentication(AzureADDefaults.AuthenticationScheme)
        //.AddAzureAD(options => Configuration.Bind("AzureAd", options));
        //services.Configure<OpenIdConnectOptions>(AzureADDefaults.OpenIdScheme, options => {
        //  options.Authority = options.Authority + "/v2.0/"; // Microsoft identity platform
        //  options.TokenValidationParameters.ValidateIssuer = false; // accept several
        //});
      }
      if (!String.IsNullOrEmpty(Configuration["Authentication:Facebook"])) {
        services.AddAuthentication().AddFacebook(options => {
          options.AppId = Configuration["Authentication:Facebook:AppId"];
          options.ClientId = Configuration["Authentication:Facebook:ClientId"];
          options.ClientSecret = Configuration["Authentication:Facebook:ClientSecret"];
        });
      }
      if (!String.IsNullOrEmpty(Configuration["Authentication:Twitter"])) {
        services.AddAuthentication().AddTwitter(options => {
          options.ConsumerSecret = Configuration["Authentication:Twitter:ConsumerSecret"];
          options.ConsumerKey = Configuration["Authentication:Twitter:ConsumerKey"];
        });
      }
      if (!String.IsNullOrEmpty(Configuration["Authentication:Microsoft"])) {
        services.AddAuthentication().AddMicrosoftAccount(options => {
          options.ClientId = Configuration["Authentication:Facebook:Microsoft:ClientId"];
          options.ClientSecret = Configuration["Authentication:Facebook:Microsoft:ClientSecret"];
        });
      }


      // App specific policies
      services.AddAuthorization(options => {
        options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
        .RequireAuthenticatedUser()
        .Build();
        // API users just need to have this particular claim to use the API        
        // this is in Roles/UserRoles and connecting it to the policy simplifies the [Authorize] attribute
        // this is in the UserClaims table connected to particular users. weirdguest has no access, all others have access
        options.AddPolicy("ADPolicy", policy => {
          policy
          .RequireAuthenticatedUser()
          // .AuthenticationSchemes = new List<string>() { "Bearer", "ClientCert" }
          .RequireRole("ADSecutiryGroup")
          //.RequireClaim("api_access")
          .Build();
        });
        options.AddPolicy("ApiAdmin", policy => {
          policy
          .RequireAuthenticatedUser()
          .RequireRole("Admin")
          .RequireClaim("api_access").Build();
        });
        // More: https://docs.microsoft.com/en-us/archive/msdn-magazine/2017/october/cutting-edge-policy-based-authorization-in-asp-net-core
      });
      // common API options
      services.Configure<ApiBehaviorOptions>(options => {
        options.InvalidModelStateResponseFactory = actionContext => {
          var errors = actionContext.ModelState
              .Where(e => e.Value.Errors.Count > 0)
              .Select(e => new {
                Name = e.Key,
                Message = e.Value.Errors.First().ErrorMessage
              }).ToArray();

          return new BadRequestObjectResult(errors);
        };
      });
      // for TS generator
      services.AddOpenApiDocument(cfg => {
        cfg.Title = "Frontend API";
        cfg.Description = "OpenAPI 3 backend for Angular app.";
        cfg.DocumentName = "v1";
        cfg.PostProcess = document => {
          document.Info.Contact = new OpenApiContact {
            Name = "Jörg Krause",
            Email = "joerg@krause.net",
            Url = "https://twitter.com/joergisageek"
          };
          document.Info.License = new OpenApiLicense {
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
    private static Task DontRedirectAjaxOrApiRequestToForbidden(ResultContext<JwtBearerOptions> ctx) {
      bool isAjaxRequest = ctx.HttpContext.Request.Headers["x-requested-with"] == "XMLHttpRequest";
      if (isAjaxRequest || (ctx.Request.Path.StartsWithSegments("/api"))) {
        ctx.Response.StatusCode = 403; // this is where the Angular interceptor comes into the game (401 will work, too)
      } else {
        ctx.Response.StatusCode = 400; // API only
      }
      return Task.CompletedTask;
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory) {

      if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
        app.UseSwaggerUi3();
      } else {
        // nur mVC
        app.UseExceptionHandler("/Home/Error");
      }
      app.UseOpenApi();
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
      // app.UseOptionsCors(); // self made as an example
      app.UseCors(options => {
        options.WithOrigins("http://frontend:9000") // WebPack Dev Server
        .AllowAnyHeader()
        .AllowCredentials()
        .AllowAnyMethod();
      });
      app.UseRouting();
      // run auth and policies
      app.UseAuthentication();
      app.UseAuthorization();
      // default file is index.html to serve out SPA
      app.UseDefaultFiles();
      // static parts such as JS, CSS, ...
      app.UseStaticFiles();
      // make our endpoints available, don't configure MVC      
      app.UseEndpoints(configure => configure.MapControllers());
    }
  }
}
