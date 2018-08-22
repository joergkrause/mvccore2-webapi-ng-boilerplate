using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {

  /// <summary>
  /// The model used to manage the UI. For transfer look at services' DTO's.
  /// </summary>
  public class ApplicationIdentityRole {

    [Required]
    public string Id { get; set; }
    [Required]
    [StringLength(100)]
    public string Name { get; set; }


  }
}
