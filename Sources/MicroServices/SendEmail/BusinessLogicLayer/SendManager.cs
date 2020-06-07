using System;
using System.Collections.Generic;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {
  public class SendManager : Manager, ISendManager {
    public SendManager(IServiceProvider service) : base(service) {
    }

    public bool SendMail() {
      return true;
    }

  }
}
