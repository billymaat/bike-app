using BikeApp.Api.Db;
using BikeApp.Api.Dto;
using BikeApp.Api.Mappings;
using BikeApp.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BikeApp.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CycleController : ControllerBase
	{
		private readonly BikeAppDbContext _context;

		public CycleController(BikeAppDbContext context)
		{
			_context = context;
			// Constructor logic can be added here if needed
		}

		[HttpGet("getall")]
		[ProducesResponseType(typeof(List<CycleEventDto>), StatusCodes.Status200OK)]

		public IActionResult GetAll()
		{
			return Ok(_context.CycleEvents.Select(o => o.ToDto()).ToList()); // Example of accessing the DbContext
		}

		// GET: api/Cycle
		[HttpGet]
		public IActionResult Get()
		{
			return Ok("Cycle API is working!");
		}
		// GET: api/Cycle/5
		[HttpGet("{id}")]
		public IActionResult Get(int id)
		{
			return Ok($"Cycle event with ID {id} retrieved successfully.");
		}
		// POST: api/Cycle
		[HttpPost]
		public IActionResult Post([FromBody] string value)
		{
			return CreatedAtAction(nameof(Get), new { id = 1 }, value);
		}
		// PUT: api/Cycle/5
		[HttpPut("{id}")]
		public IActionResult Put(int id, [FromBody] string value)
		{
			return NoContent();
		}
		// DELETE: api/Cycle/5
		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			return NoContent();
		}
	}
}
