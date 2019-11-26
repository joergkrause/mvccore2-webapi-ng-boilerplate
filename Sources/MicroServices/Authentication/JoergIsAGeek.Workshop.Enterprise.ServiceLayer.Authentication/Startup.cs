using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

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
      services.AddDbContext<MachineDataContext>(o => o.UseSqlServer(connectionString), ServiceLifetime.Scoped);
      services.AddScoped(typeof(IGenericRepository<ApplicationUser, string>), typeof(GenericDbRepository<ApplicationUser, string>));
      services.AddScoped(typeof(IGenericRepository<ApplicationRole, string>), typeof(GenericDbRepository<ApplicationRole, string>));
      services.AddScoped(typeof(IGenericRepository<UserClaim, int>), typeof(GenericDbRepository<UserClaim, int>));
      services.AddScoped(typeof(IGenericRepository<UserRole, string>), typeof(GenericDbRepository<UserRole, string>));
      services.AddScoped(typeof(IAuthenticationManager), typeof(AuthenticationManager));
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1.0", new OpenApiInfo
        {
          Title = "Authentication API",
          Version = "v1.0",
          Contact = new OpenApiContact
          {
            Name = "Jörg Krause",
            Email = "joerg@krause.net",
            Url = new System.Uri("https://twitter.com/joergisageek")
          },
          License = new OpenApiLicense
          {
            Name = "Use under MIT",
            Url = new System.Uri("https://example.com/license")
          }
        });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public override void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        // swagger UI and endpoint only at dev-time
        app.UseSwagger(s => s.SerializeAsV2 = true);
        app.UseSwaggerUI(c =>
        {
          c.SwaggerEndpoint("/swagger/v1.0/swagger.json", "Authentication Service V1.0");
          c.RoutePrefix = string.Empty;
        });
      }
      base.Configure(app, env);
    }

  }
}
