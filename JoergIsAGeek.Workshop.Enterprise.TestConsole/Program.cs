using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.UnitTests.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace JoergIsAGeek.Workshop.Enterprise.TestConsole {
  class Program {
    static void Main(string[] args) {
      TestInitialize();
      TestToCreateDatebase();
      Console.ReadLine();
    }

    static void TestInitialize()
    {
      var init = new DatabaseInitializer();
      var i = 22;
      var n = "22";
      IUserContextProvider contextProvider = null;
      using (var context = new MachineDataContext(GetOptions(), contextProvider))
      {
        Console.WriteLine("Deleting...");
        context.Database.EnsureDeleted();
        Console.WriteLine("Creating...");
        context.Database.EnsureCreated();
        Console.WriteLine("Seeding...");
        init.Seed(context);
      } // Dispose
    }

    static void TestToCreateDatebase()
    {
      IUserContextProvider contextProvider = null;
      using (var context = new MachineDataContext(GetOptions(), contextProvider))
      {
        var machines = context.Machines.ToList();
        var count = context.Machines.Count();
        Console.WriteLine(count);
      } // Dispose
    }

    private static string GetCs()
    {
      var cs = @"Data Source=(localdb)\JoergIsAGeek;Initial Catalog=MachineDataDatabase;Integrated Security=True;MultipleActiveResultSets=True;Connect Timeout=30";
      return cs;
    }

    private static DbContextOptions<DbContext> GetOptions()
    {
      var optionBuilder = new DbContextOptionsBuilder<DbContext>();
      optionBuilder.UseSqlServer(GetCs());
      return optionBuilder.Options;
    }
  }
}
