using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels {

  [DataContract]
  public class ChartDataViewModel {

    [DataMember(Name ="x")]
    public int X { get; set; }

    [DataMember(Name = "y")]
    public int Y { get; set; }

    [DataMember(Name = "v")]
    public double Value { get; set; }
  }
}
