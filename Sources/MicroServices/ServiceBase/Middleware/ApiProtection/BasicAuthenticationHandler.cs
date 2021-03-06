﻿using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
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

namespace JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware.ApiProtection {

  /// <summary>
  /// See at https://joonasw.net/view/creating-auth-scheme-in-aspnet-core-2
  /// </summary>
  public class BasicAuthenticationHandler : AuthenticationHandler<BasicAuthenticationOptions> {

    private readonly IUserContextProvider userContext;

    public BasicAuthenticationHandler(
    IOptionsMonitor<BasicAuthenticationOptions> options,
    ILoggerFactory logger,
    UrlEncoder encoder,
    ISystemClock clock,
    IUserContextProvider userContext)
    : base(options, logger, encoder, clock) {
      this.userContext = userContext;
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
      bool isValidUser = password == userContext.SecretKey;

      if (!isValidUser) {
        return AuthenticateResult.Fail("Invalid username or password");
      }
      var claims = new List<Claim>();
      // we even make access here before we have a user, so we skip the user specific part in case it's just a logon attempt
      if (!String.IsNullOrEmpty(user)) {
        claims.Add(new Claim(ClaimTypes.Name, user));
        var claimsHeader = Request.Headers["X-User-Claims"];
        if (!string.IsNullOrEmpty(claimsHeader)) {
          var userClaims = claimsHeader
            .SelectMany(c => c.Split(','))
            .Select(c => Encoding.ASCII.GetString(Convert.FromBase64String(c.Trim())))
            .Select(c => {
              var claimParts = c.Split('|');
              return new Claim(claimParts[0], claimParts[1]);
            });
          claims.AddRange(userClaims);
        }
      }
      var identity = new ClaimsIdentity(claims, Scheme.Name);
      // this keeps the user's identity for business logic purpose
      userContext.SetUserIdentity(identity);
      var principal = new ClaimsPrincipal(identity);
      var ticket = new AuthenticationTicket(principal, Scheme.Name);
      return await Task.FromResult(AuthenticateResult.Success(ticket));
    }

    protected override async Task HandleChallengeAsync(AuthenticationProperties properties) {
      Response.Headers["WWW-Authenticate"] = $"Basic realm=\"{Options.Realm}\", charset=\"UTF-8\"";
      await base.HandleChallengeAsync(properties);
    }

  }
}
