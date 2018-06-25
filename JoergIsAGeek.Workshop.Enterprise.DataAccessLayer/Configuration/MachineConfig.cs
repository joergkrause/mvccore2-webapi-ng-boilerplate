using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class MachineConfig : IEntityTypeConfiguration<Machine>
  {
    public void Configure(EntityTypeBuilder<Machine> builder)
    {
      builder.HasKey(m => m.Id);
      builder.ToTable("Machines");
      builder.Property(m => m.Name).IsRequired().HasMaxLength(30);
      builder.Property(m => m.Location).HasMaxLength(5);

    }
  }
}
