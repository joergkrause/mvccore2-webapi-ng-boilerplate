using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

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
      this.SaveInterceptor(this.contextProvider?.UserIdentity?.Name);
      return base.SaveChanges();
    }

    private void SaveInterceptor(string contextUser)
    {
      var timeStamp = DateTime.Now.ToUniversalTime();
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
      // classes we have enhanced
      builder.Entity<ApplicationUser>()
        .ToTable("Users")
        .Property(u => u.Id).HasColumnType("char(32)").IsUnicode(false);
      builder.Entity<ApplicationUser>()
        .Property(u => u.Email).IsUnicode(false);
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
