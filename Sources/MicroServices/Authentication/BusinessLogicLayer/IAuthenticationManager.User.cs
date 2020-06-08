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
    IdentityResult DeleteUser(string id);
    ApplicationUserDto FindUserById(string userId);
    ApplicationUserDto FindUserByName(string normalizedUserName);
    string GetUserDtoName(string id);
    IdentityResult UpdateUser(ApplicationUserDto user);

    bool HasPassword(string id);

    ApplicationUserDto FindByEmail(string normalizedEmail);
      
    bool GetEmailConfirmed(string id);

    string GetPasswordHash(string id);
    void SetEmail(string userId, string email);

    void SetEmailConfirmed(string userId, bool confirmed);

    IEnumerable<ApplicationUserDto> GetUsers();
  }
}
