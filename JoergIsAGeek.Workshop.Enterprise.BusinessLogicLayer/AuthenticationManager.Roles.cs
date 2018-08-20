using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public partial class AuthenticationManager : Manager, IAuthenticationManager
  {

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
      return role == null ? null : role.Name.Trim();
    }

    public string GetNormalizedUserName(ApplicationUserDto userDto) {
      var user = RepUsers.Read(r => r.Id == userDto.Id || r.UserName == userDto.UserName).SingleOrDefault();
      return user == null ? null : user.UserName.Trim();
    }

    public string GetUserDtoId(ApplicationUserDto user) {
      // TODO: Implement some cross check here
      return user.Id;
    }

    public string GetUserDtoName(ApplicationUserDto user) {
      // TODO: Implement some cross check here
      return user.UserName;
    }

    public void SetIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName) {
      throw new NotImplementedException();
    }

    public void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName) {
      throw new NotImplementedException();
    }


    public IdentityResult UpdateRole(ApplicationIdentityRoleDto roleDto) {
      if (RepRoles.InsertOrUpdate(mapper.Map<ApplicationRole>(roleDto))) {
        return IdentityResult.GetSucceded();
      }
      else {
        return IdentityResult.GetError();
      }
    }

    #endregion

    #region UserRoles

    public void AddToRole(ApplicationUserDto user, string roleName) {
      var role = this.RepRoles.Read(r => r.Name == roleName).SingleOrDefault();
      if (role != null) {
        var newRole = new UserRole {
          UserId = user.Id,
          RoleId = role.Id
        };
        this.RepUserRoles.InsertOrUpdate(newRole);
      }
    }

    public void RemoveFromRole(ApplicationUserDto user, string roleName) {
      var role = this.RepRoles.Read(r => r.Name == roleName).SingleOrDefault();
      if (role != null) {
        var roleToDelete = new UserRole {
          UserId = user.Id,
          RoleId = role.Id
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

    public bool IsInRole(ApplicationUserDto user, string roleName) {
      throw new NotImplementedException();
    }

    public IEnumerable<ApplicationUserDto> GetUsersInRole(string roleName) {
      throw new NotImplementedException();
    }

    #endregion

  }
}
