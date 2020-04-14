using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System.Security.Principal;

namespace JoergIsAGeek.Workshop.Enterprise.SetupConsole
{
  internal class MockedUserContextProvider : IUserContextProvider
  {
    public IIdentity UserIdentity { get; private set; }

    public string SecretKey { get; private set; }

    public void SetUserIdentity(IIdentity user)
    {
      UserIdentity = user;
    }
  }
}
