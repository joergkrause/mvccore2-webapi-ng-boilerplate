using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public abstract class Manager {

    protected IMapper mapper;

    public Manager(IServiceProvider service) {
      this.RepDataValue = service.GetService<IGenericRepository<DataValue, int>>();
      this.RepDevice = service.GetService<IGenericRepository<Device, int>>();
      this.RepMachine = service.GetService<IGenericRepository<Machine, int>>();
      this.RepRoles = service.GetService<IGenericRepository<ApplicationRole, string>>();
      this.RepUsers = service.GetService<IGenericRepository<ApplicationUser, string>>();
      this.RepUserClaims = service.GetService<IGenericRepository<UserClaim, int>>();
      this.RepUserRoles = service.GetService<IGenericRepository<UserRole, int>>();
    }

    protected IGenericRepository<DataValue, int> RepDataValue {
      get;
    }
    public IGenericRepository<Device, int> RepDevice{
      get;
    }
    public IGenericRepository<Machine, int> RepMachine {
      get;
    }

    protected IGenericRepository<ApplicationUser, string> RepUsers {
      get;
    }
    protected IGenericRepository<ApplicationRole, string> RepRoles {
      get;
    }
    protected IGenericRepository<UserClaim, int> RepUserClaims {
      get;
    }
    protected IGenericRepository<UserRole, int> RepUserRoles {
      get;
    }

  }
}
