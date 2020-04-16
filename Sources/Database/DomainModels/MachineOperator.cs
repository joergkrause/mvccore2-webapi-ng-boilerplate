using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels
{
  public partial class MachineOperator : AuditableEntityBase, IHistoryTracking
  {
    [Required]
    public string UserId { get; set; }

    [Required]
    public ICollection<Machine> OperatedMachines { get; set; } = new HashSet<Machine>();

  }

}
