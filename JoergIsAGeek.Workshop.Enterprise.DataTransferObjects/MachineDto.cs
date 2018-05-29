using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects
{

  [DataContract]
  public class MachineDto
  {

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
