using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository
{

  /// <summary>
  /// Extended interface for business logic developers.
  /// </summary>
  /// <typeparam name="T">Model type</typeparam>
  /// <typeparam name="U">Primary key type</typeparam>
  public interface IGenericRepository<T, U> : IRepository<T> where T : IEntityBase<U> {
    int Count(Expression<Func<T, bool>> predicate);
    T Find(U id);
    bool InsertOrUpdate(T model);
    bool InsertOrUpdate(IEnumerable<T> models);
    Task<bool> InsertOrUpdateAsync(T model);
    Task<bool> InsertOrUpdateAsync(IEnumerable<T> models);
  }
}
