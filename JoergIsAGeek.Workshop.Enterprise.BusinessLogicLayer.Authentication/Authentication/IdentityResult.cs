using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication
{
  public class IdentityResult
  {
    public bool Succeeded { get; private set; }
    public IEnumerable<IdentityError> Errors { get; private set; }

    public static IdentityResult GetSucceded()
    {
      return new IdentityResult { Succeeded = true };
    }

    public static IdentityResult GetError(params IdentityError[] errors)
    {
      return new IdentityResult { Errors = errors };
    }

  }
}
