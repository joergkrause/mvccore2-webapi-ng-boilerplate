using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {
  public class LogonViewModel {
    [StringLength(200)]
    [Required]
    public string UserName { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
  }
}
