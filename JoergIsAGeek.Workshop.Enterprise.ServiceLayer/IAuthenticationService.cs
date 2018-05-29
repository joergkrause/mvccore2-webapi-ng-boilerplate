using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  [ServiceContract(Name = "AuthSrv", Namespace = "http://www.joergkrause.de/srv")]
  public interface IAuthenticationService
  {
    [OperationContract]
    IdentityResult CreateUser(ApplicationUserDto user);
    [OperationContract]
    ApplicationUserDto FindUserById(string userId);
    [OperationContract]
    ApplicationUserDto FindUserByName(string normalizedUserName);
    [OperationContract]
    string GetNormalizedUserName(ApplicationUserDto user);
    [OperationContract]
    string GetUserDtoId(ApplicationUserDto user);
    [OperationContract]
    string GetUserDtoName(ApplicationUserDto user);
    [OperationContract]
    void SetNormalizedUserName(ApplicationUserDto user, string normalizedName);
    [OperationContract]
    void SeUserDtoName(ApplicationUserDto user, string userName);
    [OperationContract]
    IdentityResult UpdateUser(ApplicationUserDto user);
    [OperationContract]
    IdentityResult CreateRole(ApplicationIdentityRoleDto role);

    [OperationContract]
    IdentityResult DeleteRole(ApplicationIdentityRoleDto role);

    [OperationContract]
    ApplicationIdentityRoleDto FindRoleById(string roleId);

    [OperationContract]
    ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName);

    [OperationContract]
    string GetNormalizedRoleName(ApplicationIdentityRoleDto role);

    [OperationContract]
    string GetIdentityRoleDtoId(ApplicationIdentityRoleDto role);

    [OperationContract]
    string GetIdentityRoleDtoName(ApplicationIdentityRoleDto role);

    [OperationContract]
    void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName);

    [OperationContract]
    void SeIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName);

    [OperationContract]
    IdentityResult UpdateRole(ApplicationIdentityRoleDto role);

    [OperationContract]
    string GetPasswordHash(ApplicationUserDto userDto);

    [OperationContract]
    bool HasPassword(ApplicationUserDto userDto);

    [OperationContract]
    void SetPasswordHash(ApplicationUserDto userDto, string passwordHash);

    [OperationContract]
    ApplicationUserDto FindByEmail(string normalizedEmail);

    [OperationContract]
    string GetEmail(ApplicationUserDto user);

    [OperationContract]
    bool GetEmailConfirmed(ApplicationUserDto user);

    [OperationContract]
    string GetNormalizedEmail(ApplicationUserDto user);

    [OperationContract]
    void SetEmail(ApplicationUserDto user, string email);

    [OperationContract]
    void SetEmailConfirmed(ApplicationUserDto user, bool confirmed);

    [OperationContract]
    void SetNormalizedEmail(ApplicationUserDto user, string normalizedEmail);
  }
}
