using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    [StringLength(200)]
    public string Location { get; set; }
  }
}
