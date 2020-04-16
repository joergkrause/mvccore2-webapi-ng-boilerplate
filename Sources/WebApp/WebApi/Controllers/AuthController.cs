﻿using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Helpers;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers {

  /// <summary>
  /// Login Management. Extensible support for one or multiple logons.
  /// </summary>
  [Route("api/[controller]")]
  [ApiController]
  [AllowAnonymous]
  public class AuthController : ControllerBase
  {

    private readonly UserManager<UserViewModel> _userManager;
    private readonly IJwtFactory _jwtFactory;
    private readonly JsonSerializerSettings _serializerSettings;
    private readonly JwtIssuerOptions _jwtOptions;
    private readonly IMapper _mapper;
    private readonly SignInManager<UserViewModel> _signin;

    public AuthController(
      UserManager<UserViewModel> userManager,
      SignInManager<UserViewModel> signin,
      IJwtFactory jwtFactory, 
      IOptions<JwtIssuerOptions> jwtOptions, 
      IMapper mapper) {
      _userManager = userManager;
      _signin = signin;
      _jwtFactory = jwtFactory;
      _jwtOptions = jwtOptions.Value;
      _mapper = mapper;
      _serializerSettings = new JsonSerializerSettings {
        Formatting = Formatting.Indented
      };
    }

    // POST api/auth/login
    [HttpPost("login", Name = "Login")]
    [ProducesResponseType(typeof(TokenResponseViewModel), 200)]
    [ProducesResponseType(typeof(ModelStateDictionary), 400)]
    public async Task<ActionResult<TokenResponseViewModel>> Post([FromBody]LogonViewModel credentials) {
      if (!ModelState.IsValid) {
        return BadRequest(ModelState);
      }
      // user name used at logon is "email"
      var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
      if (identity == null) {
        return BadRequest(Errors.AddErrorToModelState("login_failure", "User not known.", ModelState));
      }
      var user = new UserViewModel {
        UserName = identity.Name,
        Id = identity.Claims.Single(c => c.Type == "id").Value
      };
      // log user immediately in
      var result = await _signin.CheckPasswordSignInAsync(user, credentials.Password, true);
      if (!result.Succeeded)
      {
        return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
      }
      // Serialize and return the response
      var response = new TokenResponseViewModel
      {
        Id = identity.Claims.Single(c => c.Type == "id").Value,
        AuthToken = await _jwtFactory.GenerateEncodedToken(credentials.UserName, identity),
        ExpiresIn = (int)_jwtOptions.ValidFor.TotalSeconds
      };

      return response;
    }


    /// <summary>
    /// Registration of a new user. This is the only function with anonymous access.
    /// // POST api/auth/register
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>    
    [HttpPost("register", Name = "Register")]
    [ProducesResponseType(typeof(string), 200)]
    [ProducesResponseType(typeof(ModelStateDictionary), 400)]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model) {
      if (!ModelState.IsValid) {
        return BadRequest(ModelState);
      }
      var userIdentity = _mapper.Map<UserViewModel>(model);
      var result = await _userManager.CreateAsync(userIdentity, model.Password);
      if (!result.Succeeded) {
        return BadRequest(Errors.AddErrorsToModelState(result, ModelState));
      }
      return Ok("Account created");
    }


    private async Task<ClaimsIdentity> GetClaimsIdentity(string eMail, string password) {
      if (!string.IsNullOrEmpty(eMail) && !string.IsNullOrEmpty(password)) {
        // get the user to verifty
        var userToVerify = await _userManager.FindByEmailAsync(eMail);

        if (userToVerify != null) {
          // check the credentials  
          if (await _userManager.CheckPasswordAsync(userToVerify, password)) {
            return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userToVerify.Email, userToVerify.Id.ToString()));
          }
        }
      }

      // Credentials are invalid, or account doesn't exist
      return await Task.FromResult<ClaimsIdentity>(null);
    }
  }

}
