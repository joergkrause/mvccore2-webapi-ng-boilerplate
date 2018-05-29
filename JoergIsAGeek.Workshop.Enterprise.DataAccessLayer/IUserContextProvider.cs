using System.Security.Principal;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer
{
  public interface IUserContextProvider
  {
    IIdentity UserIdentity { get; }
  }
}