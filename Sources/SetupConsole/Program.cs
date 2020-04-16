using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections;
using System.Collections.Generic;
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
      Console.WriteLine($"Using these connection strings: ");
      var clr = Console.ForegroundColor;
      Console.ForegroundColor = ConsoleColor.Yellow;
      Console.WriteLine(GetCs<AuthenticationDataContext>(config));
      Console.WriteLine(GetCs<MachineDataContext>(config));
      Console.ForegroundColor = ConsoleColor.Green;
      Console.WriteLine("Hint: Change connection string in 'application.json', if you run this in Visual Studio");
      Console.WriteLine("Hint: Set connection string in environment variable 'WORKSHOP_ConnectionString_MachineDataContext', if your run this in Docker Container");
      Console.ForegroundColor = clr;
      if (TestInitialize(config))
      {
        TestDemoDatebase(config);
        TestAuthDatebase(config);
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
        var crossDbUserIds = new Dictionary<string, string>();
        using (var context = new AuthenticationDataContext(GetOptions<AuthenticationDataContext>(config), contextProvider))
        {
          Console.WriteLine("Deleting Auth DB...");
          context.Database.EnsureDeleted();
          Console.WriteLine("Creating Auth DB...");
          context.Database.EnsureCreated();
          Console.WriteLine("Seeding Auth DB...");
          init.SeedAuthData(context);
          context.Users.ToList().ForEach(u => crossDbUserIds.Add(u.Id, u.UserName));
        } // Dispose
        using (var context = new MachineDataContext(GetOptions<MachineDataContext>(config), contextProvider))
        {
          Console.WriteLine("Deleting DemoData DB...");
          context.Database.EnsureDeleted();
          Console.WriteLine("Creating DemoData DB...");
          context.Database.EnsureCreated();
          Console.WriteLine("Seeding DemoData DB...");
          init.SeedDemoData(context, crossDbUserIds);
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

    static void TestDemoDatebase(IConfiguration config)
    {
      IUserContextProvider contextProvider = null;
      using (var context = new MachineDataContext(GetOptions<MachineDataContext>(config), contextProvider))
      {
        var machines = context.Machines.ToList();
        var count = context.Machines.Count();
        Console.WriteLine($"Expected value after seeding is <2>. Current value is <{count}>.");
      } // Dispose
    }

    static void TestAuthDatebase(IConfiguration config)
    {
      IUserContextProvider contextProvider = null;
      using (var context = new AuthenticationDataContext(GetOptions<AuthenticationDataContext>(config), contextProvider))
      {
        var users = context.Users.ToList();
        Console.WriteLine($"Expected value after seeding is <3>. Current value is <{users.Count()}>.");
        var countClaims = context.UserClaims.Count();
        Console.WriteLine($"Expected value after seeding is <6>. Current value is <{countClaims}>.");
      } // Dispose
    }

    private static string GetCs<T>(IConfiguration config) where T : DbContext
    {
      var csFromEnv = Environment.GetEnvironmentVariable("WORKSHOP_ConnectionString_MachineDataContext", EnvironmentVariableTarget.Process);
      if (csFromEnv != null)
      {
        Console.WriteLine("Found env variable 'WORKSHOP_ConnectionString_MachineDataContext' with this connectionstring:");
        Console.WriteLine(csFromEnv);
        return csFromEnv;
      }
      Console.WriteLine("Fallback to 'application.json' setting and use default connectionstring");
      return config.GetConnectionString(typeof(T).Name);
    }

    private static DbContextOptions<T> GetOptions<T>(IConfiguration config) where T : DbContext
    {
      var optionBuilder = new DbContextOptionsBuilder<T>();
      optionBuilder.UseSqlServer(GetCs<T>(config), o => o.EnableRetryOnFailure());
      return optionBuilder.Options;
    }
  }
}
