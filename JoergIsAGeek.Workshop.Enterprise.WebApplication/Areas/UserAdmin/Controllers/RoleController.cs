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
  public class RoleController : ControllerBase {

    private readonly RoleManager<RoleViewModel> _roleManager;

    public RoleController(RoleManager<RoleViewModel> roleManager) {
      _roleManager = roleManager;      
    }

    // GET: api/Role
    [HttpGet]
    public IEnumerable<RoleViewModel> Get() {
      return _roleManager.Roles;
    }

    // GET: api/Role/5
    [HttpGet("{id}", Name = "GetByRoleId")]
    public async Task<RoleViewModel> GetbyId(string id) {
      var role = await _roleManager.FindByIdAsync(id);
      return role;
    }

    // POST: api/Role
    [HttpPost]
    public async Task Post([FromBody] RoleViewModel role) {
      await _roleManager.CreateAsync(role);
    }

    // PUT: api/Role/5
    [HttpPut("{id}")]
    public async Task Put(int id, [FromBody] RoleViewModel role) {
      await _roleManager.UpdateAsync(role);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task Delete(string id) {
      await _roleManager.DeleteAsync(new RoleViewModel { Id = id });
    }
  }
}
