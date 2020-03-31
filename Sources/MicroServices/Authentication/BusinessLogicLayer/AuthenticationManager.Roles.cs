using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  public partial class AuthenticationManager : Manager, IAuthenticationManager {

    #region Roles


    public string GetIdentityRoleDtoId(ApplicationIdentityRoleDto roleDto) {
      var role = RepRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).FirstOrDefault();
      return role?.Id;
    }

    public string GetIdentityRoleDtoName(ApplicationIdentityRoleDto roleDto) {
      var role = RepRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).SingleOrDefault();
      return role?.Name;
    }

    public string GetNormalizedRoleName(ApplicationIdentityRoleDto roleDto) {
      var role = RepRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).SingleOrDefault();
      return role?.Name.Trim();
    }

    public string GetNormalizedUserName(ApplicationUserDto userDto) {
      var user = RepUsers.Read(r => r.Id == userDto.Id || r.UserName == userDto.UserName).SingleOrDefault();
      return user?.UserName.Trim();
    }

    public string GetUserDtoId(ApplicationUserDto userDto) {
      var user = RepUsers.Read(r => r.Id == userDto.Id || r.UserName == userDto.UserName).SingleOrDefault();
      return user?.Id;
    }

    public string GetUserDtoName(ApplicationUserDto userDto) {
      var user = RepUsers.Read(r => r.Id == userDto.Id || r.UserName == userDto.UserName).SingleOrDefault();
      return user?.UserName;
    }

    public void SetIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName) {
      throw new NotImplementedException();
    }

    public void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName) {
      throw new NotImplementedException();
    }


    public IdentityResult UpdateRole(ApplicationIdentityRoleDto roleDto) {
      if (RepRoles.Update(mapper.Map<IdentityRole>(roleDto))) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public IEnumerable<ApplicationIdentityRoleDto> GetRoles() {
      return mapper.Map<IEnumerable<ApplicationIdentityRoleDto>>(RepRoles.Read(r => true));
    }

    #endregion

    #region UserRoles

    public void AddToRole(ApplicationUserDto user, string roleName) {
      var role = this.RepRoles.Read(r => r.Name == roleName).SingleOrDefault();
      if (role != null) {
        var newRole = new IdentityUserRole<string> {
          RoleId = role.Id,
          UserId = user.Id
        };
        this.RepUserRoles.Insert(newRole);
      }
    }

    public void RemoveFromRole(ApplicationUserDto user, string roleName) {
      var role = this.RepRoles.Read(r => r.Name == roleName).SingleOrDefault();
      if (role != null) {
        var roleToDelete = new IdentityUserRole<string>
        {
          RoleId = role.Id,
          UserId = user.Id
        };
        this.RepUserRoles.Delete(roleToDelete);
      }
    }

    public IEnumerable<string> GetRoles(ApplicationUserDto user) {
      var id = user.Id;
      var roleIds = RepUserRoles.Read(r => r.UserId == id).Select(r => r.RoleId);
      var result = RepRoles.Read(r => roleIds.Contains(r.Id));
      return result.Select(r => r.Name);
    }

    public IEnumerable<string> GetRolesForUser(string userId) {
      var roleIds = RepUserRoles.Read(r => r.UserId == userId).Select(r => r.RoleId).ToList();
      var roles = RepRoles.Read(r => roleIds.Contains(r.Id)).Select(r => r.Name);
      return roles;
    }

    public bool IsUserInRole(ApplicationUserDto userDto, string roleName) {
      var user = SafeFindUser(userDto);
      var role = RepRoles.Read(r => r.Name == roleName).SingleOrDefault();
      if (role != null) {
        var result = RepUserRoles.Query(r => r.UserId == user.Id && r.RoleId == role.Id).Any();
        return result;
      }
      return false;
    }

    public IEnumerable<ApplicationUserDto> GetUsersInRole(string roleName) {
      var role = RepRoles.Read(r => r.Name == roleName).SingleOrDefault();
      var userIds = RepUserRoles.Read(r => r.RoleId == role.Id).Select(r => r.UserId);
      var users = RepUsers.Read(u => userIds.Contains(u.Id));
      return mapper.Map<IEnumerable<ApplicationUserDto>>(users);
    }


    #endregion

  }
}
