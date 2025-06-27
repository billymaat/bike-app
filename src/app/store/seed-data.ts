import { CycleEvent } from "../models/cycle-event";

export const SeedData: CycleEvent[] = (() => {
    const names = [
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
    ];
    const locations = [
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
        "Stalybridge, Manchester", "Dukinfield, Manchester", "Hyde Park, Hyde", "Godley Brook, Hyde"
    ];
    const descriptions = [
        "Join us for a relaxed evening ride through the heart of Manchester, exploring the vibrant city centre and its historic landmarks. Perfect for all abilities, this ride will take in sights such as the Manchester Town Hall, the Northern Quarter, and the canals.",
        "A scenic loop around Chorlton Water Park and the River Mersey. Enjoy the peaceful surroundings and spot local wildlife as we cycle along well-maintained paths. Suitable for families and beginners.",
        "Challenge yourself with a ride out to the edge of the Peak District. We'll tackle some hills and enjoy breathtaking views over the countryside. Bring snacks and plenty of water for this longer ride.",
        "A friendly group ride along the Fallowfield Loop, Manchester's popular traffic-free cycle path. We'll stop for coffee and cake at a local café along the way.",
        "Experience the beauty of Salford Quays at sunset. We'll cycle past MediaCityUK, the Lowry, and the Imperial War Museum North, finishing with drinks by the water.",
        "Bring the whole family for a gentle ride around Heaton Park, one of the largest municipal parks in Europe. We'll explore the gardens, woodlands, and lakes.",
        "Test your commuting skills on Manchester's busiest cycle corridor. We'll discuss safe cycling tips and best routes for daily travel.",
        "Discover Manchester's famous street art on a guided cycle tour through the Northern Quarter. We'll stop to admire murals and learn about the artists.",
        "Cycle along the historic Bridgewater Canal, learning about its role in Manchester's industrial past. We'll visit Worsley Village and enjoy canal-side refreshments.",
        "A pleasant ride along the Trans Pennine Trail from Didsbury to Stockport, passing through parks and green spaces. Suitable for all levels.",
        "Cycle from Manchester city centre to the market town of Altrincham, enjoying quiet roads and the scenic Bridgewater Way. We'll stop at Altrincham Market for lunch.",
        "Start your day with a brisk ride through the city, finishing at a local café for fresh coffee and pastries. A great way to meet fellow cyclists.",
        "Explore several of Manchester's beautiful parks in one ride, including Platt Fields, Alexandra Park, and Whitworth Park. We'll take a leisurely pace and enjoy the greenery.",
        "A gentle evening ride along the canals of Castlefield, taking in the historic warehouses and bridges. We'll finish with a drink at a canalside pub.",
        "A supportive and friendly ride for women of all abilities. We'll cycle a flat route and stop for a chat and refreshments.",
        "Cycle from the city centre to Sale Water Park, enjoying riverside paths and open spaces. We'll have a picnic by the lake.",
        "A short evening ride along the famous Curry Mile, finishing with a group meal at one of Rusholme's renowned restaurants.",
        "Follow the Rochdale Canal towpath from Manchester to Rochdale, passing through Ancoats and Failsworth. We'll stop for refreshments along the way.",
        "A relaxed evening ride from the city centre to Didsbury Village, with a stop for ice cream at a local parlour.",
        "Celebrate diversity and inclusion with a colourful ride through Manchester's LGBTQ+ landmarks, finishing at Canal Street.",
        "Explore the vibrant neighborhoods and green spaces of Manchester on this guided cycle ride. Suitable for all levels, with plenty of stops to enjoy local sights and refreshments.",
        "A scenic ride along rivers, canals, and parks, taking in the best of Greater Manchester's cycling infrastructure. Perfect for those looking to discover new routes.",
        "Join fellow cyclists for a social ride through historic districts, leafy suburbs, and bustling markets. We'll stop for coffee and cake along the way.",
        "A family-friendly cycle event with a relaxed pace, ideal for beginners and children. Enjoy the fresh air and meet new friends.",
        "Challenge yourself with a longer ride through rolling countryside and picturesque villages. Bring snacks and water for this adventurous outing."
    ];
    const baseDate = new Date(2025, 5, 27); // June 27, 2025
    const events: CycleEvent[] = [];
    for (let i = 0; i < 100; i++) {
        const dateOffset = i * 2 - 40;
        const eventDate = new Date(baseDate);
        eventDate.setDate(baseDate.getDate() + dateOffset);
        events.push({
            id: i + 1,
            name: names[i % names.length],
            description: descriptions[i % descriptions.length],
            date: eventDate,
            location: locations[i % locations.length]
        });
    }
    return events;
})();