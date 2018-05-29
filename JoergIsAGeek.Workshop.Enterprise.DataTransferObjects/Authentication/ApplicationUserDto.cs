using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication
{
  /// <summary>
  /// The DTO used to transfer user to front end. Removed the normalization (this is, 
  /// the registering of usernames that only differs in casing). We use a simplified normalization
  /// strategy in the backend instead. That approach makes the DTOs smaller but relais on DB support.
  /// </summary>
  [DataContract(Name = "User")]
  public class ApplicationUserDto
  {
    [DataMember]
    public string Id { get; set; }

    [DataMember(Name = "PwHash")]
    public string PasswordHash { get; set; }

    [DataMember(Name = "EmailConf")]
    public virtual bool EmailConfirmed { get; set; }

    public virtual string Email { get; set; }

    public virtual string UserName { get; set; }

  }
}
