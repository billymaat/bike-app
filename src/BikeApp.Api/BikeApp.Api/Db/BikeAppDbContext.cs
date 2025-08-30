using BikeApp.Api.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BikeApp.Api.Db
{
	public class BikeAppDbContext : DbContext
	{
		public BikeAppDbContext(DbContextOptions<BikeAppDbContext> options) : base(options)
		{
		}

		public DbSet<CycleEventEntity> CycleEvents { get; set; }
		public DbSet<UserEntity> Users { get; set; }
		public DbSet<EmergencyContactEntity> EmergencyContacts { get; set; }

		protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
		{
			configurationBuilder
				.Properties<DateTime>()
				.HaveConversion(typeof(UtcValueConverter));
		}

		class UtcValueConverter : ValueConverter<DateTime, DateTime>
		{
			public UtcValueConverter()
				: base(v => v, v => DateTime.SpecifyKind(v, DateTimeKind.Utc))
			{
			}
		}
	}
}