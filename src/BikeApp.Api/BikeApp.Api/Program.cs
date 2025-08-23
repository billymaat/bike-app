
using BikeApp.Api.Db;
using BikeApp.Api.SeedData;
using Microsoft.EntityFrameworkCore;

namespace BikeApp.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
			builder.Services.AddDbContext<BikeAppDbContext>(options =>
	            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

			var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            using (var scope = app.Services.CreateScope())
            {
	            var services = scope.ServiceProvider;
	            var context = services.GetRequiredService<BikeAppDbContext>();

	            DbInitializer.Initialize(context);
            }

			app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
