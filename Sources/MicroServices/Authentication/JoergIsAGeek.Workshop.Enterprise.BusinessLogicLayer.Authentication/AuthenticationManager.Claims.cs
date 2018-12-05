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
      var mappedClaims = mapper.Map<IEnumerable<UserClaim>, IEnumerable<ClaimDto>>(claims);
      return mappedClaims;
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
