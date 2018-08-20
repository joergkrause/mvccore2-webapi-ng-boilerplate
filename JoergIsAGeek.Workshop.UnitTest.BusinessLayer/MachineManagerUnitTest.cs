using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System.Linq;
using Moq;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class MachineManagerUnitTest {

    Machine[] machines;
    IServiceProvider mockedServiceProvider;

    [TestInitialize]
    public void InitTests() {
      // test data
      machines = new Machine[] {
        new Machine { Id = 1, Name ="Test machine one" },
        new Machine { Id = 2, Name ="Test machine two" },
      };
      // all repos need to be mocked to avoid dependecy to DB layer
      var mockMachineRepo = new Mock<IGenericRepository<Machine, int>>();
      mockMachineRepo.Setup(r => r.Read(m => true)).Returns(machines);
      mockMachineRepo.Setup(r => r.Read(m => true, m => m.Devices)).Returns(machines);
      mockMachineRepo.Setup(r => r.Read(m => true, m => m.Devices, m => m.Devices.Select(d => d.DataValues))).Returns(machines);      
      mockMachineRepo.Setup(r => r.Query(m => true)).Returns(machines.AsQueryable());
      mockMachineRepo.Setup(r => r.Query(m => true, m => m.Devices)).Returns(machines.AsQueryable());
      mockMachineRepo.Setup(r => r.Query(m => true, m => m.Devices, m => m.Devices.Select(d => d.DataValues))).Returns(machines.AsQueryable());
      mockMachineRepo.Setup(r => r.Count()).Returns(machines.Count());
      mockMachineRepo.Setup(r => r.Find(It.IsAny<int>())).Returns<int>(a => machines.Single(m => m.Id == a));

      // mock the provider to simulate dependency injection
      mockedServiceProvider = Mock.Of<IServiceProvider>(sp => 
        sp.GetService(typeof(IGenericRepository<Machine, int>)) == mockMachineRepo.Object);

    }

    [TestMethod]
    public void GetAllMachines() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetAllMachines();
      Assert.IsNotNull(result, "Result was NULL");    // Test function
      var count = result.Count();
      Assert.AreEqual(2, count, "COUNT failed");      // Test function
    }

    [TestMethod]
    public void GetSingleMachine() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var testValue = 1;
      var result = machineManager.GetMachineById(testValue);
      Assert.AreEqual(1, result.Id, "ID nicht korrekt");
      Assert.AreEqual("Test machine one", result.Name, "Name not correct");
    }

    [TestMethod]
    public void GetMachineById() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetMachineById(1);
      Assert.AreEqual(1, result.Id, "ID nicht korrekt");
      Assert.AreEqual("Test machine one", result.Name, "Name not correct");
    }

  }
}
