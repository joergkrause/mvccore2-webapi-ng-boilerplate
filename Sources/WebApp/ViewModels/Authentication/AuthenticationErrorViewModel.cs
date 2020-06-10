using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {
  public class AuthenticationErrorViewModel {

    public static AuthenticationErrorViewModel Init(ModelStateDictionary state) {
      var instance = new AuthenticationErrorViewModel();
      var errors = state.Values.SelectMany(e => e.Errors);
      instance.Errors = errors.Select(e => e.ErrorMessage);
      return instance;
    }

    private IEnumerable<string> _errors;

    public int ErrorCount { get; set; }

    public IEnumerable<string> Errors {
      get { 
        return _errors; 
      }
      set {
        ErrorCount = value?.Count() ?? 0; 
        _errors = value;
      }
    }

  }
}
