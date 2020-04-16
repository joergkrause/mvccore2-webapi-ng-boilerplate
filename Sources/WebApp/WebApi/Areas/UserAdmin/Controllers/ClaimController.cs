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
    [HttpGet("{id}", Name = "Get")]
    public async Task<IEnumerable<UserViewModel>> GetUserForClaim(ClaimViewModel claimViewModel)
    {
      var claim = _mapper.Map<Claim>(claimViewModel);
      return await _userManager.GetUsersForClaimAsync(claim);
    }

    // POST: api/Claim
    [HttpPost]
    public async Task Post([FromBody] string value) {
      UserViewModel user = null;
      Claim claim = null;
      await _userManager.AddClaimAsync(user, claim);
    }

    // PUT: api/Claim/5
    [HttpPut("{id}/{oldClaimType}/{newClaimType}")]
    public async Task Put(string id, string oldClaimType, string newClaimType) {
      UserViewModel user = await _userManager.FindByIdAsync(id);
      Claim claim = new Claim(oldClaimType, null);
      Claim newClaim = new Claim(newClaimType, null);
      await _userManager.ReplaceClaimAsync(user, claim, newClaim);
    }

    // DELETE: api/Claim/5
    [HttpDelete("{id}")]
    public async Task Delete(string id, string claimType) {
      UserViewModel user = await _userManager.FindByIdAsync(id);
      Claim claim = new Claim(claimType, null);
      await _userManager.RemoveClaimAsync(user, claim);
    }
  }
}
