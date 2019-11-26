using JoergIsAGeek.Workshop.Enterprise.DomainModels.History;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configuration
{
  internal class TrackHistoryConfig : IEntityTypeConfiguration<TrackHistory>
  {
    public void Configure(EntityTypeBuilder<TrackHistory> builder)
    {
      builder.HasKey(m => m.Id);
      builder.ToTable("TrackHistories");
      builder.Property(m => m.Column).IsRequired().HasMaxLength(50);
      builder.Property(m => m.Table).IsRequired().HasMaxLength(50);
      builder.Property(m => m.OldValue).HasMaxLength(1000);
      builder.Property(m => m.NewValue).HasMaxLength(1000);
      builder.Property(m => m.ActionAt).HasColumnType("datetime2");
      builder.Property(m => m.ActionBy).IsRequired().HasMaxLength(100);

    }
  }
}
