using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository
{
  /// <summary>
  /// Repository base for all repos.
  /// </summary>
  /// <typeparam name="T"></typeparam>
  public interface IRepository<T>
  {
    IEnumerable<T> Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);

    IQueryable<T> Query(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);

    bool Delete(T model);

    Task<bool> DeleteAsync(T model);
  }
}
