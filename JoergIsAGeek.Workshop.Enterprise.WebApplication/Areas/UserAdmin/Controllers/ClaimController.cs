using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Areas.UserAdmin.Controllers {

  [Route("api/useradmin/[controller]")]
  [ApiController]
  [Authorize(Roles = "Admin")]
  public class ClaimController : ControllerBase {

    private readonly UserManager<UserViewModel> _userManager;
    private readonly IMapper _mapper;

    public ClaimController(UserManager<UserViewModel> userManager, IMapper mapper) {
      _userManager = userManager;
      _mapper = mapper;
    }


    // GET: api/Claim
    [HttpGet]
    public async Task<IEnumerable<ClaimViewModel>> Get(string id) {
      var claims = await _userManager.GetClaimsAsync(new UserViewModel { Id = id });
      return _mapper.Map<IList<ClaimViewModel>>(claims);
    }

    // GET: api/Claim/5
    //[HttpGet("{id}", Name = "Get")]
    //public ClaimViewModel GetUserForClaim(string claimType) {
    //  throw new NotImplementedException();
    //  //var claim = _mapper.Map<Claim>(claimViewModel);
    //  //return _userManager.GetUsersForClaimAsync(claim);
    //}

    // POST: api/Claim
    [HttpPost]
    public async Task Post([FromBody] string value) {
      UserViewModel user = null;
      Claim claim = null;
      await _userManager.AddClaimAsync(user, claim);
    }

    // PUT: api/Claim/5
    [HttpPut("{id}")]
    public async Task Put(int id, [FromBody] string value) {
      UserViewModel user = null;
      Claim claim = null;
      Claim newClaim = null;
      await _userManager.ReplaceClaimAsync(user, claim, newClaim);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task Delete(string id, string claimType) {
      UserViewModel user = null;
      Claim claim = null;
      await _userManager.RemoveClaimAsync(user, claim);
    }
  }
}
