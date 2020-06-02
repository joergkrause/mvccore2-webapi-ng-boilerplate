using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {
  public class ChangePasswordViewModel {

    [Required]
    public string OldPassword { get; set; }

    [Required]
    [Compare(nameof(NewPasswordRepeat))]
    public string NewPassword { get; set; }

    [Required]
    public string NewPasswordRepeat { get; set; }

  }
}
