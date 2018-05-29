using System;
using System.Collections.Generic;
using System.Data.Services;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer {
  public class FileDataContext : IUpdatable {

    public IQueryable<Machine> Machines { get; set; }

    public void AddReferenceToCollection(object targetResource, string propertyName, object resourceToBeAdded) {
      throw new NotImplementedException();
    }

    public void ClearChanges() {
      throw new NotImplementedException();
    }

    public object CreateResource(string containerName, string fullTypeName) {
      throw new NotImplementedException();
    }

    public void DeleteResource(object targetResource) {
      throw new NotImplementedException();
    }

    public object GetResource(IQueryable query, string fullTypeName) {
      throw new NotImplementedException();
    }

    public object GetValue(object targetResource, string propertyName) {
      throw new NotImplementedException();
    }

    public void RemoveReferenceFromCollection(object targetResource, string propertyName, object resourceToBeRemoved) {
      throw new NotImplementedException();
    }

    public object ResetResource(object resource) {
      throw new NotImplementedException();
    }

    public object ResolveResource(object resource) {
      throw new NotImplementedException();
    }

    public void SaveChanges() {
      throw new NotImplementedException();
    }

    public void SetReference(object targetResource, string propertyName, object propertyValue) {
      throw new NotImplementedException();
    }

    public void SetValue(object targetResource, string propertyName, object propertyValue) {
      throw new NotImplementedException();
    }
  }
}
