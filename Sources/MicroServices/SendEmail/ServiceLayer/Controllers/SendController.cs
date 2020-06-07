using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using Microsoft.AspNetCore.Mvc;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Controllers {
  /// <summary>
  /// Access to the authentication backend based on ASP.NET identity.
  /// All requests/responses are handled as JSON to support the front end facility using Auto REST.
  /// </summary>
  [ApiController] // automate ModelState.IsValid for all calls
  [Route("api/[controller]")]
  [Produces("application/json")]  
  public class SendController : Controller {

    private ISendManager _sendManager;

    /// <summary>
    /// Ctor, injects the <see cref="IAuthenticationManager"/>.
    /// </summary>
    /// <param name="authenticationManager"></param>
    public SendController(ISendManager authenticationManager) {
      _sendManager = authenticationManager;
    }

  }
}
