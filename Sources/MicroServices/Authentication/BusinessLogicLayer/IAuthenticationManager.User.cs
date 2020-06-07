using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public partial interface IAuthenticationManager
  {
    IdentityResult CreateUser(ApplicationUserDto user);
    ApplicationUserDto FindUserById(string userId);
    ApplicationUserDto FindUserByName(string normalizedUserName);
    string GetNormalizedUserName(ApplicationUserDto user);
    string GetUserDtoName(string id);
    IdentityResult UpdateUser(ApplicationUserDto user);

    bool HasPassword(string id);

    ApplicationUserDto FindByEmail(string normalizedEmail);
      
    bool GetEmailConfirmed(string id);

    string GetNormalizedEmail(string id);
    string GetPasswordHash(string id);
    void SetEmail(ApplicationUserDto user, string email);

    void SetEmailConfirmed(ApplicationUserDto user, bool confirmed);

    IEnumerable<ApplicationUserDto> GetUsers();
  }
}
