using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{

  [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall)]
  public class AuthenticationService : IAuthenticationService
  {

    private IAuthenticationManager _authenticationManager;

    public AuthenticationService(IAuthenticationManager authenticationManager)
    {
      _authenticationManager = authenticationManager;
    }


    public IdentityResult CreateRole(ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.CreateRole(role);
    }

    public IdentityResult CreateUser(ApplicationUserDto user)
    {
      return _authenticationManager.CreateUser(user);
    }

    public IdentityResult DeleteRole(ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.DeleteRole(role);
    }

    public ApplicationIdentityRoleDto FindRoleById(string roleId)
    {
      return _authenticationManager.FindRoleById(roleId);
    }

    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      return _authenticationManager.FindRoleByName(normalizedRoleName);
    }

    public ApplicationUserDto FindUserById(string userId)
    {
      return _authenticationManager.FindUserById(userId);
    }

    public ApplicationUserDto FindUserByName(string normalizedUserName)
    {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }

    public string GetIdentityRoleDtoId(ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.GetIdentityRoleDtoId(role);
    }

    public string GetIdentityRoleDtoName(ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.GetIdentityRoleDtoName(role);
    }

    public string GetNormalizedRoleName(ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.GetNormalizedRoleName(role);
    }

    public string GetNormalizedUserName(ApplicationUserDto user)
    {
      return _authenticationManager.GetNormalizedUserName(user);
    }

    public string GetUserDtoId(ApplicationUserDto user)
    {
      return _authenticationManager.GetUserDtoId(user);
    }

    public string GetUserDtoName(ApplicationUserDto user)
    {
      return _authenticationManager.GetUserDtoName(user);
    }

    public void SeIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName)
    {
      _authenticationManager.SeIdentityRoleDtoName(role, roleName);
    }

    public void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName)
    {
      _authenticationManager.SetNormalizedRoleName(role, normalizedName);
    }

    public void SetNormalizedUserName(ApplicationUserDto user, string normalizedName)
    {
      _authenticationManager.SetNormalizedUserName(user, normalizedName);
    }

    public void SeUserDtoName(ApplicationUserDto user, string userName)
    {
      _authenticationManager.SeUserDtoName(user, userName);
    }

    public IdentityResult UpdateRole(ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.UpdateRole(role);
    }

    public IdentityResult UpdateUser(ApplicationUserDto user)
    {
      return _authenticationManager.UpdateUser(user);
    }

    public string GetPasswordHash(ApplicationUserDto userDto)
    {
      return _authenticationManager.GetPasswordHash(userDto);
    }

    public bool HasPassword(ApplicationUserDto userDto)
    {
      return _authenticationManager.HasPassword(userDto);
    }

    public void SetPasswordHash(ApplicationUserDto userDto, string passwordHash)
    {
      _authenticationManager.SetPasswordHash(userDto, passwordHash);
    }

    public ApplicationUserDto FindByEmail(string normalizedEmail)
    {
      return _authenticationManager.FindByEmail(normalizedEmail);
    }

    public string GetEmail(ApplicationUserDto user)
    {
      return _authenticationManager.GetEmail(user);
    }

    public bool GetEmailConfirmed(ApplicationUserDto user)
    {
      return _authenticationManager.GetEmailConfirmed(user);
    }

    public string GetNormalizedEmail(ApplicationUserDto user)
    {
      return _authenticationManager.GetNormalizedEmail(user);
    }

    public void SetEmail(ApplicationUserDto user, string email)
    {
      _authenticationManager.SetEmail(user, email);
    }

    public void SetEmailConfirmed(ApplicationUserDto user, bool confirmed)
    {
      _authenticationManager.SetEmailConfirmed(user, confirmed);
    }

    public void SetNormalizedEmail(ApplicationUserDto user, string normalizedEmail)
    {
      _authenticationManager.SetNormalizedEmail(user, normalizedEmail);
    }
  }
}