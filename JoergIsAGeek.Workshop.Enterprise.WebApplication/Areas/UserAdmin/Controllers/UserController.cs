using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Areas.UserAdmin.Controllers {
  
  [Route("api/useradmin/[controller]")]
  [ApiController]
  [Authorize(Roles = "Admin")]
  public class UserController : ControllerBase {

    private readonly UserManager<UserViewModel> _userManager;
    private readonly IMapper _mapper;

    public UserController(UserManager<UserViewModel> userManager, IMapper mapper) {
      _userManager = userManager;
      _mapper = mapper;
    }


    // GET: api/User
    [HttpGet]
    public IEnumerable<UserViewModel> Get() {
      return _userManager.Users;
    }

    // GET: api/User/5
    [HttpGet("{id}", Name = "GetById")]
    public async Task<UserViewModel> GetById(string id) {
      return await _userManager.FindByIdAsync(id);
    }

    // POST: api/User
    [HttpPost]
    public async Task Post([FromBody] UserViewModel user) {
      await _userManager.CreateAsync(user);
    }

    // PUT: api/User/5
    [HttpPut("{id}")]
    public async Task Put(string id, [FromBody] UserViewModel user) {
      user.Id = id;
      await _userManager.UpdateAsync(user);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task Delete(string id) {
      await _userManager.DeleteAsync(new UserViewModel { Id = id });
    }
  }
}
