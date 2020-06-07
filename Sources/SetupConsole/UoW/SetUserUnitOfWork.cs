using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.SetupConsole.UoW {

  /// <summary>
  /// Demonstrates the usage of Unit of Work pattern.
  /// </summary>
  public class SetUserUnitOfWork : UnitOfWork {

    public SetUserUnitOfWork(AuthenticationDataContext context): base(context) {
    }

    public IEnumerable<IdentityUser> RetrieveMachineUsers() {
      var userRoles = Context.Set<IdentityRole>().Where(r => r.Name == "User"); //.Select(r => r.Id);
      var userInRole = Context.Set<IdentityUserRole<string>>().Where(ur => userRoles.Any(r => r.Id == ur.RoleId)); //.Select(ur => ur.UserId);
      var userUsers = Context.Set<IdentityUser>().Where(u => userInRole.Any(ur => ur.UserId == u.Id));
      return userUsers;
    }

  }
}
