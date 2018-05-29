using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System.Linq;
using Moq;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Autofac.Core;
using Autofac;
using System.Collections.ObjectModel;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class DeviceManagerUnitTest {

    Machine[] machines;
    MachineManager machineManager;
    IContainer container;

    [TestInitialize]
    public void InitTests() {
      // Testdaten
      machines = new Machine[] {
        new Machine { Id = 1, Name ="Test machine one" },
        new Machine { Id = 2, Name ="Test machine two" },
        new Machine { Id = 99,
          Name ="Test machine with devices",
          Devices = new Collection<Device> {
            new Device {
              Id = 1, Name = "device one",
              DataValues = new Collection<DataValue> {
                new DataValue { Id = 1, Unit = "V", Value = 101 },
                new DataValue { Id = 2, Unit = "V", Value = 99 },
              }
            }
          }
        },
      };
      machineManager = new MachineManager();
      // Mock zentral erstellen
      var mock = new Mock<IGenericRepository<Machine, int>>();
      mock.Setup(r => r.Read(m => true))
          .Returns(machines.Where(m => !m.Devices.Any()));
      mock.Setup(r => r.Query(m => true, m => m.Devices, m => m.Devices.Select(d => d.DataValues)))
          .Returns(machines.Where(m => m.Devices.Any()).AsQueryable());
      var testValue = 1;
      mock.Setup(r => r.Find(testValue)).Returns(machines.Single(m => m.Id == testValue));

      // Mock per DI bereitstellen
      var builder = new ContainerBuilder();
      builder.RegisterInstance(mock.Object);
      builder.RegisterType<MachineManager>().AsSelf().PropertiesAutowired();      
      //

      container = builder.Build();
      machineManager = container.Resolve<MachineManager>();
    }

    [TestMethod]
    public void TestMethod1() {
      var result = machineManager.GetAllMachines();
      Assert.IsNotNull(result, "Result was NULL");    // Testfunktion
      var count = result.Count();
      Assert.AreEqual(2, count, "COUNT failed");   // Testfunktion
    }

    [TestMethod]
    public void TestMethod2() {
      var result = machineManager.GetMachineById(1);
      Assert.AreEqual(1, result.Id, "ID nicht korrekt");
      Assert.AreEqual("Test machine one", result.Name, "Name nicht korrekt");
    }

    [TestMethod]
    public void TestMethod3() {
      var result = machineManager.GetMachineForDataValue(100);
      Assert.AreEqual(1, result.Count(), "Anzahl nicht korrekt 100");
      result = machineManager.GetMachineForDataValue(101);
      Assert.AreEqual(1, result.Count(), "Anzahl nicht korrekt 101");
    }

  }
}
