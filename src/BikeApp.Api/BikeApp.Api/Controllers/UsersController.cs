using BikeApp.Api.Db;
using BikeApp.Api.Dto;
using BikeApp.Api.Mappings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BikeApp.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UsersController : ControllerBase
	{
		private readonly BikeAppDbContext _context;

		public UsersController(BikeAppDbContext context)
		{
			_context = context;
		}
		// GET: api/<UsersController>
		[HttpGet]
		[ProducesResponseType(typeof(List<UserDto>), StatusCodes.Status200OK)]
		public IActionResult GetAll()
		{
			return Ok(_context.Users.Include(e => e.EmergencyContact).Select(o => o.ToDto()).ToList());
		}

		// GET api/<UsersController>/5
		[HttpGet("{id}")]
		[ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
		public IActionResult Get(int id)
		{
			var user = _context.Users
				.Include(e => e.EmergencyContact)
				.FirstOrDefault(u => u.Id == id);
			if (user == null)
			{
				return NotFound();
			}

			return Ok(user.ToDto());
		}

		// POST api/<UsersController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<UsersController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<UsersController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
