using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication
{
  public class RegistrationViewModel
  {
    [Required]
    [EmailAddress]
    [StringLength(200)]
    public string Email { get; set; }
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    [Required]
    [StringLength(80)]
    public string FirstName { get; set; }
    [Required]
    [StringLength(80)]
    public string LastName { get; set; }
    
    [Phone]
    [StringLength(80)]
    public string Phone { get; set; }
  }
}
