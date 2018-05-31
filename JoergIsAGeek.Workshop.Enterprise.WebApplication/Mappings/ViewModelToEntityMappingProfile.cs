using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Models;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.Mappings
{
  public class ViewModelToEntityMappingProfile : Profile
  {
    public ViewModelToEntityMappingProfile()
    {
      // Map the viewmodels used in angular to the store models
      CreateMap<RegistrationViewModel, ApplicationUser>()
        .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
      // Map the store models to the backend DTOs
      CreateMap<ApplicationUser, ApplicationUserDto>();
      CreateMap<Microsoft.AspNetCore.Identity.IdentityResult, IdentityResult>();
    }
  }
}