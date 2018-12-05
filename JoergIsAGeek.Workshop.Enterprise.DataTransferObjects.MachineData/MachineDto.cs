using System.Runtime.Serialization;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects {

  [DataContract]
  public class MachineDto {

    [DataMember]
    public int Id { get; set; }

    [DataMember]
    public string Name { get; set; }

    [DataMember]
    public string Location { get; set; }

    [DataMember]
    public bool HasDevices { get; set; }

  }
}
