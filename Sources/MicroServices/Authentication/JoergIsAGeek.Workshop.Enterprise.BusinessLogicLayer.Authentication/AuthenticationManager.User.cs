﻿using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  public partial class AuthenticationManager : Manager, IAuthenticationManager {

    public AuthenticationManager(IServiceProvider service) : base(service) {
      var mapperConfiguration = new MapperConfiguration(configure => {
        configure.CreateMap<ApplicationUser, ApplicationUserDto>();
        configure.CreateMap<ApplicationUserDto, ApplicationUser>();
        configure.CreateMap<ApplicationRole, ApplicationIdentityRoleDto>()
          .ForMember(a => a.Name, opt => opt.MapFrom(i => i.Name))
          .ForMember(a => a.Id, opt => opt.MapFrom(i => i.Id));
        configure.CreateMap<ApplicationIdentityRoleDto, ApplicationRole>()
          .ForMember(i => i.Name, opt => opt.MapFrom(a => a.Name))
          .ForMember(i => i.Id, opt => opt.MapFrom(a => a.Id))
          .ForMember(i => i.CreatedAt, opt => opt.Ignore())
          .ForMember(i => i.CreatedBy, opt => opt.Ignore())
          .ForMember(i => i.ModifiedAt, opt => opt.Ignore())
          .ForMember(i => i.ModifiedBy, opt => opt.Ignore())
          .ForMember(i => i.NormalizedName, opt => opt.Ignore())
          .ForMember(i => i.ConcurrencyStamp, opt => opt.Ignore());
        configure.CreateMap<ClaimDto, UserClaim>()
          .ForMember(i => i.ClaimType, opt => opt.MapFrom(a => a.Type))
          .ForMember(i => i.ClaimValue, opt => opt.MapFrom(a => a.Value));
        configure.CreateMap<UserClaim, ClaimDto>()
          .ForMember(i => i.Type, opt => opt.MapFrom(a => a.ClaimType))
          .ForMember(i => i.Value, opt => opt.MapFrom(a => a.ClaimValue));
      });
      mapper = mapperConfiguration.CreateMapper();
    }

    private static string GetSecureId() {
      return Guid.NewGuid().ToString("N");
    }

    public IdentityResult CreateRole(ApplicationIdentityRoleDto roleDto) {
      roleDto.Id = GetSecureId();
      if (RepRoles.InsertOrUpdate(mapper.Map<ApplicationRole>(roleDto))) {
        return IdentityResult.GetSucceded();
      }
      else {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult CreateUser(ApplicationUserDto userDto) {
      userDto.Id = GetSecureId();
      if (RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto))) {
        return IdentityResult.GetSucceded();
      }
      else {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult DeleteRole(ApplicationIdentityRoleDto roleDto) {
      if (RepRoles.Delete(mapper.Map<ApplicationRole>(roleDto))) {
        return IdentityResult.GetSucceded();
      }
      else {
        return IdentityResult.GetError();
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
      if (RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto))) {
        return IdentityResult.GetSucceded();
      }
      else {
        return IdentityResult.GetError();
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
        if (RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto))) {
          userDto = mapper.Map<ApplicationUserDto>(RepUsers.Read(u => u.Email == userDto.Email).FirstOrDefault());
        }
      }
      if (user == null) {
        throw new ArgumentOutOfRangeException("User not found and not created");
      }
      userDto.PasswordHash = passwordHash;
      RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(userDto));
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
      RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(user));
    }

    public void SetEmailConfirmed(ApplicationUserDto userDto, bool confirmed) {
      var user = mapper.Map<ApplicationUser>(FindUserById(userDto.Id));
      user.EmailConfirmed = confirmed;
      RepUsers.InsertOrUpdate(user);
    }

    public void SetNormalizedEmail(ApplicationUserDto userDto, string normalizedEmail) {
      var user = mapper.Map<ApplicationUser>(FindUserById(userDto.Id));
      user.NormalizedEmail = normalizedEmail;
      RepUsers.InsertOrUpdate(mapper.Map<ApplicationUser>(user));
    }

    public void SetNormalizedUserName(ApplicationUserDto userDto, string normalizedName) {
      var user = mapper.Map<ApplicationUser>(FindUserById(userDto.Id));
      user.NormalizedUserName = normalizedName;
      RepUsers.InsertOrUpdate(user);
    }
    public void SetUserDtoName(ApplicationUserDto userDto, string userName) {
      var user = SafeFindUser(userDto); 
      user.UserName = userName;
      RepUsers.InsertOrUpdate(user);
    }

    public IEnumerable<ApplicationUserDto> GetUsers() {
      return mapper.Map<IEnumerable<ApplicationUserDto>>(RepUsers.Read(r => true));
    }

    #region private helpers

    private ApplicationUser SafeFindUser(ApplicationUserDto userDto) {
      var userObj = FindUserById(userDto.Id);
      if (userObj == null) {
        userObj = FindUserByName(userDto.UserName);
        if (userObj == null) {
          throw new ArgumentOutOfRangeException("Id");
        }
      }
      var user = mapper.Map<ApplicationUser>(userObj);
      return user;
    }

    private ApplicationUser SafeFindUserById(string userId) {
      var user = RepUsers.Read(u => u.Id == userId).SingleOrDefault();
      return user;
    }

    private ApplicationUser SafeFindUserByName(string normalizedUserName) {
      var user = RepUsers.Read(u => u.NormalizedUserName == normalizedUserName || u.UserName == normalizedUserName).SingleOrDefault();
      return user;
    }


    #endregion

  }
}