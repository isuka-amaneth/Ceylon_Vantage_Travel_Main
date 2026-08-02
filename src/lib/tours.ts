import type { ExperienceTag } from "./destinations";

export type ItineraryStop = {
  time: string;
  title: string;
  description: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type Tour = {
  slug: string;
  title: string;
  tagline: string;
  region: string;
  duration: string; // e.g. "1 Day" or "4 Days / 3 Nights"
  tourType: string; // e.g. "Private" or "Private, small group on request"
  vehicle: string;
  languages: string;
  overview: string;
  highlights: Highlight[];
  itinerary: ItineraryStop[];
  inclusions: string[];
  exclusions: string[];
  travelTips: string[];
  /** Slugs of related destinations this tour touches, linking back into /destinations */
  relatedDestinationSlugs: string[];
  tags: ExperienceTag[];
  heroImage: string;
  /**
   * 2-3 photos that rotate as a slideshow on the card and the detail-page
   * banner. images[0] should be the same file as heroImage. Any path
   * without a file yet is simply skipped once at least one image loads.
   */
  images: string[];
};

export const tours: Tour[] = [
  {
    slug: "ella-full-day-tour",
    title: "Ella Full-Day Tour",
    tagline: "Hill country hiking, the Nine Arches Bridge, and tea country in one day",
    region: "Hill Country",
    duration: "1 Day",
    tourType: "Private",
    vehicle: "AC Vehicle",
    languages: "English",
    overview:
      "A full day through Sri Lanka's hill country, built around the things that actually make Ella worth the drive: an easy morning hike with panoramic views, the country's most photographed railway bridge, a working tea estate, and one of the south's widest waterfalls. Paced so you're never rushing between stops.",
    highlights: [
      { title: "Nine Arches Bridge", description: "A colonial-era railway viaduct set against jungle — especially striking if a train happens to cross while you're there." },
      { title: "Little Adam's Peak", description: "An easy hike rewarded with sweeping views over the Ella Gap and surrounding tea country." },
      { title: "Ravana Falls", description: "One of the widest waterfalls in Sri Lanka, tied to local Ramayana legend." },
      { title: "Tea Estate Visit", description: "Walk through working tea fields and see how Ceylon tea actually gets made." },
    ],
    itinerary: [
      { time: "6:00 AM", title: "Pickup", description: "Your driver collects you from your hotel for the scenic drive up into the highlands." },
      { time: "8:30 AM", title: "Little Adam's Peak", description: "An easy morning hike — the best light and clearest views are early, before cloud rolls in." },
      { time: "10:30 AM", title: "Nine Arches Bridge", description: "Time here loosely around the train schedule where possible, for a chance to see it cross." },
      { time: "12:30 PM", title: "Lunch in Ella", description: "A relaxed stop in the village — cafés, local shops, and a breather before the afternoon." },
      { time: "2:00 PM", title: "Tea Estate", description: "A working tea factory visit, with a taste of fresh Ceylon tea." },
      { time: "3:30 PM", title: "Ravana Falls", description: "A good spot to cool off and take photos before the drive back." },
      { time: "5:00 PM", title: "Return Journey", description: "Scenic drive back down out of the highlands." },
      { time: "7:30 PM", title: "Drop-off", description: "Back at your hotel." },
    ],
    inclusions: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "Hotel pickup & drop-off",
      "Fuel and toll charges",
      "Bottled water throughout the day",
    ],
    exclusions: [
      "Entrance fees to attractions",
      "Meals and beverages",
      "Personal travel insurance",
      "Tips and gratuities (optional)",
    ],
    travelTips: [
      "Wear proper walking shoes — the Little Adam's Peak trail is well-maintained but does involve steps",
      "Start early for the clearest views and to avoid afternoon cloud cover",
      "Bring a light jacket — hill country mornings are noticeably cooler than the coast",
    ],
    relatedDestinationSlugs: ["ella", "nuwara-eliya"],
    tags: ["hill-country-hiking", "photography", "family-travel"],
    heroImage: "/images/tours/ella-full-day-tour.jpg",
    images: [
      "/images/tours/ella-full-day-tour.jpg",
      "/images/tours/ella-full-day-tour-2.jpg",
      "/images/tours/ella-full-day-tour-3.jpg",
    ],
  },
  {
    slug: "yala-safari",
    title: "Yala National Park Safari",
    tagline: "One of the world's highest densities of leopards, tracked with a local guide",
    region: "Southeast Coast",
    duration: "1 Day / Half Day",
    tourType: "Private",
    vehicle: "4x4 Jeep",
    languages: "English",
    overview:
      "A private jeep safari through Yala, timed around the early-morning and late-afternoon windows when wildlife is actually active — not the middle of the day when the park goes quiet. Built around real sighting odds, not a fixed script.",
    highlights: [
      { title: "Leopard Tracking", description: "Yala has one of the highest leopard densities anywhere in the world." },
      { title: "Elephant Herds", description: "Along with sloth bears, crocodiles, and a wide range of birdlife across the park's wetlands." },
      { title: "Golden-Hour Timing", description: "Safari timed for the early morning or late afternoon, when animals are genuinely active." },
    ],
    itinerary: [
      { time: "5:00 AM", title: "Early Pickup", description: "Early start for the best chance of sightings before the heat sets in." },
      { time: "6:00 AM", title: "Park Entry", description: "Jeep safari begins, tracking wildlife through scrub jungle, wetlands, and lagoons." },
      { time: "10:30 AM", title: "Exit & Breakfast", description: "Late breakfast or brunch after the morning safari." },
      { time: "3:30 PM", title: "Optional Afternoon Safari", description: "A second drive for the late-afternoon activity window, if you've booked the full-day option." },
    ],
    inclusions: [
      "Private 4x4 jeep",
      "Experienced safari driver-guide",
      "Hotel pickup & drop-off (Tissamaharama / Yala area)",
    ],
    exclusions: [
      "Yala National Park entrance fees",
      "Meals",
      "Accommodation",
    ],
    travelTips: [
      "Sightings are never guaranteed anywhere in the wild — a good guide meaningfully improves the odds, but nothing is certain",
      "The park sometimes closes for a few weeks in September/October for annual maintenance — worth checking before booking",
    ],
    relatedDestinationSlugs: ["yala", "udawalawe"],
    tags: ["wildlife-safari", "photography", "family-travel"],
    heroImage: "/images/tours/yala-safari.jpg",
    images: [
      "/images/tours/yala-safari.jpg",
      "/images/tours/yala-safari-2.jpg",
      "/images/tours/yala-safari-3.jpg",
    ],
  },
  {
    slug: "udawalawe-elephant-safari",
    title: "Udawalawe Elephant Safari",
    tagline: "Some of the most reliable wild elephant sightings in Asia",
    region: "Southeast",
    duration: "1 Day / Half Day",
    tourType: "Private",
    vehicle: "4x4 Jeep",
    languages: "English",
    overview:
      "Udawalawe's open grassland and reservoir make elephant sightings considerably more consistent than most parks — a strong choice if seeing elephants is the priority, especially for families or travelers with limited time for a second safari.",
    highlights: [
      { title: "Reliable Elephant Herds", description: "Several hundred wild elephants call the park home, with sightings far more consistent than most other reserves." },
      { title: "Elephant Transit Home", description: "A nearby rehabilitation centre caring for orphaned calves before their release back into the wild." },
      { title: "Reservoir Birdlife", description: "Strong birdwatching around the Udawalawe Reservoir that anchors the park." },
    ],
    itinerary: [
      { time: "6:00 AM", title: "Pickup", description: "Early start for the best light and wildlife activity." },
      { time: "6:45 AM", title: "Jeep Safari", description: "Focused on elephant herds across the park's open grassland." },
      { time: "10:00 AM", title: "Elephant Transit Home", description: "A public feeding session for orphaned calves, if timing allows." },
      { time: "11:30 AM", title: "Return", description: "Drop-off back at your hotel or onward to your next stop." },
    ],
    inclusions: [
      "Private 4x4 jeep",
      "Experienced driver-guide",
      "Hotel pickup & drop-off",
    ],
    exclusions: [
      "Udawalawe National Park entrance fees",
      "Elephant Transit Home entrance fee",
      "Meals",
    ],
    travelTips: [
      "A good pairing with Yala if you have time for two safaris on a southern-circuit trip",
      "Bring binoculars if birdwatching interests you — the reservoir edge is particularly good for it",
    ],
    relatedDestinationSlugs: ["udawalawe", "yala"],
    tags: ["wildlife-safari", "family-travel"],
    heroImage: "/images/tours/udawalawe-elephant-safari.jpg",
    images: [
      "/images/tours/udawalawe-elephant-safari.jpg",
      "/images/tours/udawalawe-elephant-safari-2.jpg",
      "/images/tours/udawalawe-elephant-safari-3.jpg",
    ],
  },
  {
    slug: "cultural-triangle-explorer",
    title: "Cultural Triangle Explorer",
    tagline: "Four days through Sri Lanka's ancient capitals and ruins",
    region: "Cultural Triangle",
    duration: "4 Days / 3 Nights",
    tourType: "Private",
    vehicle: "AC Vehicle",
    languages: "English",
    overview:
      "A deep pass through Sri Lanka's ancient heartland — Sigiriya's rock fortress, the vast ruins of Anuradhapura and Polonnaruwa, and Kandy's Temple of the Sacred Tooth Relic. Several UNESCO World Heritage Sites in one unhurried circuit, with a private driver throughout.",
    highlights: [
      { title: "Sigiriya Rock Fortress", description: "The 5th-century rock palace that anchors the whole region." },
      { title: "Anuradhapura & Polonnaruwa", description: "Sri Lanka's two ancient capitals, spanning over a thousand years of history between them." },
      { title: "Temple of the Sacred Tooth Relic", description: "Kandy's most significant pilgrimage site, closing out the circuit." },
    ],
    itinerary: [
      { time: "Day 1", title: "Sigiriya", description: "Climb the rock fortress and, if time allows, the Pidurangala viewpoint opposite it for the classic photo." },
      { time: "Day 2", title: "Polonnaruwa", description: "A day exploring Sri Lanka's second ancient capital, including the Gal Vihara rock-cut Buddha statues." },
      { time: "Day 3", title: "Anuradhapura", description: "The island's first ancient capital, home to the Sri Maha Bodhi sacred tree and its massive dagobas." },
      { time: "Day 4", title: "Kandy", description: "The Temple of the Sacred Tooth Relic and Kandy Lake, before dropping you at your next stop or the airport." },
    ],
    inclusions: [
      "Private air-conditioned vehicle for all 4 days",
      "English-speaking driver throughout",
      "Fuel and toll charges",
      "Flexible daily pacing",
    ],
    exclusions: [
      "Accommodation",
      "Entrance fees to sites",
      "Meals",
    ],
    travelTips: [
      "Sigiriya's climb is best done first thing in the morning, before the heat and crowds build",
      "Comfortable, sturdy shoes matter for this trip more than most — several sites involve uneven ancient stonework",
    ],
    relatedDestinationSlugs: ["sigiriya", "polonnaruwa", "anuradhapura", "kandy"],
    tags: ["cultural-heritage", "photography"],
    heroImage: "/images/tours/cultural-triangle-explorer.jpg",
    images: [
      "/images/tours/cultural-triangle-explorer.jpg",
      "/images/tours/cultural-triangle-explorer-2.jpg",
      "/images/tours/cultural-triangle-explorer-3.jpg",
    ],
  },
  {
    slug: "southern-coast-beach-circuit",
    title: "Southern Coast & Beach Circuit",
    tagline: "Five days of colonial charm and coastline, from Galle to Mirissa",
    region: "South Coast",
    duration: "5 Days / 4 Nights",
    tourType: "Private",
    vehicle: "AC Vehicle",
    languages: "English",
    overview:
      "A relaxed run down the south coast — Galle's Dutch fort, Bentota's river and beach mix, and Mirissa's whale watching — with a private driver handling every leg so the whole trip stays unhurried.",
    highlights: [
      { title: "Galle Fort", description: "A UNESCO World Heritage Dutch colonial fort, best explored on foot along the ramparts." },
      { title: "Bentota River & Beach", description: "A mix of river safaris and open-ocean beach time." },
      { title: "Mirissa Whale Watching", description: "One of the most reliable places on earth to see blue whales, in season." },
    ],
    itinerary: [
      { time: "Day 1", title: "Bentota", description: "River safari through mangroves, then beach time to settle in." },
      { time: "Day 2", title: "Bentota → Galle", description: "Drive down the coast, afternoon exploring Galle Fort's ramparts and boutique streets." },
      { time: "Day 3", title: "Galle → Mirissa", description: "A short drive onward, afternoon free on Mirissa Beach." },
      { time: "Day 4", title: "Mirissa Whale Watching", description: "An early-morning boat trip, best November through April." },
      { time: "Day 5", title: "Departure", description: "Onward transfer to your next stop or the airport." },
    ],
    inclusions: [
      "Private air-conditioned vehicle for all 5 days",
      "English-speaking driver throughout",
      "Fuel and toll charges",
    ],
    exclusions: [
      "Accommodation",
      "Whale watching boat tickets",
      "Meals",
      "Entrance fees",
    ],
    travelTips: [
      "Whale watching boats leave early, around 6-7am — choose an operator that limits boat numbers near the whales",
      "This route works well in either direction depending on where your trip starts or ends",
    ],
    relatedDestinationSlugs: ["bentota", "galle", "mirissa"],
    tags: ["beach-coast", "honeymoon", "wildlife-safari"],
    heroImage: "/images/tours/southern-coast-beach-circuit.jpg",
    images: [
      "/images/tours/southern-coast-beach-circuit.jpg",
      "/images/tours/southern-coast-beach-circuit-2.jpg",
      "/images/tours/southern-coast-beach-circuit-3.jpg",
    ],
  },
  {
    slug: "adams-peak-pilgrimage-climb",
    title: "Adam's Peak Pilgrimage Climb",
    tagline: "A night climb up Sri Lanka's sacred mountain, timed for sunrise at the summit",
    region: "Hill Country",
    duration: "Overnight Climb",
    tourType: "Private",
    vehicle: "AC Vehicle",
    languages: "English",
    overview:
      "A driver takes you to the base of Adam's Peak in time for a midnight start, so you're climbing through the night the way pilgrims have for over a thousand years — reaching the summit for sunrise and the mountain's distinctive shadow over the landscape below.",
    highlights: [
      { title: "Sunrise Summit", description: "Timed to reach the top as the sun comes up over the hill country." },
      { title: "The Night Climb Itself", description: "Thousands of stone steps lit along the route — a genuinely unusual experience even before the summit." },
      { title: "The Mountain's Shadow", description: "Adam's Peak casts a distinctive triangular shadow over the landscape shortly after sunrise." },
    ],
    itinerary: [
      { time: "10:00 PM", title: "Hotel Pickup", description: "Drive to the base of the climb at Nallathanniya/Dalhousie." },
      { time: "12:00 AM", title: "Climb Begins", description: "A steady, paced ascent through the night." },
      { time: "5:00 AM", title: "Summit", description: "Arrive in time for sunrise, weather permitting." },
      { time: "9:00 AM", title: "Descent & Return", description: "Climb back down and drive back to your hotel to rest." },
    ],
    inclusions: [
      "Private air-conditioned vehicle to and from the base",
      "English-speaking driver",
    ],
    exclusions: [
      "Accommodation before/after the climb",
      "Food and water during the climb",
      "A hiking guide (available on request)",
    ],
    travelTips: [
      "Around 5,000 steps — physically demanding but achievable at a slow, steady pace for most reasonably fit travelers",
      "Best attempted during pilgrimage season, December to May, when the route is lit and well-trafficked",
      "Bring a warm layer — it's genuinely cold at the summit before sunrise, even though Sri Lanka is tropical",
    ],
    relatedDestinationSlugs: ["adams-peak", "nuwara-eliya"],
    tags: ["hill-country-hiking", "cultural-heritage"],
    heroImage: "/images/tours/adams-peak-pilgrimage-climb.jpg",
    images: [
      "/images/tours/adams-peak-pilgrimage-climb.jpg",
      "/images/tours/adams-peak-pilgrimage-climb-2.jpg",
      "/images/tours/adams-peak-pilgrimage-climb-3.jpg",
    ],
  },

  {
    slug: "colombo-negombo-stopover",
    title: "Colombo & Negombo Stopover",
    tagline: "A relaxed way to start or end your trip, built around an early or late flight",
    region: "Western Province",
    duration: "1 Day",
    tourType: "Private",
    vehicle: "AC Vehicle",
    languages: "English",
    overview:
      "Built for the awkward gap around a flight — a half-day in Colombo's colonial streets and markets, then down the coast to Negombo to unwind before an early departure, with a private driver handling every leg so you're never scrambling for transport.",
    highlights: [
      { title: "Colonial Colombo", description: "Galle Face Green, Pettah Market, and the mix of colonial and modern architecture around Fort." },
      { title: "Negombo Fish Market", description: "One of the liveliest working fish markets on the west coast." },
      { title: "Airport-Ready Timing", description: "Routed and timed around your actual flight, not a fixed schedule." },
    ],
    itinerary: [
      { time: "9:00 AM", title: "Pickup in Colombo", description: "Start with Galle Face Green and the Fort area's colonial architecture." },
      { time: "11:00 AM", title: "Pettah Market", description: "A walk through the city's dense, chaotic market streets." },
      { time: "1:00 PM", title: "Lunch", description: "A relaxed local lunch stop in the city." },
      { time: "2:30 PM", title: "Drive to Negombo", description: "About 45 minutes up the coast toward the airport." },
      { time: "3:30 PM", title: "Negombo Beach & Fish Market", description: "Time to unwind before your onward flight or overnight stay." },
      { time: "Flexible", title: "Airport Drop-off", description: "Timed around your actual departure." },
    ],
    inclusions: [
      "Private air-conditioned vehicle",
      "English-speaking driver",
      "Fuel and toll charges",
      "Flexible timing built around your flight",
    ],
    exclusions: [
      "Meals and beverages",
      "Entrance fees",
      "Accommodation",
    ],
    travelTips: [
      "This works well in either direction — as a first-day introduction or a last-day wind-down before a flight",
      "Tell us your flight time when booking and we'll build the schedule around it",
    ],
    relatedDestinationSlugs: ["colombo", "negombo"],
    tags: ["cultural-heritage", "family-travel"],
    heroImage: "/images/tours/colombo-negombo-stopover.jpg",
    images: [
      "/images/tours/colombo-negombo-stopover.jpg",
      "/images/tours/colombo-negombo-stopover-2.jpg",
      "/images/tours/colombo-negombo-stopover-3.jpg",
    ],
  },
  {
    slug: "wilpattu-wildlife-safari",
    title: "Wilpattu Wildlife Safari",
    tagline: "A quieter alternative to Yala, built around the park's unique natural lakes",
    region: "Northwest",
    duration: "1 Day",
    tourType: "Private",
    vehicle: "4x4 Jeep",
    languages: "English",
    overview:
      "Wilpattu sees a fraction of Yala's crowds despite being Sri Lanka's largest national park. This safari is built around its distinctive villu lake system, tracking leopards and sloth bears at a slower, quieter pace than the more popular southern parks.",
    highlights: [
      { title: "The Villu Lake System", description: "Natural sand-rimmed lakes found nowhere else in Sri Lanka, and the heart of the park's ecosystem." },
      { title: "Leopards & Sloth Bears", description: "A genuine wildlife park experience, without Yala's crowds." },
      { title: "Birdlife", description: "Excellent birdwatching around the villus, especially early morning." },
    ],
    itinerary: [
      { time: "5:30 AM", title: "Early Pickup", description: "An early start for the best wildlife activity, before the day heats up." },
      { time: "6:30 AM", title: "Park Entry & Safari", description: "Tracking wildlife through Wilpattu's scrub jungle and villu lakes." },
      { time: "11:00 AM", title: "Exit & Late Breakfast", description: "A relaxed breakfast after the morning safari." },
    ],
    inclusions: [
      "Private 4x4 jeep",
      "Experienced safari driver-guide",
      "Hotel pickup & drop-off (Wilpattu / Anuradhapura area)",
    ],
    exclusions: [
      "Wilpattu National Park entrance fees",
      "Meals",
      "Accommodation",
    ],
    travelTips: [
      "Pairs naturally with a Cultural Triangle trip, since Anuradhapura is close by",
      "Sightings take a little more patience than Yala, but the park feels considerably wilder for it",
    ],
    relatedDestinationSlugs: ["wilpattu", "anuradhapura"],
    tags: ["wildlife-safari", "photography"],
    heroImage: "/images/tours/wilpattu-wildlife-safari.jpg",
    images: [
      "/images/tours/wilpattu-wildlife-safari.jpg",
      "/images/tours/wilpattu-wildlife-safari-2.jpg",
      "/images/tours/wilpattu-wildlife-safari-3.jpg",
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
