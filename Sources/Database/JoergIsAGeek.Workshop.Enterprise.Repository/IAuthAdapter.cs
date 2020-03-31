using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace JoergIsAGeek.Workshop.Enterprise.Repository
{
  public interface IAuthAdapter<T, U> where T : class
  {
    IEnumerable<T> AdapterRead(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths);

  }
}