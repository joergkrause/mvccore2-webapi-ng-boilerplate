using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Providers
{
  public class UserContextProvider : IUserContextProvider {
    public IIdentity UserIdentity { get; internal set; }
  }
}
