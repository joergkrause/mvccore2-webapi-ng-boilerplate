using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public abstract class Manager {

    private IGenericRepository<Machine, int>   repMachine;
    private IGenericRepository<Device, int>    repDevice;
    private IGenericRepository<DataValue, int> repDataValue;
    protected IMapper mapper;

    public Manager() {
    }

    public IGenericRepository<DataValue, int> RepDataValue {
      protected get {
        return repDataValue;
      }
      set {
        repDataValue = value;
      }
    }
    public IGenericRepository<Device, int> RepDevice{
      protected get {
        return repDevice;
      }
      set {
        repDevice = value;
      }
    }
    public IGenericRepository<Machine, int> RepMachine {
      protected get {
        return repMachine;
      }
      set {
        repMachine = value;
      }
    }


  }
}
