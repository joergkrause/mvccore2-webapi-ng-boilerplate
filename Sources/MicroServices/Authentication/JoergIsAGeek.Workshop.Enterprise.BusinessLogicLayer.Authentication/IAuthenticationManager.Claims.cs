using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public partial interface IAuthenticationManager
  {

    void AddClaims(string userId, IEnumerable<ClaimDto> claims);
    IEnumerable<ClaimDto> GetClaims(string userId);
    void ReplaceClaim(string userId, ClaimDto claim, ClaimDto newClaim);
    void RemoveClaims(string userId, IEnumerable<ClaimDto> claims);
  }
}
