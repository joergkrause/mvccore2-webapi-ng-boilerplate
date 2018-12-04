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
  public class CustomUserManager : UserManager<UserViewModel>
  {
    public CustomUserManager(IUserStore<UserViewModel> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<UserViewModel> passwordHasher, IEnumerable<IUserValidator<UserViewModel>> userValidators, IEnumerable<IPasswordValidator<UserViewModel>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<UserViewModel>> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
    {
    }
  }
}
