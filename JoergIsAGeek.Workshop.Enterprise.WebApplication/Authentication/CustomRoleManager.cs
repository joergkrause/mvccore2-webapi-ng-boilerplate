using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication
{

  /// <summary>
  /// This is the user manager which is simple here to give access to the custom <see cref="CustomUserStore"/>.
  /// </summary>
  public class CustomRoleManager : RoleManager<ApplicationIdentityRole>
  {
    public CustomRoleManager(IRoleStore<ApplicationIdentityRole> store, IEnumerable<IRoleValidator<ApplicationIdentityRole>> roleValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, ILogger<RoleManager<ApplicationIdentityRole>> logger) 
      : base(store, roleValidators, keyNormalizer, errors, logger) {

    }
  }
}
