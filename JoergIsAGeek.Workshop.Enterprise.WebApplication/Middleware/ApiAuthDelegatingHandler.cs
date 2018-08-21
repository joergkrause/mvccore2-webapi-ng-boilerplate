using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Middleware {
  public class ApiAuthDelegatingHandler : DelegatingHandler {

    IHttpContextAccessor _context;

    public ApiAuthDelegatingHandler(IHttpContextAccessor context) {
      _context = context;
    }


    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken) {
      var httpContext = _context.HttpContext;
      var userName = string.Empty;
      if (httpContext.User.Identity.IsAuthenticated && httpContext.User.Identity.AuthenticationType == "AuthenticationTypes.Federation") {
        var nameClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
        userName = ((ClaimsIdentity)httpContext.User.Identity).Claims.SingleOrDefault(c => c.Type == nameClaimType)?.Value;
      }
      var byteArray = Encoding.ASCII.GetBytes($"{userName}:p@ssw0rd");
      request.Headers.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
      return base.SendAsync(request, cancellationToken);
    }

  }
}
