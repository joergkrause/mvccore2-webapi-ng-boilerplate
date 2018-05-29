using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace JoergIsAGeek.Workshop.Enterprise.Repository {
  public class GenericDbRepository<T, U> : IGenericRepository<T, U> where T : class, IEntityBase<U> {

    private MachineDataContext _context;

    public GenericDbRepository(MachineDataContext context) {
      _context = context;
    }

    protected MachineDataContext Context {
      get {
        return _context;
      }
    }

    public T Find(U id) {
      return Context.Set<T>().Find(id); //.Single(u => u.Id == id);
    }

    public IEnumerable<T> Read(Expression<Func<T, bool>> predicate, 
      params Expression<Func<T, object>>[] paths) {
      if (Count() > 10000) {
        throw new ArgumentOutOfRangeException("to many results");
      }
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths) {
        model = model.Include(path); // 
      }
      return model.Where(predicate).ToList();
    }

    public IQueryable<T> Query(Expression<Func<T, bool>> predicate, 
      params Expression<Func<T, object>>[] paths) {
      if (Count() > 10000) {
        throw new ArgumentOutOfRangeException("to many results");
      }
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths) {
        model = model.Include(path);
      }
      return model.Where(predicate);
    }

    public int Count() {
      return Context.Set<T>().Count();
    }

    public bool InsertOrUpdate(T model) {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EqualityComparer<U>.Default.Equals(model.Id, default(U)) ? EntityState.Added : EntityState.Modified;
      return Context.SaveChanges() == 1;
    }

    public bool Delete(T model) {
      Context.Entry(model).State = EntityState.Deleted;
      return Context.SaveChanges() == 1;
    }


  }
}
