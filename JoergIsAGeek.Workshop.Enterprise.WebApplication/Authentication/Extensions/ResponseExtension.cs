using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Authentication.Extensions
{
    public static class ResponseExtension
    {
      public static void AddApplicationError(this HttpResponse response, string message)
      {
        response.Headers.Add("Application-Error", message);
        // CORS
        response.Headers.Add("access-control-expose-headers", "Application-Error");
      }
  }
}
