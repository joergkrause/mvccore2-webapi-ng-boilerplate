using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication
{
  /// <summary>
  /// An enhanced role object based on Identity.
  /// </summary>
  public class ApplicationRole : IdentityRole, IEntityBase<string>, IAuditableEntityBase
  {
    public DateTime CreatedAt { get; set; }

    public DateTime ModifiedAt { get; set; }

    [Required, StringLength(100)]
    public string CreatedBy { get; set; }

    [StringLength(100)]
    public string ModifiedBy { get; set; }

  }
}
