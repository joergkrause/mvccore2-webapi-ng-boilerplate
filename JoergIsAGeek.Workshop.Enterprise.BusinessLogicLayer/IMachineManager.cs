using System.Collections.Generic;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public interface IMachineManager
  {
    bool AddMachine(MachineDto machine);
    IEnumerable<MachineDto> GetAllMachines();
    MachineDto GetMachineById(int id);
    IEnumerable<MachineDto> GetMachineForDataValue(double value);

    IEnumerable<DeviceDto> GetDevicesOfMachine(Machine machine);
    bool EditMachine(MachineDto machine);
    bool DeleteMachine(MachineDto machine);
  }
}