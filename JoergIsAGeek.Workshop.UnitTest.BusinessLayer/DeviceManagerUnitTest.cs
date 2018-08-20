using Autofac;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.ObjectModel;
using System.Linq;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class DeviceManagerUnitTest {
    
    IServiceProvider mockedServiceProvider;

    [TestInitialize]
    public void InitTests() {
      var devices = new Collection<Device> {
            new Device {
              Id = 1, Name = "device one",
              DataValues = new Collection<DataValue> {
                new DataValue { Id = 1, Unit = "V", Value = 101 },
                new DataValue { Id = 2, Unit = "V", Value = 99 },
              }
            }
          };
      // Test data
      var machines = new Machine[] {
        new Machine { Id = 1, Name ="Test machine one" },
        new Machine { Id = 2, Name ="Test machine two" },
        new Machine { Id = 99,
          Name ="Test machine with devices",
          Devices = devices
        },
      };

      // all repos need to be mocked to avoid dependecy to DB layer
      var mockMachineRepo = new Mock<GenericDbRepository<Machine, int>>();
      // machines
      mockMachineRepo.Setup(r => r.Read(m => true)).Returns(machines.Where(m => !m.Devices.Any()));
      mockMachineRepo.Setup(r => r.Query(m => true, m => m.Devices, m => m.Devices.Select(d => d.DataValues)))
          .Returns(machines.Where(m => m.Devices.Any()).AsQueryable());
      mockMachineRepo.Setup(r => r.Find(It.IsAny<int>())).Returns<int>(a => machines.Single(m => m.Id == a));

      mockMachineRepo.Setup(r => r.Read(m => true)).Returns(machines);
      mockMachineRepo.Setup(r => r.Query(m => true)).Returns(machines.AsQueryable());
      mockMachineRepo.Setup(r => r.Count()).Returns(machines.Count());
      mockMachineRepo.Setup(r => r.Find(It.IsAny<int>())).Returns<int>(a => machines.Single(m => m.Id == a));
      // devices
      var mockDeviceRepo = new Mock<GenericDbRepository<Device, int>>();
      mockDeviceRepo.Setup(r => r.Read(m => true)).Returns(devices);
      mockDeviceRepo.Setup(r => r.Query(m => true)).Returns(devices.AsQueryable());
      mockDeviceRepo.Setup(r => r.Count()).Returns(devices.Count());
      mockDeviceRepo.Setup(r => r.Find(It.IsAny<int>())).Returns<int>(a => devices.Single(m => m.Id == a));

      // all repos are injected through the service provider, so we mock the SP
      var mockSp = new Mock<IServiceProvider>();
      mockSp.Setup(sp => sp.GetService(typeof(IGenericRepository<Machine, int>))).Returns(mockMachineRepo.Object);
      mockSp.Setup(sp => sp.GetService(typeof(IGenericRepository<Device, int>))).Returns(mockDeviceRepo.Object);
      mockedServiceProvider = mockSp.Object;


    }

    [TestMethod]
    public void GetMachinesWithDevices() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetAllMachines().Select(m => m.HasDevices);
      Assert.IsNotNull(result, "Result was NULL");    // Testfunktion
      var count = result.Count();
      Assert.AreEqual(1, count, "COUNT failed");   // Testfunktion
    }

    [TestMethod]
    public void GetMachinesWithDevices() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var machine = new Machine { Id = 1 };
      var result = machineManager.GetDevicesOfMachine(machine);
      Assert.IsNotNull(result, "Result was NULL");    // Testfunktion
      var count = result.Count();
      Assert.AreEqual(1, count, "COUNT failed");   // Testfunktion
    }



  }
}
