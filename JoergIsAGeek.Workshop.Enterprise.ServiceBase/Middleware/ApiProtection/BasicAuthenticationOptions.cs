using Microsoft.AspNetCore.Authentication;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware.ApiProtection {
  public class BasicAuthenticationOptions : AuthenticationSchemeOptions {
    public string Realm { get; set; }
  }
}
