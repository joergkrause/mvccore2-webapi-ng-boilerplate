using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.AspNetCore.Identity;

namespace JoergIsAGeek.Workshop.UnitTests.DataAccessLayer {
  internal class DatabaseInitializer {

    internal void Seed(MachineDataContext context) {
      // Demo user and admin for frontend administration
      var guestRole = new ApplicationRole { Name = "Guest", Id = Guid.NewGuid().ToString("N") };
      var userRole = new ApplicationRole { Name = "User", Id = Guid.NewGuid().ToString("N") };
      var adminRole = new ApplicationRole { Name = "Admin", Id = Guid.NewGuid().ToString("N") };

      // Add roles
      context.Roles.AddRange(new [] { guestRole, userRole, adminRole });
      var hasher = new PasswordHasher<ApplicationUser>();
      var guest = new ApplicationUser
      {
        UserName = "weirdguest",
        Id = Guid.NewGuid().ToString("N"),
        Email = "weird@guest.com",
      };
      guest.PasswordHash = hasher.HashPassword(guest, "p@ssw0rd");
      // Assign users to roles
      var user = new ApplicationUser
      {
        UserName = "dorisdemo",
        Id = Guid.NewGuid().ToString("N"),
        Email = "doris@demo.com"
      };
      user.PasswordHash = hasher.HashPassword(user, "p@ssw0rd");
      var admin = new ApplicationUser
      {
        UserName = "andyadmin",
        Id = Guid.NewGuid().ToString("N"),
        Email = "andy@admin.com"
      };
      admin.PasswordHash = hasher.HashPassword(admin, "p@ssw0rd");

      // Add users
      context.Users.Add(guest);
      context.Users.Add(user);
      context.Users.Add(admin);
      context.SaveChanges();
      // Assign roles to users
      var guestUserRole = new UserRole { UserId = guest.Id, RoleId = guestRole.Id };
      context.UserRoles.Add(guestUserRole);
      var userUserRole = new UserRole { UserId = user.Id, RoleId = userRole.Id };
      context.UserRoles.Add(userUserRole);
      var userAdminRole = new UserRole { UserId = admin.Id, RoleId = userRole.Id };
      context.UserRoles.Add(userAdminRole);
      var adminUserRole = new UserRole { UserId = admin.Id, RoleId = adminRole.Id };
      context.UserRoles.Add(adminUserRole);
      context.SaveChanges();
      // Assign claims to users
      // because we overrode the IdentityUserClaim class we need to use derived UserClaim class here
      // otherwise the discriminator column would rule the access out
      var apiPolicyClaimForUser = new UserClaim {
        ClaimType = "api_access",
        ClaimValue = string.Empty, // the pure existence is enough, claims don't require a value, but often has one
        UserId = user.Id
      };
      context.UserClaims.Add(apiPolicyClaimForUser);
      var apiPolicyClaimForAdmin = new UserClaim {
        ClaimType = "api_access",
        ClaimValue = string.Empty,
        UserId = admin.Id
      };
      context.UserClaims.Add(apiPolicyClaimForAdmin);
      // weird guest has no access to the API backend (for demonstration purpose)

      // we have currently no claims for roles, but this would be an additional option

      // Demo data
      var machine1 = new Machine {
        Name = "M1",
        Location = "A-100"
      };
      var machine2 = new Machine {
        Name = "M2",
        Location = "M-101"
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
      var v1 = new DataValue { Value = 123.5, Unit = "V" };
      var v2 = new DataValue { Value = 43, Unit = "V" };
      var v3 = new DataValue { Value = 230, Unit = "V" };
      var v4 = new DataValue { Value = 380, Unit = "V" };
      var v5 = new DataValue { Value = 0.005, Unit = "A" };

      machine1.Devices.Add(device1);
      machine1.Devices.Add(device2);
      device1.DataValues.Add(v1);
      device1.DataValues.Add(v2);
      device2.DataValues.Add(v3);
      device2.DataValues.Add(v4);
      device2.DataValues.Add(v5);
      machine2.Devices.Add(device3);

      context.Machines.Add(machine1);
      context.Machines.Add(machine2);
      context.SaveChanges();

    }

  }
}
