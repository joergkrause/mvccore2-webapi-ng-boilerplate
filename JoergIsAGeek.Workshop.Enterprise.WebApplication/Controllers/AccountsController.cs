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
  /// All users, including guests, can use this. But they have to have a valid account.
  /// </summary>
  [Route("api/[controller]")]
  [Authorize()]
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
    /// Information about the currently logged on user.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("{id}")]
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