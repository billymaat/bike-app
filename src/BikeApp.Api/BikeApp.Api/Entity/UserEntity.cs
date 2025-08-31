using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeApp.Api.Entity
{
    public class UserEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
	    public string? Email { get; set; }
        [Required]
		public string? FirstName { get; set; }
        [Required]
		public string? LastName { get; set; }
        public int Age { get; set; }
	    public string? Address { get; set; }
	    public string? Phone { get; set; }
		public EmergencyContactEntity? EmergencyContact { get; set; }
        [Required]
		public UserRoleEntity Role { get; set; } // Store as string, map to enum in model
    }

    public enum UserRoleEntity
    {
	    Admin,
	    Organizer,
	    Member
	}
}
