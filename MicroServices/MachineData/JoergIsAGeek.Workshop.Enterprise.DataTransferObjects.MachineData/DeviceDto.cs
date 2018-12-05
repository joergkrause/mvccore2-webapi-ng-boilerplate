using System.Collections.Generic;
using System.Runtime.Serialization;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects {

  [DataContract]
  public class DeviceDto
  {

    [DataMember]
    public int Id { get; set; }

    [DataMember]
    public string Name { get; set; }

    [DataMember]
    public bool HasDataValues { get; set; }

  }
}