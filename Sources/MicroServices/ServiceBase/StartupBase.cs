using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware;
using JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware.ApiProtection;
using JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  public abstract class StartupBase
  {
    public StartupBase(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public virtual void ConfigureServices(IServiceCollection services)
    {
      // store user for middleware access
      services.AddScoped(typeof(IUserContextProvider), s => new UserContextProvider(Configuration));
      // access to db globally configured
      // get connectionstring from appsettings.json
      // backend protection, frontend shall provide username and passwordhash as basic auth
      services.AddAuthentication("Basic").AddScheme<BasicAuthenticationOptions, BasicAuthenticationHandler>("Basic", null);
      // formatters
      services.AddMvc(options =>
      {
        // because the API just serves the WFE, we format everything JSON conform
        options.OutputFormatters.RemoveType<TextOutputFormatter>();
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public virtual void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      // custom middleware
      app.UseUserContext();
    }
  }
}
