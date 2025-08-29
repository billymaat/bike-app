using BikeApp.Api.Dto;
using BikeApp.Api.Model;

namespace BikeApp.Api.Mappings
{
	public static class CycleEventExtensions
	{
		public static CycleEventDto ToDto(this CycleEvent model)
		{
			if (model == null) return null;
			return new CycleEventDto
			{
				Id = model.Id,
				Name = model.Name,
				Description = model.Description,
				Date = model.Date,
				Location = model.Location,
				Attendees = model.Attendees != null ? new List<int>(model.Attendees.Select(u => u.Id)) : new List<int>(),
				MaxAttendees = model.MaxAttendees
			};
		}

		//public static CycleEvent ToModel(this CycleEventDto dto)
		//{
		//	if (dto == null) return null;
		//	return new CycleEvent
		//	{
		//		Id = dto.Id,
		//		Name = dto.Name,
		//		Description = dto.Description,
		//		Date = dto.Date,
		//		Location = dto.Location,
		//		Attendees = dto.Attendees != null ? dto.Attendees.Select(o => o.ToModel()).ToList() : new List<User>(),
		//		MaxAttendees = dto.MaxAttendees
		//	};
		//}
	}
}
