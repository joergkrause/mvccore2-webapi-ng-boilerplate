using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {

  /// <summary>
  /// Base class that provides all repositories and mapping to DTO types.
  /// </summary>
  public abstract class Manager {

    protected IMapper mapper;
    private IUserContextProvider userContext;

    public Manager(IServiceProvider service) {
      // we pull the repos from container to avoid to many ctor params (see startup.cs for definitions)
      this.RepRoles = service.GetService<IAuthenticationDbRepository<IdentityRole, string>>();
      this.RepUsers = service.GetService<IAuthenticationDbRepository<IdentityUser, string>>();
      this.RepUserClaims = service.GetService<IAuthenticationDbRepository<IdentityUserClaim<string>, string>>();
      this.RepUserRoles = service.GetService<IAuthenticationDbRepository<IdentityUserRole<string>, string>>();
      // user management
      this.userContext = service.GetService<IUserContextProvider>();
    }

    #region Authentication

    protected IAuthenticationDbRepository<IdentityUser, string> RepUsers {
      get;
    }

    protected IAuthenticationDbRepository<IdentityRole, string> RepRoles {
      get;
    }

    protected IAuthenticationDbRepository<IdentityUserClaim<string>, string> RepUserClaims {
      get;
    }

    protected IAuthenticationDbRepository<IdentityUserRole<string>, string> RepUserRoles {
      get;
    }

    #endregion

    #region User Management

    protected ClaimsIdentity UserIdentity { get {
        return userContext.UserIdentity as ClaimsIdentity;
      }
    }

    #endregion

  }
}
