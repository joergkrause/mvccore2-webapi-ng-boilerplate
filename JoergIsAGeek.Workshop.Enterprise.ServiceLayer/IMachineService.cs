using System.Collections.Generic;
using System.ServiceModel;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
  [ServiceContract(Name ="MachineSrv", Namespace ="http://www.joergkrause.de/srv")]
  public interface IMachineService {

    [OperationContract(Action ="GetMachines")]
    IEnumerable<MachineDto> GetAllMachines();

    [OperationContract(Action = "Add")]
    bool AddMachine(MachineDto machine);

    [OperationContract(Action = "Get")]
    MachineDto GetMachineById(int id);

    [OperationContract(Action = "GetForData")]
    IEnumerable<MachineDto> GetMachineForDataValue(double value);

  }


}
