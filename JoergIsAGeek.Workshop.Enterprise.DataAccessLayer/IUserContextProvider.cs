using System.Security.Principal;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer
{

  /// <summary>
  /// This is a forwarder for the user data from auth module.
  /// </summary>
  public interface IUserContextProvider
  {
    IIdentity UserIdentity { get; }

    void SetUserIdentity(IIdentity user);
  }
}