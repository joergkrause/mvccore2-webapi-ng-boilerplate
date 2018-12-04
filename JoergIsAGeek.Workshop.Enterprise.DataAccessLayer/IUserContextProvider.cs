using System.Security.Principal;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer {

  /// <summary>
  /// This is a forwarder for the user data from auth module.
  /// </summary>
  public interface IUserContextProvider {

    /// <summary>
    /// The actual user that in what context the API calls is initiating.
    /// </summary>
    IIdentity UserIdentity { get; }

    /// <summary>
    /// For easy setup
    /// </summary>
    /// <param name="user"></param>
    void SetUserIdentity(IIdentity user);

    /// <summary>
    /// The configured secret that protects the backend.
    /// </summary>
    string SecretKey { get; }

  }
}