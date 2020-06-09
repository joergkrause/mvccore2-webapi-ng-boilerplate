using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  public partial class AuthenticationManager : Manager, IAuthenticationManager {

    public AuthenticationManager(
      AuthenticationDataContext context, 
      IUserContextProvider userContext,
      IMapper mapper) 
      : base(context, userContext, mapper) {
    }

    private static string GetSecureId() {
      return Guid.NewGuid().ToString("N");
    }

    public IdentityResult CreateUser(ApplicationUserDto userDto) {
      userDto.Id = GetSecureId();
      var user = mapper.Map<IdentityUser>(userDto);
      Context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Added;
      if (SaveChanges() == 1) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public IdentityResult DeleteUser(string id) {
      var user = new IdentityUser { Id = id };
      Context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
      if (SaveChanges() == 1) {
        return IdentityResult.Success;
      } else {
        return IdentityResult.Failed();
      }
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
      var csUser = FindUserById(userDto.Id);
      csUser.UserName = userDto.UserName;
      csUser.Email = userDto.Email;
      csUser.EmailConfirmed = userDto.EmailConfirmed;
      csUser.PasswordHash = userDto.PasswordHash;
      csUser.Phone = userDto.Phone;
      if (SaveChanges() == 1) {
        return IdentityResult.Success;
      }
      else {
        return IdentityResult.Failed();
      }
    }

    public bool HasPassword(string id) {
      return !String.IsNullOrEmpty(SafeFindUserById(id)?.PasswordHash);
    }

    public string GetPasswordHash(string id) {
      return SafeFindUserById(id)?.PasswordHash;
    }

    public string GetUserDtoName(string id) {
      return SafeFindUserById(id)?.UserName;
    }

    public ApplicationUserDto FindByEmail(string normalizedEmail) {
      var user = Context.Set<IdentityUser>().Where(r => r.Email == normalizedEmail).SingleOrDefault();
      return user == null ? null : mapper.Map<ApplicationUserDto>(user);
    }

    public bool GetEmailConfirmed(string id) {
      return SafeFindUserById(id)?.EmailConfirmed ?? false;
    }

    public string GetNormalizedEmail(ApplicationUserDto user) {
      return FindUserById(user.Id)?.Email;
    }

    public void SetEmail(string userId, string email) {
      var user = FindUserById(userId);
      user.Email = email;
      UpdateUser(user);
    }

    public void SetEmailConfirmed(string userId, bool confirmed) {
      var user = FindUserById(userId);
      user.EmailConfirmed = confirmed;
      UpdateUser(user);
    }

    public IEnumerable<ApplicationUserDto> GetUsers() {
      return mapper.Map<IEnumerable<ApplicationUserDto>>(Context.Set<IdentityUser>().ToList());
    }

    #region private helpers

    private IdentityUser SafeFindUserById(string userId) {
      var user = Context.Set<IdentityUser>().SingleOrDefault(u => u.Id == userId);
      return user;
    }

    private IdentityUser SafeFindUserByName(string normalizedUserName) {
      var user = Context.Set<IdentityUser>().SingleOrDefault(u => u.NormalizedUserName == normalizedUserName || u.UserName == normalizedUserName);
      return user;
    }


    #endregion

  }
}
