using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MachineServiceReference;
using System.Collections;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Globalization;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels;
using Microsoft.AspNetCore.Authorization;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers {


  [Authorize(Policy = "ApiUser")]
  [Route("api/[controller]")]
  public class DataController : Controller {

    IHostingEnvironment env;

    public DataController(IHostingEnvironment env) {
      this.env = env;
    }

    // GET api/machines
    [HttpGet]
    public IEnumerable<ChartDataViewModel> Get() {

      var data = System.IO.File.ReadAllLines(Path.Combine(env.WebRootPath, "Data/data.txt"));
      var result = new List<ChartDataViewModel>();
      foreach (var item in data) {
        var raw = item.Split('\t');
        var x = Int32.Parse(raw[0]);
        var y = Int32.Parse(raw[1]);
        var v = Double.Parse(raw[2], new CultureInfo("en-US"));
        result.Add(new ChartDataViewModel { X = x, Y = y, Value = v });
      }

      return result;
    }

  }
}
