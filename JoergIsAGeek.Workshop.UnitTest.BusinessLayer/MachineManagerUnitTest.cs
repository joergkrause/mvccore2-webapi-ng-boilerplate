using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System.Linq;
using Moq;
using JoergIsAGeek.Workshop.Enterprise.Repository;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class MachineManagerUnitTest {

    Machine[] machines; 

    [TestInitialize]
    public void InitTests() {
      machines = new Machine[] {
        new Machine { Id = 1, Name ="Test machine one" },
        new Machine { Id = 2, Name ="Test machine two" },
      };
    }

    [TestMethod]
    public void GetAllMachines() {
      var machineManager = new MachineManager();
      var mock = new Mock<IGenericRepository<Machine, int>>();
      mock.Setup(r => r.Read(m => true)).Returns(machines);

      machineManager.RepMachine = mock.Object;

      var result = machineManager.GetAllMachines();
      Assert.IsNotNull(result, "Result was NULL");    // Testfunktion
      var count = result.Count();
      Assert.AreEqual(2, count, "COUNT failed");   // Testfunktion
    }

    [TestMethod]
    public void GetSingleMachine() {
      var machineManager = new MachineManager();
      var mock = new Mock<IGenericRepository<Machine, int>>();
      var testValue = 1;
      mock.Setup(r => r.Find(testValue)).Returns(machines.Single(m => m.Id == testValue));
      // mock.Setup(r => r.Find(1)).Returns(machines[0]);
      machineManager.RepMachine = mock.Object;
      var result = machineManager.GetMachineById(testValue);

      Assert.AreEqual(1, result.Id, "ID nicht korrekt");
      Assert.AreEqual("Test machine one", result.Name, "Name nicht korrekt");
    }

  }
}
