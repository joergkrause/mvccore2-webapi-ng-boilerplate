using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication {

  public class JwtFactory : IJwtFactory {

    private readonly JwtIssuerOptions _jwtOptions;
    private readonly UserManager<UserViewModel> _userManager;

    public JwtFactory(IOptions<JwtIssuerOptions> jwtOptions, UserManager<UserViewModel> userManager) {
      _jwtOptions = jwtOptions.Value;
      _userManager = userManager;
      ThrowIfInvalidOptions(_jwtOptions);
    }

    public async Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity) {
      var claims = new List<Claim> {
                 new Claim(JwtRegisteredClaimNames.Sub, identity.Name),
                 new Claim(JwtRegisteredClaimNames.Jti, await _jwtOptions.JtiGenerator()),
                 new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(), ClaimValueTypes.Integer64),
                 new Claim(JwtRegisteredClaimNames.Email, userName)
             };
      // add roles to token, this is necessary to make [Authorize(Roles="")] attribute working against these roles
      var user = await _userManager.FindByNameAsync(identity.Name);
      var roles = await _userManager.GetRolesAsync(user);
      claims.AddRange(roles.Select(role => new Claim(ClaimsIdentity.DefaultRoleClaimType, role)));
      // add the users claims to the token to make [Authorize(Policy="")] attribute working against these claims
      // this requires a setup in Startup.cs, where a Policy is being defined that incorporates particular claims (or roles, as an option)
      var userClaims = await _userManager.GetClaimsAsync(user);
      claims.AddRange(userClaims.Select(claim => new Claim(claim.Type, claim.Value)));

      // Create the JWT security token and encode it.
      var jwt = new JwtSecurityToken(
          issuer: _jwtOptions.Issuer,
          audience: _jwtOptions.Audience,
          claims: claims,
          notBefore: _jwtOptions.NotBefore,
          expires: _jwtOptions.Expiration,
          signingCredentials: _jwtOptions.SigningCredentials);

      var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

      return encodedJwt;
    }

    /// <summary>
    /// Creates an identity for a user with the respected claims to access the API.
    /// </summary>
    /// <param name="userName"></param>
    /// <param name="id"></param>
    /// <returns></returns>
    public ClaimsIdentity GenerateClaimsIdentity(string userName, string id) {
      return new ClaimsIdentity(new GenericIdentity(userName, "Token"), new[] {
                new Claim("id", id)
            });
    }

    /// <returns>Date converted to seconds since Unix epoch (Jan 1, 1970, midnight UTC).</returns>
    private static long ToUnixEpochDate(DateTime date)
      => (long)Math.Round((date.ToUniversalTime() -
                           new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero))
                          .TotalSeconds);

    private static void ThrowIfInvalidOptions(JwtIssuerOptions options) {
      if (options == null) throw new ArgumentNullException(nameof(options));

      if (options.ValidFor <= TimeSpan.Zero) {
        throw new ArgumentException("Must be a non-zero TimeSpan.", nameof(JwtIssuerOptions.ValidFor));
      }

      if (options.SigningCredentials == null) {
        throw new ArgumentNullException(nameof(JwtIssuerOptions.SigningCredentials));
      }

      if (options.JtiGenerator == null) {
        throw new ArgumentNullException(nameof(JwtIssuerOptions.JtiGenerator));
      }
    }
  }

}