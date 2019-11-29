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

    #region Claims

    public void AddClaims(string userId, IEnumerable<ClaimDto> claims) {
      var userClaims = new List<UserClaim>();
      foreach (var claim in claims) {
        var userClaim = new UserClaim {
          ClaimType = claim.Type,
          ClaimValue = claim.Value,
          UserId = userId
        };
        userClaims.Add(userClaim);
      }
      // This is transactional
      RepUserClaims.InsertOrUpdate(userClaims);
    }

    public IEnumerable<ClaimDto> GetClaims(string userId) {
      var user = mapper.Map<ApplicationUser>(FindUserById(userId));
      var id = user.Id;
      var claims = RepUserClaims.Read(c => c.UserId == id);
      var mappedClaims = mapper.Map<IEnumerable<UserClaim>, IEnumerable<ClaimDto>>(claims);
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
