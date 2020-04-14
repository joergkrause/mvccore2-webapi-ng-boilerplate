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
  public class AuthenticationDbRepository<T, U> : IAuthAdapter<T, U>, IAuthenticationRepository<T, U> where T : class
  {

    public AuthenticationDbRepository(MachineDataContext context)
    {
      Context = context;
    }

    protected MachineDataContext Context {
      get;
    }

    public IEnumerable<T> Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths)
    {
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths)
      {
        model = model.Include(path); // 
      }
      return model.Where(predicate).AsNoTracking().ToList();
    }

    public IQueryable<T> Query(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths)
    {
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths)
      {
        model = model.Include(path);
      }
      return model.Where(predicate).AsNoTracking();
    }

    public bool Insert(T model)
    {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EntityState.Added;
      return Context.SaveChanges() == 1;
    }

    public bool Update(T model)
    {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EntityState.Modified;
      return Context.SaveChanges() == 1;
    }

    /// <summary>
    /// Transactional batch insert.
    /// </summary>
    /// <param name="models"></param>
    /// <returns></returns>
    public bool Update(IEnumerable<T> models)
    {
      var result = true;
      using (var t = Context.Database.BeginTransaction())
      {
        foreach (var model in models)
        {
          // the comparer is for both key types, string and int
          Context.Entry(model).State = EntityState.Modified;
          var singleResult = Context.SaveChanges() == 1;
          if (!singleResult)
          {
            t.Rollback();
            break;
          }
        }
        t.Commit();
      }
      return result;
    }

    public bool Insert(IEnumerable<T> models)
    {
      var result = true;
      using (var t = Context.Database.BeginTransaction())
      {
        foreach (var model in models)
        {
          // the comparer is for both key types, string and int
          Context.Entry(model).State = EntityState.Added;
          var singleResult = Context.SaveChanges() == 1;
          if (!singleResult)
          {
            t.Rollback();
            break;
          }
        }
        t.Commit();
      }
      return result;
    }

    public bool Delete(T model)
    {
      Context.Entry(model).State = EntityState.Deleted;
      return Context.SaveChanges() == 1;
    }

    #region Async Calls

    public async Task<bool> InsertAsync(T model)
    {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EntityState.Added;
      return await Context.SaveChangesAsync() == 1;
    }

    public async Task<bool> UpdateAsync(T model)
    {
      // the comparer is for both key types, string and int
      Context.Entry(model).State = EntityState.Modified;
      return await Context.SaveChangesAsync() == 1;
    }

    public async Task<bool> InsertAsync(IEnumerable<T> models)
    {
      var result = true;
      using (var t = Context.Database.BeginTransaction())
      {
        foreach (var model in models)
        {
          // the comparer is for both key types, string and int
          Context.Entry(model).State = EntityState.Added;
          var singleResult = await Context.SaveChangesAsync() == 1;
          if (!singleResult)
          {
            t.Rollback();
            break;
          }
        }
        t.Commit();
      }
      return result;
    }

    public async Task<bool> UpdateAsync(IEnumerable<T> models)
    {
      var result = true;
      using (var t = Context.Database.BeginTransaction())
      {
        foreach (var model in models)
        {
          // the comparer is for both key types, string and int
          Context.Entry(model).State = EntityState.Modified;
          var singleResult = await Context.SaveChangesAsync() == 1;
          if (!singleResult)
          {
            t.Rollback();
            break;
          }
        }
        t.Commit();
      }
      return result;
    }

    public async Task<bool> DeleteAsync(T model)
    {
      Context.Entry(model).State = EntityState.Deleted;
      return await Context.SaveChangesAsync() == 1;
    }

    bool IAuthenticationRepository<T, U>.Delete(T model)
    {
      return Delete(model);
    }

    T IAuthenticationRepository<T, U>.Find(U id)
    {
      throw new NotImplementedException();
    }

    bool IAuthenticationRepository<T, U>.Insert(IEnumerable<T> models)
    {
      return Insert(models);
    }

    bool IAuthenticationRepository<T, U>.Insert(T model)
    {
      return Insert(model);
    }

    Task<bool> IAuthenticationRepository<T, U>.InsertAsync(IEnumerable<T> models)
    {
      return InsertAsync(models);
    }

    Task<bool> IAuthenticationRepository<T, U>.InsertAsync(T model)
    {
      return InsertAsync(model);
    }

    IQueryable<T> IAuthenticationRepository<T, U>.Query(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths)
    {
      return Query(predicate, paths);
    }

    IEnumerable<T> IAuthenticationRepository<T, U>.Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths)
    {
      return Read(predicate, paths);
    }

    bool IAuthenticationRepository<T, U>.Update(IEnumerable<T> models)
    {
      return Update(models);
    }

    bool IAuthenticationRepository<T, U>.Update(T model)
    {
      return Update(model);
    }

    Task<bool> IAuthenticationRepository<T, U>.UpdateAsync(IEnumerable<T> models)
    {
      throw new NotImplementedException();
    }

    Task<bool> IAuthenticationRepository<T, U>.UpdateAsync(T model)
    {
      throw new NotImplementedException();
    }

    public IEnumerable<T> AdapterRead(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths)
    {
      return Read(predicate, paths);
    }

    #endregion

  }
}
