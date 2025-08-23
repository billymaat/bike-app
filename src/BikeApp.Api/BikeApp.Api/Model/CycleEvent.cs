using System;
using System.Collections.Generic;
using BikeApp.Api.Dto;

namespace BikeApp.Api.Model
{
	public class CycleEvent
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