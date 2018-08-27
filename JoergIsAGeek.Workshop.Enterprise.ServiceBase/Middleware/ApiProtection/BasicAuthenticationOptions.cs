using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware.ApiProtection {
  public class BasicAuthenticationOptions : AuthenticationSchemeOptions {
    public string Realm { get; set; }
  }
}
