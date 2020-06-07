using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository {
  public interface IUnitOfWork {
    void BeginTransaction();
    void Commit();
    void Rollback();
    int SaveChanges();
    Task<int> SaveChangesAsync();
  }
}