using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Encryption;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.IdentityModels;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Attributes;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Mappings {
  public class DecryptResolver : IDecryptResolver {

    private readonly IConfiguration configuration;

    public DecryptResolver(IConfiguration configuration) {
      this.configuration = configuration;
    }

    public void Decrypt<TS>(TS model) where TS : class {
      var key = this.configuration.GetSection("Keys").GetValue<string>("Encrypt");
      foreach (var property in typeof(TS).GetProperties()) {
        var toDecrypt = property.GetCustomAttributes(true).OfType<EncryptAttribute>().Any();
        if (!toDecrypt) {
          continue;
        }
        var val = property.GetValue(model)?.ToString();
        if (val != null) { // "b14ca5898a4e4133bbce2ea2315a1916"
          property.SetValue(model, AesOperation.DecryptString(key, val));
        }
      }
    }

  }
}
