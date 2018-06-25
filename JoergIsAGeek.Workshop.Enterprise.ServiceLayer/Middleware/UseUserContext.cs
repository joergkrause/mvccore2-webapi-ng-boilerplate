using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware
{

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
public class UserContext
  {
    private readonly RequestDelegate _next;

    public UserContext(RequestDelegate next)
    {
      _next = next;
    }

    public Task Invoke(HttpContext httpContext)
    {
      // The client layer provides the authenticated user as a header
      var userName = httpContext.Request.Headers["X-User-Authenticated-Name"];
      // We forward this to a service, which other parts of the app can consume to 
      // manage user code based on roles and rights
      if (userName.Any()) {
        var userContext = httpContext.RequestServices.GetService(typeof(IUserContextProvider)) as IUserContextProvider;
        userContext.SetUserIdentity(new GenericIdentity(userName.Single(), "X-User"));
      }
      return _next(httpContext);
    }
  }

  // Extension method used to add the middleware to the HTTP request pipeline.
  public static class UseUserContextExtensions
  {
    public static IApplicationBuilder UseUserContext(this IApplicationBuilder builder)
    {
      return builder.UseMiddleware<UserContext>();
    }
  }
}
