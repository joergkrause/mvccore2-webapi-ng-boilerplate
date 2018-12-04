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

    void AddClaims(ApplicationUserDto user, IEnumerable<ClaimDto> claims);
    IEnumerable<ClaimDto> GetClaims(ApplicationUserDto user);
    void ReplaceClaim(ApplicationUserDto user, ClaimDto claim, ClaimDto newClaim);
    void RemoveClaims(ApplicationUserDto user, IEnumerable<ClaimDto> claims);
  }
}
