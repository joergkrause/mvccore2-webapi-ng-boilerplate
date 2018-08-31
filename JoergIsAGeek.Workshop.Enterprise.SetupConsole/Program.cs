using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.UnitTests.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Configuration;
using System.IO;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.TestConsole {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Start creating database");
      Console.WriteLine($"Using this connection string: ");
      var clr = Console.ForegroundColor;
      Console.ForegroundColor = ConsoleColor.Yellow;
      Console.WriteLine(GetCs());
      Console.ForegroundColor = clr;
      Console.WriteLine("Hint: Change connection string in 'App.config'");
      if (TestInitialize()) {
        TestToUseDatebase();
      }
      Console.WriteLine("Done");
      Console.WriteLine("ENTER to close");
      Console.ReadLine();
    }

    static bool TestInitialize() {
      var init = new DatabaseInitializer();
      // no concrete value needed, this is for SaveChanges automation after init
      IUserContextProvider contextProvider = null;
      try {
        using (var context = new MachineDataContext(GetOptions(), contextProvider)) {
          Console.WriteLine("Deleting...");
          context.Database.EnsureDeleted();
          var dbName = context.Database.GetDbConnection();
          var path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile));
          Console.WriteLine("Creating...");
          context.Database.EnsureCreated();
          Console.WriteLine("Seeding...");
          init.Seed(context);
        } // Dispose
        return true;
      }
      catch (Exception ex) {

        var clr = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(ex.Message);
        Console.ForegroundColor = clr;
        return false;
      }
    }

    static void TestToUseDatebase() {
      IUserContextProvider contextProvider = null;
      using (var context = new MachineDataContext(GetOptions(), contextProvider)) {
        var machines = context.Machines.ToList();
        var count = context.Machines.Count();
        Console.WriteLine($"Expected value after seeding is <2>. Current value is <{count}>.");
      } // Dispose
    }

    private static string GetCs() {
      var cs = ConfigurationManager.ConnectionStrings[nameof(MachineDataContext)].ConnectionString;
      return cs;
    }

    private static DbContextOptions<MachineDataContext> GetOptions() {
      var optionBuilder = new DbContextOptionsBuilder<MachineDataContext>();
      optionBuilder.UseSqlServer(GetCs());
      return optionBuilder.Options;
    }
  }
}
