using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  /// <summary>
  /// This is the business layer implementation for demo data. This is, what the application really does.
  /// </summary>
  /// <remarks>
  /// The base class <see cref="Manager"/> holds the repositories. For transactional data processing we're using
  /// an unit of work pattern additionally.
  /// </remarks>
  public class MachineManager : Manager, IMachineManager {

    public MachineManager(IServiceProvider services) : base(services) {
      var config = new MapperConfiguration(cfg => {
        cfg.CreateMap<Machine, MachineDto>()
            .ForMember(m => m.HasDevices, opt => opt.MapFrom(s => s.Devices.Any()));
        cfg.CreateMap<MachineDto, Machine>()
          .ForMember(m => m.Devices, opt => opt.Ignore());
      });
      mapper = config.CreateMapper();
    }

    public IEnumerable<MachineDto> GetAllMachines() {      
      return RepMachine.Read(m => true, m => m.Devices)
        .Select(m => mapper.Map<MachineDto>(m));
    }

    public MachineDto GetMachineById(int id) {
      return mapper.Map<MachineDto>(RepMachine.Find(id));
    }

    public IEnumerable<MachineDto> GetMachineForDataValue(double value) {
      var result = RepMachine.Query(m => true,
                                    m => m.Devices,
                                    m => m.Devices.Select(d => d.DataValues)
        ).Where(m => m.Devices
                      .Any(d => d.DataValues
                                 .Any(v => v.Value >= value)));
      return result.ToList().Select(m => mapper.Map<MachineDto>(m));
    }

    public bool AddMachine(MachineDto machine) {
      return RepMachine.InsertOrUpdate(mapper.Map<Machine>(machine));
    }

    public IEnumerable<DeviceDto> GetDevicesOfMachine(Machine machine) {
      var id = machine.Id;
      var devices = RepMachine.Read(m => m.Id == id, m => m.Devices).SingleOrDefault()?.Devices;
      return devices == null ? null : mapper.Map<IEnumerable<DeviceDto>>(devices);
    }

    public bool EditMachine(MachineDto machine) {
      return RepMachine.InsertOrUpdate(mapper.Map<Machine>(machine));
    }

    public bool DeleteMachine(MachineDto machine) {
      return RepMachine.Delete(mapper.Map<Machine>(machine));
    }
  }
}
