using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public class MachineManager : Manager, IMachineManager
  {

    public MachineManager()
    {
      var config = new MapperConfiguration(cfg =>
      {
        cfg.CreateMap<Machine, MachineDto>()
            .ForMember(m => m.HasDevices, opt => opt.MapFrom(s => s.Devices.Any()));
      });
      mapper = config.CreateMapper();
    }

    public IEnumerable<MachineDto> GetAllMachines()
    {
      return RepMachine.Read(m => true, m => m.Devices).Select(m => mapper.Map<MachineDto>(m));
    }

    public MachineDto GetMachineById(int id)
    {
      return mapper.Map<MachineDto>(RepMachine.Find(id));
    }

    public IEnumerable<MachineDto> GetMachineForDataValue(double value)
    {
      var result = RepMachine.Query(m => true,
                                    m => m.Devices,
                                    m => m.Devices.Select(d => d.DataValues)
        ).Where(m => m.Devices
                      .Any(d => d.DataValues
                                 .Any(v => v.Value >= value)));
      return result.ToList().Select(m => mapper.Map<MachineDto>(m));
    }

    public bool AddMachine(MachineDto machine)
    {
      return RepMachine.InsertOrUpdate(mapper.Map<Machine>(machine));
    }

  }
}
