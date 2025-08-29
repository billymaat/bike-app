using System.ComponentModel.DataAnnotations;

namespace BikeApp.Api.Entity
{
	public class CycleEventEntity
	{
		[Key]
		public int Id { get; set; }
		[Required]
		public string? Name { get; set; }
		[Required]
		public string? Description { get; set; }
		[Required]
		public DateTime Date { get; set; }
		[Required]
		public string? Location { get; set; }
		[Required]
		public int MaxAttendees { get; set; }

		// Navigation property for attendees
		public List<UserEntity>? Attendees { get; set; }
	}
}
