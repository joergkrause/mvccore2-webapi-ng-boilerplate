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
  public class AuthenticationManager : Manager, IAuthenticationManager
  {

    public AuthenticationManager(IServiceProvider service): base(service)
    { 
      var mapperConfiguration = new MapperConfiguration(configure => {
        configure.CreateMap<ApplicationUser, ApplicationUserDto>();
        configure.CreateMap<ApplicationUserDto, ApplicationUser>();
        configure.CreateMap<ApplicationRole, ApplicationIdentityRoleDto>();
        configure.CreateMap<ApplicationIdentityRoleDto, ApplicationRole>();
        configure.CreateMap<ClaimDto, UserClaim>();
        configure.CreateMap<UserClaim, ClaimDto>();
      });
      mapper = mapperConfiguration.CreateMapper();
    }

    private static string GetSecureId()
    {
      return Guid.NewGuid().ToString("N");
    }

    public IdentityResult CreateRole(ApplicationIdentityRoleDto roleDto)
    {
      roleDto.Id = GetSecureId();
      if (RepRoles.InsertOrUpdate(mapper.Map<ApplicationRole>(roleDto)))
      {
        return IdentityResult.GetSucceded();
      } else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult CreateUser(ApplicationUserDto userDto)
    {
      userDto.Id = GetSecureId();
      if (RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult DeleteRole(ApplicationIdentityRoleDto roleDto)
    {
      if (RepRoles.Delete(mapper.Map<ApplicationRole>(roleDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public ApplicationIdentityRoleDto FindRoleById(string roleId)
    {
      return mapper.Map<ApplicationIdentityRoleDto>(RepRoles.Read(r => r.Id == roleId));
    }

    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      var role = RepRoles.Read(r => r.Name == normalizedRoleName).FirstOrDefault();
      return role == null ? null : mapper.Map<ApplicationIdentityRoleDto>(role);
    }

    public ApplicationUserDto FindUserById(string userId)
    {
      var user = RepUsers.Read(u => u.Id == userId).SingleOrDefault();
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public ApplicationUserDto FindUserByName(string normalizedUserName)
    {
      var user = RepUsers.Read(u => u.UserName == normalizedUserName).FirstOrDefault();
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public string GetIdentityRoleDtoId(ApplicationIdentityRoleDto roleDto)
    {
      var role = RepRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).FirstOrDefault();
      return role?.Id;
    }

    public string GetIdentityRoleDtoName(ApplicationIdentityRoleDto roleDto)
    {
      var role = RepRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).SingleOrDefault();
      return role?.Name;
    }

    public string GetNormalizedRoleName(ApplicationIdentityRoleDto roleDto)
    {
      var role = RepRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).SingleOrDefault();
      return role == null ? null : role.Name.Trim();
    }

    public string GetNormalizedUserName(ApplicationUserDto userDto)
    {
      var user = RepUsers.Read(r => r.Id == userDto.Id || r.UserName == userDto.UserName).SingleOrDefault();
      return user == null ? null : user.UserName.Trim();
    }

    public string GetUserDtoId(ApplicationUserDto user)
    {
      // TODO: Implement some cross check here
      return user.Id;
    }

    public string GetUserDtoName(ApplicationUserDto user)
    {
      // TODO: Implement some cross check here
      return user.UserName;
    }

    public void SetIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName)
    {
      throw new NotImplementedException();
    }

    public void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName)
    {
      throw new NotImplementedException();
    }

    public void SetNormalizedUserName(ApplicationUserDto user, string normalizedName)
    {
      throw new NotImplementedException();
    }

    public void SetUserDtoName(ApplicationUserDto user, string userName)
    {
      user.UserName = userName;
    }

    public IdentityResult UpdateRole(ApplicationIdentityRoleDto roleDto)
    {
      if (RepRoles.InsertOrUpdate(mapper.Map<ApplicationRole>(roleDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult UpdateUser(ApplicationUserDto userDto)
    {
      if (RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public string GetPasswordHash(ApplicationUserDto userDto)
    {
      return RepUsers.Read(u => u.Id == userDto.Id).SingleOrDefault()?.PasswordHash;
    }

    public bool HasPassword(ApplicationUserDto userDto)
    {
      return !String.IsNullOrEmpty(RepUsers.Read(u => u.Id == userDto.Id).SingleOrDefault()?.PasswordHash);
    }

    public void SetPasswordHash(ApplicationUserDto userDto, string passwordHash)
    {
      var user = FindUserById(userDto.Id);
      if (user == null)
      {
        if (RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto)))
        {
          userDto = mapper.Map<ApplicationUserDto>(RepUsers.Read(u => u.Email == userDto.Email).FirstOrDefault());
        }
      }
      if (user == null)
      {
        throw new ArgumentOutOfRangeException("User not found and not created");
      }
      userDto.PasswordHash = passwordHash;
      RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto));
    }

    public ApplicationUserDto FindByEmail(string normalizedEmail)
    {
      var user = RepUsers.Read(r => r.Email == normalizedEmail).SingleOrDefault();
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public string GetEmail(ApplicationUserDto user)
    {
      return FindUserById(user.Id).Email;
    }

    public bool GetEmailConfirmed(ApplicationUserDto user)
    {
      // TODO: Implement
      return true;
    }

    public string GetNormalizedEmail(ApplicationUserDto user)
    {
      return FindUserById(user.Id).Email;
    }

    public void SetEmail(ApplicationUserDto userDto, string email)
    {
      var user = FindUserById(userDto.Id);
      user.Email = email;
      RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(user));
    }

    public void SetEmailConfirmed(ApplicationUserDto user, bool confirmed)
    {
      // TODO
    }

    public void SetNormalizedEmail(ApplicationUserDto userDto, string normalizedEmail)
    {
      var user = FindUserById(userDto.Id);
      user.Email = normalizedEmail;
      RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(user));
    }

    #region Claims

    public void AddClaims(ApplicationUserDto userDto, IEnumerable<ClaimDto> claims) {
      var user = mapper.Map<ApplicationUser>(FindUserById(userDto.Id));
      var userClaims = new List<UserClaim>();
      foreach (var claim in claims) {
        var userClaim = new UserClaim {
          ClaimType = claim.Type,
          ClaimValue = claim.Value,
          UserId = user.Id
        };
        userClaims.Add(userClaim);
      }
      // This is transactional
      RepUserClaims.InsertOrUpdate(userClaims);
    }

    public IEnumerable<ClaimDto> GetClaims(ApplicationUserDto userDto) {
      var user = mapper.Map<ApplicationUser>(FindUserById(userDto.Id));
      var id = user.Id;
      var claims = RepUserClaims.Read(c => c.UserId == id);
      return mapper.Map<IEnumerable<ClaimDto>>(claims);
    }

    public void ReplaceClaim(ApplicationUserDto user, ClaimDto claim, ClaimDto newClaim) {
      throw new NotImplementedException();
    }

    public void RemoveClaims(ApplicationUserDto user, IEnumerable<ClaimDto> claims) {
      throw new NotImplementedException();
    }

    #endregion

  }
}
