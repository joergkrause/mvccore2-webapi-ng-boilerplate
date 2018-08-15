using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Models;
using AspIdentityResult=Microsoft.AspNetCore.Identity.IdentityResult;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings
{
  /// <summary>
  /// Global mapper profile, called from startup when the mapper is being registered in the DI container.
  /// </summary>
  public class ViewModelToEntityMappingProfile : Profile
  {
    public ViewModelToEntityMappingProfile()
    {
      // Map the viewmodels used in angular to the store models
      CreateMap<RegistrationViewModel, ApplicationUser>()
        .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
      // Map the store models to the backend DTOs
      // The name differences is mostly because of the modifications made by the [DataMember] attributes
      // It shows, that shorten of names can save bandwidth between app server and WFE
      CreateMap<ApplicationUser, ApplicationUserDto>()
        .ForMember(au => au.PwHash, map => map.MapFrom(vm => vm.PasswordHash))
        .ForMember(au => au.Name, map => map.MapFrom(vm => vm.UserName))
        .ForMember(au => au.Email, map => map.MapFrom(vm => vm.Email));
      CreateMap<ApplicationUserDto, ApplicationUser>()
        .ForMember(au => au.PasswordHash, map => map.MapFrom(vm => vm.PwHash))
        .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Name))
        .ForMember(au => au.Email, map => map.MapFrom(vm => vm.Email));
      CreateMap<AspIdentityResult, IdentityResult>();
      CreateMap<IdentityResult, AspIdentityResult>();
    }
  }
}