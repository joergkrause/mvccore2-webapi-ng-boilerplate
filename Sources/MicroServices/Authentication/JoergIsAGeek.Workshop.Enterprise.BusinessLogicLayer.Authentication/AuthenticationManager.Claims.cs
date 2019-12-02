﻿using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public partial class AuthenticationManager : Manager, IAuthenticationManager
  {

    #region Claims

    public void AddClaims(string userId, IEnumerable<ClaimDto> claims) {
      var userClaims = new List<IdentityUserClaim<string>>();
      foreach (var claim in claims) {
        var userClaim = new IdentityUserClaim<string>
        {
          ClaimType = claim.ClaimType,
          ClaimValue = claim.ClaimValue,
          UserId = userId
        };
        userClaims.Add(userClaim);
      }
      // This is transactional
      RepUserClaims.Insert(userClaims);
    }

    public IEnumerable<ClaimDto> GetClaims(string userId) {
      var user = mapper.Map<IdentityUser>(FindUserById(userId));
      var id = user.Id;
      var claims = RepUserClaims.Read(c => c.UserId == id);
      var mappedClaims = mapper.Map<IEnumerable<IdentityUserClaim<string>>, IEnumerable<ClaimDto>>(claims);
      return mappedClaims;
    }

    public void ReplaceClaim(string userId, ClaimDto claim, ClaimDto newClaim) {
      throw new NotImplementedException();
    }

    public void RemoveClaims(string userId, IEnumerable<ClaimDto> claims) {
      throw new NotImplementedException();
    }

    #endregion

  }
}
