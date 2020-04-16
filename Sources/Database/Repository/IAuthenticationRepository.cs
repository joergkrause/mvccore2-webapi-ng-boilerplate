using System.Collections.Generic;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository
{
  /// <summary>
  /// Interface for Authentication Repositiory, necessary to distinguish from Generic Repo
  /// because of the Identity classes that doesn't depend on our on EntityBase class.
  /// </summary>
  /// <typeparam name="T">Model type</typeparam>
  /// <typeparam name="U">Primary key type</typeparam>
  public interface IAuthenticationRepository<T, U> : IRepository<T> where T : class
  {
    bool Insert(IEnumerable<T> models);

    bool Insert(T model);

    Task<bool> InsertAsync(IEnumerable<T> models);

    Task<bool> InsertAsync(T model);

    bool Update(IEnumerable<T> models);

    bool Update(T model);

    Task<bool> UpdateAsync(IEnumerable<T> models);

    Task<bool> UpdateAsync(T model);

  }
}