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
  /// All requests/responses are handled as JSON to support the front end facility using Auto REST.
  /// </summary>
  [Route("api/[controller]")]
  [Produces("application/json")]
  public class AuthServiceController : Controller {
    private IAuthenticationManager _authenticationManager;

    /// <summary>
    /// Ctor, injects the <see cref="IAuthenticationManager"/>.
    /// </summary>
    /// <param name="authenticationManager"></param>
    public AuthServiceController(IAuthenticationManager authenticationManager) {
      _authenticationManager = authenticationManager;
    }

    #region User

    /// <summary>
    /// Create a new user
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("user")]
    public IdentityResult CreateUser([FromBody] ApplicationUserDto user) {
      return _authenticationManager.CreateUser(user);
    }


    /// <summary>
    /// Find a user by hashed id.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/findById")]
    public ApplicationUserDto FindUserById(string userId) {
      return _authenticationManager.FindUserById(userId);
    }

    /// <summary>
    /// Find a user by name
    /// </summary>
    /// <param name="normalizedUserName"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/findByName")]
    public ApplicationUserDto FindUserByName(string normalizedUserName) {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }



    /// <summary>
    /// Get the normalized name of the given user.
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/normalizedName")]
    public string GetNormalizedUserName([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetNormalizedUserName(user);
    }

    /// <summary>
    /// The the Id of a user
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/id")]
    public string GetUserDtoId([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetUserDtoId(user);
    }

    [HttpGet]
    [Route("user/name")]
    public string GetUserDtoName([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetUserDtoName(user);
    }

    [HttpPut]
    [Route("user/normalizedName")]
    public void SetNormalizedUserName([FromBody] ApplicationUserDto user, string normalizedName) {
      _authenticationManager.SetNormalizedUserName(user, normalizedName);
    }

    [HttpPut]
    [Route("user/name")]
    public void SetUserDtoName([FromBody] ApplicationUserDto user, string userName) {
      _authenticationManager.SetUserDtoName(user, userName);
    }

    [HttpPut]
    [Route("user")]
    public IdentityResult UpdateUser([FromBody] ApplicationUserDto user) {
      return _authenticationManager.UpdateUser(user);
    }

    [HttpGet]
    [Route("user/passwordHash")]
    public string GetPasswordHash([FromQuery] ApplicationUserDto userDto) {
      return _authenticationManager.GetPasswordHash(userDto);
    }

    [HttpGet]
    [Route("user/hasPassword")]
    public bool HasPassword([FromBody] ApplicationUserDto userDto) {
      return _authenticationManager.HasPassword(userDto);
    }

    [HttpPut]
    [Route("user/passwordHash")]
    public void SetPasswordHash([FromBody] ApplicationUserDto userDto, string passwordHash) {
      _authenticationManager.SetPasswordHash(userDto, passwordHash);
    }

    [HttpGet]
    [Route("user/findByEmail")]
    public ApplicationUserDto FindByEmail(string normalizedEmail) {
      return _authenticationManager.FindByEmail(normalizedEmail);
    }

    [HttpGet]
    [Route("user/email")]
    public string GetEmail([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetEmail(user);
    }

    [HttpGet]
    [Route("user/emailConfirmed")]
    public bool GetEmailConfirmed([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetEmailConfirmed(user);
    }

    [HttpGet]
    [Route("user/normalizedEmail")]
    public string GetNormalizedEmail([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetNormalizedEmail(user);
    }

    [HttpPut]
    [Route("user/email")]
    public void SetEmail([FromBody] ApplicationUserDto user, string email) {
      _authenticationManager.SetEmail(user, email);
    }

    [HttpPut]
    [Route("user/emailConfirmed")]
    public void SetEmailConfirmed([FromBody] ApplicationUserDto user, bool confirmed) {
      _authenticationManager.SetEmailConfirmed(user, confirmed);
    }

    [HttpPut]
    [Route("user/normalizedEmail")]
    public void SetNormalizedEmail([FromBody] ApplicationUserDto user, string normalizedEmail) {
      _authenticationManager.SetNormalizedEmail(user, normalizedEmail);
    }

    #endregion User

    #region Claims

    [HttpPut]
    [Route("claims")]
    public void AddClaims(ApplicationUserDto user, IEnumerable<ClaimDto> claims) {
      _authenticationManager.AddClaims(user, claims);
    }

    [HttpGet]
    [Route("claims")]
    public IEnumerable<ClaimDto> GetClaims(ApplicationUserDto user) {
      return _authenticationManager.GetClaims(user);
    }

    [HttpDelete]
    [Route("claims")]
    public void RemoveClaims(ApplicationUserDto user, IEnumerable<ClaimDto> claims) {
      _authenticationManager.RemoveClaims(user, claims);
    }

    [HttpPost]
    [Route("claims")]
    public void ReplaceClaim(ApplicationUserDto user, NewClaimDto claim) {
      _authenticationManager.ReplaceClaim(user, 
        new ClaimDto { Type = claim.Type, Value = claim.Value }, 
        new ClaimDto { Type = claim.NewType, Value = claim.NewValue});
    }

    #endregion

    #region Roles

    [HttpPut]
    [Route("roles/addToRole")]
    public void AddToRole(ApplicationUserDto user, string roleName) {
      throw new NotImplementedException();
    }

    [HttpDelete]
    [Route("roles/removeFromRole")]
    public void RemoveFromRole(ApplicationUserDto user, string roleName) {
      throw new NotImplementedException();
    }

    [HttpGet]
    [Route("roles")]
    public IEnumerable<string> GetRoles(ApplicationUserDto user) {
      throw new NotImplementedException();
    }

    [HttpGet]
    [Route("roles/isInRole")]
    public bool IsInRole(ApplicationUserDto user, string roleName) {
      throw new NotImplementedException();
    }

    [HttpGet]
    [Route("roles/usersInRole")]
    public IEnumerable<ApplicationUserDto> GetUsersInRole(string roleName) {
      throw new NotImplementedException();
    }

    /// <summary>
    /// Set the role for an identity.
    /// </summary>
    /// <param name="role"></param>
    /// <param name="roleName"></param>
    [HttpPut]
    [Route("roles/setIdentityName")]
    public void SetIdentityRoleDtoName([FromBody] ApplicationIdentityRoleDto role, string roleName) {
      _authenticationManager.SetIdentityRoleDtoName(role, roleName);
    }

    [HttpPut]
    [Route("roles/setNormalizedName")]
    public void SetNormalizedRoleName([FromBody] ApplicationIdentityRoleDto role, string normalizedName) {
      _authenticationManager.SetNormalizedRoleName(role, normalizedName);
    }

    /// <summary>
    /// Update
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpPut]
    [Route("roles")]
    public IdentityResult UpdateRole([FromBody] ApplicationIdentityRoleDto role) {
      return _authenticationManager.UpdateRole(role);
    }

    /// <summary>
    /// Create a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("roles")]
    public IdentityResult CreateRole([FromBody] ApplicationIdentityRoleDto role) {
      return _authenticationManager.CreateRole(role);
    }

    /// <summary>
    /// Remove a role
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpDelete]
    [Route("roles/identity")]
    public IdentityResult DeleteRole([FromBody] ApplicationIdentityRoleDto role) {
      return _authenticationManager.DeleteRole(role);
    }

    /// <summary>
    /// Find a role
    /// </summary>
    /// <param name="roleId"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("roles/findById")]
    public ApplicationIdentityRoleDto FindRoleById(string roleId) {
      return _authenticationManager.FindRoleById(roleId);
    }

    /// <summary>
    /// Find a role by full name.
    /// </summary>
    /// <param name="normalizedRoleName"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("roles/findByName")]
    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName) {
      return _authenticationManager.FindRoleByName(normalizedRoleName);
    }

    /// <summary>
    /// Get a relation between an identity and a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("roles/identityId")]
    public string GetIdentityRoleDtoId([FromQuery] ApplicationIdentityRoleDto role) {
      return _authenticationManager.GetIdentityRoleDtoId(role);
    }

    /// <summary>
    /// Get a relation between an identity and a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("roles/identityName")]
    public string GetIdentityRoleDtoName([FromQuery] ApplicationIdentityRoleDto role) {
      return _authenticationManager.GetIdentityRoleDtoName(role);
    }

    /// <summary>
    /// Get the normalized name of the given role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("roles/normalizedName")]
    public string GetNormalizedRoleName([FromQuery] ApplicationIdentityRoleDto role) {
      return _authenticationManager.GetNormalizedRoleName(role);
    }

    #endregion

  }
}
