using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels {
  public class Machine : AuditableEntityBase
  {


    public string Name { get; set; }

    [RegularExpression(@"[A-Z]-\d{3}")] //B-100,C-123
    public string Location { get; set; }

    public ICollection<Device> Devices { get; set; } = new HashSet<Device>();

    public bool IsInLocation(char location) {
      return Location?[0] == location;
    }

  }
}
