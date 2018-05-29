using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication
{
  public class ApplicationUser : IdentityUser, IEntityBase<string>
  {
    [Column(TypeName = "datetime2")]
    public DateTime CreatedAt { get; set; }

    [Column(TypeName = "datetime2")]
    public DateTime ModifiedAt { get; set; }

    [Required, StringLength(100)]
    public string CreatedBy { get; set; }

    [StringLength(100)]
    public string ModifiedBy { get; set; }

    /// <summary>
    /// Navigation property for the claims this user possesses.
    /// </summary>
    public virtual ICollection<IdentityUserClaim<string>> Claims { get; } = new HashSet<IdentityUserClaim<string>>();

    /// <summary>
    /// Navigation property for this users login accounts.
    /// </summary>
    public virtual ICollection<IdentityUserLogin<string>> Logins { get; } = new HashSet<IdentityUserLogin<string>>();


  }
}
