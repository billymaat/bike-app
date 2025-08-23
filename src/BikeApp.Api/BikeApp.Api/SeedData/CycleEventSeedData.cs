using System;
using System.Collections.Generic;

namespace BikeApp.Api.Model
{
	public static class SeedData
	{
		public static List<CycleEvent> Events
		{
			get
			{
				var names = new List<string>
				{
					"Manchester City Centre Evening Ride", "Chorlton Water Park Loop", "Peak District Adventure", "Fallowfield Loop Social Ride",
					"Salford Quays Sunset Ride", "Heaton Park Family Cycle", "Wilmslow Road Commuter Challenge", "Northern Quarter Street Art Tour",
					"Bridgewater Canal Heritage Ride", "Didsbury to Stockport Greenway", "Manchester to Altrincham Ride", "Early Morning Coffee Ride",
					"Manchester Parks Explorer", "Castlefield Canalside Ride", "Women’s Only Social Ride", "Manchester to Sale Water Park",
					"Rusholme Curry Mile Ride", "Manchester to Rochdale Canal Ride", "Evening Ride to Didsbury Village", "Manchester LGBTQ+ Pride Ride",
					"Ancoats Urban Explorer", "MediaCityUK Waterfront Ride", "Longford Park Picnic Cycle", "Wythenshawe Park Family Day",
					"Old Trafford Stadium Tour Ride", "Levenshulme Market Loop", "Prestwich Forest Park Adventure", "Salford Greenway Social",
					"Stretford to Chorlton Ride", "Northern Moor Nature Trail", "Trafford Centre Shopping Cycle", "Moss Side Community Ride",
					"Hulme Art & History Tour", "Victoria Baths Heritage Ride", "Cheetham Hill Cultural Cycle", "Withington Village Loop",
					"Gorton Reservoirs Ride", "Manchester Airport Perimeter Ride", "Dane Road Riverside Cycle", "Urmston Meadows Explorer",
					"Eccles Canal Path Ride", "Swinton Park Social", "Walkden Woods Adventure", "Radcliffe to Bury Ride",
					"Whitefield Evening Spin", "Middleton Circular", "Blackley Forest Ride", "Harpurhey Community Cycle",
					"Newton Heath Greenway", "Moston Brook Explorer", "Failsworth Canal Loop", "Droylsden to Ashton Ride",
					"Audenshaw Reservoirs Tour", "Denton Country Park Ride", "Hyde to Stockport Cycle", "Reddish Vale Adventure",
					"Heald Green Heritage Ride", "Cheadle Village Social", "Gatley Green Spaces Ride", "Burnage to Didsbury Loop",
					"East Didsbury Explorer", "Chorltonville Garden Ride", "Sale Moor Community Cycle", "Brooklands Park Loop",
					"Timperley Trail", "Altrincham Market Social", "Hale Barns Heritage Ride", "Bowdon Hill Climb", "Dunham Massey Deer Park Ride",
					"Partington Riverside Cycle", "Carrington Moss Adventure", "Irlam to Cadishead Ride", "Worsley Woods Explorer",
					"Boothstown Canal Path", "Walkden to Little Hulton Ride", "Tyldesley Heritage Tour", "Atherton Greenway",
					"Leigh Sports Village Cycle", "Westhoughton Circular", "Horwich Hills Ride", "Bolton to Bury Trail",
					"Radcliffe to Prestwich Ride", "Whitefield to Radcliffe Loop", "Besses o' th' Barn Social", "Unsworth Moss Explorer",
					"Heywood Heritage Ride", "Middleton to Heywood Cycle", "Rochdale Canal Adventure", "Milnrow Moorland Ride",
					"Littleborough Lakeside Cycle", "Hollingworth Lake Explorer", "Smithy Bridge Social", "Newhey Nature Trail",
					"Shaw and Crompton Ride", "Royton Greenway", "Chadderton Hall Park Cycle", "Failsworth to Oldham Ride",
					"Oldham Edge Adventure", "Saddleworth Moor Explorer", "Greenfield Reservoir Ride", "Mossley Village Loop",
					"Stalybridge Canal Path", "Dukinfield Heritage Ride", "Hyde Park Social", "Godley Brook Explorer"
				};
				var locations = new List<string>
				{
					"Manchester Town Hall, Albert Square, Manchester", "Chorlton Water Park, Maitland Ave, Manchester", "Start: Didsbury Village, Manchester",
					"Fallowfield Loop, St Werburgh's Road, Manchester", "MediaCityUK, Salford Quays, Manchester", "Heaton Park, Middleton Rd, Manchester",
					"Wilmslow Road, Rusholme, Manchester", "Stevenson Square, Northern Quarter, Manchester", "Bridgewater Canal, Castlefield, Manchester",
					"Didsbury Park, Didsbury, Manchester", "Start: Deansgate, Manchester", "Start: Oxford Road Station, Manchester",
					"Platt Fields Park, Fallowfield, Manchester", "Castlefield Bowl, Manchester", "Start: Alexandra Park, Manchester",
					"Start: Deansgate Locks, Manchester", "Wilmslow Road, Rusholme, Manchester", "Start: Piccadilly Basin, Manchester",
					"Start: St Peter's Square, Manchester", "Start: Sackville Gardens, Manchester", "Ancoats, Manchester", "MediaCityUK, Salford",
					"Longford Park, Stretford", "Wythenshawe Park, Manchester", "Old Trafford, Manchester", "Levenshulme Market, Manchester",
					"Prestwich Forest Park, Prestwich", "Salford Greenway, Salford", "Chorlton, Manchester", "Northern Moor, Manchester",
					"Trafford Centre, Manchester", "Moss Side, Manchester", "Hulme, Manchester", "Victoria Baths, Manchester",
					"Cheetham Hill, Manchester", "Withington, Manchester", "Gorton Reservoirs, Manchester", "Manchester Airport, Manchester",
					"Dane Road, Sale", "Urmston Meadows, Urmston", "Eccles, Manchester", "Swinton Park, Swinton", "Walkden Woods, Walkden",
					"Radcliffe, Manchester", "Whitefield, Manchester", "Middleton, Manchester", "Blackley Forest, Manchester",
					"Harpurhey, Manchester", "Newton Heath, Manchester", "Moston Brook, Manchester", "Failsworth, Manchester",
					"Droylsden, Manchester", "Audenshaw Reservoirs, Audenshaw", "Denton Country Park, Denton", "Hyde, Manchester",
					"Reddish Vale, Stockport", "Heald Green, Manchester", "Cheadle, Manchester", "Gatley, Manchester", "Burnage, Manchester",
					"East Didsbury, Manchester", "Chorltonville, Manchester", "Sale Moor, Sale", "Brooklands Park, Sale",
					"Timperley, Altrincham", "Altrincham Market, Altrincham", "Hale Barns, Altrincham", "Bowdon, Altrincham",
					"Dunham Massey, Altrincham", "Partington, Manchester", "Carrington Moss, Manchester", "Irlam, Manchester",
					"Worsley Woods, Worsley", "Boothstown, Manchester", "Walkden, Manchester", "Tyldesley, Manchester",
					"Atherton, Manchester", "Leigh Sports Village, Leigh", "Westhoughton, Bolton", "Horwich, Bolton",
					"Bolton, Manchester", "Radcliffe, Manchester", "Whitefield, Manchester", "Besses o' th' Barn, Manchester",
					"Unsworth Moss, Manchester", "Heywood, Manchester", "Middleton, Manchester", "Rochdale, Manchester",
					"Milnrow, Manchester", "Littleborough, Manchester", "Hollingworth Lake, Littleborough", "Smithy Bridge, Littleborough",
					"Newhey, Manchester", "Shaw, Oldham", "Royton, Oldham", "Chadderton Hall Park, Oldham", "Failsworth, Manchester",
					"Oldham Edge, Oldham", "Saddleworth Moor, Oldham", "Greenfield Reservoir, Oldham", "Mossley, Manchester",
					"Stalybridge, Manchester", "Dukinfield, Manchester", "Hyde Park, Hyde", "Godley Brook, Hyde"                };
				var descriptions = new List<string>
				{
					"A relaxed 12km evening ride through Manchester's vibrant city centre, taking in historic landmarks and lively streets. Expect a gentle pace (about 2 hours), suitable for all abilities. Perfect for unwinding after work and meeting new friends.",
					"Enjoy a scenic 8km loop around Chorlton Water Park and the River Mersey. This easy, family-friendly ride takes about 1.5 hours and is mostly flat. Great for beginners and those who love nature.",
					"Take on a challenging 35km adventure to the edge of the Peak District! Expect some hills and stunning views. This ride is best for experienced cyclists, lasting around 3.5 hours at a steady pace.",
					"A sociable 10km ride along the Fallowfield Loop, Manchester's favourite traffic-free path. We'll stop for coffee and cake. Easy and flat, expect 1.5 hours of relaxed cycling and good company.",
					"A 14km sunset ride through Salford Quays, passing MediaCityUK and the Lowry. Moderate difficulty, mostly flat, and takes about 2 hours. We'll finish with drinks by the water—bring your camera!",
					"A gentle 7km family ride around Heaton Park. Expect a relaxed pace (about 1 hour), with plenty of stops to explore gardens and lakes. Perfect for all ages and abilities.",
					"Test your skills on a 9km Wilmslow Road commuter challenge! We'll discuss safe cycling tips and best routes. Moderate pace, about 1 hour, ideal for those wanting to improve city cycling confidence.",
					"Discover Manchester's street art on this 6km guided tour of the Northern Quarter. Easy and slow-paced (1.5 hours), with plenty of stops for photos and stories behind the murals.",
					"Cycle 18km along the historic Bridgewater Canal, learning about Manchester's industrial past. Moderate ride, mostly flat, about 2 hours with a break in Worsley Village.",
					"A pleasant 11km ride along the Trans Pennine Trail from Didsbury to Stockport. Suitable for all levels, mostly flat, and takes about 1.5 hours. Enjoy parks and green spaces along the way.",
					"A 20km journey from Manchester to Altrincham, using quiet roads and the Bridgewater Way. Moderate difficulty, expect 2.5 hours including a lunch stop at Altrincham Market.",
					"Start your day with a brisk 7km city ride, finishing at a local café for fresh coffee. Easy, social, and takes about 1 hour—perfect for early risers and commuters.",
					"Explore 13km of Manchester's parks in one ride—Platt Fields, Alexandra Park, and Whitworth Park. Leisurely pace, about 2 hours, suitable for all and full of greenery.",
					"A gentle 8km evening ride along Castlefield's canals. Flat and easy, about 1.5 hours, ending with a drink at a canalside pub. Great for unwinding and socialising.",
					"A supportive 10km ride for women of all abilities. Flat, friendly, and takes about 1.5 hours. We'll stop for a chat and refreshments—ideal for building confidence.",
					"Cycle 15km from the city centre to Sale Water Park. Mostly flat, moderate pace, about 2 hours. We'll have a picnic by the lake—bring snacks and a blanket!",
					"A short 5km evening ride along the famous Curry Mile, ending with a group meal. Easy, social, and takes about 1 hour. Come hungry and ready for great food!",
					"Follow the Rochdale Canal towpath for 22km, passing Ancoats and Failsworth. Moderate ride, mostly flat, about 2.5 hours with a café stop. Good for intermediate cyclists.",
					"A relaxed 9km evening ride to Didsbury Village, with a stop for ice cream. Easy, flat, and takes about 1.5 hours. Perfect for a summer evening.",
					"A colourful 8km LGBTQ+ Pride Ride through Manchester's landmarks, finishing at Canal Street. Easy, inclusive, and takes about 1.5 hours. All are welcome—bring your rainbow gear!",
					"Explore 12km of Ancoats and its vibrant neighbourhoods. Moderate pace, about 1.5 hours, with stops for local history and hidden gems.",
					"A 10km waterfront ride around MediaCityUK. Flat and easy, about 1.5 hours, with plenty of photo opportunities by the water.",
					"A 7km picnic cycle to Longford Park. Family-friendly, flat, and takes about 1 hour. We'll relax and share snacks in the park.",
					"A 6km family day at Wythenshawe Park. Easy, slow-paced, about 1 hour, with games and activities for kids.",
					"A 13km stadium tour ride to Old Trafford. Moderate, mostly flat, about 1.5 hours, with a stadium photo stop.",
					"A 9km loop to Levenshulme Market. Easy, social, about 1.5 hours, with time to browse local stalls.",
					"A 15km adventure in Prestwich Forest Park. Moderate, some gentle hills, about 2 hours, with woodland trails.",
					"A 10km social ride along Salford Greenway. Flat, easy, about 1.5 hours, with a café break.",
					"A 7km ride from Stretford to Chorlton. Easy, flat, about 1 hour, with a riverside stop.",
					"A 6km nature trail in Northern Moor. Family-friendly, flat, about 1 hour, with wildlife spotting.",
					"A 12km shopping cycle to Trafford Centre. Moderate, mostly flat, about 1.5 hours, with time for shopping.",
					"A 9km community ride in Moss Side. Easy, social, about 1 hour, with local history stops.",
					"A 10km art and history tour in Hulme. Flat, easy, about 1.5 hours, with stories from the past.",
					"A 7km heritage ride to Victoria Baths. Easy, flat, about 1 hour, with a guided tour.",
					"A 12km cultural cycle in Cheetham Hill. Moderate, some gentle hills, about 1.5 hours, with food stops.",
					"A 9km village loop in Withington. Easy, social, about 1 hour, with a pub stop.",
					"A 10km reservoir ride in Gorton. Flat, easy, about 1.5 hours, with lakeside views.",
					"A 14km perimeter ride at Manchester Airport. Moderate, some hills, about 2 hours, with plane spotting.",
					"A 7km riverside cycle on Dane Road. Easy, flat, about 1 hour, with a riverside picnic.",
					"A 10km explorer ride in Urmston Meadows. Flat, easy, about 1.5 hours, with nature stops.",
					"A 9km canal path ride in Eccles. Easy, flat, about 1 hour, with a café break.",
					"A 12km social ride in Swinton Park. Moderate, some gentle hills, about 1.5 hours, with park views.",
					"A 10km woods adventure in Walkden. Easy, flat, about 1.5 hours, with woodland trails.",
					"A 13km ride from Radcliffe to Bury. Moderate, mostly flat, about 1.5 hours, with a market stop.",
					"A 7km evening spin in Whitefield. Easy, social, about 1 hour, with a pub finish.",
					"A 12km circular ride in Middleton. Moderate, some hills, about 1.5 hours, with local sights.",
					"A 9km forest ride in Blackley. Easy, flat, about 1 hour, with forest trails.",
					"A 10km community cycle in Harpurhey. Flat, easy, about 1.5 hours, with local history.",
					"A 7km greenway ride in Newton Heath. Easy, flat, about 1 hour, with park stops.",
					"A 10km brook explorer in Moston. Flat, easy, about 1.5 hours, with nature views.",
					"A 12km canal loop in Failsworth. Moderate, mostly flat, about 1.5 hours, with a café break.",
					"A 9km ride from Droylsden to Ashton. Easy, flat, about 1 hour, with a riverside finish.",
					"A 10km reservoirs tour in Audenshaw. Flat, easy, about 1.5 hours, with water views.",
					"A 7km park ride in Denton. Easy, family-friendly, about 1 hour, with playground stops.",
					"A 13km cycle from Hyde to Stockport. Moderate, some hills, about 1.5 hours, with a café stop.",
					"A 9km adventure in Reddish Vale. Easy, flat, about 1 hour, with nature trails.",
					"A 10km heritage ride in Heald Green. Flat, easy, about 1.5 hours, with local history.",
					"A 7km social ride in Cheadle Village. Easy, flat, about 1 hour, with a coffee stop.",
					"A 10km green spaces ride in Gatley. Flat, easy, about 1.5 hours, with park views.",
					"A 12km loop from Burnage to Didsbury. Moderate, mostly flat, about 1.5 hours, with a riverside break.",
					"A 9km explorer ride in East Didsbury. Easy, flat, about 1 hour, with a café stop.",
					"A 10km garden ride in Chorltonville. Flat, easy, about 1.5 hours, with garden views.",
					"A 7km community cycle in Sale Moor. Easy, family-friendly, about 1 hour, with a park stop.",
					"A 10km park loop in Brooklands. Flat, easy, about 1.5 hours, with playground stops.",
					"A 12km trail ride in Timperley. Moderate, some gentle hills, about 1.5 hours, with countryside views.",
					"A 9km social ride to Altrincham Market. Easy, flat, about 1 hour, with time for shopping.",
					"A 10km heritage ride in Hale Barns. Flat, easy, about 1.5 hours, with local sights.",
					"A 7km hill climb in Bowdon. Moderate, hilly, about 1 hour, with a rewarding view.",
					"A 10km deer park ride in Dunham Massey. Flat, easy, about 1.5 hours, with deer spotting.",
					"A 12km riverside cycle in Partington. Moderate, mostly flat, about 1.5 hours, with water views.",
					"A 9km adventure in Carrington Moss. Easy, flat, about 1 hour, with nature trails.",
					"A 10km ride from Irlam to Cadishead. Flat, easy, about 1.5 hours, with a riverside finish.",
					"A 7km explorer ride in Worsley Woods. Easy, family-friendly, about 1 hour, with woodland stops.",
					"A 10km canal path ride in Boothstown. Flat, easy, about 1.5 hours, with water views.",
					"A 12km ride from Walkden to Little Hulton. Moderate, some gentle hills, about 1.5 hours, with park stops.",
					"A 9km heritage tour in Tyldesley. Easy, flat, about 1 hour, with local history.",
					"A 10km greenway ride in Atherton. Flat, easy, about 1.5 hours, with countryside views.",
					"A 7km sports village cycle in Leigh. Easy, family-friendly, about 1 hour, with a stadium stop.",
					"A 10km circular ride in Westhoughton. Flat, easy, about 1.5 hours, with local sights.",
					"A 12km hills ride in Horwich. Moderate, hilly, about 1.5 hours, with great views.",
					"A 9km trail from Bolton to Bury. Easy, flat, about 1 hour, with a café stop.",
					"A 10km ride from Radcliffe to Prestwich. Flat, easy, about 1.5 hours, with park views.",
					"A 7km loop from Whitefield to Radcliffe. Easy, flat, about 1 hour, with a riverside finish.",
					"A 10km social ride in Besses o' th' Barn. Flat, easy, about 1.5 hours, with a pub stop.",
					"A 12km explorer ride in Unsworth Moss. Moderate, some gentle hills, about 1.5 hours, with nature trails.",
					"A 9km heritage ride in Heywood. Easy, flat, about 1 hour, with local history.",
					"A 10km cycle from Middleton to Heywood. Flat, easy, about 1.5 hours, with a café break.",
					"A 7km canal adventure in Rochdale. Easy, family-friendly, about 1 hour, with water views.",
					"A 10km moorland ride in Milnrow. Flat, easy, about 1.5 hours, with countryside views.",
					"A 12km lakeside cycle in Littleborough. Moderate, mostly flat, about 1.5 hours, with lake views.",
					"A 9km explorer ride at Hollingworth Lake. Easy, flat, about 1 hour, with nature stops.",
					"A 10km social ride in Smithy Bridge. Flat, easy, about 1.5 hours, with a pub stop.",
					"A 7km nature trail in Newhey. Easy, family-friendly, about 1 hour, with woodland stops.",
					"A 10km ride in Shaw and Crompton. Flat, easy, about 1.5 hours, with park views.",
					"A 12km greenway ride in Royton. Moderate, some gentle hills, about 1.5 hours, with countryside views.",
					"A 9km park cycle at Chadderton Hall. Easy, flat, about 1 hour, with playground stops.",
					"A 10km ride from Failsworth to Oldham. Flat, easy, about 1.5 hours, with a café break.",
					"A 7km adventure on Oldham Edge. Moderate, some hills, about 1 hour, with great views.",
					"A 10km moor explorer in Saddleworth. Flat, easy, about 1.5 hours, with moorland views.",
					"A 12km reservoir ride in Greenfield. Moderate, mostly flat, about 1.5 hours, with water views.",
					"A 9km village loop in Mossley. Easy, flat, about 1 hour, with a pub stop.",
					"A 10km canal path ride in Stalybridge. Flat, easy, about 1.5 hours, with water views.",
					"A 7km heritage ride in Dukinfield. Easy, family-friendly, about 1 hour, with local history.",
					"A 10km park social in Hyde. Flat, easy, about 1.5 hours, with a café stop.",
					"A 12km brook explorer in Godley. Moderate, some gentle hills, about 1.5 hours, with nature trails."
				};

				var baseDate = new DateTime(2025, 6, 27); // June 27, 2025
				var events = new List<CycleEvent>();
				var rand = new Random();

				for (int i = 0; i < 100; i++)
				{
					int dateOffset = i * 2 - 40;
					var eventDate = baseDate.AddDays(dateOffset);

					events.Add(new CycleEvent
					{
						Id = i + 1,
						Name = names[i % names.Count],
						Description = descriptions[i % descriptions.Count],
						Date = eventDate,
						Location = locations[i % locations.Count],
						Attendees = new List<int>(), // or List<User> if you have a User class
						MaxAttendees = rand.Next(10, 110)
					});
				}

				return events;
			}
		}
	}
}