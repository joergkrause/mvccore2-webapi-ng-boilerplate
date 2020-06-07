using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using JoergIsAGeek.Workshop.Enterprise.SetupConsole.UoW;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.SetupConsole {
  class Program {
    static void Main(string[] args) {
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
      var sp = SetupDependencyInjection(config);
      if (TestInitialize(sp)) {
        TestAuthDatebase(sp);
        TestDemoDatebase(sp);
      }
      Console.WriteLine("Done");
    }

    static IServiceProvider SetupDependencyInjection(IConfiguration config) {
      // no concrete value needed, this is for SaveChanges automation after init
      IUserContextProvider contextProvider = new MockedUserContextProvider();
      contextProvider.SetUserIdentity(new ClaimsIdentity(new Claim[] {
        new Claim(ClaimTypes.Name, "Setup User"),
        new Claim(ClaimTypes.Role, "Administrator")
      }));
      // DI container
      var serviceProvider = new ServiceCollection()
            .AddLogging()
            .AddSingleton<IUserContextProvider>(contextProvider)
            .AddDbContext<AuthenticationDataContext>(opt => opt.UseSqlServer(GetCs<AuthenticationDataContext>(config)), ServiceLifetime.Transient)
            .AddDbContext<MachineDataContext>(opt => opt.UseSqlServer(GetCs<MachineDataContext>(config)), ServiceLifetime.Transient)
            .AddScoped<IGenericRepository<Machine, int>, GenericDbRepository<Machine, int>>()
            .AddScoped<IGenericRepository<Device, int>, GenericDbRepository<Device, int>>()
            .AddScoped<IGenericRepository<DataValue, int>, GenericDbRepository<DataValue, int>>()
            .AddScoped<IGenericRepository<MachineOperator, int>, GenericDbRepository<MachineOperator, int>>()
            .AddScoped<IAuthenticationRepository<IdentityRole, string>, AuthenticationRepository<IdentityRole, string>>()
            .AddScoped<IAuthenticationRepository<IdentityUser, string>, AuthenticationRepository<IdentityUser, string>>()
            .AddScoped<IAuthenticationRepository<IdentityUserClaim<string>, string>, AuthenticationRepository<IdentityUserClaim<string>, string>>()
            .AddScoped<IAuthenticationRepository<IdentityUserRole<string>, string>, AuthenticationRepository<IdentityUserRole<string>, string>>()
            .AddScoped<SetUserUnitOfWork>()
            .BuildServiceProvider();
      //serviceProvider
      //      .GetService<ILoggerFactory>()
      //      .AddConsole(LogLevel.Debug);
      return serviceProvider;
    }


    static bool TestInitialize(IServiceProvider serviceProvider) {

      var init = new DatabaseInitializer(serviceProvider);

      try {
        IEnumerable<string> crossDbUserIds = null;
        init.SeedAuthDb();
        init.SeedAuthData();
        // simulate business logic, we could combine this in a Unit of Work pattern or in case we need transactions
        var uow = serviceProvider.GetService<SetUserUnitOfWork>();
        var userUsers = uow.RetrieveMachineUsers();
        userUsers.ToList().ForEach(u => Console.WriteLine($"{u.Id}: {u.UserName}"));
        crossDbUserIds = userUsers.Select(u => u.Id);
        // Demo Data
        init.SeedDemoDb();
        init.SeedDemoData(crossDbUserIds);
        return true;
      } catch (Exception ex) {

        var clr = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(ex.Message);
        Console.ForegroundColor = clr;
        return false;
      }
    }

    static void TestDemoDatebase(IServiceProvider serviceProvider) {
      var repMachine = serviceProvider.GetService<IGenericRepository<Machine, int>>();
      var machines = repMachine.Read(m => true);
      var count = repMachine.Count(m => true);
      Console.WriteLine($"Expected value after seeding is <2>. Current value is <{count}>.");
    }

    static void TestAuthDatebase(IServiceProvider serviceProvider) {
      var repIdentityUser = serviceProvider.GetService<IAuthenticationRepository<IdentityUser, string>>();
      var repIdentityUserClaim = serviceProvider.GetService<IAuthenticationRepository<IdentityUserClaim<string>, string>>();
      var users = repIdentityUser.Read(u => true);
      Console.WriteLine($"Expected value after seeding is <3>. Current value is <{users.Count()}>.");
      var countClaims = repIdentityUserClaim.Query(uc => true).Count();
      Console.WriteLine($"Expected value after seeding is <6>. Current value is <{countClaims}>.");
    }

    private static string GetCs<T>(IConfiguration config) where T : DbContext {
      var key = $"WORKSHOP_ConnectionString_{typeof(T).Name}";
      var csFromEnv = Environment.GetEnvironmentVariable(key, EnvironmentVariableTarget.Process);
      if (csFromEnv != null) {
        Console.WriteLine($"Found env variable '{key}' with this connectionstring:");
        Console.WriteLine(csFromEnv);
        return csFromEnv;
      }
      Console.WriteLine("Fallback to 'application.json' setting and use default connectionstring");
      return config.GetConnectionString(typeof(T).Name);
    }

    private static DbContextOptions<T> GetOptions<T>(IConfiguration config) where T : DbContext {
      var optionBuilder = new DbContextOptionsBuilder<T>();
      optionBuilder.UseSqlServer(GetCs<T>(config), o => o.EnableRetryOnFailure());
      return optionBuilder.Options;
    }
  }
}
