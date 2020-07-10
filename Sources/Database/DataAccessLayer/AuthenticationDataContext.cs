using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Encryption;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Attributes;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.History;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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
  public class AuthenticationDataContext : IdentityDbContext {

    private readonly IUserContextProvider contextProvider;
    private readonly IConfiguration configuration;
    public static readonly ILoggerFactory SqlLogger = LoggerFactory.Create(builder => { builder.AddConsole(); });

    public AuthenticationDataContext(
      DbContextOptions<AuthenticationDataContext> options, 
      IUserContextProvider contextProvider,
      IConfiguration configuration) : base(options) {
      // forward of the user identity
      this.contextProvider = contextProvider;
      this.configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
      optionsBuilder.UseLoggerFactory(SqlLogger);
      optionsBuilder.EnableSensitiveDataLogging(false);
      base.OnConfiguring(optionsBuilder);
    }

    public override int SaveChanges() {
      var now = DateTime.Now;
      SaveInterceptor(this.contextProvider?.UserIdentity?.Name, now);
      ValidateInterceptor();
      CryptoInterceptor();
      return base.SaveChanges();
    }

    private void CryptoInterceptor() {
      var key = this.configuration.GetSection("Keys").GetValue<string>("Encrypt");
      // Look for properties with EncryptAttribute and encrypt.
      foreach (var item in ChangeTracker
        .Entries() // no filter due to Identity Models
        .Where(item => item.State == EntityState.Added || item.State == EntityState.Modified)
        ) {
        foreach (var property in item.Entity.GetType().GetProperties()) {
          var toEncrypt = property.GetCustomAttributes(true).OfType<EncryptAttribute>().Any();
          if (!toEncrypt) {
            continue;
          }
          var val = item.Property(property.Name).CurrentValue?.ToString();
          if (val != null) {
            var enc = AesOperation.EncryptString(key, val);
            item.Property(property.Name).CurrentValue = enc;
          }
        }
      }
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
      var trackedItems = ChangeTracker.Entries();
      foreach (var item in trackedItems) {
        // due to lack of a unified base class we need to detect the on-the-fly props
        // for performance concerns: This is auth db, which has relatively few requests only (register/logon/profile change)
        if (item.Properties.Any(p => p.Metadata.Name == nameof(AuditableEntityBase.CreatedAt))) {
          switch (item.State) {
            case EntityState.Added:
              item.Property(nameof(AuditableEntityBase.CreatedAt)).CurrentValue = timeStamp;
              item.Property(nameof(AuditableEntityBase.CreatedAt)).IsModified = true;
              item.Property(nameof(AuditableEntityBase.CreatedBy)).CurrentValue = contextUser;
              item.Property(nameof(AuditableEntityBase.CreatedBy)).IsModified = true;
              goto case EntityState.Modified;
            case EntityState.Modified:
              item.Property(nameof(AuditableEntityBase.ModifiedAt)).CurrentValue = timeStamp;
              item.Property(nameof(AuditableEntityBase.ModifiedAt)).IsModified = true;
              item.Property(nameof(AuditableEntityBase.ModifiedBy)).CurrentValue = contextUser;
              item.Property(nameof(AuditableEntityBase.ModifiedBy)).IsModified = true;
              break;
          }
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
     
      builder.ApplyConfiguration(new TrackHistoryConfig());
      builder.ApplyConfiguration(new IdentityUserConfig());      
      builder.ApplyConfiguration(new IdentityUserClaimConfig());
      builder.ApplyConfiguration(new IdentityUserLoginConfig());
      builder.ApplyConfiguration(new IdentityRoleConfig());
      builder.ApplyConfiguration(new IdentityUserRoleConfig());
      builder.ApplyConfiguration(new IdentityRoleClaimConfig());
      // currently we don't store the tokens
      builder.Ignore<IdentityUserToken<string>>();

      // to configure derived classes, such as ApplicationUser, add particular Entity calls here after
      // this is necessary to configure both, base type and derived type, to have both in the model for mapping
      builder.Entity<IdentityUser>().ToTable("Users", "identity");
      builder.Entity<IdentityUser>().Property<DateTime>(nameof(AuditableEntityBase.CreatedAt));
      builder.Entity<IdentityUser>().Property<DateTime>(nameof(AuditableEntityBase.ModifiedAt));
      builder.Entity<IdentityUser>().Property<string>(nameof(AuditableEntityBase.CreatedBy)).HasMaxLength(100);
      builder.Entity<IdentityUser>().Property<string>(nameof(AuditableEntityBase.ModifiedBy)).HasMaxLength(100);
      builder.Entity<IdentityRole>().ToTable("Roles", "identity");
      builder.Entity<IdentityRole>().Property<DateTime>(nameof(AuditableEntityBase.CreatedAt));
      builder.Entity<IdentityRole>().Property<DateTime>(nameof(AuditableEntityBase.ModifiedAt));
      builder.Entity<IdentityRole>().Property<string>(nameof(AuditableEntityBase.CreatedBy)).HasMaxLength(100);
      builder.Entity<IdentityRole>().Property<string>(nameof(AuditableEntityBase.ModifiedBy)).HasMaxLength(100);
      builder.Entity<IdentityUserRole<string>>().ToTable("User_x_Roles", "identity");
      builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims", "identity");

    }


  }
}
