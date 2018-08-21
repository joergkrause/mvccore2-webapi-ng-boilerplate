using System;
using System.Threading;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Models;
using System.Collections.Generic;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{

  /// <summary>
  /// THe store let's Identity use the common functions against our own backend service.
  /// </summary>
  /// <remarks>
  /// See also more on interfaces: https://docs.microsoft.com/de-de/aspnet/identity/overview/extensibility/overview-of-custom-storage-providers-for-aspnet-identity
  /// </remarks>
  internal class CustomUserStore : IUserStore<ApplicationUser>, IUserPasswordStore<ApplicationUser>, IUserEmailStore<ApplicationUser>, IUserClaimStore<ApplicationUser>, IUserRoleStore<ApplicationUser>
  {

    IEnterpriseServiceAPI _authclient;
    IMapper _mapper;

    public CustomUserStore(IEnterpriseServiceAPI authclient, IMapper mapper)
    {
      _authclient = authclient;
      _mapper = mapper;
    }

    public async Task<Microsoft.AspNetCore.Identity.IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      var userDto = _mapper.Map<ApplicationUserDto>(user);
      var result = await _authclient.ApiAuthServiceUserPostAsync(userDto);
      return _mapper.Map<Microsoft.AspNetCore.Identity.IdentityResult>(result);
    }

    public Task<Microsoft.AspNetCore.Identity.IdentityResult> DeleteAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      throw new NotImplementedException();
    }

    public void Dispose()
    {
      //
    }

    public async Task<ApplicationUser> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken)
    {
      var user = await _authclient.ApiAuthServiceUserFindByEmailByNormalizedEmailGetAsync(normalizedEmail, cancellationToken: cancellationToken);
      return _mapper.Map<ApplicationUser>(user);
    }

    public async Task<ApplicationUser> FindByIdAsync(string userId, CancellationToken cancellationToken)
    {
      var result = await _authclient.ApiAuthServiceRoleFindByIdGetAsync(userId, cancellationToken: cancellationToken);
      return _mapper.Map<ApplicationUser>(result);
    }

    public async Task<ApplicationUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
    {
      var result = await _authclient.ApiAuthServiceRoleFindByNameGetAsync(normalizedUserName, cancellationToken: cancellationToken);
      return _mapper.Map<ApplicationUser>(result);
    }

    public async Task<string> GetEmailAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      return await _authclient.ApiAuthServiceUserEmailGetAsync(userName: user.UserName, cancellationToken: cancellationToken);
    }

    public async Task<bool> GetEmailConfirmedAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      var result = await _authclient.ApiAuthServiceUserEmailConfirmedGetAsync(userName: user.UserName, cancellationToken: cancellationToken);
      return result.Value;
    }

    public async Task<string> GetNormalizedEmailAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      return await _authclient.ApiAuthServiceUserNormalizedEmailGetAsync(userName: user.UserName, cancellationToken: cancellationToken);
    }

    public async Task<string> GetNormalizedUserNameAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      var result = await _authclient.ApiAuthServiceUserNormalizedNameGetAsync(userName: user.UserName);
      return result;
    }

    public async Task<string> GetPasswordHashAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      // provide the id only because this is PK in database, it's safer than using the (clear) user name
      return await _authclient.ApiAuthServiceUserPasswordHashGetAsync(id: user.Id);
    }

    public async Task<string> GetUserIdAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      // backend may check or just return the existing id
      return (await _authclient.ApiAuthServiceUserIdGetAsync(id: user.Id, userName: user.UserName, cancellationToken: cancellationToken)).ToString();
    }

    public async Task<string> GetUserNameAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      return await _authclient.ApiAuthServiceUserNameGetAsync(id: user.Id, cancellationToken: cancellationToken);
    }

    public Task<IList<ApplicationUser>> GetUsersForClaimAsync(Claim claim, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public async Task<bool> HasPasswordAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      var userDto = _mapper.Map<ApplicationUserDto>(user);
      var result = await _authclient.ApiAuthServiceUserHasPasswordGetAsync(userDto, cancellationToken);
      return result.Value;
    }

    public async Task SetEmailAsync(ApplicationUser user, string email, CancellationToken cancellationToken)
    {
      await _authclient.ApiAuthServiceUserEmailPutAsync(_mapper.Map<ApplicationUserDto>(user), email, cancellationToken: cancellationToken);
    }

    public async Task SetEmailConfirmedAsync(ApplicationUser user, bool confirmed, CancellationToken cancellationToken)
    {
      await _authclient.ApiAuthServiceUserEmailConfirmedPutAsync(_mapper.Map<ApplicationUserDto>(user), confirmed, cancellationToken: cancellationToken);
    }

    public async Task SetNormalizedEmailAsync(ApplicationUser user, string normalizedEmail, CancellationToken cancellationToken)
    {
      await _authclient.ApiAuthServiceUserNormalizedEmailPutAsync(_mapper.Map<ApplicationUserDto>(user), normalizedEmail, cancellationToken: cancellationToken);
    }

    public async Task SetNormalizedUserNameAsync(ApplicationUser user, string normalizedName, CancellationToken cancellationToken)
    {
      var User = _mapper.Map<ApplicationUserDto>(user);
      await _authclient.ApiAuthServiceUserNormalizedNamePutAsync(User, normalizedName, cancellationToken: cancellationToken);
    }

    public async Task SetPasswordHashAsync(ApplicationUser user, string passwordHash, CancellationToken cancellationToken)
    {
       await _authclient.ApiAuthServiceUserPasswordHashPutAsync(_mapper.Map<ApplicationUserDto>(user), passwordHash, cancellationToken: cancellationToken);
    }

    public async Task SetUserNameAsync(ApplicationUser user, string userName, CancellationToken cancellationToken)
    {
      var userDto = _mapper.Map<ApplicationUserDto>(user);
      await _authclient.ApiAuthServiceUserNamePutAsync(userDto, userName, cancellationToken: cancellationToken);
    }

    public async Task<Microsoft.AspNetCore.Identity.IdentityResult> UpdateAsync(ApplicationUser user, CancellationToken cancellationToken)
    {
      var userDto = _mapper.Map<ApplicationUserDto>(user);
      var result = await _authclient.ApiAuthServiceUserPutAsync(userDto, cancellationToken: cancellationToken);
      return _mapper.Map<Microsoft.AspNetCore.Identity.IdentityResult>(result);
    }

    #region Claims

    public async Task AddClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims, CancellationToken cancellationToken) {
      await _authclient.ApiAuthServiceClaimsPostAsync(id: user.Id, userName: user.UserName, cancellationToken: cancellationToken);
    }
    public async Task<IList<Claim>> GetClaimsAsync(ApplicationUser user, CancellationToken cancellationToken) {
      var result = await _authclient.ApiAuthServiceClaimsGetAsync(id: user.Id, userName: user.UserName, cancellationToken: cancellationToken);
      return _mapper.Map<IList<Claim>>(result);
    }
    public Task RemoveClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }
    #endregion

    #region Roles

    public Task ReplaceClaimAsync(ApplicationUser user, Claim claim, Claim newClaim, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task AddToRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task RemoveFromRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task<bool> IsInRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    public Task<IList<ApplicationUser>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken) {
      throw new NotImplementedException();
    }

    #endregion

  }
}