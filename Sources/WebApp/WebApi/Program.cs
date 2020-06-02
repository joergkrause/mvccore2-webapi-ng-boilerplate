using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{
  public class Program
  {
    public static void Main(string[] args)
    {
      CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder.UseStartup<Startup>();
              webBuilder.ConfigureLogging(logging => {
                logging.ClearProviders();
                logging.AddConsole();
              });
              webBuilder.UseUrls("http://0.0.0.0:5000");
            });
  }
}
