using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public partial class AuthenticationManager : Manager, IAuthenticationManager
  {

    #region Claims

    public void AddClaims(string userId, IEnumerable<ClaimDto> claims) {
      foreach (var claim in claims) {
        var userClaim = new IdentityUserClaim<string>
        {
          ClaimType = claim.ClaimType,
          ClaimValue = claim.ClaimValue,
          UserId = userId
        };
        Context.Entry(userClaim).State = Microsoft.EntityFrameworkCore.EntityState.Added;
      }      
      SaveChanges();
    }

    public IEnumerable<ClaimDto> GetClaims(string userId) {
      var claims = Context.Set<IdentityUserClaim<string>>().Where(c => c.UserId == userId);
      var mappedClaims = mapper.Map<IEnumerable<IdentityUserClaim<string>>, IEnumerable<ClaimDto>>(claims);
      return mappedClaims;
    }

    public void ReplaceClaim(string userId, ClaimDto claim, ClaimDto newClaim) {
      var userClaim = Context.Set<IdentityUserClaim<string>>().SingleOrDefault(c => c.ClaimType == claim.ClaimType && c.UserId == userId);
      if (userClaim != null) {
        userClaim.ClaimValue = newClaim.ClaimValue;
        userClaim.ClaimType = newClaim.ClaimType;
        Context.Entry(userClaim).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
      }
      SaveChanges();
    }

    public void RemoveClaims(string userId, IEnumerable<ClaimDto> claims) {
      foreach (var claim in claims) {        
        var userClaim = Context.Set<IdentityUserClaim<string>>().SingleOrDefault(c => c.ClaimType == claim.ClaimType && c.UserId == userId);
        if (userClaim != null) {
          Context.Entry(userClaim).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        }
      }
      SaveChanges();
    }

    #endregion

  }
}
