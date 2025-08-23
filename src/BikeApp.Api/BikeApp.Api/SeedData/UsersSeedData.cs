using System.Collections.Generic;
using BikeApp.Api.Entity;

public static class UsersSeedData
{
	public static List<UserEntity> GetUsers() => new List<UserEntity>
	{
		// First 10 users: admin
		new UserEntity
		{
			Id = 1,
			Email = "oliver.smith1@email.co.uk",
			FirstName = "Oliver",
			LastName = "Smith",
			Age = 28,
			Address = "12 High Street, London, SW1A 1AA",
			Phone = "+44 7700 900001",
			EmergencyContactFirstName = "Emily",
			EmergencyContactLastName = "Smith",
			EmergencyContactRelationship = "Sister",
			EmergencyContactPhone = "+44 7700 900051",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 2,
			Email = "amelia.jones2@email.co.uk",
			FirstName = "Amelia",
			LastName = "Jones",
			Age = 34,
			Address = "45 Queen Road, Manchester, M1 2AB",
			Phone = "+44 7700 900002",
			EmergencyContactFirstName = "James",
			EmergencyContactLastName = "Jones",
			EmergencyContactRelationship = "Brother",
			EmergencyContactPhone = "+44 7700 900052",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 3,
			Email = "harry.brown3@email.co.uk",
			FirstName = "Harry",
			LastName = "Brown",
			Age = 22,
			Address = "78 King Street, Birmingham, B1 1AA",
			Phone = "+44 7700 900003",
			EmergencyContactFirstName = "Sophie",
			EmergencyContactLastName = "Brown",
			EmergencyContactRelationship = "Mother",
			EmergencyContactPhone = "+44 7700 900053",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 4,
			Email = "isla.taylor4@email.co.uk",
			FirstName = "Isla",
			LastName = "Taylor",
			Age = 29,
			Address = "23 Park Lane, Bristol, BS1 5TY",
			Phone = "+44 7700 900004",
			EmergencyContactFirstName = "Jack",
			EmergencyContactLastName = "Taylor",
			EmergencyContactRelationship = "Father",
			EmergencyContactPhone = "+44 7700 900054",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 5,
			Email = "jack.wilson5@email.co.uk",
			FirstName = "Jack",
			LastName = "Wilson",
			Age = 31,
			Address = "56 Victoria Road, Leeds, LS1 2HQ",
			Phone = "+44 7700 900005",
			EmergencyContactFirstName = "Grace",
			EmergencyContactLastName = "Wilson",
			EmergencyContactRelationship = "Wife",
			EmergencyContactPhone = "+44 7700 900055",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 6,
			Email = "sophie.evans6@email.co.uk",
			FirstName = "Sophie",
			LastName = "Evans",
			Age = 27,
			Address = "89 Oxford Road, Liverpool, L1 8JQ",
			Phone = "+44 7700 900006",
			EmergencyContactFirstName = "Daniel",
			EmergencyContactLastName = "Evans",
			EmergencyContactRelationship = "Brother",
			EmergencyContactPhone = "+44 7700 900056",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 7,
			Email = "charlie.thomas7@email.co.uk",
			FirstName = "Charlie",
			LastName = "Thomas",
			Age = 36,
			Address = "14 Castle Street, Edinburgh, EH1 2NG",
			Phone = "+44 7700 900007",
			EmergencyContactFirstName = "Ella",
			EmergencyContactLastName = "Thomas",
			EmergencyContactRelationship = "Sister",
			EmergencyContactPhone = "+44 7700 900057",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 8,
			Email = "grace.moore8@email.co.uk",
			FirstName = "Grace",
			LastName = "Moore",
			Age = 25,
			Address = "67 George Square, Glasgow, G2 1DY",
			Phone = "+44 7700 900008",
			EmergencyContactFirstName = "Oscar",
			EmergencyContactLastName = "Moore",
			EmergencyContactRelationship = "Brother",
			EmergencyContactPhone = "+44 7700 900058",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 9,
			Email = "oscar.martin9@email.co.uk",
			FirstName = "Oscar",
			LastName = "Martin",
			Age = 30,
			Address = "21 Market Street, Cardiff, CF10 1AU",
			Phone = "+44 7700 900009",
			EmergencyContactFirstName = "Mia",
			EmergencyContactLastName = "Martin",
			EmergencyContactRelationship = "Sister",
			EmergencyContactPhone = "+44 7700 900059",
			Role = "Admin"
		},
		new UserEntity
		{
			Id = 10,
			Email = "mia.clark10@email.co.uk",
			FirstName = "Mia",
			LastName = "Clark",
			Age = 24,
			Address = "34 Bridge Road, Newcastle, NE1 2TY",
			Phone = "+44 7700 900010",
			EmergencyContactFirstName = "Leo",
			EmergencyContactLastName = "Clark",
			EmergencyContactRelationship = "Brother",
			EmergencyContactPhone = "+44 7700 900060",
			Role = "Admin"
		},
		// ...continue for all other users as in the TypeScript file...
	};
}
