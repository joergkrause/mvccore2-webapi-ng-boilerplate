using System;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.AspNetCore.Identity;
using Moq;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class AuthManagerRolesTest {

    IServiceProvider mockedServiceProvider;

    [TestInitialize]
    public void InitManager() {
      // test data
      // Demo user and admin for frontend administration
      var guestRole = new ApplicationRole { Name = "Guest", Id = Guid.NewGuid().ToString("N") };
      var userRole = new ApplicationRole { Name = "User", Id = Guid.NewGuid().ToString("N") };
      var adminRole = new ApplicationRole { Name = "Admin", Id = Guid.NewGuid().ToString("N") };

      // Add roles
      var contextRoles = new List<ApplicationRole>();
      contextRoles.AddRange(new[] { guestRole, userRole, adminRole });
      var hasher = new PasswordHasher<ApplicationUser>();
      var guest = new ApplicationUser {
        UserName = "weirdguest",
        Id = Guid.NewGuid().ToString("N"),
        Email = "weird@guest.com",
      };
      guest.PasswordHash = hasher.HashPassword(guest, "p@ssw0rd");
      // Assign users to roles
      var user = new ApplicationUser {
        UserName = "dorisdemo",
        Id = Guid.NewGuid().ToString("N"),
        Email = "doris@demo.com"
      };
      user.PasswordHash = hasher.HashPassword(user, "p@ssw0rd");
      var admin = new ApplicationUser {
        UserName = "andyadmin",
        Id = Guid.NewGuid().ToString("N"),
        Email = "andy@admin.com"
      };
      admin.PasswordHash = hasher.HashPassword(admin, "p@ssw0rd");

      // Add users
      var contextUsers = new List<ApplicationUser>();
      contextUsers.Add(guest);
      contextUsers.Add(user);
      contextUsers.Add(admin);
      // Assign roles to users
      var contextUserRoles = new List<UserRole>();
      var guestUserRole = new UserRole { UserId = guest.Id, RoleId = guestRole.Id };
      contextUserRoles.Add(guestUserRole);
      var userUserRole = new UserRole { UserId = user.Id, RoleId = userRole.Id };
      contextUserRoles.Add(userUserRole);
      var adminUserRole = new UserRole { UserId = admin.Id, RoleId = adminRole.Id };
      contextUserRoles.Add(adminUserRole);
      
      // Assign claims to users
      // because we overrode the IdentityUserClaim class we need to use derived UserClaim class here
      // otherwise the discriminator column would rule the access out
      var apiPolicyClaimForUser = new UserClaim {
        ClaimType = "role",
        ClaimValue = "api_access",
        UserId = user.Id
      };
      var contextUserClaims = new List<UserClaim>();
      contextUserClaims.Add(apiPolicyClaimForUser);
      var apiPolicyClaimForAdmin = new UserClaim {
        ClaimType = "role",
        ClaimValue = "api_access",
        UserId = admin.Id
      };
      contextUserClaims.Add(apiPolicyClaimForAdmin);

      // Auth related repos
      var mockUserRepo = new Mock<IGenericRepository<ApplicationUser, string>>();
      mockUserRepo.Setup(r => r.Read(u => true)).Returns(contextUsers);
      mockUserRepo.Setup(r => r.Read(u => u.Id == It.IsAny<string>()))
        .Returns<ApplicationUser, string>((u, a) => contextUsers.Where(c => c.Id == a));
      mockUserRepo.Setup(r => r.Read(u => u.NormalizedUserName == It.IsAny<string>()
      || u.UserName == It.IsAny<string>()))
      .Returns<ApplicationUser, string>((u, a) => contextUsers.Where(c => c.NormalizedUserName == a || c.UserName == a));
      var mockRoleRepo = new Mock<IGenericRepository<ApplicationRole, string>>();
      mockRoleRepo.Setup(r => r.Read(u => true)).Returns(contextRoles);
      var mockClaimRepo = new Mock<IGenericRepository<UserClaim, int>>();
      mockClaimRepo.Setup(r => r.Read(u => true)).Returns(contextUserClaims);
      var mockUserRoleRepo = new Mock<IGenericRepository<UserRole, int>>();
      mockUserRoleRepo.Setup(r => r.Read(u => true)).Returns(contextUserRoles);

      // all repos are injected through the service provider, so we mock the SP
      mockedServiceProvider = Mock.Of<IServiceProvider>(sp =>
        sp.GetService(typeof(IGenericRepository<ApplicationUser, string>)) == mockUserRepo.Object &&
        sp.GetService(typeof(IGenericRepository<ApplicationRole, string>)) == mockRoleRepo.Object &&
        sp.GetService(typeof(IGenericRepository<UserClaim, int>)) == mockClaimRepo.Object &&
        sp.GetService(typeof(IGenericRepository<UserRole, int>)) == mockUserRoleRepo.Object);

    }

    [TestMethod]
    public void GetAllUsers() {
      var authManager = new AuthenticationManager(mockedServiceProvider);
      var users = authManager.GetUsers();
      Assert.AreEqual(3, users.Count());
    }

    [TestMethod]
    public void GetAllRoles() {
      var authManager = new AuthenticationManager(mockedServiceProvider);
      var users = authManager.GetRoles();
      Assert.AreEqual(3, users.Count());
    }

    [TestMethod]
    public void GetClaimForUser() {
      var authManager = new AuthenticationManager(mockedServiceProvider);
      var user = authManager.FindUserByName("dorisdemo");
      Assert.IsNotNull(user);
      var claims = authManager.GetClaims(user);
      Assert.AreEqual(1, claims.Count());
      Assert.AreEqual("role", claims.First().Type);
      Assert.AreEqual("api_access", claims.First().Value);
    }

  }
}
