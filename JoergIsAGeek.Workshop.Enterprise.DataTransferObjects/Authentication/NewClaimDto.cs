using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication {

  /// <summary>
  /// A special transfer object that overcomes parameter limitations in Open API.
  /// </summary>
  public class NewClaimDto {

    public string Type { get; set; }

    public string Value { get; set; }

    public string NewType { get; set; }

    public string NewValue { get; set; }
  }
}
