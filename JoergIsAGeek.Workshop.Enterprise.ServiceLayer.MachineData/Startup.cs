using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware;
using JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware.ApiProtection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer {
  public class Startup {
    public Startup(IConfiguration configuration) {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services) {
      // store user for middleware access
      services.AddScoped(typeof(IUserContextProvider), s => new UserContextProvider(Configuration));
      // access to db globally configured
      // get connectionstring from appsettings.json
      var connectionString = Configuration.GetConnectionString(nameof(MachineDataContext));
      services.AddDbContext<MachineDataContext>(o => o.UseSqlServer(connectionString), ServiceLifetime.Scoped);
      services.AddScoped(typeof(IGenericRepository<Machine, int>), typeof(GenericDbRepository<Machine, int>));
      services.AddScoped(typeof(IGenericRepository<Device, int>), typeof(GenericDbRepository<Device, int>));
      services.AddScoped(typeof(IGenericRepository<DataValue, int>), typeof(GenericDbRepository<DataValue, int>));
      services.AddScoped(typeof(IMachineManager), typeof(MachineManager));
      // backend protection, frontend shall provide username and passwordhash as basic auth
      services.AddAuthentication("Basic").AddScheme<BasicAuthenticationOptions, BasicAuthenticationHandler>("Basic", null);
      // formatters
      services.AddMvc(options => {
        // because the API just serves the WFE, we format everything JSON conform
        options.OutputFormatters.RemoveType<TextOutputFormatter>();
      });
      services.AddSwaggerGen(c => {
        c.SwaggerDoc("v1", new Info {
          Title = "Machine Data API",          
          Version = "v1",
          Contact = new Contact {
            Name = "Jörg Krause",
            Email = "joerg@krause.net",
            Url = "https://twitter.com/joergisageek"
          },
          License = new License {
            Name = "Use under MIT",
            Url = "https://example.com/license"
          }
        });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
      if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
      }
      // we want to authenticate the client
      app.UseAuthentication();
      // custom middleware
      app.UseUserContext();
      // swagger UI and endpoint
      app.UseSwagger();
      app.UseSwaggerUI(c => {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Machine Data Service V1");
        c.RoutePrefix = string.Empty;
      });
      // for swagger UI
      app.UseMvc();
    }
  }
}
