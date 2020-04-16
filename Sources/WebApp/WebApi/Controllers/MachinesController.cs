using AutoMapper;
using JoergIsAGeek.ServiceProxy.MachineData;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
using System.Diagnostics;
using System.Security.Claims;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers
{

  /// <summary>
  /// This controller provides demo data
  /// </summary>
  [Authorize(Policy = "ApiUser")]  // Roles = "User" is implicit in this policy
  [Route("api/[controller]")]
  public class MachinesController : ControllerBase
  {

    private readonly MachineServiceClient _client;
    private readonly IMapper _mapper;

    public MachinesController(MachineServiceClient client, IHttpContextAccessor httpContextAccessor, IMapper mapper)
    {
      _client = client;
      _mapper = mapper;
      // in case we need the user here we can retrieve the claimsprincipal
      var user = httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
      Debug.WriteLine(user, "** USER");
    }

    // GET api/machines
    [HttpGet(Name = "GetAll")]
    [ProducesDefaultResponseType(typeof(IEnumerable<MachineViewModel>))]
    public async Task<IEnumerable<MachineViewModel>> Get()
    {
      var dto = await _client.GetAllMachinesAsync();
      return _mapper.Map<IEnumerable<MachineViewModel>>(dto);
    }

    // GET api/machines/5
    [HttpGet("{id:int:min(1)}", Name = "GetById")]
    [ProducesDefaultResponseType(typeof(MachineViewModel))]
    public async Task<MachineViewModel> Get(int id)
    {
      var dto = await _client.GetMachineByIdAsync(id);
      return _mapper.Map<MachineViewModel>(dto);
    }

    // POST api/machines
    [HttpPost(Name = "Insert")]
    [ProducesDefaultResponseType(typeof(void))]
    [ProducesResponseType(typeof(ModelStateDictionary), 400)]
    public async Task<IActionResult> Post([FromBody]MachineViewModel value)
    {
      if (ModelState.IsValid)
      {
        var machine = _mapper.Map<MachineDto>(value);
        var result = await _client.AddMachineAsync(machine);
        if (result)
        {
          return NoContent();
        }
      }
      return BadRequest(ModelState);
    }

    // PUT api/machines/5
    [HttpPut("{id:int:min(1)}", Name = "Update")]
    [ProducesDefaultResponseType(typeof(void))]
    [ProducesResponseType(typeof(ModelStateDictionary), 400)]
    public async Task<IActionResult> Put(int id, [FromBody]MachineViewModel value)
    {
      if (ModelState.IsValid)
      {
        var machine = _mapper.Map<MachineDto>(value);
        machine.Id = id;
        var result = await _client.EditMachineAsync(machine);
        if (result)
        {
          return NoContent();
        }
      }
      return BadRequest(ModelState);
    }

    // DELETE api/machines/5
    [HttpDelete("{id:int:min(1)}", Name = "Delete")]
    [ProducesDefaultResponseType(typeof(void))]
    [ProducesResponseType(typeof(void), 400)]
    public async Task<IActionResult> Delete(int id)
    {
      var result = await _client.DeleteMachineAsync(id);
      if (result)
      {
        return NoContent();
      }
      return BadRequest();
    }
  }
}
