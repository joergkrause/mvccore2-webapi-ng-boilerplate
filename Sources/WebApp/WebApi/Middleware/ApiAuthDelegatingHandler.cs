using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Middleware {
  public class ApiAuthDelegatingHandler : DelegatingHandler {

    private readonly IHttpContextAccessor _context;
    private readonly string backendSecret;
    private readonly Func<string, string> convertToBase64 = (s) => Convert.ToBase64String(Encoding.ASCII.GetBytes(s));

    public ApiAuthDelegatingHandler(IHttpContextAccessor context, IConfiguration configuration) {
      _context = context;
      backendSecret = configuration.GetSection("Keys")?.GetValue<string>("BackendSecret");
      if (string.IsNullOrEmpty(backendSecret)) {
        throw new ArgumentOutOfRangeException("configuration", "BackendSecret not set. Set the same value as registered at backend in section 'Keys' and value 'BackendSecret'.");
      }
      InnerHandler = new HttpClientHandler();
    }

    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken) {
      var httpContext = _context.HttpContext;
      var userName = string.Empty;
      ClaimsIdentity claimsIdentity = ((ClaimsIdentity)httpContext.User.Identity);
      if (claimsIdentity.IsAuthenticated && claimsIdentity.AuthenticationType == "AuthenticationTypes.Federation") {
        userName = ((ClaimsIdentity)httpContext.User.Identity).FindFirst(ClaimTypes.NameIdentifier).Value;
        // a custom header that avoids retrieving the claims for the business layer again
        // using | avoids conflict while splitting because claim type identifiers might by URIs
        // HINT: an alternative way would be a cache in the backend service logic
        // Add primary key to join tables between Auth DB and Working Data DB
        // claimsIdentity.Claims.Append(new Claim(ClaimTypes.PrimarySid, httpContext.User.Id));
        request.Headers.Add("X-User-Claims", 
          claimsIdentity.Claims.Select(c => convertToBase64($"{c.Type}|{c.Value}")));
      }
      // We add userName always, even if user is not authenticated, 
      // because the backend provides the logon/register functionality, too
      request.Headers.Authorization = new AuthenticationHeaderValue("Basic", convertToBase64($"{userName}:{backendSecret}"));
      return base.SendAsync(request, cancellationToken);
    }

  }
}
