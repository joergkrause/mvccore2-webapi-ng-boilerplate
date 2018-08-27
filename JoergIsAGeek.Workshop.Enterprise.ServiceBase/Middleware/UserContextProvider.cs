using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware
{
  public class UserContextProvider : IUserContextProvider
  {

    public UserContextProvider(IConfiguration configuration) {
      SecretKey = configuration.GetSection("Keys")?.GetValue<string>("BackendSecret");
      if (String.IsNullOrEmpty(SecretKey)) {
        throw new ArgumentOutOfRangeException("configuration", "No proper configuration of backend secret. Add section 'Keys' with the value 'BackendSecret' with same value as frontend.");
      }
    }

    public IIdentity UserIdentity { get; private set; }
    public string SecretKey { get; private set; }

    public void SetUserIdentity(IIdentity user)
    {
      UserIdentity = user;
    }
  }
}
