using Autofac;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Linq.Expressions;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class DeviceManagerUnitTest {

    IServiceProvider mockedServiceProvider;

    [TestInitialize]
    public void InitTests() {
      // test data
      var devices = new Collection<Device> {
            new Device {
              Id = 1, Name = "device one",
              DataValues = new Collection<DataValue> {
                new DataValue { Id = 1, Unit = "V", Value = 101 },
                new DataValue { Id = 2, Unit = "V", Value = 99 },
              }
            }
          };
      var machines = new List<Machine> {
        new Machine { Id = 1, Name ="Test machine one" },
        new Machine { Id = 2, Name ="Test machine two" },
        new Machine { Id = 99,
          Name ="Test machine with devices",
          Devices = devices
        },
      };

      // all repos need to be mocked to avoid dependecy to DB layer
      var mockMachineRepo = new Mock<IGenericRepository<Machine, int>>();
      // machines
      mockMachineRepo.Setup(r => r.Read(m => true))
        .Returns(machines);
      // TODO: Setup not properly
      mockMachineRepo.Setup(r => r.Read(m => m.Id == It.IsAny<int>()))
        .Returns<Func<Machine, bool>, Func<Machine, object>>((a, b) => machines.Where(a));
      mockMachineRepo.Setup(r => r.Read(m => m.Id == It.IsAny<int>(), It.IsAny<Expression<Func<Machine, object>>[]>()))
        .Returns<Func<Machine, bool>, Func<Machine, object>>((a, b) => machines.Where(a));
      mockMachineRepo.Setup(r => r.Read(m => !m.Devices.Any(), It.IsAny<Expression<Func<Machine, object>>[]>()))
        .Returns(machines.Where(m => !m.Devices.Any()));

      mockMachineRepo.Setup(r => r.Query(m => true, m => m.Devices, m => m.Devices.Select(d => d.DataValues)))
          .Returns(machines.Where(m => m.Devices.Any()).AsQueryable());
      mockMachineRepo.Setup(r => r.Query(m => true)).Returns(machines.AsQueryable());

      mockMachineRepo.Setup(r => r.Count()).Returns(machines.Count());

      mockMachineRepo.Setup(r => r.Find(It.IsAny<int>()))
        .Returns<int>(a => machines.Single(m => m.Id == a));
      mockMachineRepo.Setup(r => r.Find(It.IsAny<int>()))
        .Returns<int>(a => machines.Single(m => m.Id == a));

      // devices
      var mockDeviceRepo = new Mock<IGenericRepository<Device, int>>();
      mockDeviceRepo.Setup(r => r.Read(m => true)).Returns(devices);
      mockDeviceRepo.Setup(r => r.Query(m => true)).Returns(devices.AsQueryable());
      mockDeviceRepo.Setup(r => r.Count()).Returns(devices.Count());
      mockDeviceRepo.Setup(r => r.Find(It.IsAny<int>())).Returns<int>(a => devices.Single(m => m.Id == a));

      // all repos are injected through the service provider, so we mock the SP
      mockedServiceProvider = Mock.Of<IServiceProvider>(sp =>
        sp.GetService(typeof(IGenericRepository<Machine, int>)) == mockMachineRepo.Object &&
        sp.GetService(typeof(IGenericRepository<Device, int>)) == mockDeviceRepo.Object);

    }

    [TestMethod]
    public void GetMachinesWithDevices() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetAllMachines().Select(m => m.HasDevices);
      Assert.IsNotNull(result, "Result was NULL");
      var count = result.Count();
      Assert.AreEqual(1, count, "COUNT failed");
    }

    [TestMethod]
    public void GetDevicesOfMachine() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var machine = new Machine { Id = 99 };
      var result = machineManager.GetDevicesOfMachine(machine);
      // positive, some devices
      Assert.IsNotNull(result, "Result was NULL");
      var count = result.Count();
      Assert.AreEqual(2, count, "COUNT failed");
      // negative, no devices
      machine.Id = 1;
      result = machineManager.GetDevicesOfMachine(machine);
      Assert.IsNotNull(result, "Result was NULL");
      count = result.Count();
      Assert.AreEqual(0, count, "COUNT failed");
      // false, no machine
      machine.Id = 4;
      result = machineManager.GetDevicesOfMachine(machine);
      Assert.IsNull(result, "Result was not NULL");
    }


    [TestMethod]
    public void GetMachineForDataValue() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetMachineForDataValue(100);
      Assert.AreEqual(1, result.Count(), "Machines for value 100 not correct");
      result = machineManager.GetMachineForDataValue(101);
      Assert.AreEqual(1, result.Count(), "Machines for value 101 not correct");
    }


  }
}
