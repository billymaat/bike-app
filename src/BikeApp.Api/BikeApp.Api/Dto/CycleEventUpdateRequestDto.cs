namespace BikeApp.Api.Dto
{
	public class CycleEventUpdateRequestDto
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public DateTime Date { get; set; }
		public string Location { get; set; }
		public List<int> Attendees { get; set; }
		public int MaxAttendees { get; set; }
	}
}
