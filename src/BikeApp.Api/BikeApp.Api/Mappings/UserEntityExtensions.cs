using BikeApp.Api.Dto;
using BikeApp.Api.Entity;
using BikeApp.Api.Model;

namespace BikeApp.Api.Mappings
{
    public static class UserEntityExtensions
    {
        public static User ToModel(this UserEntity entity)
        {
            return new User
            {
                Id = entity.Id,
                Email = entity.Email,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                Age = entity.Age,
                Address = entity.Address,
                Phone = entity.Phone,
                EmergencyContact = entity.EmergencyContact == null
                    ? null
                    : new EmergencyContact
                    {
                        FirstName = entity.EmergencyContact.FirstName,
                        LastName = entity.EmergencyContact.LastName,
                        Relationship = entity.EmergencyContact.Relationship,
                        Phone = entity.EmergencyContact.Phone
                    },
                Role = (UserRole)entity.Role
            };
        }

        public static UserEntity ToEntity(this User model)
        {
            return new UserEntity
            {
                Id = model.Id,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Age = model.Age,
                Address = model.Address,
                Phone = model.Phone,
                EmergencyContact = model.EmergencyContact == null ? null : new EmergencyContactEntity
                {
                    FirstName = model.EmergencyContact.FirstName,
                    LastName = model.EmergencyContact.LastName,
                    Relationship = model.EmergencyContact.Relationship,
                    Phone = model.EmergencyContact.Phone
                },
                Role = (UserRoleEntity)model.Role
            };
        }

        public static UserDto ToDto(this UserEntity entity)
        {
	        return new UserDto()
	        {
		        Id = entity.Id,
		        Address = entity.Address,
		        Age = entity.Age,
		        Email = entity.Email,
		        FirstName = entity.FirstName,
		        LastName = entity.LastName,
		        Phone = entity.Phone,
                EmergencyContact = entity.EmergencyContact == null
                    ? null
                    : new EmergencyContactDto
                    {
                        FirstName = entity.EmergencyContact.FirstName,
                        LastName = entity.EmergencyContact.LastName,
                        Relationship = entity.EmergencyContact.Relationship,
                        Phone = entity.EmergencyContact.Phone
                    },
		        Role = (UserRoleDto)entity.Role
	        };
        }
	}
}
