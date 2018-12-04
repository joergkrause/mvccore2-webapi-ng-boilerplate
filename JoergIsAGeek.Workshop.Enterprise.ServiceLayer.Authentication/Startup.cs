﻿using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
        c.SwaggerDoc("v1", new Info
        {
          Title = "Authentication API",
          Version = "v1",
          Contact = new Contact
          {
            Name = "Jörg Krause",
            Email = "joerg@krause.net",
            Url = "https://twitter.com/joergisageek"
          },
          License = new License
          {
            Name = "Use under MIT",
            Url = "https://example.com/license"
          }
        });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public override void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        // swagger UI and endpoint only at dev-time
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
          c.SwaggerEndpoint("/swagger/v1/swagger.json", "Authentication Service V1");
          c.RoutePrefix = string.Empty;
        });
      }
      base.Configure(app, env);
    }
  }
}
