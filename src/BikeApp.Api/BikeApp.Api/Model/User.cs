namespace BikeApp.Api.Model
{
    public enum UserRole
    {
        Admin,
        Organizer,
        Member
    }

    public class EmergencyContact
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Relationship { get; set; }
        public string Phone { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public EmergencyContact? EmergencyContact { get; set; }
        public UserRole Role { get; set; }
    }
}
