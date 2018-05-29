using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace JoergIsAGeek.Workshop.UnitTests.DataAccessLayer {

  [TestClass]
  public class InitializerByTest {

    private string GetCs()
    {
      var cs = @"Data Source=(localdb)\JoergIsAGeek;Initial Catalog=MachineDataDatabase;Integrated Security=True;MultipleActiveResultSets=True;Connect Timeout=30";
      return cs;
    }

    private DbContextOptions<DbContext> GetOptions()
    {
      var optionBuilder = new DbContextOptionsBuilder<DbContext>();
      optionBuilder.UseSqlServer(GetCs());
      return optionBuilder.Options;
    }

    [TestInitialize]
    public void TestInitialize() {
      var init = new DatabaseInitializer();
      using (var context = new MachineDataContext(GetOptions(), null))
      {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        init.Seed(context);
      } // Dispose
    }

    [TestMethod]
    public void TestToCreateDatebase() {
      using (var context = new MachineDataContext(GetOptions(), null))
      {
        var machines = context.Machines.ToList();
        Assert.IsNotNull(machines);
        var count = context.Machines.Count();
        Assert.AreEqual(1, count);
      } // Dispose
    }



  }
}
