using System.ComponentModel.DataAnnotations;

namespace BikeApp.Api.Entity
{
	public class CycleEventEntity
	{
		[Key]
		public int Id { get; set; }
		[Required]
		public string Name { get; set; }
		[Required]
		public string Description { get; set; }
		[Required]
		public DateTime Date { get; set; }
		[Required]
		public string Location { get; set; }
		[Required]
		public int MaxAttendees { get; set; }

		// Store attendee IDs as a JSON string or use a related table for normalization
		public List<int> Attendees { get; set; }
	}
}
