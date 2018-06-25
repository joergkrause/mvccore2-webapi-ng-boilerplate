using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware {

  /// <summary>
  /// A user object transfer middleware.
  /// </summary>
  /// <remarks>
  /// The backend app server is NOT save by design. The client can provide a header for
  /// the authenticated user and any tier can use this to handle user oriented code, such
  /// as rights, claims, and roles. However, using infrastructure, we accept only one 
  /// specific client (by certificate) to make such calls. Hence, the infrastructure is
  /// save.
  /// </remarks>
  public class UserForwarder {
    private readonly RequestDelegate _next;

    public UserForwarder(RequestDelegate next) {
      _next = next;
    }

    public Task Invoke(HttpContext httpContext) {
      string userName = "NoUser";
      if (httpContext.User.Identity.IsAuthenticated) {
        userName = httpContext.User.Identity.Name;
      }
      httpContext.Request.Headers.Add("X-User-Authenticated-Name", userName);
      // manage user code based on roles and rights
      return _next(httpContext);
    }
  }

  // Extension method used to add the middleware to the HTTP request pipeline.
  public static class UseUserForwarderExtensions {
    public static IApplicationBuilder UseUserForwarder(this IApplicationBuilder builder) {
      return builder.UseMiddleware<UserForwarder>();
    }
  }
}
