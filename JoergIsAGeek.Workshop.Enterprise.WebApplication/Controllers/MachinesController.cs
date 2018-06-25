using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Models;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers {

  [Authorize(Policy = "ApiUser")]
  [Route("api/[controller]")]
  public class MachinesController : Controller {

    IEnterpriseServiceAPI client;

    public MachinesController(IEnterpriseServiceAPI client) {
      this.client = client;
    }

    // GET api/machines
    [HttpGet]
    public async Task<IEnumerable<MachineDto>> Get() {
      return await client.ApiMachineServiceGetAllGetAsync();
    }

    // GET api/machines/5
    [HttpGet("{id}")]
    public async Task<MachineDto> Get(int id) {
      return await client.ApiMachineServiceGetGetAsync(id);
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value) {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value) {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id) {
    }
  }
}
