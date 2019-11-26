using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.ServiceBase.Middleware;
using JoergIsAGeek.Workshop.UnitTests.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.FileExtensions;
using Microsoft.Extensions.Configuration.Json;
using System;
using System.IO;
using System.Linq;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.TestConsole
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Start creating database");
      var config = new ConfigurationBuilder()
         .AddJsonFile("appsettings.json", true, true)
         .Build();
      Console.WriteLine($"Using this connection string: ");
      var clr = Console.ForegroundColor;
      Console.ForegroundColor = ConsoleColor.Yellow;
      Console.WriteLine(GetCs(config));
      Console.ForegroundColor = ConsoleColor.Green;
      Console.WriteLine("Hint: Change connection string in 'application.json'");
      Console.ForegroundColor = clr;
      if (TestInitialize(config))
      {
        TestToUseDatebase(config);
      }
      Console.WriteLine("Done");
      Console.WriteLine("ENTER to close");
      Console.ReadLine();
    }



    static bool TestInitialize(IConfiguration config)
    {
      var init = new DatabaseInitializer();
      // no concrete value needed, this is for SaveChanges automation after init
      IUserContextProvider contextProvider = new UserContextProvider(config);
      contextProvider.SetUserIdentity(new ClaimsIdentity(new Claim[] {
        new Claim(ClaimTypes.Name, "Setup User"),
        new Claim(ClaimTypes.Role, "Administrator")
      }));
      try
      {
        using (var context = new MachineDataContext(GetOptions(config), contextProvider))
        {
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
      catch (Exception ex)
      {

        var clr = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(ex.Message);
        Console.ForegroundColor = clr;
        return false;
      }
    }

    static void TestToUseDatebase(IConfiguration config)
    {
      IUserContextProvider contextProvider = null;
      using (var context = new MachineDataContext(GetOptions(config), contextProvider))
      {
        var machines = context.Machines.ToList();
        var count = context.Machines.Count();
        Console.WriteLine($"Expected value after seeding is <2>. Current value is <{count}>.");
      } // Dispose
    }

    private static string GetCs(IConfiguration config)
    {
      return config.GetConnectionString(nameof(MachineDataContext));
    }

    private static DbContextOptions<MachineDataContext> GetOptions(IConfiguration config)
    {
      var optionBuilder = new DbContextOptionsBuilder<MachineDataContext>();
      optionBuilder.UseSqlServer(GetCs(config));
      return optionBuilder.Options;
    }
  }
}
