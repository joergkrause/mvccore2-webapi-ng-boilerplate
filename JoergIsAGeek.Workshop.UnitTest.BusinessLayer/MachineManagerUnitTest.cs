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
      // all repos need to be mocked to avoid dependecy to DB layer
      var mockMachineRepo = new Mock<GenericDbRepository<Machine, int>>();
      mockMachineRepo.Setup(r => r.Read(m => true)).Returns(machines);
      mockMachineRepo.Setup(r => r.Query(m => true)).Returns(machines.AsQueryable());
      mockMachineRepo.Setup(r => r.Count()).Returns(machines.Count());
      mockMachineRepo.Setup(r => r.Find(It.IsAny<int>())).Returns<int>(a => machines.Single(m => m.Id == a));

      // all repos are injected through the service provider, so we mock the SP
      var mockSp = new Mock<IServiceProvider>();
      mockSp.Setup(sp => sp.GetService(typeof(IGenericRepository<Machine, int>))).Returns(mockMachineRepo.Object);
      mockedServiceProvider = mockSp.Object;

      machines = new Machine[] {
        new Machine { Id = 1, Name ="Test machine one" },
        new Machine { Id = 2, Name ="Test machine two" },
      };
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
      // mock.Setup(r => r.Find(1)).Returns(machines[0]);
      var result = machineManager.GetMachineById(testValue);

      Assert.AreEqual(1, result.Id, "ID nicht korrekt");
      Assert.AreEqual("Test machine one", result.Name, "Name nicht korrekt");
    }

    [TestMethod]
    public void GetMachineById() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetMachineById(1);
      Assert.AreEqual(1, result.Id, "ID nicht korrekt");
      Assert.AreEqual("Test machine one", result.Name, "Name nicht korrekt");
    }

    [TestMethod]
    public void GetMachineForDataValue() {
      var machineManager = new MachineManager(mockedServiceProvider);
      var result = machineManager.GetMachineForDataValue(100);
      Assert.AreEqual(1, result.Count(), "Anzahl nicht korrekt 100");
      result = machineManager.GetMachineForDataValue(101);
      Assert.AreEqual(1, result.Count(), "Anzahl nicht korrekt 101");
    }

  }
}
