using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{

  /// <summary>
  /// Base class that provides all repositories and mapping to DTO types.
  /// </summary>
  public abstract class Manager {

    protected IMapper mapper;
    private IUserContextProvider userContext;

    public Manager(IServiceProvider service) {
      // we pull the repos from container to avoid to many ctor params (see startup.cs for definitions)
      this.RepDataValue = service.GetService<IGenericRepository<DataValue, int>>();
      this.RepDevice = service.GetService<IGenericRepository<Device, int>>();
      this.RepMachine = service.GetService<IGenericRepository<Machine, int>>();
      // user management
      this.userContext = service.GetService<IUserContextProvider>();
    }

    #region Demo Data

    protected IGenericRepository<DataValue, int> RepDataValue {
      get;
    }

    protected IGenericRepository<Device, int> RepDevice {
      get;
    }
    protected IGenericRepository<Machine, int> RepMachine {
      get;
    }

    #endregion

  }
}
