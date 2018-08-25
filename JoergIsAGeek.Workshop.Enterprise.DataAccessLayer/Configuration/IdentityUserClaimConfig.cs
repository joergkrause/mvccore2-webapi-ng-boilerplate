using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class IdentityUserClaimConfig : IEntityTypeConfiguration<IdentityUserClaim<string>>
  {
    public void Configure(EntityTypeBuilder<IdentityUserClaim<string>> builder)
    {
      builder.ToTable("UserClaims", "identity");
      builder.Property(u => u.UserId).HasColumnType("char(32)").IsUnicode(false);      
      builder.Property(u => u.ClaimType).HasMaxLength(128);
      builder.Property(u => u.ClaimValue).HasMaxLength(512);
    }
  }
}


