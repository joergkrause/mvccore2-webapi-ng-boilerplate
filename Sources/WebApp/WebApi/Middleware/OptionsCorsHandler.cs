using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApi.Middleware {
  
  /// <summary>
  /// Handle CORS requests if the static file server is on a different port.
  /// </summary>
  public class OptionsCorsMiddleware {
    private readonly RequestDelegate _next;

    public OptionsCorsMiddleware(RequestDelegate next) {
      _next = next;
    }

    public Task Invoke(HttpContext context) {
      return BeginInvoke(context);
    }

    private Task BeginInvoke(HttpContext context) {
      if (context.Request.Method == "OPTIONS") {
        context.Response.Headers.Add("Access-Control-Allow-Origin", new[] { (string)context.Request.Headers["Origin"] });
        context.Response.Headers.Add("Access-Control-Allow-Headers", new[] { "Origin, X-Requested-With, Content-Type, Accept" });
        context.Response.Headers.Add("Access-Control-Allow-Methods", new[] { "GET, POST, PUT, DELETE, OPTIONS" });
        context.Response.Headers.Add("Access-Control-Allow-Credentials", new[] { "true" });
        context.Response.StatusCode = 200;
        return context.Response.WriteAsync("OK");
      }

      return _next.Invoke(context);
    }
  }

  public static class OptionsMiddlewareExtensions {
    public static IApplicationBuilder UseOptionsCors(this IApplicationBuilder builder) {
      return builder.UseMiddleware<OptionsCorsMiddleware>();
    }
  }
}
