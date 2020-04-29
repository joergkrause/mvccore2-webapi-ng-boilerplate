using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApi.Authentication.Extensions
{
  public static class AuthSetupExtension
  {

    /// <summary>
    /// Moved setup here to simplify the startup.cs file. There is no particular reason other than code clarity.
    /// </summary>
    /// <param name="services"></param>
    /// <param name="getEnv"></param>
    /// <param name="Configuration"></param>
    public static void AddLocalJwtAuthentication(this IServiceCollection services, Func<string, string> getEnv, IConfiguration Configuration)
    {
      services.AddScoped<IJwtFactory, JwtFactory>();
      // user account settings, consider moving to config file
      services.Configure<IdentityOptions>(options =>
      {
        // Password settings
        options.Password.RequireDigit = true;
        options.Password.RequiredLength = 8;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = true;
        options.Password.RequireLowercase = false;
        options.Password.RequiredUniqueChars = 6;

        // Lockout settings
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
        options.Lockout.MaxFailedAccessAttempts = 10;
        options.Lockout.AllowedForNewUsers = true;

        // User settings
        options.User.RequireUniqueEmail = true;

        options.SignIn.RequireConfirmedEmail = false;
      });

      // JSON Web Token wire up
      var SecretKey = getEnv("TokenSecret") ?? Configuration.GetSection("Keys").GetValue<string>("TokenSecret");
      var _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

      services.Configure<JwtIssuerOptions>(options =>
      {
        // Get options from app settings, but read env variables first
        var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
        options.Issuer = getEnv("Issuer") ?? jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        options.Audience = getEnv("Audience") ?? jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
        options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
      });

      var tokenValidationParameters = new TokenValidationParameters
      {
        // The signing key must match
        ValidateIssuerSigningKey = true,
        // Audience we set but don't check actually --> it's not a federation service, it's just self issued token 
        ValidateAudience = false,
        // Issuer we set but don't check actually --> it's not a federation service, it's just self issued token 
        ValidateIssuer = false,
        IssuerSigningKeys = new List<SecurityKey> { _signingKey },
        // Validate the token expiry
        ValidateLifetime = true,
      };

      // Per default failed requests redirect to Account/Logon, 
      // but here we have SPA with API and need to inform SPA app to handle this.
      _ = services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(options =>
      {
        options.IncludeErrorDetails = true;
        options.TokenValidationParameters = tokenValidationParameters;
#pragma warning disable CS1998 // #warning directive for await/async violation, it's just while debug code is in here
        options.Events = new JwtBearerEvents
        {
          OnMessageReceived = async (context) =>
          {
            Debug.WriteLine("====>  JWT Message received");
          },
          OnTokenValidated = async (context) =>
          {
            Debug.WriteLine("====>  JWT token validated");
          },
          OnAuthenticationFailed = c =>
          {
            Debug.WriteLine($"====>  JWT auth failed: {c.Exception}");
            c.NoResult();
            c.Response.StatusCode = 403;
            c.Response.ContentType = "text/plain";
            c.Response.WriteAsync(c.Exception.ToString()).Wait();
            return Task.CompletedTask;
          },
          OnChallenge = c =>
          {
            c.HandleResponse();
            return Task.CompletedTask;
          }
        };
#pragma warning restore CS1998 // #warning directive
      });
    }

  }
}
