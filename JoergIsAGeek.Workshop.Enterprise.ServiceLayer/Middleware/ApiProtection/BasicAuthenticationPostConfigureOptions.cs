using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware.ApiProtection {
  public class BasicAuthenticationPostConfigureOptions : IPostConfigureOptions<BasicAuthenticationOptions> {
    public void PostConfigure(string name, BasicAuthenticationOptions options) {
      if (string.IsNullOrEmpty(options.Realm)) {
        throw new InvalidOperationException("Realm must be provided in options");
      }
    }
  }
}
