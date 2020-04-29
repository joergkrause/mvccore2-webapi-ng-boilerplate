using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication
{
  public class ProviderViewModel
  {

    public string Name { get; set; }

    public string DisplayName { get; set; }

    public Stream Icon { get; set; }
  }
}
