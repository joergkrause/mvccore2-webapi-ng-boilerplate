using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository
{
  public interface IAuthenticationRepository<T, U> where T : class
  {
    int Count();
    bool Delete(T model);
    Task<bool> DeleteAsync(T model);
    T Find(U id);
    bool Insert(IEnumerable<T> models);
    bool Insert(T model);
    Task<bool> InsertAsync(IEnumerable<T> models);
    Task<bool> InsertAsync(T model);
    IQueryable<T> Query(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);
    IEnumerable<T> Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);
    bool Update(IEnumerable<T> models);
    bool Update(T model);
    Task<bool> UpdateAsync(IEnumerable<T> models);
    Task<bool> UpdateAsync(T model);
  }
}