﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Controllers {
  /// <summary>
  /// Access to the authentication backend based on ASP.NET identity.
  /// All requests/responses are handled as JSON to support the front end facility using Auto REST.
  /// </summary>
  [ApiController] // automate ModelState.IsValid for all calls
  [Route("api/[controller]")]
  [Produces("application/json")]  
  [AllowAnonymous]
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
    [ProducesResponseType(typeof(IdentityResult), (int)HttpStatusCode.OK)]
    public IdentityResult CreateUser([FromBody] ApplicationUserDto user) {
      return _authenticationManager.CreateUser(user);
    }

    [HttpGet]
    [Route("user")]
    public IEnumerable<ApplicationUserDto> GetUsers() {
      return _authenticationManager.GetUsers();
    }

    /// <summary>
    /// Find a user by hashed id.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/findById/{userId}")]    
    public ApplicationUserDto FindUserById(string userId) {
      return _authenticationManager.FindUserById(userId);
    }

    /// <summary>
    /// Find a user by name
    /// </summary>
    /// <param name="normalizedUserName"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/findByName/{normalizedUserName}")]
    public ApplicationUserDto FindUserByName(string normalizedUserName) {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }



    /// <summary>
    /// Get the normalized name of the given user. Checks both, Id and UserName fields.
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("user/normalizedName")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
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
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetUserDtoId([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetUserDtoId(user);
    }

    [HttpGet]
    [Route("user/name")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetUserDtoName([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetUserDtoName(user);
    }

    [HttpPut]
    [Route("user/normalizedName")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetNormalizedUserName([FromBody] ApplicationUserDto user, string normalizedName) {
      _authenticationManager.SetNormalizedUserName(user, normalizedName);
    }

    [HttpPut]
    [Route("user/name")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetUserDtoName([FromBody] ApplicationUserDto user, string userName) {
      _authenticationManager.SetUserDtoName(user, userName);
    }

    [HttpPut]
    [Route("user")]
    [Authorize(Roles="Admin")]
    [ProducesResponseType(typeof(IdentityResult), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IdentityResult UpdateUser([FromBody] ApplicationUserDto user) {
      return _authenticationManager.UpdateUser(user);
    }

    [HttpGet]
    [Route("user/passwordHash")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetPasswordHash([FromQuery] ApplicationUserDto userDto) {
      return _authenticationManager.GetPasswordHash(userDto);
    }

    [HttpGet]
    [Route("user/hasPassword")]
    [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public bool HasPassword([FromQuery] ApplicationUserDto userDto) {
      return _authenticationManager.HasPassword(userDto);
    }

    [HttpPut]
    [Route("user/passwordHash")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetPasswordHash([FromBody] ApplicationUserDto userDto, string passwordHash) {
      _authenticationManager.SetPasswordHash(userDto, passwordHash);
    }

    [HttpGet]
    [Route("user/findByEmail/{normalizedEmail}")]
    public ApplicationUserDto FindByEmail(string normalizedEmail) {
      return _authenticationManager.FindByEmail(normalizedEmail);
    }

    [HttpGet]
    [Route("user/email")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetEmail([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetEmail(user);
    }

    [HttpGet]
    [Route("user/emailConfirmed")]
    [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IActionResult GetEmailConfirmed([FromQuery] ApplicationUserDto user) {
      return Ok(_authenticationManager.GetEmailConfirmed(user));
    }

    [HttpGet]
    [Route("user/normalizedEmail")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetNormalizedEmail([FromQuery] ApplicationUserDto user) {
      return _authenticationManager.GetNormalizedEmail(user);
    }

    [HttpPut]
    [Route("user/email")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetEmail([FromBody] ApplicationUserDto user, string email) {
      _authenticationManager.SetEmail(user, email);
    }

    [HttpPut]
    [Route("user/emailConfirmed")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetEmailConfirmed([FromBody] ApplicationUserDto user, bool confirmed) {
      _authenticationManager.SetEmailConfirmed(user, confirmed);
    }

    [HttpPut]
    [Route("user/normalizedEmail")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetNormalizedEmail([FromBody] ApplicationUserDto user, string normalizedEmail) {
      _authenticationManager.SetNormalizedEmail(user, normalizedEmail);
    }

    #endregion User

    #region Claims

    [HttpPut]
    [Route("claims")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void AddClaims([FromQuery] string userId, [FromBody] IEnumerable<ClaimDto> claims) {
      _authenticationManager.AddClaims(userId, claims);
    }

    [HttpGet]
    [Route("claims")]
    [ProducesResponseType(typeof(IEnumerable<ClaimDto>), 200)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.NotFound)]
    public IActionResult GetClaims([FromQuery] string userId) {
      if (_authenticationManager.FindUserById(userId) == null)
      {
        return NotFound();
      }
      return Ok(_authenticationManager.GetClaims(userId));
    }

    [HttpDelete]
    [Route("claims")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void RemoveClaims([FromQuery] DeleteClaimForUserDto claims) {      
      _authenticationManager.RemoveClaims(claims.UserId, new ClaimDto[] { new ClaimDto { ClaimType = claims.ClaimType, ClaimValue = claims.ClaimValue } });
    }

    [HttpPost]
    [Route("claims")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void ReplaceClaim([FromQuery] string userId, [FromBody] NewClaimDto claim) {
      _authenticationManager.ReplaceClaim(userId, 
        new ClaimDto { ClaimType = claim.Type, ClaimValue = claim.Value }, 
        new ClaimDto { ClaimType = claim.NewType, ClaimValue = claim.NewValue});
    }

    #endregion Claims

    #region Roles

    [HttpPut]
    [Route("role/addToRole")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void AddToRole([FromQuery] string userId, string roleName) {
      throw new NotImplementedException();
    }

    [HttpDelete]
    [Route("role/removeFromRole")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void RemoveFromRole([FromQuery] string userId, [FromQuery] string roleName) {
      throw new NotImplementedException();
    }

    [HttpGet]
    [Route("role/forUser")]
    [ProducesResponseType(typeof(IEnumerable<string>), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IEnumerable<string> GetForUserRoles([FromQuery] string userId) {
      return _authenticationManager.GetRolesForUser(userId);
    }

    [HttpGet]
    [Route("role/isInRole")]
    [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public bool IsInRole([FromQuery] ApplicationUserDto user, string roleName) {
      return _authenticationManager.IsUserInRole(user, roleName);
    }

    [HttpGet]
    [Route("role/usersInRole/{roleName}")]
    public IEnumerable<ApplicationUserDto> GetUsersInRole(string roleName) {
      return _authenticationManager.GetUsersInRole(roleName);
    }

    /// <summary>
    /// Set the role for an identity.
    /// </summary>
    /// <param name="role"></param>
    /// <param name="roleName"></param>
    [HttpPut]
    [Route("role/setIdentityName")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetIdentityRoleDtoName([FromBody] ApplicationIdentityRoleDto role, string roleName) {
      _authenticationManager.SetIdentityRoleDtoName(role, roleName);
    }

    [HttpPut]
    [Route("role/setNormalizedName")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetNormalizedRoleName([FromBody] ApplicationIdentityRoleDto role, string normalizedName) {
      _authenticationManager.SetNormalizedRoleName(role, normalizedName);
    }

    /// <summary>
    /// Update
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpPut]
    [Route("role")]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IdentityResult UpdateRole([FromBody] ApplicationIdentityRoleDto role) {
      return _authenticationManager.UpdateRole(role);
    }

    /// <summary>
    /// Create a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("role")]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IdentityResult CreateRole([FromBody] ApplicationIdentityRoleDto role) {
      return _authenticationManager.CreateRole(role);
    }

    /// <summary>
    /// Remove a role
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpDelete]
    [Route("role/identity")]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IdentityResult DeleteRole([FromQuery] string roleId) {
      return _authenticationManager.DeleteRole(roleId);
    }

    /// <summary>
    /// Find a role
    /// </summary>
    /// <param name="roleId"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("role/findById")]
    public ApplicationIdentityRoleDto FindRoleById(string roleId) {
      return _authenticationManager.FindRoleById(roleId);
    }

    /// <summary>
    /// Find a role by full name.
    /// </summary>
    /// <param name="normalizedRoleName"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("role/findByName")]
    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName) {
      return _authenticationManager.FindRoleByName(normalizedRoleName);
    }

    /// <summary>
    /// Get a relation between an identity and a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("role/identityId")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetIdentityRoleDtoId([FromQuery] ApplicationIdentityRoleDto role) {
      return _authenticationManager.GetIdentityRoleDtoId(role);
    }

    /// <summary>
    /// Get a relation between an identity and a role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("role/identityName")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetIdentityRoleDtoName([FromQuery] ApplicationIdentityRoleDto role) {
      return _authenticationManager.GetIdentityRoleDtoName(role);
    }

    /// <summary>
    /// Get the normalized name of the given role.
    /// </summary>
    /// <param name="role"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("role/normalizedName")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetNormalizedRoleName([FromQuery] ApplicationIdentityRoleDto role) {
      return _authenticationManager.GetNormalizedRoleName(role);
    }

    [HttpGet]
    [Route("role")]
    [ProducesResponseType(typeof(IEnumerable<ApplicationIdentityRoleDto>), (int)HttpStatusCode.OK)]
    public IEnumerable<ApplicationIdentityRoleDto> GetRoles() {
      return _authenticationManager.GetRoles();
    }

    #endregion

  }
}