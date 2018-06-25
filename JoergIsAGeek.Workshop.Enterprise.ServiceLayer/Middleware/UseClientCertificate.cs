using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware
{
  // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
  public class ClientCertificate
  {
    private readonly RequestDelegate _next;

    public ClientCertificate(RequestDelegate next)
    {
      _next = next;
    }

    public Task Invoke(HttpContext httpContext)
    {
      var cert = httpContext.Connection.ClientCertificate;
      // TODO: Check cert here as a global security measure
      return _next(httpContext);
    }
  }

  // Extension method used to add the middleware to the HTTP request pipeline.
  public static class UseClientCertificateExtensions
  {
    public static IApplicationBuilder UseClientCertificate(this IApplicationBuilder builder)
    {
      return builder.UseMiddleware<ClientCertificate>();
    }
  }
}
