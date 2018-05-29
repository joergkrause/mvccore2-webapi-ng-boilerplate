using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{

  [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall)]
  public class MachineService : IMachineService
  {

    private IMachineManager _machineManager;

    public MachineService(IMachineManager machineManager)
    {
      _machineManager = machineManager;
    }

    public bool AddMachine(MachineDto machine)
    {
      return _machineManager.AddMachine(machine);
    }

    public IEnumerable<MachineDto> GetAllMachines()
    {
      return _machineManager.GetAllMachines();
    }

    public MachineDto GetMachineById(int id)
    {
      return _machineManager.GetMachineById(id);
    }

    public IEnumerable<MachineDto> GetMachineForDataValue(double value)
    {
      return _machineManager.GetMachineForDataValue(value);
    }
  }
}
