using System.Collections.Generic;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels {

  public class Device : AuditableEntityBase, IHistoryTracking
  {

    public string Name { get; set; }

    public ICollection<DataValue> DataValues { get; set; } = new HashSet<DataValue>();

  }
}