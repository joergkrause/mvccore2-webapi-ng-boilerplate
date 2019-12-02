using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class IdentityUserClaimConfig : IEntityTypeConfiguration<IdentityUserClaim<string>>
  {
    public void Configure(EntityTypeBuilder<IdentityUserClaim<string>> builder)
    {
      builder.ToTable("UserClaims", "identity");
      builder.Property(u => u.UserId).HasColumnType("char(32)").IsUnicode(false);      
      builder.Property(u => u.ClaimType).HasMaxLength(128).IsRequired();
      builder.Property(u => u.ClaimValue).HasMaxLength(512);
    }
  }
}


