﻿using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.History;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer {

  /// <summary>
  /// The main context for working data and authentication.
  /// The Autofac container shall deliver the options for config.
  /// </summary>
  public class MachineDataContext : DbContext {

    public static readonly ILoggerFactory SqlLogger = LoggerFactory.Create(builder => { builder.AddConsole(); });
    private readonly IUserContextProvider contextProvider;

    public MachineDataContext(DbContextOptions<MachineDataContext> options, IUserContextProvider contextProvider) : base(options) {
      // forward of the user identity
      this.contextProvider = contextProvider;       
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {      
      optionsBuilder.UseLoggerFactory(SqlLogger);
      optionsBuilder.EnableSensitiveDataLogging(false);
      base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Machine> Machines { get; set; }

    public DbSet<Device> Devices { get; set; }

    public DbSet<DataValue> DataValues { get; set; }

    public DbSet<MachineOperator> MachineOperators { get; set; }

    public override int SaveChanges() {
      var now = DateTime.Now;
      SaveInterceptor(this.contextProvider?.UserIdentity?.Name, now);
      ValidateInterceptor();
      return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) {
      var now = DateTime.Now;
      SaveInterceptor(this.contextProvider?.UserIdentity?.Name, now);
      ValidateInterceptor();
      return base.SaveChangesAsync(cancellationToken);
    }

    /// <summary>
    /// We perform an extensive validation to handle ValidationAttributes set outside
    /// the context of EF and database. EF Core does not do this anymore (EF6 did). 
    /// </summary>
    public void ValidateInterceptor() {
      // all but deleted entries
      foreach (var entry in this.ChangeTracker.Entries()
            .Where(e => (e.State == EntityState.Added) || (e.State == EntityState.Modified))) {
        var entity = entry.Entity;
        var context = new ValidationContext(entity);
        var results = new List<ValidationResult>();

        if (Validator.TryValidateObject(entity, context, results, true) == false) {
          foreach (var result in results) {
            if (result != ValidationResult.Success) {
              throw new ValidationException(result.ErrorMessage);
            }
          }
        }
      }
    }

    /// <summary>
    /// Add global actions if necessary.
    /// </summary>
    /// <param name="contextUser">API provides a user object, if user is authenticated</param>
    /// <param name="timeStamp">The timestamp externally.</param>
    private void SaveInterceptor(string contextUser, DateTime timeStamp) {
      var trackedItems = ChangeTracker.Entries<IAuditableEntityBase>();
      foreach (var item in trackedItems) {
        switch (item.State) {
          case EntityState.Added:
            item.Entity.CreatedAt = timeStamp;
            item.Entity.CreatedBy = contextUser ?? "TestUser";
            goto case EntityState.Modified;
          case EntityState.Modified:
            item.Entity.ModifiedAt = timeStamp;
            item.Entity.ModifiedBy = contextUser ?? "TestUser";
            break;
        }
      }
      var historyItems = ChangeTracker.Entries<IHistoryTracking>().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);
      foreach (var item in historyItems)
      {
        item.Properties.Where(p => p.IsModified).ToList().ForEach(p =>
        {
          Set<TrackHistory>().Add(new TrackHistory
          {
            ActionAt = timeStamp,
            ActionBy = contextUser,
            OldValue = p.OriginalValue?.ToString(),
            NewValue = p.CurrentValue?.ToString(),
            Table = p.EntityEntry.Metadata.DisplayName(),
            Column = p.Metadata.Name
          });
        });

      }
    }

    protected override void OnModelCreating(ModelBuilder builder) {
      base.OnModelCreating(builder);
      // external config for better readebility and flexibility
     
      builder.ApplyConfiguration(new MachineConfig());
      builder.ApplyConfiguration(new MachineOperatorConfig());
      builder.ApplyConfiguration(new DeviceConfig());
      builder.ApplyConfiguration(new DataValueConfig());
      builder.ApplyConfiguration(new TrackHistoryConfig());

    }


  }
}
