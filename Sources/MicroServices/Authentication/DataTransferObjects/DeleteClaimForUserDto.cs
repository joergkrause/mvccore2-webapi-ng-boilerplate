using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication {
  public class DeleteClaimForUserDto : ClaimDto
  {

    public string UserId { get; set; }
    
  }
}
