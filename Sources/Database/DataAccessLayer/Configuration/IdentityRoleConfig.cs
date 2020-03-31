using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration {
  internal class IdentityRoleConfig : IEntityTypeConfiguration<IdentityRole> {
    public void Configure(EntityTypeBuilder<IdentityRole> builder) {
      builder
        .ToTable("Roles", "identity")
        .HasKey(r => r.Id);

      builder.Property(u => u.Id).HasColumnType("char(32)").IsUnicode(false);

    }
  }
}


