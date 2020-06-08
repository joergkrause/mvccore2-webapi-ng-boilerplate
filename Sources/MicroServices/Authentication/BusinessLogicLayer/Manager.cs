using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {

  /// <summary>
  /// Base class that provides UoW pattern and mapping to DTO types.
  /// This is an alternative way to show a pattern different from Repository.
  /// In UoW you work directly on the transactional Context, less abstract but more powerful.
  /// </summary>
  public abstract class Manager : UnitOfWork {

    protected IMapper mapper;
    private IUserContextProvider userContext;

    public Manager(
      AuthenticationDataContext context, 
      IUserContextProvider userContext,
      IMapper mapper) : base(context) {
      this.userContext = userContext;
      this.mapper = mapper;
    }

    #region User Management

    protected ClaimsIdentity UserIdentity { get {
        return userContext.UserIdentity as ClaimsIdentity;
      }
    }

    #endregion

  }
}
