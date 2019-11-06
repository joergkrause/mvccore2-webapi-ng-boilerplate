using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication
{
  public class ClaimViewModel {

    [Required]
    [StringLength(128)]
    public string Type { get; set; }

    [StringLength(512)]
    public string Value { get; set; }

  }
}
