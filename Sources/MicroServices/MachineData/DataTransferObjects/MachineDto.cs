using System;
using System.Runtime.Serialization;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects {

  [DataContract]
  public class MachineDto {

    [DataMember]
    public int Id { get; set; }

    [DataMember]
    public string Name { get; set; }

    [DataMember(Name = "loc")]
    public string Location { get; set; }

    [DataMember]
    public DateTime? StartOperation { get; set; }

    [DataMember(Name = "hd")]
    public bool HasDevices { get; set; }

  }
}
