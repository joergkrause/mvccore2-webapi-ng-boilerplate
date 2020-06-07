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
    string GetUserDtoId(ApplicationUserDto user);
    string GetUserDtoName(ApplicationUserDto user);
    void SetNormalizedUserName(ApplicationUserDto user, string normalizedName);
    void SetUserDtoName(ApplicationUserDto user, string userName);
    IdentityResult UpdateUser(ApplicationUserDto user);
    string GetPasswordHash(ApplicationUserDto userDto);

    bool HasPassword(ApplicationUserDto userDto);

    // void SetPasswordHash(ApplicationUserDto userDto, string passwordHash);

    ApplicationUserDto FindByEmail(string normalizedEmail);
   
    string GetEmail(ApplicationUserDto user);
    
    bool GetEmailConfirmed(ApplicationUserDto user);

    string GetNormalizedEmail(ApplicationUserDto user);
    
    void SetEmail(ApplicationUserDto user, string email);

    void SetEmailConfirmed(ApplicationUserDto user, bool confirmed);

    void SetNormalizedEmail(ApplicationUserDto user, string normalizedEmail);

    IEnumerable<ApplicationUserDto> GetUsers();
  }
}
