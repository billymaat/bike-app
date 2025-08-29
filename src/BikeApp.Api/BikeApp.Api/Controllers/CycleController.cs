using BikeApp.Api.Db;
using BikeApp.Api.Dto;
using BikeApp.Api.Entity;
using BikeApp.Api.Mappings;
using BikeApp.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
			return Ok(_context.CycleEvents.Include(e => e.Attendees).Select(o => o.ToDto()).ToList()); // Example of accessing the DbContext
		}

		// GET: api/Cycle
		[HttpGet]
		public IActionResult Get()
		{
			return Ok("Cycle API is working!");
		}
		// GET: api/Cycle/5
		[HttpGet("{id}")]
		[ProducesResponseType(typeof(CycleEventDto), StatusCodes.Status200OK)]

		public IActionResult GetById(int id)
		{
			var matched = _context.CycleEvents.FirstOrDefault(i => i.Id == id);
			if (matched == null)
			{
				return NotFound();
			}

			var dto = matched.ToDto();
			return Ok(dto);
		}

		// POST: api/Cycle
		[HttpPost]
		[ProducesResponseType(typeof(CycleEventDto), StatusCodes.Status200OK)]

		public IActionResult Add([FromBody] CycleEventAddRequestDto value)
		{
			var cycleEvent = new CycleEventEntity()
			{
				Name = value.Name,
				MaxAttendees = value.MaxAttendees,
				Date = value.Date,
				Description = value.Description,
				Location = value.Location,
				Attendees = new List<UserEntity>() // Initialize with an empty list or handle as needed
			};

			_context.CycleEvents.Add(cycleEvent);
			_context.SaveChanges();

			var dto = cycleEvent.ToDto();
			return Ok(dto);
		}

		// PUT: api/Cycle/5
		[HttpPut("{id}")]
		[ProducesResponseType(StatusCodes.Status200OK)]
		public IActionResult Put(int id, [FromBody] CycleEventUpdateRequestDto updateDto)
		{
			var match = _context.CycleEvents
				.Include(e => e.Attendees)
				.FirstOrDefault(i => i.Id == id);
			if (match == null)
			{
				return NotFound();
			}


			if (updateDto.MaxAttendees.HasValue)
			{
				match.MaxAttendees = updateDto.MaxAttendees.Value;
			}

			if (updateDto.Attendees != null)
			{
				var attendees = _context.Users.Where(u => updateDto.Attendees.Contains(u.Id)).ToList();
				match.Attendees?.Clear();
				if (match.Attendees == null)
				{
					match.Attendees = new List<UserEntity>();
				}

				foreach (var attendee in attendees)
				{
					match.Attendees?.Add(attendee);
				}
			}

			if (updateDto.Description != null)
			{
				match.Description = updateDto.Description;
			}

			if (updateDto.Date.HasValue)
			{
				match.Date = updateDto.Date.Value;
			}
			
			if (updateDto.Location != null)
			{
				match.Location = updateDto.Location;
			}

			if (updateDto.Name != null)
			{
				match.Name = updateDto.Name;
			}

			_context.SaveChanges();
			return Ok();
		}
		// DELETE: api/Cycle/5
		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			return NoContent();
		}
	}
}
