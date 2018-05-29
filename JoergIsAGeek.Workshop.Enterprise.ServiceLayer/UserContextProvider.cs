using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.ServiceModel;
using System.Web;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  public class UserContextProvider : IUserContextProvider
  {

    public IIdentity UserIdentity {
      get {
        return ServiceSecurityContext.Current.PrimaryIdentity;
      }
    }
  }
}