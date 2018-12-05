using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {
  public class ClaimViewModel {

    [Required]
    [StringLength(128)]
    public string Type { get; set; }

    [StringLength(512)]
    public string Value { get; set; }

  }
}
