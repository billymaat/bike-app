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
                EmergencyContact = (entity.EmergencyContactFirstName == null && entity.EmergencyContactLastName == null && entity.EmergencyContactRelationship == null && entity.EmergencyContactPhone == null)
                    ? null
                    : new EmergencyContact
                    {
                        FirstName = entity.EmergencyContactFirstName ?? string.Empty,
                        LastName = entity.EmergencyContactLastName ?? string.Empty,
                        Relationship = entity.EmergencyContactRelationship ?? string.Empty,
                        Phone = entity.EmergencyContactPhone ?? string.Empty
                    },
                Role = Enum.TryParse<UserRole>(entity.Role, true, out var role) ? role : UserRole.Member
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
                EmergencyContactFirstName = model.EmergencyContact?.FirstName,
                EmergencyContactLastName = model.EmergencyContact?.LastName,
                EmergencyContactRelationship = model.EmergencyContact?.Relationship,
                EmergencyContactPhone = model.EmergencyContact?.Phone,
                Role = model.Role.ToString()
            };
        }
    }
}
