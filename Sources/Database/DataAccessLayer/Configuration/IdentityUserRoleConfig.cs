using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class IdentityUserRoleConfig : IEntityTypeConfiguration<IdentityUserRole<string>> {
    public void Configure(EntityTypeBuilder<IdentityUserRole<string>> builder) {
      builder
        .ToTable("User_x_Roles", "identity")
        .HasKey(r => new { r.UserId, r.RoleId });

      builder.Property(ur => ur.RoleId).HasColumnType("char(32)").IsUnicode(false);
      builder.Property(ur => ur.UserId).HasColumnType("char(32)").IsUnicode(false);
    }
  }
}


