using System.ComponentModel.DataAnnotations;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels {

  public class DataValue : EntityBase {

    [Range(0, 100000)]
    public double Value { get; set; }

    [StringLength(10)] // new StringLengthAttribute(10)
    public string Unit { get; set; }

    public override string ToString() => $"{Value}{Unit}";


  }
}