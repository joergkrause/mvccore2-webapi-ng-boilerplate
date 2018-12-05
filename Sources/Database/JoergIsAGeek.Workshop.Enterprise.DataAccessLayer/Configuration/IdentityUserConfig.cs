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
  internal class IdentityUserConfig : IEntityTypeConfiguration<IdentityUser>
  {
    public void Configure(EntityTypeBuilder<IdentityUser> builder)
    {
      builder.ToTable("Users", "identity");
      builder.HasKey(u => u.Id);
      builder.Property(u => u.Id).HasColumnType("char(32)").IsUnicode(false);
      builder.Property(u => u.Email).IsUnicode(false);

    }
  }
}


