
using Microsoft.AspNetCore.Identity;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication {
  public class UserRole : IdentityUserRole<string>, IEntityBase<string> {

    public string Id {
      get {
        return $"{RoleId}{UserId}";
      }
      set { }
    }
  }
}
