using BikeApp.Api.Dto;
using BikeApp.Api.Entity;

namespace BikeApp.Api.Mappings
{
	public static class CycleEventEntityExtensions
	{
		public static CycleEventDto ToDto(this CycleEventEntity entity)
		{
			if (entity == null) return null;
			return new CycleEventDto
			{
				Id = entity.Id,
				Name = entity.Name,
				Description = entity.Description,
				Date = entity.Date,
				Location = entity.Location,
				Attendees = entity.Attendees != null ? new List<int>(entity.Attendees) : new List<int>(),
				MaxAttendees = entity.MaxAttendees
			};
		}

		public static CycleEventEntity ToEntity(this CycleEventDto dto)
		{
			if (dto == null) return null;
			return new CycleEventEntity
			{
				Id = dto.Id,
				Name = dto.Name,
				Description = dto.Description,
				Date = dto.Date,
				Location = dto.Location,
				Attendees = dto.Attendees != null ? new List<int>(dto.Attendees) : new List<int>(),
				MaxAttendees = dto.MaxAttendees
			};
		}
	}
}