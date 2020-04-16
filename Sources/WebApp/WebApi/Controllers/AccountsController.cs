using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers
{

  /// <summary>
  /// Self management for users. Register, change password, reset password and so on.
  /// All users, including guests, can use this. But they have to have a valid account.
  /// </summary>
  [Route("api/[controller]")]
  [Authorize()]
  public class AccountsController : ControllerBase
  {

    private readonly UserManager<UserViewModel> _userManager;
    private readonly IMapper _mapper;

    public AccountsController(UserManager<UserViewModel> userManager, IMapper mapper)
    {
      _userManager = userManager;
      _mapper = mapper;
    }

    /// <summary>
    /// Information about the currently logged on user.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("{id:alpha}", Name = "GetUser")]
    [ProducesResponseType(typeof(UserViewModel), 200)]
    [ProducesResponseType(typeof(string), 400)]
    public async Task<IActionResult> Get(string id)
    {
      var result = await _userManager.FindByIdAsync(id);
      if (result == null)
      {
        return BadRequest("No User");
      }
      return Ok(result);
    }

    [HttpGet("{id:alpha}/claims", Name = "GetClaims")]
    [ProducesResponseType(typeof(IEnumerable<ClaimViewModel>), 200)]
    [ProducesResponseType(typeof(string), 400)]
    public async Task<IActionResult> GetClaims(string id)
    {
      var user = await _userManager.FindByIdAsync(id);
      if (user == null)
      {
        return BadRequest("No User");
      }
      var result = await _userManager.GetClaimsAsync(user);
      var claims = _mapper.Map<ClaimViewModel>(result);
      return Ok(claims);
    }

  }
}