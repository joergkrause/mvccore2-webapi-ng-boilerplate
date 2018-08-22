using System.Runtime.Serialization;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels {

  [DataContract]
  public class ChartDataViewModel {

    [DataMember(Name = "x")]
    public int X { get; set; }

    [DataMember(Name = "y")]
    public int Y { get; set; }

    [DataMember(Name = "v")]
    public double Value { get; set; }
  }
}
