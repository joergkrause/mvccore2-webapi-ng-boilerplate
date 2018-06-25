using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Middleware
{
  public class UserContextProvider : IUserContextProvider
  {
    public IIdentity UserIdentity { get; private set; }

    public void SetUserIdentity(IIdentity user)
    {
      UserIdentity = user;
    }
  }
}
