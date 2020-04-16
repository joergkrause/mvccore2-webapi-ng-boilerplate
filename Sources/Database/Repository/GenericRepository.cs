using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository
{
  public class GenericDbRepository<T, U> : IGenericRepository<T, U> where T : class, IEntityBase<U> {


    public GenericDbRepository(MachineDataContext context) {
      Context = context;
    }

    protected MachineDataContext Context {
      get;
    }

    public T Find(U id) {
      return Context.Set<T>().Find(id); //.Single(u => u.Id == id);
    }

    public IEnumerable<T> Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths) {
      if (Count(predicate) > 10000) {
        throw new ArgumentOutOfRangeException("to many results");
      }
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths) {
        model = model.Include(path); // 
      }
      return model.Where(predicate).AsNoTracking().ToList();
    }

    public IQueryable<T> Query(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths) {
      if (Count(predicate) > 10000) {
        throw new ArgumentOutOfRangeException("to many results");
      }
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths) {
        model = model.Include(path);
      }
      return model.Where(predicate).AsNoTracking();
    }

    public int Count(Expression<Func<T, bool>> predicate) {
      return Context.Set<T>().Count(predicate);
    }

    public bool InsertOrUpdate(T model) {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EqualityComparer<U>.Default.Equals(model.Id, default(U)) ? EntityState.Added : EntityState.Modified;
      return Context.SaveChanges() == 1;
    }

    /// <summary>
    /// Transactional batch insert.
    /// </summary>
    /// <param name="models"></param>
    /// <returns></returns>
    public bool InsertOrUpdate(IEnumerable<T> models) {
      var result = true;
      using (var t = Context.Database.BeginTransaction()) {
        foreach (var model in models) {
          // the comparer is for both key types, string and int
          Context.Entry(model).State = EqualityComparer<U>.Default.Equals(model.Id, default(U)) ? EntityState.Added : EntityState.Modified;
          var singleResult = Context.SaveChanges() == 1;
          if (!singleResult) {
            t.Rollback();
            break;
          }
        }
        t.Commit();
      }
      return result;
    }

    public bool Delete(T model) {
      Context.Entry(model).State = EntityState.Deleted;
      return Context.SaveChanges() == 1;
    }

    #region Async Calls

    public async Task<bool> InsertOrUpdateAsync(T model) {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EqualityComparer<U>.Default.Equals(model.Id, default(U)) ? EntityState.Added : EntityState.Modified;
      return await Context.SaveChangesAsync() == 1;
    }

    public async Task<bool> InsertOrUpdateAsync(IEnumerable<T> models) {
      var result = true;
      using (var t = Context.Database.BeginTransaction()) {
        foreach (var model in models) {
          // the comparer is for both key types, string and int
          Context.Entry(model).State = EqualityComparer<U>.Default.Equals(model.Id, default(U)) ? EntityState.Added : EntityState.Modified;
          var singleResult = await Context.SaveChangesAsync() == 1;
          if (!singleResult) {
            t.Rollback();
            break;
          }
        }
        t.Commit();
      }
      return result;
    }

    public async Task<bool> DeleteAsync(T model) {
      Context.Entry(model).State = EntityState.Deleted;
      return await Context.SaveChangesAsync() == 1;
    }

    #endregion

  }
}
