using System;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication
{
  public class ApplicationUser
  {
    public string Id { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string UserName { get; set; }

  }
}
