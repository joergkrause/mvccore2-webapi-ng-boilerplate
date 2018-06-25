using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
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


  }
}
