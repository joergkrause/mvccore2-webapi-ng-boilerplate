using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels {
  public class MachineViewModel : BaseViewModel {
    public string Name { get; set; }

    public string Location { get; set; }

    public bool HasDevices { get; set; }
  }
}
