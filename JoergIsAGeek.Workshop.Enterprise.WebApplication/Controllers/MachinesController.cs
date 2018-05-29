using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MachineServiceReference;
using Microsoft.AspNetCore.Authorization;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers {

  [Authorize(Policy = "ApiUser")]
  [Route("api/[controller]")]
  public class MachinesController : Controller {

    MachineSrvClient client;

    public MachinesController(MachineSrvClient client) {
      this.client = client;
    }

    // GET api/machines
    [HttpGet]
    public async Task<IEnumerable<MachineDto>> Get() {
      return await client.GetAllMachinesAsync();
    }

    // GET api/machines/5
    [HttpGet("{id}")]
    public async Task<MachineDto> Get(int id) {
      return await client.GetMachineByIdAsync(id);
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
