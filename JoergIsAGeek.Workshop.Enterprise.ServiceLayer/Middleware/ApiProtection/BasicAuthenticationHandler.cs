using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware.ApiProtection {

  /// <summary>
  /// See at https://joonasw.net/view/creating-auth-scheme-in-aspnet-core-2
  /// </summary>
  public class BasicAuthenticationHandler : AuthenticationHandler<BasicAuthenticationOptions> {

    public BasicAuthenticationHandler(
    IOptionsMonitor<BasicAuthenticationOptions> options,
    ILoggerFactory logger,
    UrlEncoder encoder,
    ISystemClock clock)
    : base(options, logger, encoder, clock) {
    }

    protected override async Task<AuthenticateResult> HandleAuthenticateAsync() {
      if (!Request.Headers.ContainsKey("Authorization")) {
        //Authorization header not in request
        return AuthenticateResult.NoResult();
      }
      if (!AuthenticationHeaderValue.TryParse(Request.Headers["Authorization"], out AuthenticationHeaderValue headerValue)) {
        //Invalid Authorization header
        return AuthenticateResult.NoResult();
      }
      if (!"Basic".Equals(headerValue.Scheme, StringComparison.OrdinalIgnoreCase)) {
        //Not Basic authentication header
        return AuthenticateResult.NoResult();
      }
      byte[] headerValueBytes = Convert.FromBase64String(headerValue.Parameter);
      string userAndPassword = Encoding.UTF8.GetString(headerValueBytes);
      string[] parts = userAndPassword.Split(':');
      if (parts.Length != 2) {
        return AuthenticateResult.Fail("Invalid Basic authentication header");
      }
      string user = parts[0];
      string password = parts[1];
      // static password as a secret for backend protection, username is dynamic - the currently authenticated user
      bool isValidUser = password == "p@ssw0rd";

      if (!isValidUser) {
        return AuthenticateResult.Fail("Invalid username or password");
      }
      var claims = new[] { new Claim(ClaimTypes.Name, user) };
      var identity = new ClaimsIdentity(claims, Scheme.Name);
      var principal = new ClaimsPrincipal(identity);
      var ticket = new AuthenticationTicket(principal, Scheme.Name);
      return AuthenticateResult.Success(ticket);
    }

    protected override async Task HandleChallengeAsync(AuthenticationProperties properties) {
      Response.Headers["WWW-Authenticate"] = $"Basic realm=\"{Options.Realm}\", charset=\"UTF-8\"";
      await base.HandleChallengeAsync(properties);
    }

  }
}
