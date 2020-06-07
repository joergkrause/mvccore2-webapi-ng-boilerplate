using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Collections.Generic;

namespace JoergIsAGeek.Workshop.Enterprise.SetupConsole {
  internal class DatabaseInitializer {

    private readonly IAuthenticationRepository<IdentityRole, string> repIdentityRole;
    private readonly IAuthenticationRepository<IdentityUser, string> repIdentityUser;
    private readonly IAuthenticationRepository<IdentityUserRole<string>, string> repIdentityUserRole;
    private readonly IAuthenticationRepository<IdentityUserClaim<string>, string> repIdentityUserClaim;
    private readonly IGenericRepository<Machine, int> repMachine;
    private readonly IGenericRepository<Device, int> repDevice;
    private readonly IGenericRepository<DataValue, int> repDatavalue;
    private readonly IGenericRepository<MachineOperator, int> repOperators;
    private readonly AuthenticationDataContext authContext;
    private readonly MachineDataContext machineContext;

    public DatabaseInitializer(IServiceProvider provider) {
      this.repIdentityRole = provider.GetService<IAuthenticationRepository<IdentityRole, string>>();
      this.repIdentityUser = provider.GetService<IAuthenticationRepository<IdentityUser, string>>();
      this.repIdentityUserRole = provider.GetService<IAuthenticationRepository<IdentityUserRole<string>, string>>();
      this.repIdentityUserClaim = provider.GetService<IAuthenticationRepository<IdentityUserClaim<string>, string>>();
      this.repMachine = provider.GetService<IGenericRepository<Machine, int>>();
      this.repDevice = provider.GetService<IGenericRepository<Device, int>>();
      this.repDatavalue = provider.GetService<IGenericRepository<DataValue, int>>();
      this.repOperators = provider.GetService<IGenericRepository<MachineOperator, int>>();

      this.authContext = provider.GetService<AuthenticationDataContext>();
      this.machineContext = provider.GetService<MachineDataContext>();
    }

    internal void SeedAuthDb() {
      Console.WriteLine("Deleting Auth DB...");
      authContext.Database.EnsureDeleted();
      Console.WriteLine("Creating Auth DB...");
      authContext.Database.EnsureCreated();      
    }

    internal void SeedAuthData() {
      Console.WriteLine("Seeding Auth DB...");

      // Demo user and admin for frontend administration
      var guestRole = new IdentityRole { Name = "Guest", Id = Guid.NewGuid().ToString("N") };
      var userRole = new IdentityRole { Name = "User", Id = Guid.NewGuid().ToString("N") };
      var adminRole = new IdentityRole { Name = "Admin", Id = Guid.NewGuid().ToString("N") };

      // Add roles
      repIdentityRole.Insert(new[] { guestRole, userRole, adminRole });
      // Get hasher (in UserManager it's being called in the background)
      var hasher = new PasswordHasher<IdentityUser>();
      var guest = new IdentityUser {
        UserName = "Gerry Guest",
        Id = Guid.NewGuid().ToString("N"),
        Email = "gerry@guest.com",
      };
      guest.PasswordHash = hasher.HashPassword(guest, "P@ssw0rd");
      // Assign users to roles
      var user = new IdentityUser {
        UserName = "Doris Demo",
        Id = Guid.NewGuid().ToString("N"),
        Email = "doris@demo.com"
      };
      user.PasswordHash = hasher.HashPassword(user, "P@ssw0rd");
      var admin = new IdentityUser {
        UserName = "Andy Admin",
        Id = Guid.NewGuid().ToString("N"),
        Email = "andy@admin.com"
      };
      admin.PasswordHash = hasher.HashPassword(admin, "P@ssw0rd");
      // Add users
      repIdentityUser.Insert(new[] { guest, user, admin });

      // Assign roles to users
      var guestUserRole = new IdentityUserRole<string> { UserId = guest.Id, RoleId = guestRole.Id };
      var userUserRole = new IdentityUserRole<string> { UserId = user.Id, RoleId = userRole.Id };
      var userAdminRole = new IdentityUserRole<string> { UserId = admin.Id, RoleId = userRole.Id };
      var adminUserRole = new IdentityUserRole<string> { UserId = admin.Id, RoleId = adminRole.Id };
      repIdentityUserRole.Insert(new[] { guestUserRole, userUserRole, userAdminRole, adminUserRole });

      // Assign claims to users
      // because we overrode the IdentityUserClaim class we need to use derived UserClaim class here
      // otherwise the discriminator column would rule the access out
      var apiPolicyClaimForUser = new IdentityUserClaim<string> {
        ClaimType = "api_access",
        ClaimValue = string.Empty, // the pure existence is enough, claims don't require a value, but often has one
        UserId = user.Id
      };
      var apiPolicyClaimForAdmin = new IdentityUserClaim<string> {
        ClaimType = "api_access",
        ClaimValue = string.Empty,
        UserId = admin.Id
      };
      // weird guest has no access to the API backend (for demonstration purpose)
      repIdentityUserClaim.Insert(new[] { apiPolicyClaimForUser, apiPolicyClaimForAdmin });
      // add claims used to manage backend policies
      foreach (var u in (new IdentityUser[] { user, admin })) {
        repIdentityUserClaim.Insert(new IdentityUserClaim<string> {
          ClaimType = "MachineData",
          ClaimValue = "read",
          UserId = u.Id
        });
        repIdentityUserClaim.Insert(new IdentityUserClaim<string> {
          ClaimType = "MachineData",
          ClaimValue = "write",
          UserId = u.Id
        });
      }
    }

    internal void SeedDemoDb() {
      Console.WriteLine("Deleting DemoData DB...");
      machineContext.Database.EnsureDeleted();
      Console.WriteLine("Creating DemoData DB...");
      machineContext.Database.EnsureCreated();
    }

    internal void SeedDemoData(IEnumerable<string> demoUserIds) {
      Console.WriteLine("Seeding Demo DB...");

      // Demo data
      var machine1 = new Machine {
        Name = "M1",
        Location = "A-100",
        StartOperation = DateTime.Now
      };
      var machine2 = new Machine {
        Name = "M2",
        Location = "M-101",
        StartOperation = DateTime.Now
      };
      var device1 = new Device {
        Name = "BG A"
      };
      var device2 = new Device {
        Name = "BG B"
      };
      var device3 = new Device {
        Name = "MM 3"
      };
      repMachine.InsertOrUpdate(new[] { machine1, machine2 });

      var v1 = new DataValue { Value = 123.5, Unit = "V" };
      var v2 = new DataValue { Value = 43, Unit = "V" };
      var v3 = new DataValue { Value = 230, Unit = "V" };
      var v4 = new DataValue { Value = 380, Unit = "V" };
      var v5 = new DataValue { Value = 0.005, Unit = "A" };
      device1.DataValues.Add(v1);
      device1.DataValues.Add(v2);
      device2.DataValues.Add(v3);
      device2.DataValues.Add(v4);
      device2.DataValues.Add(v5);
      repDevice.InsertOrUpdate(new[] { device1, device2, device3 });

      var mo1 = new MachineOperator { UserId = demoUserIds.First() };
      mo1.OperatedMachines.Add(machine1);
      mo1.OperatedMachines.Add(machine2);

      repOperators.InsertOrUpdate(mo1);

    }

  }
}
