using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections;
using System.Linq;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.SetupConsole
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Start creating database");
      var config = new ConfigurationBuilder()
         .AddJsonFile("appsettings.json", true, true)
         .AddEnvironmentVariables()
         .Build();
      Console.WriteLine($"Using this connection string: ");
      var clr = Console.ForegroundColor;
      Console.ForegroundColor = ConsoleColor.Yellow;
      Console.WriteLine(GetCs(config));
      Console.ForegroundColor = ConsoleColor.Green;
      Console.WriteLine("Hint: Change connection string in 'application.json', if your run this in Visual Studio");
      Console.WriteLine("Hint: Set connection string in environment variable 'WORKSHOP_ConnectionString_MachineDataContext', if your run this in Docker Container");
      Console.ForegroundColor = clr;
      if (TestInitialize(config))
      {
        TestToUseDatebase(config);
      }
      Console.WriteLine("Done");
    }



    static bool TestInitialize(IConfiguration config)
    {
      var init = new DatabaseInitializer();
      // no concrete value needed, this is for SaveChanges automation after init
      IUserContextProvider contextProvider = new MockedUserContextProvider();
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
      var csFromEnv = Environment.GetEnvironmentVariable("WORKSHOP_ConnectionString_MachineDataContext", EnvironmentVariableTarget.Process);
      if (csFromEnv != null)
      {
        Console.WriteLine("Found env variable 'WORKSHOP_ConnectionString_MachineDataContext' with this connectionstring:");
        Console.WriteLine(csFromEnv);
        return csFromEnv;
      }
      Console.WriteLine("Fallback to 'application.json' setting and use default connectionstring");
      return config.GetConnectionString(nameof(MachineDataContext));
    }

    private static DbContextOptions<MachineDataContext> GetOptions(IConfiguration config)
    {
      var optionBuilder = new DbContextOptionsBuilder<MachineDataContext>();
      optionBuilder.UseSqlServer(GetCs(config), o => o.EnableRetryOnFailure());
      return optionBuilder.Options;
    }
  }
}
