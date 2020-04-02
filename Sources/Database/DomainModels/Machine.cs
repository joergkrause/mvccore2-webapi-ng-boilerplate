using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels
{
  public partial class Machine : AuditableEntityBase, IHistoryTracking
  {
    public string Name { get; set; }

    [RegularExpression(@"[A-Z]-\d{3}")] //B-100,C-123
    public string Location { get; set; }

    public ICollection<Device> Devices { get; set; } = new HashSet<Device>();

    public bool IsInLocation(char location) {
      return Location?[0] == location;
    }

    public string PropertyBag { get; set; }

    [NotMapped]
    public MachineProps Properties { get {
        return new MachineProps();
      }
      set {
      }
    }

  }

  public class MachineProps
  {
    public int InnerId { get; set; }
  }
}
