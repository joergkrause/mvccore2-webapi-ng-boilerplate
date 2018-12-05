using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects {

  [DataContract]
  public class DataValueDto {

    [DataMember]
    public double Value { get; set; }

    [DataMember]
    public string Unit { get; set; }


  }
}