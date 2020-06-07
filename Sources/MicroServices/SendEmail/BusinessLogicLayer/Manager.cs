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
    private readonly IUserContextProvider userContext;

    public Manager(IServiceProvider service) {
      // we pull the repos from container to avoid to many ctor params (see startup.cs for definitions)
      this.RepRoles = service.GetService<IAuthenticationRepository<IdentityRole, string>>();
      this.RepUsers = service.GetService<IAuthenticationRepository<IdentityUser, string>>();
      this.RepUserClaims = service.GetService<IAuthenticationRepository<IdentityUserClaim<string>, string>>();
      this.RepUserRoles = service.GetService<IAuthenticationRepository<IdentityUserRole<string>, string>>();
      // user management
      this.userContext = service.GetService<IUserContextProvider>();
    }

    #region Authentication

    protected IAuthenticationRepository<IdentityUser, string> RepUsers {
      get;
    }

    protected IAuthenticationRepository<IdentityRole, string> RepRoles {
      get;
    }

    protected IAuthenticationRepository<IdentityUserClaim<string>, string> RepUserClaims {
      get;
    }

    protected IAuthenticationRepository<IdentityUserRole<string>, string> RepUserRoles {
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
