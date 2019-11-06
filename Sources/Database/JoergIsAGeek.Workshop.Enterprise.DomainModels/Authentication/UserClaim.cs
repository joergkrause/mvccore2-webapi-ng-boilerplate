
using Microsoft.AspNetCore.Identity;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication
{
  public class UserClaim : IdentityUserClaim<string>, IEntityBase<int> {
    
  }
}
