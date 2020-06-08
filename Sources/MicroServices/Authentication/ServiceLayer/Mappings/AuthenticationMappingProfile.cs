using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Mappings {
  public class AuthenticationMappingProfile : Profile {
    public AuthenticationMappingProfile() {
      CreateMap<IdentityUser, ApplicationUserDto>()
        .ForMember(u => u.Phone, opt => opt.MapFrom(i => i.PhoneNumber));
      CreateMap<ApplicationUserDto, IdentityUser>()
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
  }
}
