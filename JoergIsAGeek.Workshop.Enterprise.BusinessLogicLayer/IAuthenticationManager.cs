using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public interface IAuthenticationManager
  {
    IdentityResult CreateUser(ApplicationUserDto user);
    ApplicationUserDto FindUserById(string userId);
    ApplicationUserDto FindUserByName(string normalizedUserName);
    string GetNormalizedUserName(ApplicationUserDto user);
    string GetUserDtoId(ApplicationUserDto user);
    string GetUserDtoName(ApplicationUserDto user);
    void SetNormalizedUserName(ApplicationUserDto user, string normalizedName);
    void SeUserDtoName(ApplicationUserDto user, string userName);
    IdentityResult UpdateUser(ApplicationUserDto user);
    IdentityResult CreateRole(ApplicationIdentityRoleDto role);

    IdentityResult DeleteRole(ApplicationIdentityRoleDto role);

    ApplicationIdentityRoleDto FindRoleById(string roleId);

    ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName);

    string GetNormalizedRoleName(ApplicationIdentityRoleDto role);

    string GetIdentityRoleDtoId(ApplicationIdentityRoleDto role);

    string GetIdentityRoleDtoName(ApplicationIdentityRoleDto role);

    void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName);

    void SeIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName);

    IdentityResult UpdateRole(ApplicationIdentityRoleDto role);
    string GetPasswordHash(ApplicationUserDto userDto);

    bool HasPassword(ApplicationUserDto userDto);

    void SetPasswordHash(ApplicationUserDto userDto, string passwordHash);

    ApplicationUserDto FindByEmail(string normalizedEmail);
   
    string GetEmail(ApplicationUserDto user);
    
    bool GetEmailConfirmed(ApplicationUserDto user);

    string GetNormalizedEmail(ApplicationUserDto user);
    
    void SetEmail(ApplicationUserDto user, string email);

    void SetEmailConfirmed(ApplicationUserDto user, bool confirmed);

    void SetNormalizedEmail(ApplicationUserDto user, string normalizedEmail);

  }
}
