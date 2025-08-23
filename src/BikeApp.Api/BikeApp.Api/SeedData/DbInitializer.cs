using BikeApp.Api.Db;
using BikeApp.Api.Model;

namespace BikeApp.Api.SeedData
{
	public static class DbInitializer
	{
		public static void Initialize(BikeAppDbContext context)
		{
			// Ensure database is created (or migrated if you use Migrations)
			context.Database.EnsureCreated();
			// OR: context.Database.Migrate();

			// Check if data already exists
			if (!context.Users.Any())
			{
				context.Users.AddRange(UsersSeedData.GetUsers());
			}

			if (!context.CycleEvents.Any())
			{
				context.CycleEvents.AddRange(CycleEventSeedData.Events);
			}

			context.SaveChanges();
		}
	}
}
