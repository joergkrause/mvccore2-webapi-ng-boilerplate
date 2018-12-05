using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication
{
  [DataContract(Name = "Role")]
  public class ApplicationIdentityRoleDto
  {
    [DataMember]
    public string Id { get; set; }

    [DataMember]
    public string Name { get; set; }
  }
}
