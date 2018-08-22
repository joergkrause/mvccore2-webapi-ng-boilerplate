﻿using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Controllers {
  /// <summary>
  /// Machine Data Endpoint for application server access.
  /// </summary>
  [Route("api/[controller]")]
  [Authorize]
  public class MachineServiceController : Controller {
    private IMachineManager _machineManager;

    /// <summary>
    /// Ctor, injects <see cref="IMachineManager"/>.
    /// </summary>
    /// <param name="machineManager"></param>
    public MachineServiceController(IMachineManager machineManager) {
      _machineManager = machineManager;
    }

    /// <summary>
    /// Add a machine to the database.
    /// </summary>
    /// <param name="machine"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("")]
    public bool AddMachine([FromBody] MachineDto machine) {
      return _machineManager.AddMachine(machine);
    }

    /// <summary>
    /// Read all machines
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Route("")]
    public IEnumerable<MachineDto> GetAllMachines() {
      return _machineManager.GetAllMachines();
    }

    /// <summary>
    /// Get one machine by Id.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("{id}")]
    public MachineDto GetMachineById(int id) {
      return _machineManager.GetMachineById(id);
    }

    /// <summary>
    /// Find a machine that has the specified data value.
    /// </summary>
    /// <param name="value"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("byVal/{value}")]
    public IEnumerable<MachineDto> GetMachineForDataValue(double value) {
      return _machineManager.GetMachineForDataValue(value);
    }

    [HttpPut]
    [Route("")]
    public bool EditMachine([FromBody] MachineDto machine) {
      return _machineManager.EditMachine(machine);
    }

    [HttpDelete]
    [Route("{id}")]
    public bool DeleteMachine(int id) {
      var machine = new MachineDto { Id = id };
      return _machineManager.DeleteMachine(machine);
    }



  }
}
