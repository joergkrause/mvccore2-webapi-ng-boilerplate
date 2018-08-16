using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Helpers;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using Microsoft.AspNetCore.Identity;
using AutoMapper;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers
{

  /// <summary>
  /// Self management for users. Register, change password, reset password and so on.
  /// </summary>
  [Route("api/[controller]")]
  public class AccountsController : Controller
  {

    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IMapper _mapper;

    public AccountsController(UserManager<ApplicationUser> userManager, IMapper mapper)
    {
      _userManager = userManager;
      _mapper = mapper;
    }

    /// <summary>
    /// Registration of a new user
    /// // POST api/accounts
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>    
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      var userIdentity = _mapper.Map<ApplicationUser>(model);
      var result = await _userManager.CreateAsync(userIdentity, model.Password);
      if (!result.Succeeded)
      {
        return BadRequest(Errors.AddErrorsToModelState(result, ModelState));
      }
      return Ok("Account created");
    }

    /// <summary>
    /// Information about the currently logged on user.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<ActionResult> Get(string id)
    {
      var result = await _userManager.FindByIdAsync(id);
      if (result == null)
      {
        return BadRequest("No User");
      }
      return Ok(result);
    }

  }
}