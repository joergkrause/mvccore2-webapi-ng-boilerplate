using AutoMapper;
using JoergIsAGeek.ServiceProxy.Authentication;
using JoergIsAGeek.ServiceProxy.MachineData;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using AspIdentityResult = Microsoft.AspNetCore.Identity.IdentityResult;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings {
  /// <summary>
  /// Global mapper profile, called from startup when the mapper is being registered in the DI container.
  /// </summary>
  public class ViewModelToDtoMappingProfile : Profile {
    public ViewModelToDtoMappingProfile() {
      # region Auth
      // Map the viewmodels used in angular to the store models
      CreateMap<RegistrationViewModel, UserViewModel>()
        .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
      // Map the store models to the backend DTOs
      // The name differences is mostly because of the modifications made by the [DataMember] attributes
      // It shows, that shorten of names can save bandwidth between app server and WFE
      CreateMap<UserViewModel, ApplicationUserDto>()
        .ForMember(au => au.PasswordHash, map => map.MapFrom(vm => vm.PasswordHash))
        .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.UserName))
        .ForMember(au => au.Email, map => map.MapFrom(vm => vm.Email));
      CreateMap<ApplicationUserDto, UserViewModel>()
        .ForMember(au => au.PasswordHash, map => map.MapFrom(vm => vm.PasswordHash))
        .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.UserName))
        .ForMember(au => au.Email, map => map.MapFrom(vm => vm.Email));
      CreateMap<AspIdentityResult, IdentityResult>();
      CreateMap<IdentityResult, AspIdentityResult>();
      CreateMap<Claim, ClaimDto>()
        .ForMember(c => c.ClaimType, opt => opt.MapFrom(o => o.Type))
        .ForMember(c => c.ClaimValue, opt => {
          opt.AllowNull();
          opt.MapFrom(o => o.Value);
        });
      CreateMap<ClaimDto, Claim>()
        // the db could hold NULL values for claims where just the existence matters 
        // and Automapper does not support NullSubst on ctors and Claim does not provide an empty ctor
        .ForCtorParam("value", opt => opt.MapFrom(o => o.ClaimValue ?? string.Empty))
        .ForCtorParam("type", opt => opt.MapFrom(o => o.ClaimType ?? string.Empty))
        .ForMember(c => c.Type, opt => opt.MapFrom(o => o.ClaimType))
        .ForMember(c => c.Value, opt => {
          opt.NullSubstitute(string.Empty);
          opt.MapFrom(o => o.ClaimValue ?? string.Empty);
        })
        .ForMember(c => c.Properties, opt => opt.Ignore())
        .ForMember(c => c.Subject, opt => opt.Ignore());
      CreateMap<AuthenticationScheme, ProviderViewModel>()
        .ForMember(a => a.Name, opt => opt.MapFrom(s => s.Name))
        .ForMember(a => a.DisplayName, opt => opt.MapFrom(s => s.DisplayName))
        .ForMember(a => a.Icon, opt => opt.Ignore());
      #endregion

      #region Account Admin

      CreateMap<ClaimViewModel, Claim>()
        // the db could hold NULL values for claims where just the existence matters 
        // and Automapper does not support NullSubst on ctors and Claim does not provide an empty ctor
        .ForCtorParam("value", opt => opt.MapFrom(o => o.Value ?? string.Empty))
        .ForMember(c => c.Type, opt => opt.MapFrom(o => o.Type))
        .ForMember(c => c.Value, opt => {
          opt.NullSubstitute(string.Empty);
          opt.MapFrom(o => o.Value ?? string.Empty);
        })
        .ForMember(c => c.Properties, opt => opt.Ignore())
        .ForMember(c => c.Subject, opt => opt.Ignore());
      CreateMap<Claim, ClaimViewModel>()
        .ForMember(c => c.Type, opt => opt.MapFrom(o => o.Type))
        .ForMember(c => c.Value, opt => {
          opt.AllowNull();
          opt.MapFrom(o => o.Value);
        });

      #endregion

      #region Demo Data

      CreateMap<MachineDto, MachineViewModel>();
      CreateMap<MachineViewModel, MachineDto>();

      #endregion
    }
  }
}