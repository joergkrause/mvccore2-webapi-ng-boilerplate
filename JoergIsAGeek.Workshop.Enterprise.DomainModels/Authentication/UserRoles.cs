using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication {
  public class UserRole : IdentityUserRole<string>, IEntityBase<int> {
    public int Id { get; set; }
  }
}
