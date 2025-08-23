namespace BikeApp.Api.Dto
{
    public enum UserRoleDto
    {
        Admin,
        Organizer,
        Member
    }

    public class EmergencyContactDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Relationship { get; set; }
        public string Phone { get; set; }
    }

    public class UserDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public EmergencyContactDto? EmergencyContact { get; set; }
        public UserRoleDto Role { get; set; }
    }
}
