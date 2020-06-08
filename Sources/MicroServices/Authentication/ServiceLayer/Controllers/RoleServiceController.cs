using System;
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
  [Route("api/auth/[controller]")]
  [Produces("application/json")]  
  [AllowAnonymous]
  public class RoleServiceController : Controller {

    private readonly IAuthenticationManager _authenticationManager;

    /// <summary>
    /// Ctor, injects the <see cref="IAuthenticationManager"/>.
    /// </summary>
    /// <param name="authenticationManager"></param>
    public RoleServiceController(IAuthenticationManager authenticationManager) {
      _authenticationManager = authenticationManager;
    }

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
    [Route("role/{id}/isInRole/{roleName}")]
    [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public bool IsInRole([FromRoute] string id, [FromRoute] string roleName) {
      return _authenticationManager.IsUserInRole(id, roleName);
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
