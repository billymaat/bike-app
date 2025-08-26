using BikeApp.Api.Entity;
using Microsoft.EntityFrameworkCore;

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
	}
}