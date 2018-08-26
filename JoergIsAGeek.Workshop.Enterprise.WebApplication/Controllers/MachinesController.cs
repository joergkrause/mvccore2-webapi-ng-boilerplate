﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Models;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers {

  /// <summary>
  /// This controller provides demo data
  /// </summary>
  [Authorize(Policy = "ApiUser")]  //Roles = "User"
  [Route("api/[controller]")]
  public class MachinesController : Controller {

    IEnterpriseServiceAPI client;
    private readonly IMapper mapper;

    public MachinesController(IEnterpriseServiceAPI client, IHttpContextAccessor httpContextAccessor, IMapper mapper) {
      this.client = client;
      this.mapper = mapper;
      // in case we need the user here we can retrieve the claimsprincipal
      var user = httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
      Debug.WriteLine(user, "** USER");
    }

    // GET api/machines
    [HttpGet]
    public async Task<IEnumerable<MachineViewModel>> Get() {
      var dto = await client.ApiMachineServiceGetAsync();
      return mapper.Map<IEnumerable<MachineViewModel>>(dto);
    }

    // GET api/machines/5
    [HttpGet("{id}")]
    public async Task<MachineViewModel> Get(int id) {
      var dto = await client.ApiMachineServiceByIdGetAsync(id);
      return mapper.Map<MachineViewModel>(dto);
    }

    // POST api/machines
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]MachineViewModel value) {
      var machine = mapper.Map<MachineDto>(value);
      var result = await client.ApiMachineServicePostAsync(machine);
      if (result.Value) {
        return NoContent();
      }
      return BadRequest();
    }

    // PUT api/machines/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody]MachineViewModel value) {
      var machine = mapper.Map<MachineDto>(value);
      machine.Id = id;
      var result = await client.ApiMachineServicePutAsync(machine);
      if (result.Value) {
        return NoContent();
      }
      return BadRequest();
    }

    // DELETE api/machines/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) {
      var result = await client.ApiMachineServiceByIdDeleteAsync(id);
      if (result.Value) {
        return NoContent();
      }
      return BadRequest();
    }
  }
}
