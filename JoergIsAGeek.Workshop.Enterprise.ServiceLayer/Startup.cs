using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddTransient<IUserContextProvider>(s => new UserContextProvider());
      services.AddMvc();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info {
          Title = "Enterprise Service API",
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
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      // authenticate the client WFE the most secure way
      app.UseClientCertificate();
      // forward a custom header to create a light user object
      app.UseUserContext();
      // expose an API endpoint
      app.UseSwagger();
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Enterprise Service V1");
        c.RoutePrefix = string.Empty;
      });      
      app.UseMvc();
    }
  }
}
