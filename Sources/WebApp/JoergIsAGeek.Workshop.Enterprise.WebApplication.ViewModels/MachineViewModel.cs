using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels {
  public class MachineViewModel : BaseViewModel {

    [Required]
    public string Name { get; set; }

    [StringLength(100)]
    public string Location { get; set; }

    public bool HasDevices { get; set; }
  }
}
