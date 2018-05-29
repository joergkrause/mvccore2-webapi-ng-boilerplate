using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;

namespace JoergIsAGeek.Workshop.Enterprise.Repository {
  public interface IGenericRepository<T, U> where T : IEntityBase<U> {
    int Count();
    bool Delete(T model);
    T Find(U id);
    bool InsertOrUpdate(T model); 
    IQueryable<T> Query(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);
    IEnumerable<T> Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);
  }
}
