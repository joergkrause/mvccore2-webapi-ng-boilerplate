﻿using System;
using System.Threading;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using System.Collections.Generic;
using System.Security.Claims;
using JoergIsAGeek.ServiceProxy.Authentication;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{

  /// <summary>
  /// THe store let's Identity use the common functions against our own backend service.
  /// </summary>
  /// <remarks>
  /// See also more on interfaces: https://docs.microsoft.com/de-de/aspnet/identity/overview/extensibility/overview-of-custom-storage-providers-for-aspnet-identity
  /// </remarks>
  public class CustomUserStore : IUserStore<UserViewModel>, IUserPasswordStore<UserViewModel>, IUserEmailStore<UserViewModel>, IUserClaimStore<UserViewModel>, IUserRoleStore<UserViewModel>
  {

    private readonly AuthenticationServiceClient authclient;
    private readonly IMapper mapper;
    private readonly ILogger logger;

    public CustomUserStore(AuthenticationServiceClient authclient, IMapper mapper) //, ILogger logger)
    {
      this.authclient = authclient;
      this.mapper = mapper;
      // this.logger = logger;
 //     this.logger.LogDebug(@"CTOR {nameof(CustomUserStore)}");
    }

    public async Task<Microsoft.AspNetCore.Identity.IdentityResult> CreateAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      var userDto = mapper.Map<ApplicationUserDto>(user);
      var result = await authclient.CreateUserAsync(userDto);
      return mapper.Map<Microsoft.AspNetCore.Identity.IdentityResult>(result);
    }

    public Task<Microsoft.AspNetCore.Identity.IdentityResult> DeleteAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      throw new NotImplementedException();
    }

    public void Dispose()
    {
      //
    }

    public async Task<UserViewModel> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken)
    {
      var user = await authclient.FindByEmailAsync(normalizedEmail, cancellationToken: cancellationToken);
      return mapper.Map<UserViewModel>(user);
    }

    public async Task<UserViewModel> FindByIdAsync(string userId, CancellationToken cancellationToken)
    {
      var result = await authclient.FindUserByIdAsync(userId, cancellationToken: cancellationToken);
      return mapper.Map<UserViewModel>(result);
    }

    public async Task<UserViewModel> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
    {
      var result = await authclient.FindUserByNameAsync(normalizedUserName, cancellationToken: cancellationToken);
      return mapper.Map<UserViewModel>(result);
    }

    public async Task<string> GetEmailAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      return await Task.FromResult(user.Email);
    }

    public async Task<bool> GetEmailConfirmedAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      return await authclient.GetEmailConfirmedAsync(user.Id, cancellationToken);
    }

    public async Task<string> GetNormalizedEmailAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      return await Task.FromResult(user.Email);
    }

    public async Task<string> GetNormalizedUserNameAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      return await Task.FromResult(user.UserName);
    }

    public async Task<string> GetPasswordHashAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      if (!String.IsNullOrEmpty(user.PasswordHash)) {
        return await Task.FromResult(user.PasswordHash);
      }
      return await authclient.GetPasswordHashAsync(user.Id, cancellationToken);
    }

    public async Task<string> GetUserIdAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      return await Task.FromResult(user.Id);
    }

    public async Task<string> GetUserNameAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      return await Task.FromResult(user.UserName);
    }

    public Task<IList<UserViewModel>> GetUsersForClaimAsync(Claim claim, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public async Task<bool> HasPasswordAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      try
      {        
        return await authclient.HasPasswordAsync(user.Id, cancellationToken);
      }
      catch (Exception)
      {
        return false;
      }      
    }

    public async Task SetEmailAsync(UserViewModel user, string email, CancellationToken cancellationToken)
    {
      await authclient.SetEmailAsync(email, mapper.Map<ApplicationUserDto>(user), cancellationToken);
    }

    public async Task SetEmailConfirmedAsync(UserViewModel user, bool confirmed, CancellationToken cancellationToken)
    {
      await authclient.SetEmailConfirmedAsync(confirmed, mapper.Map<ApplicationUserDto>(user), cancellationToken);
    }

    public async Task SetNormalizedEmailAsync(UserViewModel user, string normalizedEmail, CancellationToken cancellationToken)
    {
      user.Email = normalizedEmail;
      await Task.FromResult(0);
    }

    public async Task SetNormalizedUserNameAsync(UserViewModel user, string normalizedName, CancellationToken cancellationToken)
    {
      user.UserName = normalizedName;
      await Task.FromResult(0);
    }

    public async Task SetPasswordHashAsync(UserViewModel user, string passwordHash, CancellationToken cancellationToken) {
      user.PasswordHash = passwordHash;
      await Task.FromResult(0);
    }

    public async Task SetUserNameAsync(UserViewModel user, string userName, CancellationToken cancellationToken)
    {
      user.UserName = userName;
      await Task.FromResult(0);
    }

    public async Task<Microsoft.AspNetCore.Identity.IdentityResult> UpdateAsync(UserViewModel user, CancellationToken cancellationToken)
    {
      var userDto = mapper.Map<ApplicationUserDto>(user);
      var result = await authclient.UpdateUserAsync(userDto, cancellationToken);
      return mapper.Map<Microsoft.AspNetCore.Identity.IdentityResult>(result);
    }

    #region Claims

    public async Task AddClaimsAsync(UserViewModel user, IEnumerable<Claim> claims, CancellationToken cancellationToken) {
      var claimDto = mapper.Map<IEnumerable<ClaimDto>>(claims);
      await authclient.AddClaimsAsync(user.Id, claimDto, cancellationToken: cancellationToken);
    }
    public async Task<IList<Claim>> GetClaimsAsync(UserViewModel user, CancellationToken cancellationToken) {
      var result = await authclient.GetClaimsAsync(user.Id, cancellationToken: cancellationToken);
      return mapper.Map<IList<Claim>>(result);
    }
    public Task RemoveClaimsAsync(UserViewModel user, IEnumerable<Claim> claims, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }
    #endregion

    #region Roles

    public Task ReplaceClaimAsync(UserViewModel user, Claim claim, Claim newClaim, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task AddToRoleAsync(UserViewModel user, string roleName, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task RemoveFromRoleAsync(UserViewModel user, string roleName, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public async Task<IList<string>> GetRolesAsync(UserViewModel user, CancellationToken cancellationToken) {
      var result = await authclient.GetForUserRolesAsync(user.Id, cancellationToken);
      return result.ToList();
    }

    public async Task<bool> IsInRoleAsync(UserViewModel user, string roleName, CancellationToken cancellationToken) {
      var result = await authclient.IsInRoleAsync(user.Id, roleName, cancellationToken);
      return result;
    }

    public async Task<IList<UserViewModel>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken) {
      var result = await authclient.GetUsersInRoleAsync(roleName, cancellationToken);
      return mapper.Map<IList<UserViewModel>>(result);
    }

    #endregion

  }
}