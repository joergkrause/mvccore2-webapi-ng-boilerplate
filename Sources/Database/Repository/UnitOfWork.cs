using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.Repository {

  /// <summary>
  /// If the repository pattern is not enough consider using UoW to have a single SaveChanges for mulitple 
  /// object modifications in a transactional way.
  /// </summary>
  public abstract class UnitOfWork : IUnitOfWork {

    public UnitOfWork(DbContext context) {
      Context = context;
    }
    protected DbContext Context { get; }

    public int SaveChanges() {
      return this.Context.SaveChanges();
    }

    public Task<int> SaveChangesAsync() {
      return this.Context.SaveChangesAsync();
    }

    private IDbContextTransaction _transaction;

    public void BeginTransaction() {
      _transaction = Context.Database.BeginTransaction();
    }

    public void Commit() {
      try {
        SaveChanges();
        _transaction.Commit();
      } finally {
        _transaction.Dispose();
      }
    }

    public void Rollback() {
      _transaction.Rollback();
      _transaction.Dispose();
    }

  }
}
