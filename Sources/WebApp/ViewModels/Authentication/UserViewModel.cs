using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {
  /// <summary>
  /// The model used to manage the UI. For transfer look at services' DTO's.
  /// </summary>
  public class UserViewModel {
    
    // [Required]
    public string Id { get; set; }

    [Required]
    [EmailAddress]
    [StringLength(200)]
    public string Email { get; set; }
    
    [StringLength(512)]
    public string PasswordHash { get; set; }
    
    [StringLength(80)]
    public string UserName { get; set; }

  }
}
