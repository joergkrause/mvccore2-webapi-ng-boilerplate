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
  internal class IdentityUserLoginConfig : IEntityTypeConfiguration<IdentityUserLogin<string>>
  {
    public void Configure(EntityTypeBuilder<IdentityUserLogin<string>> builder)
    {
      builder
        .ToTable("UserLogins", "identity")
        .HasKey(ur => new { ur.LoginProvider, ur.ProviderKey });
      builder.Property(u => u.UserId).HasColumnType("char(32)").IsUnicode(false);
    }
  }
}


