using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer {
  public class Program {
    public static void Main(string[] args) {
      BuildWebHost(args).Run();
    }

    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseUrls("http://0.0.0.0:5001")
            .UseStartup<Startup>()
            .Build();
  }
}
