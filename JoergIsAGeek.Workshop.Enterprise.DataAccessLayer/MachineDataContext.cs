﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.ComponentModel.DataAnnotations;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer
{

  /// <summary>
  /// The main context for working data and authentication.
  /// The Autofac cotainer shall deliver the options for config.
  /// </summary>
  public class MachineDataContext : IdentityDbContext
  {

    private IUserContextProvider contextProvider;

    public MachineDataContext(DbContextOptions<DbContext> options, IUserContextProvider contextProvider) : base(options)
    {
      // forward of the user identity
      this.contextProvider = contextProvider;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Machine> Machines { get; set; }

    public DbSet<Device> Devices { get; set; }

    public DbSet<DataValue> DataValues { get; set; }

    public override int SaveChanges()
    {
      var now = DateTime.Now;
      SaveInterceptor(this.contextProvider?.UserIdentity?.Name, now);
      ValidateInterceptor();
      return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
    {
      var now = DateTime.Now;
      SaveInterceptor(this.contextProvider?.UserIdentity?.Name, now);
      ValidateInterceptor();
      return base.SaveChangesAsync(cancellationToken);
    }

    /// <summary>
    /// We perform an extensive validation to handle ValidationAttributes set outside
    /// the context of EF and database. EF Core does not do this anymore (EF6 did). 
    /// </summary>
    public void ValidateInterceptor()
    {
      // all but deleted entries
      foreach (var entry in this.ChangeTracker.Entries()
            .Where(e => (e.State == EntityState.Added) || (e.State == EntityState.Modified)))
      {
        var entity = entry.Entity;
        var context = new ValidationContext(entity);
        var results = new List<ValidationResult>();

        if (Validator.TryValidateObject(entity, context, results, true) == false)
        {
          foreach (var result in results)
          {
            if (result != ValidationResult.Success)
            {
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
    private void SaveInterceptor(string contextUser, DateTime timeStamp)
    {
      var trackedItems = ChangeTracker.Entries<IAuditableEntityBase>();
      foreach (var item in trackedItems)
      {
        switch (item.State)
        {
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
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      // external config for better readebility and flexibility
      builder.ApplyConfiguration(new MachineConfig());
      builder.ApplyConfiguration(new ApplicationUserConfig());
      // classes we have enhanced
      builder.Entity<ApplicationRole>()
        .ToTable("Roles")
        .Property(u => u.Id).HasColumnType("char(32)").IsUnicode(false);
      // standard identity classes
      builder.Entity<IdentityUserLogin<string>>()
        .ToTable("UserLogins")
        .Property(ur => ur.UserId).HasColumnType("char(32)").IsUnicode(false);

      builder.Entity<IdentityUserRole<string>>()
        .ToTable("User_x_Roles")
        .HasKey(r => new { UserId = r.UserId, RoleId = r.RoleId });

      builder.Entity<IdentityUserRole<string>>()
        .Property(ur => ur.RoleId).HasColumnType("char(32)").IsUnicode(false);

      builder.Entity<IdentityUserRole<string>>()
        .Property(ur => ur.UserId).HasColumnType("char(32)").IsUnicode(false);

      //builder.Entity<ApplicationUser>()
      //    .HasMany(e => e.Claims)
      //    .WithOne()
      //    .HasForeignKey(e => e.UserId)
      //    .IsRequired()
      //    .OnDelete(DeleteBehavior.SetNull);

      //builder.Entity<ApplicationUser>()
      //    .HasMany(e => e.Logins)
      //    .WithOne()
      //    .HasForeignKey(e => e.UserId)
      //    .IsRequired()
      //    .OnDelete(DeleteBehavior.SetNull);

    }


  }
}
