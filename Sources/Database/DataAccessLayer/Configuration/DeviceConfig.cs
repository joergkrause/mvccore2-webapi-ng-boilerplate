using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class DeviceConfig : IEntityTypeConfiguration<Device>
  {
    public void Configure(EntityTypeBuilder<Device> builder)
    {
      builder.HasKey(m => m.Id);
      builder.ToTable("Devices");

    }
  }
}
