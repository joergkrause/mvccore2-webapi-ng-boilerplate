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
  public class UserServiceController : Controller {

    private readonly IAuthenticationManager _authenticationManager;

    /// <summary>
    /// Ctor, injects the <see cref="IAuthenticationManager"/>.
    /// </summary>
    /// <param name="authenticationManager"></param>
    public UserServiceController(IAuthenticationManager authenticationManager) {
      _authenticationManager = authenticationManager;
    }

    #region User

    /// <summary>
    /// Create a new user
    /// </summary>
    /// <param name="user"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("")]
    [ProducesResponseType(typeof(IdentityResult), (int)HttpStatusCode.OK)]
    public IdentityResult CreateUser([FromBody] ApplicationUserDto user) {
      return _authenticationManager.CreateUser(user);
    }

    [HttpDelete]
    [Route("{id}")]
    [ProducesResponseType(typeof(IdentityResult), (int)HttpStatusCode.OK)]
    public IdentityResult DeleteUser([FromRoute] string id) {
      return _authenticationManager.DeleteUser(id);
    }

    [HttpGet]
    [Route("")]
    public IEnumerable<ApplicationUserDto> GetUsers() {
      return _authenticationManager.GetUsers();
    }

        /// <summary>
    /// Find a user by hashed id.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("{id}/findById")]    
    public ApplicationUserDto FindUserById(string id) {
      return _authenticationManager.FindUserById(id);
    }

    /// <summary>
    /// Find a user by name
    /// </summary>
    /// <param name="normalizedUserName"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("findByName/{normalizedUserName}")]
    public ApplicationUserDto FindUserByName(string normalizedUserName) {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }

    [HttpGet]
    [Route("{id}/name")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public string GetUserDtoName([FromRoute] string id) {
      return _authenticationManager.GetUserDtoName(id);
    }

    [HttpPut]
    [Route("")]
    [Authorize(Roles="Admin")]
    [ProducesResponseType(typeof(IdentityResult), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IdentityResult UpdateUser([FromBody] ApplicationUserDto user) {
      return _authenticationManager.UpdateUser(user);
    }

    [HttpGet]
    [Route("{id}/hasPassword")]
    [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public bool HasPassword([FromRoute] string id) {
      return _authenticationManager.HasPassword(id);
    }

    [HttpGet]
    [Route("findByEmail/{normalizedEmail}")]
    public ApplicationUserDto FindByEmail(string normalizedEmail) {
      return _authenticationManager.FindByEmail(normalizedEmail);
    }
    
    [HttpGet]
    [Route("{id}/emailConfirmed")]
    [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IActionResult GetEmailConfirmed([FromRoute] string id) {
      return Ok(_authenticationManager.GetEmailConfirmed(id));
    }

    [HttpPut]
    [Route("email")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetEmail([FromBody] string userId, string email) {
      _authenticationManager.SetEmail(userId, email);
    }

    [HttpPut]
    [Route("emailConfirmed")]
    [ProducesResponseType(typeof(void), 201)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public void SetEmailConfirmed([FromBody] string userId, bool confirmed) {
      _authenticationManager.SetEmailConfirmed(userId, confirmed);
    }

    [HttpGet]
    [Route("{id}/passwordhash")]
    [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
    [ProducesResponseType(typeof(IDictionary<string, string>), (int)HttpStatusCode.BadRequest)]
    public IActionResult GetPasswordHashAsync([FromRoute] string id) {
      return Ok(_authenticationManager.GetPasswordHash(id));
    }

    #endregion User

  }
}
