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
  public class ClaimsServiceController : Controller {

    private readonly IAuthenticationManager _authenticationManager;

    /// <summary>
    /// Ctor, injects the <see cref="IAuthenticationManager"/>.
    /// </summary>
    /// <param name="authenticationManager"></param>
    public ClaimsServiceController(IAuthenticationManager authenticationManager) {
      _authenticationManager = authenticationManager;
    }

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

  }
}
