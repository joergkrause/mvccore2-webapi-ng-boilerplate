using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Controllers
{
  /// <summary>
  /// Access to the authentication backend based on ASP.NET identity.
  /// </summary>
  [Route("api/[controller]")]
  public class AuthServiceController : Controller
  {
    private IAuthenticationManager _authenticationManager;

    /// <summary>
    /// Ctor, injects the <see cref="IAuthenticationManager"/>.
    /// </summary>
    /// <param name="authenticationManager"></param>
    public AuthServiceController(IAuthenticationManager authenticationManager)
    {
      _authenticationManager = authenticationManager;
    }

    /// <summary>
    /// Create a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpPost]
    public IdentityResult CreateRole([FromBody] ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.CreateRole(role);
    }

    /// <summary>
    /// Create a new user
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpPost]
    public IdentityResult CreateUser([FromBody] ApplicationUserDto user)
    {
      return _authenticationManager.CreateUser(user);
    }

    /// <summary>
    /// Remove a role
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpPost]
    public IdentityResult DeleteRole([FromBody] ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.DeleteRole(role);
    }

    /// <summary>
    /// Find a role
    /// </summary>
    /// <param name="roleId"></param>
    /// <returns></returns>
    [HttpGet]
    public ApplicationIdentityRoleDto FindRoleById(string roleId)
    {
      return _authenticationManager.FindRoleById(roleId);
    }

    /// <summary>
    /// Find a role by full name.
    /// </summary>
    /// <param name="normalizedRoleName"></param>
    /// <returns></returns>
    [HttpGet]
    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      return _authenticationManager.FindRoleByName(normalizedRoleName);
    }

    /// <summary>
    /// Find a user by hashed id.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    [HttpGet]
    public ApplicationUserDto FindUserById(string userId)
    {
      return _authenticationManager.FindUserById(userId);
    }

    /// <summary>
    /// Find a user by name
    /// </summary>
    /// <param name="normalizedUserName"></param>
    /// <returns></returns>
    [HttpGet]
    public ApplicationUserDto FindUserByName(string normalizedUserName)
    {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }

    /// <summary>
    /// Get a relation between an identity and a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    public string GetIdentityRoleDtoId([FromQuery] ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.GetIdentityRoleDtoId(role);
    }

    /// <summary>
    /// Get a relation between an identity and a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    public string GetIdentityRoleDtoName([FromQuery] ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.GetIdentityRoleDtoName(role);
    }

    /// <summary>
    /// Get the normalized name of the given role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    public string GetNormalizedRoleName([FromQuery] ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.GetNormalizedRoleName(role);
    }

    /// <summary>
    /// Get the normalized name of the given user.
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpGet]
    public string GetNormalizedUserName([FromQuery] ApplicationUserDto user)
    {
      return _authenticationManager.GetNormalizedUserName(user);
    }

    /// <summary>
    /// The the Id of a user
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpGet]
    public string GetUserDtoId([FromQuery] ApplicationUserDto user)
    {
      return _authenticationManager.GetUserDtoId(user);
    }

    [HttpGet]
    public string GetUserDtoName([FromQuery] ApplicationUserDto user)
    {
      return _authenticationManager.GetUserDtoName(user);
    }

    /// <summary>
    /// Set the role for an identity.
    /// </summary>
    /// <param name="role"></param>
    /// <param name="roleName"></param>
    [HttpPut]
    public void SeIdentityRoleDtoName([FromBody] ApplicationIdentityRoleDto role, string roleName)
    {
      _authenticationManager.SeIdentityRoleDtoName(role, roleName);
    }

    [HttpPut]
    public void SetNormalizedRoleName([FromBody] ApplicationIdentityRoleDto role, string normalizedName)
    {
      _authenticationManager.SetNormalizedRoleName(role, normalizedName);
    }

    [HttpPut]
    public void SetNormalizedUserName([FromBody] ApplicationUserDto user, string normalizedName)
    {
      _authenticationManager.SetNormalizedUserName(user, normalizedName);
    }

    [HttpPut]
    public void SetUserDtoName([FromBody] ApplicationUserDto user, string userName)
    {
      _authenticationManager.SetUserDtoName(user, userName);
    }

    [HttpPut]
    public IdentityResult UpdateRole([FromBody] ApplicationIdentityRoleDto role)
    {
      return _authenticationManager.UpdateRole(role);
    }

    [HttpPut]
    public IdentityResult UpdateUser([FromBody] ApplicationUserDto user)
    {
      return _authenticationManager.UpdateUser(user);
    }

    [HttpGet]
    public string GetPasswordHash([FromQuery] ApplicationUserDto userDto)
    {
      return _authenticationManager.GetPasswordHash(userDto);
    }

    [HttpPost]
    public bool HasPassword([FromBody] ApplicationUserDto userDto)
    {
      return _authenticationManager.HasPassword(userDto);
    }

    [HttpPut]
    public void SetPasswordHash([FromBody] ApplicationUserDto userDto, string passwordHash)
    {
      _authenticationManager.SetPasswordHash(userDto, passwordHash);
    }

    [HttpGet]
    public ApplicationUserDto FindByEmail(string normalizedEmail)
    {
      return _authenticationManager.FindByEmail(normalizedEmail);
    }

    [HttpGet]
    public string GetEmail([FromQuery] ApplicationUserDto user)
    {
      return _authenticationManager.GetEmail(user);
    }

    [HttpGet]
    public bool GetEmailConfirmed([FromQuery] ApplicationUserDto user)
    {
      return _authenticationManager.GetEmailConfirmed(user);
    }

    [HttpGet]
    public string GetNormalizedEmail([FromQuery] ApplicationUserDto user)
    {
      return _authenticationManager.GetNormalizedEmail(user);
    }

    [HttpPut]
    public void SetEmail([FromBody] ApplicationUserDto user, string email)
    {
      _authenticationManager.SetEmail(user, email);
    }

    [HttpPut]
    public void SetEmailConfirmed([FromBody] ApplicationUserDto user, bool confirmed)
    {
      _authenticationManager.SetEmailConfirmed(user, confirmed);
    }

    [HttpPut]
    public void SetNormalizedEmail([FromBody] ApplicationUserDto user, string normalizedEmail)
    {
      _authenticationManager.SetNormalizedEmail(user, normalizedEmail);
    }
  }
}
