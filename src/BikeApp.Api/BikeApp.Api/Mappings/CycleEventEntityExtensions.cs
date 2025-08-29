using BikeApp.Api.Db;
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
				   Attendees = entity.Attendees != null ? entity.Attendees.Select(u => u.Id).ToList() : new List<int>(),
				MaxAttendees = entity.MaxAttendees
			};
		}

		//public static CycleEventEntity ToEntity(this CycleEventDto dto, BikeAppDbContext context)
		//{
		//	if (dto == null) return null;
		//	return new CycleEventEntity
		//	{
		//		Id = dto.Id,
		//		Name = dto.Name,
		//		Description = dto.Description,
		//		Date = dto.Date,
		//		Location = dto.Location,
		//		   Attendees = dto.Attendees != null ? dto.Attendees.Select(u => new UserEntity
		//		   {
		//			   Id = u.Id,
		//			   Email = u.Email,
		//			   FirstName = u.FirstName,
		//			   LastName = u.LastName,
		//			   Age = u.Age,
		//			   Address = u.Address,
		//			   Phone = u.Phone,
		//			   EmergencyContact = u.EmergencyContact == null ? null : new EmergencyContactEntity
		//			   {
		//				   FirstName = u.EmergencyContact.FirstName,
		//				   LastName = u.EmergencyContact.LastName,
		//				   Relationship = u.EmergencyContact.Relationship,
		//				   Phone = u.EmergencyContact.Phone
		//			   },
		//			   Role = u.Role.ToString()
		//		   }).ToList() : new List<UserEntity>(),
		//		MaxAttendees = dto.MaxAttendees
		//	};
		//}
	}
}