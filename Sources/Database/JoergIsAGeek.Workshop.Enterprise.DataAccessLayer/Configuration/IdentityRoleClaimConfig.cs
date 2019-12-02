using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class IdentityRoleClaimConfig : IEntityTypeConfiguration<IdentityRoleClaim<string>>
  {
    public void Configure(EntityTypeBuilder<IdentityRoleClaim<string>> builder)
    {
      builder.ToTable("RoleClaims", "identity");
      builder.Property(ur => ur.RoleId).HasColumnType("char(32)").IsUnicode(false);
    }
  }
}


