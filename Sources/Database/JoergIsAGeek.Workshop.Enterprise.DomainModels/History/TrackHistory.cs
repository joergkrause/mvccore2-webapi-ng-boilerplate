using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.History
{
  public class TrackHistory : EntityBase
  {
    public string Column { get; set; }

    public string Table { get; set; }
    public EntityState State { get; set; }
    public string OldValue { get; set; }
    public string NewValue { get; set; }
    public DateTime ActionAt { get; set; }
    public string ActionBy { get; set; }
  }
}
