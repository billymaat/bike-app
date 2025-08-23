using BikeApp.Api.Dto;
using BikeApp.Api.Model;

namespace BikeApp.Api.Mappings
{
    public static class UserExtensions
    {
        public static UserDto ToDto(this User user)
        {
            return new UserDto
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Age = user.Age,
                Address = user.Address,
                Phone = user.Phone,
                EmergencyContact = user.EmergencyContact == null ? null : new EmergencyContactDto
                {
                    FirstName = user.EmergencyContact.FirstName,
                    LastName = user.EmergencyContact.LastName,
                    Relationship = user.EmergencyContact.Relationship,
                    Phone = user.EmergencyContact.Phone
                },
                Role = (UserRoleDto)user.Role
            };
        }

        public static User ToModel(this UserDto dto)
        {
            return new User
            {
                Id = dto.Id,
                Email = dto.Email,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Age = dto.Age,
                Address = dto.Address,
                Phone = dto.Phone,
                EmergencyContact = dto.EmergencyContact == null ? null : new EmergencyContact
                {
                    FirstName = dto.EmergencyContact.FirstName,
                    LastName = dto.EmergencyContact.LastName,
                    Relationship = dto.EmergencyContact.Relationship,
                    Phone = dto.EmergencyContact.Phone
                },
                Role = (UserRole)dto.Role
            };
        }
    }
}
