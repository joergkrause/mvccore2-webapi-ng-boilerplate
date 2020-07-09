using JoergIsAGeek.Workshop.Enterprise.DomainModels.Attributes;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.IdentityModels {
  public class IdentityUserEx : IdentityUser {

    [Encrypt]
    public override string UserName { get => base.UserName; set => base.UserName = value; }
  }
}
