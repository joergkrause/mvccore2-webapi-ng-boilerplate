using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class DataValueConfig : IEntityTypeConfiguration<DataValue>
  {
    public void Configure(EntityTypeBuilder<DataValue> builder)
    {
      builder.HasKey(m => m.Id);
      builder.ToTable("DataValues");

    }
  }
}
