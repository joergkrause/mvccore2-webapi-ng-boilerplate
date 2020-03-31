using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  public partial class AuthenticationManager : Manager, IAuthenticationManager {

    public AuthenticationManager(IServiceProvider service) : base(service) {
      var mapperConfiguration = new MapperConfiguration(configure => {
        configure.CreateMap<IdentityUser, ApplicationUserDto>();
        configure.CreateMap<ApplicationUserDto, IdentityUser>();
        configure.CreateMap<IdentityRole, ApplicationIdentityRoleDto>()
          .ForMember(a => a.Name, opt => opt.MapFrom(i => i.Name))
          .ForMember(a => a.Id, opt => opt.MapFrom(i => i.Id));
        configure.CreateMap<ApplicationIdentityRoleDto, IdentityRole>()
          .ForMember(i => i.Name, opt => opt.MapFrom(a => a.Name))
          .ForMember(i => i.Id, opt => opt.MapFrom(a => a.Id))
          .ForMember(i => i.NormalizedName, opt => opt.Ignore())
          .ForMember(i => i.ConcurrencyStamp, opt => opt.Ignore());
        configure.CreateMap<ClaimDto, IdentityUserClaim<string>>();
        configure.CreateMap<IdentityUserClaim<string>, ClaimDto>();
      });
      mapper = mapperConfiguration.CreateMapper();
    }

    private static string GetSecureId() {
      return Guid.NewGuid().ToString("N");
    }

    public IdentityResult CreateRole(ApplicationIdentityRoleDto roleDto) {
      roleDto.Id = GetSecureId();
      if (RepRoles.Insert(mapper.Map<IdentityRole>(roleDto))) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public IdentityResult CreateUser(ApplicationUserDto userDto) {
      userDto.Id = GetSecureId();
      if (RepUsers.Insert(mapper.Map<IdentityUser>(userDto))) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public IdentityResult DeleteRole(string roleId) {
      if (RepRoles.Delete(new IdentityRole { Id = roleId })) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public ApplicationIdentityRoleDto FindRoleById(string roleId) {
      var role = RepRoles.Read(r => r.Id == roleId).SingleOrDefault();
      return role != null ? mapper.Map<ApplicationIdentityRoleDto>(role) : null;
    }

    public ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName) {
      var role = RepRoles.Read(r => r.Name == normalizedRoleName).SingleOrDefault();
      return role == null ? null : mapper.Map<ApplicationIdentityRoleDto>(role);
    }

    public ApplicationUserDto FindUserById(string userId) {
      var user = SafeFindUserById(userId);
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public ApplicationUserDto FindUserByName(string normalizedUserName) {
      var user = SafeFindUserByName(normalizedUserName);
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public IdentityResult UpdateUser(ApplicationUserDto userDto) {
      if (RepUsers.Update(mapper.Map<IdentityUser>(userDto))) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public string GetPasswordHash(ApplicationUserDto userDto) {
      return RepUsers.Read(u => u.Id == userDto.Id).SingleOrDefault()?.PasswordHash;
    }

    public bool HasPassword(ApplicationUserDto userDto) {
      return !String.IsNullOrEmpty(RepUsers.Read(u => u.Id == userDto.Id).SingleOrDefault()?.PasswordHash);
    }

    public void SetPasswordHash(ApplicationUserDto userDto, string passwordHash) {
      var user = FindUserById(userDto.Id);
      if (user == null) {
        if (RepUsers.Update(mapper.Map<IdentityUser>(userDto))) {
          userDto = mapper.Map<ApplicationUserDto>(RepUsers.Read(u => u.Email == userDto.Email).FirstOrDefault());
        }
      }
      if (user == null) {
        throw new ArgumentOutOfRangeException("User not found and not created");
      }
      userDto.PasswordHash = passwordHash;
      RepUsers.Update(mapper.Map<IdentityUser>(userDto));
    }

    public ApplicationUserDto FindByEmail(string normalizedEmail) {
      var user = RepUsers.Read(r => r.Email == normalizedEmail).SingleOrDefault();
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public string GetEmail(ApplicationUserDto user) {
      return FindUserById(user.Id).Email;
    }

    public bool GetEmailConfirmed(ApplicationUserDto user) {
      // TODO: Implement
      return true;
    }

    public string GetNormalizedEmail(ApplicationUserDto user) {
      return FindUserById(user.Id).Email;
    }

    public void SetEmail(ApplicationUserDto userDto, string email) {
      var user = FindUserById(userDto.Id);
      user.Email = email;
      RepUsers.Update(mapper.Map<IdentityUser>(user));
    }

    public void SetEmailConfirmed(ApplicationUserDto userDto, bool confirmed) {
      var user = mapper.Map<IdentityUser>(FindUserById(userDto.Id));
      user.EmailConfirmed = confirmed;
      RepUsers.Update(user);
    }

    public void SetNormalizedEmail(ApplicationUserDto userDto, string normalizedEmail) {
      var user = mapper.Map<IdentityUser>(FindUserById(userDto.Id));
      user.NormalizedEmail = normalizedEmail;
      RepUsers.Update(mapper.Map<IdentityUser>(user));
    }

    public void SetNormalizedUserName(ApplicationUserDto userDto, string normalizedName) {
      var user = mapper.Map<IdentityUser>(FindUserById(userDto.Id));
      user.NormalizedUserName = normalizedName;
      RepUsers.Update(user);
    }
    public void SetUserDtoName(ApplicationUserDto userDto, string userName) {
      var user = SafeFindUser(userDto); 
      user.UserName = userName;
      RepUsers.Update(user);
    }

    public IEnumerable<ApplicationUserDto> GetUsers() {
      return mapper.Map<IEnumerable<ApplicationUserDto>>(RepUsers.Read(r => true));
    }

    #region private helpers

    private IdentityUser SafeFindUser(ApplicationUserDto userDto) {
      var userObj = FindUserById(userDto.Id);
      if (userObj == null) {
        userObj = FindUserByName(userDto.UserName);
        if (userObj == null) {
          throw new ArgumentOutOfRangeException("Id");
        }
      }
      var user = mapper.Map<IdentityUser>(userObj);
      return user;
    }

    private IdentityUser SafeFindUserById(string userId) {
      var user = RepUsers.Read(u => u.Id == userId).SingleOrDefault();
      return user;
    }

    private IdentityUser SafeFindUserByName(string normalizedUserName) {
      var user = RepUsers.Read(u => u.NormalizedUserName == normalizedUserName || u.UserName == normalizedUserName).SingleOrDefault();
      return user;
    }


    #endregion

  }
}
