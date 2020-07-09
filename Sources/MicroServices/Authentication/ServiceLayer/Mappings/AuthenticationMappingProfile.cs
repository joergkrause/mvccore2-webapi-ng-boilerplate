using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Encryption;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.IdentityModels;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Attributes;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Mappings {
  public class AuthenticationMappingProfile : Profile {

    public AuthenticationMappingProfile(IDecryptResolver decryptResolver) {
      // encryption controlling
      CreateMap<IdentityUserEx, IdentityUser>();
      CreateMap<IdentityUser, IdentityUserEx>();
      // regular
      CreateMap<IdentityUser, ApplicationUserDto>()
        .ForMember(u => u.Phone, opt => opt.MapFrom(i => i.PhoneNumber));
      CreateMap<IdentityUserEx, ApplicationUserDto>()
        // each type that needs encryption get's a decrypt call first
        .BeforeMap((u, dto) => decryptResolver.Decrypt<IdentityUserEx>(u))
        .ForMember(u => u.Phone, opt => opt.MapFrom(i => i.PhoneNumber));
      CreateMap<ApplicationUserDto, IdentityUser>()
        .ForMember(i => i.PhoneNumber, opt => opt.MapFrom(u => u.Phone));
      CreateMap<ApplicationUserDto, IdentityUserEx>()
        .ForMember(i => i.PhoneNumber, opt => opt.MapFrom(u => u.Phone));
      CreateMap<IdentityRole, ApplicationIdentityRoleDto>()
        .ForMember(a => a.Name, opt => opt.MapFrom(i => i.Name))
        .ForMember(a => a.Id, opt => opt.MapFrom(i => i.Id));
      CreateMap<ApplicationIdentityRoleDto, IdentityRole>()
        .ForMember(i => i.Name, opt => opt.MapFrom(a => a.Name))
        .ForMember(i => i.Id, opt => opt.MapFrom(a => a.Id))
        .ForMember(i => i.NormalizedName, opt => opt.Ignore());
      CreateMap<ClaimDto, IdentityUserClaim<string>>();
      CreateMap<IdentityUserClaim<string>, ClaimDto>();
    }

    //void Decrypt<T>(T model) where T : class {
    //  var key = this.configuration.GetSection("Keys").GetValue<string>("Encrypt");
    //  foreach (var property in typeof(T).GetProperties()) {
    //    var toDecrypt = property.GetCustomAttributes(true).OfType<EncryptAttribute>().Any();
    //    if (!toDecrypt) {
    //      continue;
    //    }
    //    var val = property.GetValue(model)?.ToString();
    //    if (val != null) {
    //      property.SetValue(model, AesOperation.DecryptString("b14ca5898a4e4133bbce2ea2315a1916", val));
    //    }
    //  }
    //}

  }
}
