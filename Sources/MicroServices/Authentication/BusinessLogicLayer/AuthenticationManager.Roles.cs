using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  public partial class AuthenticationManager : Manager, IAuthenticationManager {

    #region Roles

    public IdentityResult CreateRole(ApplicationIdentityRoleDto roleDto) {
      roleDto.Id = GetSecureId();
      var role = mapper.Map<IdentityRole>(roleDto);
      Context.Entry(role).State = Microsoft.EntityFrameworkCore.EntityState.Added;
      if (SaveChanges() == 1) {
        return IdentityResult.Success;
      } else {
        return IdentityResult.Failed();
      }
    }

    public string GetIdentityRoleDtoId(ApplicationIdentityRoleDto roleDto) {
      var role = Context.Set<IdentityRole>().Where(r => r.Id == roleDto.Id || r.Name == roleDto.Name).FirstOrDefault();
      return role?.Id;
    }

    public string GetIdentityRoleDtoName(ApplicationIdentityRoleDto roleDto) {
      var role = Context.Set<IdentityRole>().Where(r => r.Id == roleDto.Id || r.Name == roleDto.Name).SingleOrDefault();
      return role?.Name;
    }

    public string GetNormalizedRoleName(ApplicationIdentityRoleDto roleDto) {
      var role = Context.Set<IdentityRole>().Where(r => r.Id == roleDto.Id || r.Name == roleDto.Name).SingleOrDefault();
      return role?.Name.Trim();
    }

    public void SetIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName) {
      throw new NotImplementedException();
    }

    public void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName) {
      throw new NotImplementedException();
    }


    public IdentityResult UpdateRole(ApplicationIdentityRoleDto roleDto) {
      var role = mapper.Map<IdentityRole>(roleDto);
      Context.Entry(role).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
      if (SaveChanges() == 1) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public IEnumerable<ApplicationIdentityRoleDto> GetRoles() {
      return mapper.Map<IEnumerable<ApplicationIdentityRoleDto>>(Context.Set<IdentityRole>());
    }

    #endregion

    #region UserRoles

    public void AddToRole(ApplicationUserDto user, string roleName) {
      var role = Context.Set<IdentityRole>().SingleOrDefault(r => r.Name == roleName);
      if (role != null) {
        var newRole = new IdentityUserRole<string> {
          RoleId = role.Id,
          UserId = user.Id
        };
        Context.Entry(newRole).State = Microsoft.EntityFrameworkCore.EntityState.Added;
        SaveChanges();
      }
    }

    public void RemoveFromRole(ApplicationUserDto user, string roleName) {
      var role = Context.Set<IdentityRole>().SingleOrDefault(r => r.Name == roleName);
      if (role != null) {
        var roleToDelete = new IdentityUserRole<string>
        {
          RoleId = role.Id,
          UserId = user.Id
        };
        Context.Entry(roleToDelete).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        SaveChanges();
      }
    }

    public IEnumerable<string> GetRoles(ApplicationUserDto user) {
      var id = user.Id;
      var roleIds = Context.Set<IdentityUserRole<string>>().Where(r => r.UserId == id).Select(r => r.RoleId);
      var result = Context.Set<IdentityRole>().Where(r => roleIds.Contains(r.Id));
      return result.Select(r => r.Name);
    }

    public IEnumerable<string> GetRolesForUser(string userId) {
      var roleIds = Context.Set<IdentityUserRole<string>>().Where(r => r.UserId == userId).Select(r => r.RoleId).ToList();
      var roles = Context.Set<IdentityRole>().Where(r => roleIds.Contains(r.Id)).Select(r => r.Name);
      return roles;
    }

    public bool IsUserInRole(string id, string roleName) {
      var user = SafeFindUserById(id);
      var role = Context.Set<IdentityRole>().Where(r => r.Name == roleName).SingleOrDefault();
      if (role != null) {
        var result = Context.Set<IdentityUserRole<string>>().Where(r => r.UserId == user.Id && r.RoleId == role.Id).Any();
        return result;
      }
      return false;
    }

    public IEnumerable<ApplicationUserDto> GetUsersInRole(string roleName) {
      var role = Context.Set<IdentityRole>().SingleOrDefault(r => r.Name == roleName);
      var userIds = Context.Set<IdentityUserRole<string>>().Where(r => r.RoleId == role.Id).Select(r => r.UserId);
      var users = Context.Set<IdentityUser>().Where(u => userIds.Contains(u.Id));
      return mapper.Map<IEnumerable<ApplicationUserDto>>(users);
    }

    public IdentityResult DeleteRole(string roleId) {
      var role = new IdentityRole { Id = roleId };
      Context.Entry(role).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
      if (SaveChanges() == 1) {
        return IdentityResult.Success;
      } else {
        return IdentityResult.Failed();
      }
    }

    public ApplicationIdentityRoleDto FindRoleById(string roleId) {
      var role = Context.Set<IdentityRole>().SingleOrDefault(r => r.Id == roleId);
      return role != null ? mapper.Map<ApplicationIdentityRoleDto>(role) : null;
    }

    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName) {
      var role = Context.Set<IdentityRole>().SingleOrDefault(r => r.Name == normalizedRoleName);
      return role == null ? null : mapper.Map<ApplicationIdentityRoleDto>(role);
    }

    #endregion

  }
}
