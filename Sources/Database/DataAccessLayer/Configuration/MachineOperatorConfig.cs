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
  internal class MachineOperatorConfig : IEntityTypeConfiguration<MachineOperator>
  {
    public void Configure(EntityTypeBuilder<MachineOperator> builder)
    {
      builder.HasKey(m => m.Id);
      builder.ToTable("MachineOperators");

    }
  }
}
