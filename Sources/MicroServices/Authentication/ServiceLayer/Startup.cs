using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NSwag;
using NSwag.Generation.Processors.Security;
using static System.Console;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  public class Startup : StartupBase
  {

    public Startup(IConfiguration configuration) : base(configuration)
    {
    }

    // This method gets called by the runtime. Use this method to add services to the container.
    public override void ConfigureServices(IServiceCollection services)
    {
      base.ConfigureServices(services);
      // access to db globally configured      
      // get connectionstring from appsettings.json
      var connectionString = Configuration.GetConnectionString(nameof(MachineDataContext));
      WriteLine("Connectionstring {0}", connectionString);
      services.AddDbContext<MachineDataContext>(o => o.UseSqlServer(connectionString), ServiceLifetime.Scoped);
      services.AddScoped(typeof(IAuthenticationRepository<IdentityUser, string>), typeof(AuthenticationDbRepository<IdentityUser, string>));
      services.AddScoped(typeof(IAuthenticationRepository<IdentityRole, string>), typeof(AuthenticationDbRepository<IdentityRole, string>));
      services.AddScoped(typeof(IAuthenticationRepository<IdentityUserClaim<string>, string>), typeof(AuthenticationDbRepository<IdentityUserClaim<string>, string>));
      services.AddScoped(typeof(IAuthenticationRepository<IdentityUserRole<string>, string>), typeof(AuthenticationDbRepository<IdentityUserRole<string>, string>));
      services.AddScoped(typeof(IAuthenticationManager), typeof(AuthenticationManager));
      services.AddOpenApiDocument(cfg =>
      {
        cfg.Title = "Authentication API";
        cfg.Description = "OpenAPI 3 backend with simple Basic authentication using a static secret. This API supports ASP.NET Identity.";
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
          document.Security.Add(new OpenApiSecurityRequirement { { "Basic", new string[] { } } });
        };       
        cfg.DocumentProcessors.Add(new SecurityDefinitionAppender("Basic", new OpenApiSecurityScheme
        {
          Type = OpenApiSecuritySchemeType.Basic,
          Description = "For testing: Type a space for Username and this value as the password: D99BCD2C-1FD4-4374-B68F-45E84C59D510",
        }));
      });      
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public override void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      // swagger UI and endpoint only at dev-time
      // if (env.IsDevelopment())
      {
        app.UseOpenApi();
        app.UseSwaggerUi3(); // settings => settings.DocumentPath = "/swagger/v1/swagger.json");
      }
      app.UseRouting();

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }

  }
}
