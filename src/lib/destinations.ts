export type ExperienceTag =
  | "honeymoon"
  | "wildlife-safari"
  | "cultural-heritage"
  | "hill-country-hiking"
  | "beach-coast"
  | "food-tea"
  | "photography"
  | "family-travel";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  elevation: string; // ties into the ridge-line/eyebrow motif used sitewide
  tagline: string;
  overview: string;
  history: string;
  bestTime: string;
  suggestedDuration: string;
  activities: string[];
  travelTips: string[];
  nearby: { name: string; slug: string }[];
  /** Real hotel recommendations near this destination, with booking links. */
  hotels: { name: string; link: string }[];
  /** Which travel-type pages (Experiences) this destination should appear under. */
  tags: ExperienceTag[];
  /**
   * Expected image path for the primary photo. Drop a licensed photo at
   * this exact path in /public and it will appear automatically -- no
   * code changes needed. Recommended size: 1600x1000px, landscape.
   */
  heroImage: string;
  /**
   * 2-3 photos that rotate as a slideshow on the card and the detail-page
   * banner. images[0] should be the same file as heroImage. Any path that
   * doesn't have a file yet is simply skipped once at least one image in
   * the set loads successfully.
   */
  images: string[];
};

export const destinations: Destination[] = [
  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    elevation: "200M ROCK",
    tagline: "An ancient rock fortress rising straight out of the jungle",
    overview:
      "Sigiriya is a sheer column of rock rising almost 200 metres above the surrounding plain, crowned with the ruins of a 5th-century royal palace. The climb up passes frescoed galleries, a mirror wall covered in centuries-old graffiti, and the giant carved lion's paws that give the site its name — Lion Rock.",
    history:
      "Built by King Kashyapa around 477 AD as a fortified palace, Sigiriya combines engineering, art, and landscape design that was remarkably advanced for its era, including some of the earliest surviving formal gardens in Asia. It's a UNESCO World Heritage Site.",
    bestTime: "January to March, during the dry season in the Cultural Triangle",
    suggestedDuration: "Half a day, or a full day paired with nearby Dambulla",
    activities: [
      "Climb to the summit for panoramic views over the plains",
      "See the Sigiriya frescoes and mirror wall",
      "Visit the Pidurangala Rock viewpoint opposite Sigiriya for the classic photo of the fortress itself",
      "Combine with the Dambulla Cave Temple, 20 minutes away",
    ],
    travelTips: [
      "Start early — the climb has little shade and gets hot and crowded by mid-morning",
      "Wear proper shoes; the final ascent involves narrow metal stairways",
      "Not recommended for those with a fear of heights or mobility concerns",
    ],
    nearby: [
      { name: "Dambulla", slug: "dambulla" },
      { name: "Ella", slug: "ella" },
      { name: "Nuwara Eliya", slug: "nuwara-eliya" },
    ],
    tags: ["cultural-heritage", "photography"],
    hotels: [
      { name: "Heritance Kandalama", link: "https://www.booking.com/searchresults.html?ss=Heritance+Kandalama+Sri+Lanka" },
      { name: "Jetwing Vil Uyana", link: "https://www.booking.com/searchresults.html?ss=Jetwing+Vil+Uyana+Sigiriya" },
      { name: "Budget-friendly stays near Sigiriya", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Sigiriya%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/sigiriya.jpg",
    images: [
      "/images/destinations/sigiriya.jpg",
      "/images/destinations/sigiriya-2.jpg",
      "/images/destinations/sigiriya-3.jpg",
    ],
  },
  {
    slug: "ella",
    name: "Ella",
    region: "Hill Country",
    elevation: "1,041M",
    tagline: "Misty tea hills, hiking trails, and the island's most photographed railway",
    overview:
      "Ella is a small hill-country town surrounded by tea estates, waterfalls, and some of Sri Lanka's best short hikes. It's also home to the Nine Arches Bridge, a colonial-era railway viaduct that's become one of the most recognisable images of the island.",
    history:
      "The area developed around the British-era tea and rail expansion through Sri Lanka's central highlands in the late 19th century — much of the hill country's colonial architecture and rail infrastructure dates from this period.",
    bestTime: "January to March for the clearest hill-country views",
    suggestedDuration: "2 days",
    activities: [
      "Hike Little Adam's Peak (an easy 1-2 hour walk) or the longer Ella Rock trail",
      "Watch a train cross the Nine Arches Bridge",
      "Visit a working tea factory and see how Ceylon tea is actually processed",
      "Ravana Falls, a short drive outside town",
    ],
    travelTips: [
      "Evenings get cool at this elevation — bring a light layer even in the tropics",
      "The train journey from Kandy to Ella is considered one of the world's great scenic rail routes; book seats a few days ahead in peak season",
    ],
    nearby: [
      { name: "Nuwara Eliya", slug: "nuwara-eliya" },
      { name: "Yala", slug: "yala" },
    ],
    tags: ["hill-country-hiking", "photography", "family-travel"],
    hotels: [
      { name: "98 Acres Resort & Spa", link: "https://www.booking.com/searchresults.html?ss=98+Acres+Resort+%26+Spa+Ella" },
      { name: "Jetwing Kaduruketha", link: "https://www.jetwinghotels.com/sri-lanka-hotels/ella/" },
      { name: "Budget-friendly stays near Ella", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Ella%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/ella.jpg",
    images: [
      "/images/destinations/ella.jpg",
      "/images/destinations/ella-2.jpg",
      "/images/destinations/ella-3.jpg",
    ],
  },
  {
    slug: "galle",
    name: "Galle",
    region: "South Coast",
    elevation: "SEA LEVEL",
    tagline: "A Dutch colonial fort where the ramparts meet the Indian Ocean",
    overview:
      "Galle Fort is a walled city built by the Portuguese and expanded by the Dutch in the 17th century, its cobbled streets now lined with boutique cafés, galleries, and guesthouses inside centuries-old colonial buildings — all wrapped by ocean-facing ramparts.",
    history:
      "Galle was one of the most important trading ports in the Indian Ocean for centuries before Colombo took over. The fort is a UNESCO World Heritage Site and remains one of the best-preserved examples of a European fortified city built by colonial powers in South Asia.",
    bestTime: "December to April, the drier season on the south coast",
    suggestedDuration: "1-2 days",
    activities: [
      "Walk the full loop of the fort ramparts, especially at sunset",
      "Explore the fort's boutique shops, cafés, and art galleries",
      "Climb the Galle lighthouse and old Dutch church",
      "Use Galle as a base for nearby beaches like Unawatuna",
    ],
    travelTips: [
      "The fort is best explored on foot — most of the interior streets aren't vehicle-friendly",
      "Sunset on the ramparts gets busy; arrive 30-45 minutes early for a good spot",
    ],
    nearby: [{ name: "Mirissa", slug: "mirissa" }],
    tags: ["cultural-heritage", "beach-coast", "photography"],
    hotels: [
      { name: "Amangalla", link: "https://www.booking.com/searchresults.html?ss=Amangalla+Galle+Fort" },
      { name: "Fort Bazaar", link: "https://www.booking.com/searchresults.html?ss=Fort+Bazaar+Galle" },
      { name: "Budget-friendly stays near Galle", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Galle%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/galle.jpg",
    images: [
      "/images/destinations/galle.jpg",
      "/images/destinations/galle-2.jpg",
      "/images/destinations/galle-3.jpg",
    ],
  },
  {
    slug: "yala",
    name: "Yala",
    region: "Southeast Coast",
    elevation: "30M",
    tagline: "One of the world's highest densities of leopards, alongside elephants and wetland birdlife",
    overview:
      "Yala National Park is Sri Lanka's most visited wildlife park, known for having one of the highest leopard densities anywhere in the world, alongside elephants, sloth bears, crocodiles, and a huge range of birdlife across its mix of scrub jungle, wetlands, and lagoons.",
    history:
      "Established as a wildlife sanctuary in 1900 and a national park in 1938, Yala is one of the oldest and largest protected areas in Sri Lanka, though only a portion of the park is open to visitors — the rest is a strict nature reserve.",
    bestTime: "February to June, when the dry season concentrates wildlife around remaining water sources",
    suggestedDuration: "1-2 days (typically 1-2 safari drives)",
    activities: [
      "Early-morning or late-afternoon jeep safari, when animals are most active",
      "Bird-watching around Yala's lagoons and wetlands",
      "Combine with a stay near Tissamaharama for easy park access",
    ],
    travelTips: [
      "The park is sometimes closed for a few weeks in September/October for annual maintenance — worth checking dates before booking",
      "Wildlife sightings are never guaranteed — a good local guide and driver make a real difference here",
    ],
    nearby: [{ name: "Ella", slug: "ella" }],
    tags: ["wildlife-safari", "photography", "family-travel"],
    hotels: [
      { name: "Wild Coast Tented Lodge", link: "https://www.booking.com/searchresults.html?ss=Wild+Coast+Tented+Lodge+Yala" },
      { name: "Jetwing Yala", link: "https://www.booking.com/searchresults.html?ss=Jetwing+Yala" },
      { name: "Budget-friendly stays near Yala", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Yala%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/yala.jpg",
    images: [
      "/images/destinations/yala.jpg",
      "/images/destinations/yala-2.jpg",
      "/images/destinations/yala-3.jpg",
    ],
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "Hill Country",
    elevation: "1,868M",
    tagline: "Cool highland air, tea country, and colonial-era architecture nicknamed 'Little England'",
    overview:
      "Sitting at nearly 1,900 metres, Nuwara Eliya is Sri Lanka's coolest major town, ringed by tea plantations and colonial-era buildings that earned it the nickname 'Little England' under British rule.",
    history:
      "Developed by the British in the 19th century as a hill station to escape the coastal heat, the town's golf course, racecourse, and Tudor-style buildings are all remnants of that era, alongside the tea industry the British established across the surrounding hills.",
    bestTime: "January to March for the clearest weather at this elevation",
    suggestedDuration: "1-2 days",
    activities: [
      "Tour a working tea estate and factory",
      "Drive to nearby Horton Plains National Park for World's End",
      "See Lake Gregory and the town's colonial architecture",
    ],
    travelTips: [
      "Nights are genuinely cold at this elevation — pack a proper jacket, not just a light layer",
    ],
    nearby: [
      { name: "Ella", slug: "ella" },
      { name: "Horton Plains", slug: "horton-plains" },
    ],
    tags: ["hill-country-hiking", "food-tea", "photography"],
    hotels: [
      { name: "Heritance Tea Factory", link: "https://www.heritancehotels.com/teafactory/" },
      { name: "The Grand Hotel Nuwara Eliya", link: "https://www.booking.com/searchresults.html?ss=The+Grand+Hotel+Nuwara+Eliya" },
      { name: "Budget-friendly stays near Nuwara Eliya", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Nuwara%20Eliya%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/nuwara-eliya.jpg",
    images: [
      "/images/destinations/nuwara-eliya.jpg",
      "/images/destinations/nuwara-eliya-2.jpg",
      "/images/destinations/nuwara-eliya-3.jpg",
    ],
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    region: "South Coast",
    elevation: "SEA LEVEL",
    tagline: "A laid-back beach town and one of the world's best spots for blue whale watching",
    overview:
      "Mirissa is a crescent-shaped beach on the south coast, popular for its relaxed pace, and known internationally as one of the most reliable places on earth to see blue whales, alongside sperm whales and dolphins depending on the season.",
    history:
      "Once a quiet fishing village, Mirissa's fishing harbour is still active alongside the tourism that's grown around its beach and whale-watching boats over the past two decades.",
    bestTime: "November to April for both beach weather and whale-watching season",
    suggestedDuration: "1-2 days",
    activities: [
      "Early-morning whale-watching boat trip (blue whales are best seen November-April)",
      "Relax on Mirissa Beach or walk out to the small Parrot Rock viewpoint at low tide",
      "Fresh seafood at the harbour-side restaurants",
    ],
    travelTips: [
      "Whale-watching boats leave early (around 6-7am) — choose an operator that limits boat numbers and keeps a respectful distance from the whales",
      "Some visitors find the boat swells rough; those prone to seasickness should plan accordingly",
    ],
    nearby: [{ name: "Galle", slug: "galle" }],
    tags: ["beach-coast", "wildlife-safari", "honeymoon"],
    hotels: [
      { name: "Weligama Bay Marriott Resort & Spa", link: "https://www.booking.com/searchresults.html?ss=Weligama+Bay+Marriott+Resort+%26+Spa" },
      { name: "Paradise Beach Club Hotel", link: "https://www.booking.com/searchresults.html?ss=Paradise+Beach+Club+Hotel+Mirissa" },
      { name: "Budget-friendly stays near Mirissa", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Mirissa%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/mirissa.jpg",
    images: [
      "/images/destinations/mirissa.jpg",
      "/images/destinations/mirissa-2.jpg",
      "/images/destinations/mirissa-3.jpg",
    ],
  },
  {
    slug: "kandy",
    name: "Kandy",
    region: "Hill Country",
    elevation: "500M",
    tagline: "The last royal capital, home to the Temple of the Sacred Tooth Relic",
    overview:
      "Kandy was the last independent kingdom of Sri Lanka before British rule, set around a scenic lake in the central highlands. Its centrepiece is the Temple of the Sacred Tooth Relic, one of the most important Buddhist pilgrimage sites in the world.",
    history:
      "Kandy resisted colonization far longer than the coastal regions, remaining the seat of Sinhalese kings until 1815. The city's Esala Perahera festival, featuring decorated elephants and traditional dancers, dates back centuries and remains one of Asia's great processions.",
    bestTime: "January to April, or specifically around July/August for the Esala Perahera festival",
    suggestedDuration: "1-2 days",
    activities: [
      "Visit the Temple of the Sacred Tooth Relic",
      "Walk around Kandy Lake at sunset",
      "See a traditional Kandyan dance performance",
      "Royal Botanical Gardens, Peradeniya, just outside the city",
    ],
    travelTips: [
      "Dress modestly and remove shoes before entering the temple",
      "Kandy is the starting point for the scenic train ride to Ella — book seats in advance in peak season",
    ],
    nearby: [
      { name: "Nuwara Eliya", slug: "nuwara-eliya" },
      { name: "Sigiriya", slug: "sigiriya" },
    ],
    tags: ["cultural-heritage", "food-tea", "family-travel"],
    hotels: [
      { name: "The Grand Kandyan Hotel", link: "https://www.booking.com/searchresults.html?ss=The+Grand+Kandyan+Hotel" },
      { name: "Elephant Stables", link: "https://www.booking.com/searchresults.html?ss=Elephant+Stables+Kandy" },
      { name: "Budget-friendly stays near Kandy", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Kandy%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/kandy.jpg",
    images: [
      "/images/destinations/kandy.jpg",
      "/images/destinations/kandy-2.jpg",
      "/images/destinations/kandy-3.jpg",
    ],
  },
  {
    slug: "udawalawe",
    name: "Udawalawe",
    region: "Southeast",
    elevation: "100M",
    tagline: "Grassland and reservoir landscape with some of the island's most reliable elephant sightings",
    overview:
      "Udawalawe National Park is built around a large reservoir and open grassland, home to several hundred wild elephants — sightings here are considerably more consistent than in most other parks, making it a favourite for travelers who want a strong chance of seeing elephants in one visit.",
    history:
      "The park was established in 1972 around the Udawalawe Reservoir, built to support irrigation for surrounding farmland; the reservoir itself now anchors the park's ecosystem. A nearby Elephant Transit Home cares for orphaned calves before their release back into the wild.",
    bestTime: "Year-round, though the dry season (May-September) concentrates wildlife near water",
    suggestedDuration: "Half a day to a full day",
    activities: [
      "Jeep safari focused on elephant herds",
      "Visit the Elephant Transit Home for a public feeding session",
      "Bird-watching around the reservoir",
    ],
    travelTips: [
      "A good option if Yala's crowds aren't appealing, or as a second safari to pair with it",
    ],
    nearby: [{ name: "Yala", slug: "yala" }],
    tags: ["wildlife-safari", "family-travel"],
    hotels: [
      { name: "Mahoora Tented Safari Camp Udawalawe", link: "https://www.booking.com/searchresults.html?ss=Mahoora+Tented+Safari+Camp+Udawalawe" },
      { name: "Grand Udawalawe Safari Resort", link: "https://www.booking.com/searchresults.html?ss=Grand+Udawalawe+Safari+Resort" },
      { name: "Budget-friendly stays near Udawalawe", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Udawalawe%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/udawalawe.jpg",
    images: [
      "/images/destinations/udawalawe.jpg",
      "/images/destinations/udawalawe-2.jpg",
      "/images/destinations/udawalawe-3.jpg",
    ],
  },
  {
    slug: "bentota",
    name: "Bentota",
    region: "South Coast",
    elevation: "SEA LEVEL",
    tagline: "A resort beach town built around a river, water sports, and easy reach from Colombo",
    overview:
      "Bentota sits where the Bentota River meets the sea, giving it a mix of calm river activities and open-ocean beach in one place. It's one of the most developed resort areas on the south coast, popular for water sports and honeymoon-style beach stays.",
    history:
      "Bentota has been developed as a beach resort destination since the 1960s and 70s, among the earliest coastal areas in Sri Lanka to grow around organized tourism infrastructure.",
    bestTime: "December to April",
    suggestedDuration: "1-2 days",
    activities: [
      "River safari on the Bentota River through mangroves",
      "Jet skiing, windsurfing, and other water sports",
      "Visit a sea turtle hatchery nearby",
    ],
    travelTips: [
      "About 90 minutes from Colombo, making it an easy first or last stop on a coastal route",
    ],
    nearby: [{ name: "Galle", slug: "galle" }],
    tags: ["beach-coast", "honeymoon", "family-travel"],
    hotels: [
      { name: "Cinnamon Bentota Beach", link: "https://www.booking.com/searchresults.html?ss=Cinnamon+Bentota+Beach" },
      { name: "Taj Bentota Resort & Spa", link: "https://www.booking.com/searchresults.html?ss=Taj+Bentota+Resort+%26+Spa" },
      { name: "Budget-friendly stays near Bentota", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Bentota%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/bentota.jpg",
    images: [
      "/images/destinations/bentota.jpg",
      "/images/destinations/bentota-2.jpg",
      "/images/destinations/bentota-3.jpg",
    ],
  },
  {
    slug: "arugam-bay",
    name: "Arugam Bay",
    region: "East Coast",
    elevation: "SEA LEVEL",
    tagline: "A laid-back surf town with one of the world's best right-hand point breaks",
    overview:
      "Arugam Bay is a small east-coast surf town built almost entirely around one thing: a long, reliable right-hand point break considered among the best in Asia. Outside the surf, it keeps a relaxed, low-key beach-town character.",
    history:
      "Arugam Bay's surf reputation grew steadily from the 1970s onward, though the area's tourism development slowed for years due to the region's remoteness and the civil war; it's grown significantly as a surf destination since.",
    bestTime: "April to October — opposite season to the west/south coasts, since the east coast has its own monsoon pattern",
    suggestedDuration: "2-3 days for surfers, 1-2 for a beach stop",
    activities: [
      "Surfing at Main Point and several nearby breaks suited to different skill levels",
      "Day trip to Kumana National Park for birdlife and a quieter wildlife alternative to Yala",
      "Relaxed beachfront cafés and a slower pace than the south coast resorts",
    ],
    travelTips: [
      "Its surf season runs opposite to the west and south coasts — worth timing a Sri Lanka itinerary around this if surfing is a priority",
    ],
    nearby: [{ name: "Trincomalee", slug: "trincomalee" }],
    tags: ["beach-coast", "photography"],
    hotels: [
      { name: "Jetwing Surf & Safari", link: "https://www.jetwinghotels.com/jetwingsurfandsafari/" },
      { name: "Hideaway Arugam Bay", link: "https://www.booking.com/searchresults.html?ss=Hideaway+Arugam+Bay" },
      { name: "Budget-friendly stays near Arugam Bay", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Arugam%20Bay%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/arugam-bay.jpg",
    images: [
      "/images/destinations/arugam-bay.jpg",
      "/images/destinations/arugam-bay-2.jpg",
      "/images/destinations/arugam-bay-3.jpg",
    ],
  },
  {
    slug: "jaffna",
    name: "Jaffna",
    region: "Northern Province",
    elevation: "SEA LEVEL",
    tagline: "A distinct Tamil cultural heart, with its own cuisine, temples, and colonial fort",
    overview:
      "Jaffna, at the northern tip of the island, has a culture, cuisine, and rhythm distinct from the rest of Sri Lanka — shaped by centuries of Tamil heritage, a flat palmyra-palm landscape, and its own colonial history under the Portuguese and Dutch.",
    history:
      "Jaffna was the seat of an independent Tamil kingdom for centuries before Portuguese and later Dutch colonization. It was largely closed off to tourism during the civil war and has only reopened to travelers in the years since, making it one of the least-visited but most distinctive regions on the island.",
    bestTime: "May to September, drier on this side of the island",
    suggestedDuration: "2 days",
    activities: [
      "Jaffna Fort, built by the Portuguese and expanded by the Dutch",
      "Nallur Kandaswamy Kovil, one of the most significant Hindu temples in Sri Lanka",
      "Try distinctly Jaffna Tamil cuisine, noticeably different from southern Sri Lankan food",
      "Boat out to nearby islands like Delft, known for wild ponies and Dutch-era ruins",
    ],
    travelTips: [
      "Jaffna sees far fewer international visitors than the south — a good fit for travelers who specifically want somewhere less touristed",
    ],
    nearby: [{ name: "Trincomalee", slug: "trincomalee" }],
    tags: ["cultural-heritage", "food-tea"],
    hotels: [
      { name: "Jetwing Jaffna", link: "https://www.jetwinghotels.com/jetwingjaffna/" },
      { name: "Fox Jaffna", link: "https://www.booking.com/searchresults.html?ss=Fox+Jaffna" },
      { name: "Budget-friendly stays near Jaffna", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Jaffna%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/jaffna.jpg",
    images: [
      "/images/destinations/jaffna.jpg",
      "/images/destinations/jaffna-2.jpg",
      "/images/destinations/jaffna-3.jpg",
    ],
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    region: "East Coast",
    elevation: "SEA LEVEL",
    tagline: "One of the world's finest natural harbours, with quiet beaches and offshore reefs",
    overview:
      "Trincomalee sits on a large natural harbour on the east coast, with the calm, clear-water beaches of Nilaveli and Uppuveli nearby, plus Pigeon Island National Park just offshore for snorkeling among reef sharks and coral.",
    history:
      "Trincomalee's harbour has been strategically important for over a thousand years, used by traders, colonial navies, and militaries in turn; the Koneswaram temple on its headland has drawn pilgrims for centuries despite being destroyed and rebuilt more than once through the region's history.",
    bestTime: "May to September, opposite season to the south and west coasts",
    suggestedDuration: "2 days",
    activities: [
      "Snorkeling at Pigeon Island National Park",
      "Relax on Nilaveli or Uppuveli beach",
      "Visit Koneswaram Temple on the harbour headland",
      "Whale watching in season, a quieter alternative to Mirissa",
    ],
    travelTips: [
      "Its dry season is opposite the south coast's — a natural pairing with Jaffna and Arugam Bay on an east-coast itinerary",
    ],
    nearby: [
      { name: "Jaffna", slug: "jaffna" },
      { name: "Arugam Bay", slug: "arugam-bay" },
    ],
    tags: ["beach-coast", "wildlife-safari", "honeymoon"],
    hotels: [
      { name: "Trinco Blu by Cinnamon", link: "https://www.booking.com/searchresults.html?ss=Trinco+Blu+by+Cinnamon" },
      { name: "Uga Jungle Beach", link: "https://www.booking.com/searchresults.html?ss=Uga+Jungle+Beach+Trincomalee" },
      { name: "Budget-friendly stays near Trincomalee", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Trincomalee%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/trincomalee.jpg",
    images: [
      "/images/destinations/trincomalee.jpg",
      "/images/destinations/trincomalee-2.jpg",
      "/images/destinations/trincomalee-3.jpg",
    ],
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    region: "Cultural Triangle",
    elevation: "80M",
    tagline: "Sri Lanka's first ancient capital, with dagobas that rank among the tallest ancient structures on earth",
    overview:
      "Anuradhapura was Sri Lanka's capital for over a thousand years, from around the 4th century BC. Its ruins span an enormous area, dominated by massive brick dagobas (stupas), and the Sri Maha Bodhi — a sacred fig tree said to have grown from a cutting of the original tree the Buddha attained enlightenment under.",
    history:
      "As one of the longest-serving ancient capitals of any civilization in South Asia, Anuradhapura's scale is genuinely hard to grasp on the ground — some of its dagobas were, at the time of construction, among the tallest structures anywhere in the ancient world. It's a UNESCO World Heritage Site.",
    bestTime: "May to September",
    suggestedDuration: "1 full day",
    activities: [
      "Visit the Sri Maha Bodhi sacred tree",
      "See the Ruwanwelisaya and Jetavanaramaya dagobas",
      "Explore the site by bicycle — the ruins are spread over a wide area",
    ],
    travelTips: [
      "Dress modestly and expect to remove shoes at several sacred sites — the ground can get hot, so timing matters",
    ],
    nearby: [{ name: "Polonnaruwa", slug: "polonnaruwa" }],
    tags: ["cultural-heritage", "photography"],
    hotels: [
      { name: "Ulagalla by Uga Escapes", link: "https://www.booking.com/searchresults.html?ss=Ulagalla+by+Uga+Escapes" },
      { name: "Heritage Hotel Anuradhapura", link: "https://www.booking.com/searchresults.html?ss=Heritage+Hotel+Anuradhapura" },
      { name: "Budget-friendly stays near Anuradhapura", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Anuradhapura%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/anuradhapura.jpg",
    images: [
      "/images/destinations/anuradhapura.jpg",
      "/images/destinations/anuradhapura-2.jpg",
      "/images/destinations/anuradhapura-3.jpg",
    ],
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    region: "Cultural Triangle",
    elevation: "60M",
    tagline: "Sri Lanka's second ancient capital, more compact and easier to explore than Anuradhapura",
    overview:
      "Polonnaruwa succeeded Anuradhapura as Sri Lanka's capital in the 11th century. Its ruins are more compact and better preserved, centred on King Parakramabahu's era, including the Gal Vihara — a set of enormous Buddha statues carved directly into a single rock face.",
    history:
      "Polonnaruwa flourished under King Parakramabahu I in the 12th century, who built the vast Parakrama Samudra reservoir that still irrigates the region today. It's a UNESCO World Heritage Site and generally considered easier to explore in a single day than Anuradhapura.",
    bestTime: "May to September",
    suggestedDuration: "1 full day",
    activities: [
      "See the Gal Vihara rock-cut Buddha statues",
      "Explore the royal palace ruins and Quadrangle complex",
      "Cycle around Parakrama Samudra, the reservoir King Parakramabahu built",
    ],
    travelTips: [
      "Renting a bicycle on-site is the classic way to see Polonnaruwa — the ruins are spread out but flat and well-suited to cycling",
    ],
    nearby: [{ name: "Anuradhapura", slug: "anuradhapura" }],
    tags: ["cultural-heritage", "photography"],
    hotels: [
      { name: "Ekho Lake House", link: "https://www.booking.com/searchresults.html?ss=Ekho+Lake+House+Polonnaruwa" },
      { name: "Deer Park Hotel", link: "https://www.booking.com/searchresults.html?ss=Deer+Park+Hotel+Giritale" },
      { name: "Budget-friendly stays near Polonnaruwa", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Polonnaruwa%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/polonnaruwa.jpg",
    images: [
      "/images/destinations/polonnaruwa.jpg",
      "/images/destinations/polonnaruwa-2.jpg",
      "/images/destinations/polonnaruwa-3.jpg",
    ],
  },
  {
    slug: "horton-plains",
    name: "Horton Plains",
    region: "Hill Country",
    elevation: "2,100M",
    tagline: "A highland plateau of cloud forest and grassland, ending at a sheer 880-metre cliff",
    overview:
      "Horton Plains is a highland plateau national park of grassland and cloud forest, home to endemic species like the sambar deer, and ending abruptly at World's End — a sheer escarpment dropping roughly 880 metres, with views stretching to the south coast on a clear morning.",
    history:
      "Named after a former British governor, Horton Plains was declared a national park in 1988, though the area's ecological importance as a highland watershed and habitat for endemic wildlife had been recognized long before that.",
    bestTime: "January to March for the clearest views at World's End",
    suggestedDuration: "Half a day (an early-morning hike)",
    activities: [
      "The roughly 3-4 hour loop hike to World's End and Baker's Falls",
      "Wildlife and bird-watching across the plateau's grassland",
    ],
    travelTips: [
      "Start very early — cloud typically rolls in and obscures the World's End view by mid-morning, often as early as 9-10am",
      "It gets genuinely cold before sunrise at this elevation — dress accordingly",
    ],
    nearby: [{ name: "Nuwara Eliya", slug: "nuwara-eliya" }],
    tags: ["hill-country-hiking", "photography"],
    hotels: [
      { name: "Heritance Tea Factory (nearest base, Nuwara Eliya)", link: "https://www.heritancehotels.com/teafactory/" },
      { name: "The Grand Hotel Nuwara Eliya (nearest base)", link: "https://www.booking.com/searchresults.html?ss=The+Grand+Hotel+Nuwara+Eliya" },
      { name: "Budget-friendly stays near Horton Plains", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Horton%20Plains%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/horton-plains.jpg",
    images: [
      "/images/destinations/horton-plains.jpg",
      "/images/destinations/horton-plains-2.jpg",
      "/images/destinations/horton-plains-3.jpg",
    ],
  },
  {
    slug: "adams-peak",
    name: "Adam's Peak",
    region: "Hill Country",
    elevation: "2,243M",
    tagline: "A sacred pilgrimage mountain climbed through the night for sunrise at the summit",
    overview:
      "Adam's Peak (Sri Pada) is a conical mountain sacred to Buddhists, Hindus, Muslims, and Christians alike, each tradition attributing the footprint-shaped mark at its summit to a different figure. Pilgrims and travelers climb through the night via a long stairway to reach the top for sunrise.",
    history:
      "The mountain has drawn pilgrims for well over a thousand years, making it one of the longest continuously used pilgrimage routes in the world, and one of the few sacred sites shared actively across four major religious traditions.",
    bestTime: "December to May, the official pilgrimage season, when the route is lit and well-trafficked",
    suggestedDuration: "One overnight climb (start around midnight-2am)",
    activities: [
      "The night climb itself — thousands of stone steps lit by lights along the route",
      "Sunrise at the summit, and the mountain's distinctive triangular shadow cast over the landscape below",
    ],
    travelTips: [
      "The climb is physically demanding — around 5,000 steps — but achievable at a slow, steady pace by most reasonably fit travelers",
      "Outside pilgrimage season the route is far quieter and less lit, which changes the experience significantly",
    ],
    nearby: [{ name: "Nuwara Eliya", slug: "nuwara-eliya" }],
    tags: ["hill-country-hiking", "cultural-heritage"],
    hotels: [
      { name: "Slightly Chilled Hotel", link: "https://www.booking.com/searchresults.html?ss=Slightly+Chilled+Hotel+Adams+Peak" },
      { name: "Hotel Mango Tree Nearest Adam's Peak", link: "https://www.booking.com/searchresults.html?ss=Hotel+Mango+Tree+Nearest+Adams+Peak" },
      { name: "Budget-friendly stays near Adam's Peak", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Adam%27s%20Peak%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/adams-peak.jpg",
    images: [
      "/images/destinations/adams-peak.jpg",
      "/images/destinations/adams-peak-2.jpg",
      "/images/destinations/adams-peak-3.jpg",
    ],
  },

  {
    slug: "dambulla",
    name: "Dambulla",
    region: "Cultural Triangle",
    elevation: "150M",
    tagline: "A 2,000-year-old cave temple carved straight into the rock",
    overview:
      "The Dambulla Cave Temple (the Golden Temple of Dambulla) is a complex of five caves built into a single rock face, filled with Buddha statues and painted ceilings that date back over two thousand years. It sits about 20 minutes from Sigiriya, making the two an easy pairing.",
    history:
      "The caves have been a place of worship since at least the 1st century BC, expanded and repainted by successive kings over the centuries. It's a UNESCO World Heritage Site and one of the best-preserved cave temple complexes in Asia.",
    bestTime: "January to March, during the dry season in the Cultural Triangle",
    suggestedDuration: "Half a day, usually paired with Sigiriya",
    activities: [
      "Explore all five caves and their painted ceilings and Buddha statues",
      "Climb the rock steps for views over the surrounding plains",
      "Pair with Sigiriya, 20 minutes away, for a combined cultural day",
    ],
    travelTips: [
      "Cover your shoulders and knees, and remove your shoes before entering the caves",
      "Steps can be hot on bare feet by midday — early morning or late afternoon visits are more comfortable",
    ],
    nearby: [
      { name: "Sigiriya", slug: "sigiriya" },
      { name: "Kandy", slug: "kandy" },
    ],
    tags: ["cultural-heritage", "photography"],
    hotels: [
      { name: "Aliya Resort & Spa", link: "https://www.booking.com/searchresults.html?ss=Aliya+Resort+%26+Spa+Dambulla" },
      { name: "Lake Lodge Boutique Hotel", link: "https://www.booking.com/searchresults.html?ss=Lake+Lodge+Boutique+Hotel+Dambulla" },
      { name: "Budget-friendly stays near Dambulla", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Dambulla%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/dambulla.jpg",
    images: [
      "/images/destinations/dambulla.jpg",
      "/images/destinations/dambulla-2.jpg",
      "/images/destinations/dambulla-3.jpg",
    ],
  },
  {
    slug: "colombo",
    name: "Colombo",
    region: "Western Province",
    elevation: "SEA LEVEL",
    tagline: "Sri Lanka's commercial capital — colonial streets, markets, and a modern skyline",
    overview:
      "Colombo rarely gets the attention the beaches and hill country do, but it's a genuinely interesting stop in its own right — colonial Dutch and British architecture sitting alongside a modern skyline, the seafront Galle Face Green, and Pettah's dense street markets.",
    history:
      "Colombo grew from a small port into Sri Lanka's commercial capital through waves of Portuguese, Dutch, and British colonial rule, each leaving a visible mark on the city's architecture and street layout that's still easy to trace today.",
    bestTime: "Year-round — Colombo works in any season, unlike the coast or hill country",
    suggestedDuration: "1-2 days, often at the start or end of a trip",
    activities: [
      "Walk Galle Face Green at sunset, where locals gather every evening",
      "Explore Pettah Market's dense, chaotic street stalls",
      "Visit the Gangaramaya Temple and the Colombo National Museum",
      "See the mix of colonial and modern architecture around Fort",
    ],
    travelTips: [
      "Most visitors pass through Colombo at the start or end of a trip rather than dedicating a full itinerary to it — a day or two is usually enough",
      "Traffic can be heavy — build extra time into any cross-city plans",
    ],
    nearby: [{ name: "Negombo", slug: "negombo" }],
    tags: ["cultural-heritage", "food-tea"],
    hotels: [
      { name: "Galle Face Hotel", link: "https://www.booking.com/searchresults.html?ss=Galle+Face+Hotel+Colombo" },
      { name: "Shangri-La Colombo", link: "https://www.booking.com/searchresults.html?ss=Shangri-La+Colombo" },
      { name: "Budget-friendly stays in Colombo", link: "https://www.booking.com/searchresults.html?ss=budget%20hotels%20Colombo%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/colombo.jpg",
    images: [
      "/images/destinations/colombo.jpg",
      "/images/destinations/colombo-2.jpg",
      "/images/destinations/colombo-3.jpg",
    ],
  },
  {
    slug: "negombo",
    name: "Negombo",
    region: "West Coast",
    elevation: "SEA LEVEL",
    tagline: "A fishing town by the airport, easing you in or out of Sri Lanka",
    overview:
      "Negombo sits just minutes from the international airport, making it the natural first or last stop on almost any Sri Lanka trip. Beyond that convenience, it's a genuinely charming fishing town with a busy fish market, Dutch-era canals, and a relaxed beach strip.",
    history:
      "Negombo was fought over by the Portuguese and Dutch for its cinnamon trade, and its many historic churches — earning it the nickname 'Little Rome' — are a legacy of that Portuguese Catholic influence that's stuck around longer here than almost anywhere else in Sri Lanka.",
    bestTime: "Year-round, though December to April is driest",
    suggestedDuration: "1 night, usually bookending a trip around a flight",
    activities: [
      "Visit the early-morning fish market at the fishing harbour",
      "A boat ride along the Dutch-era canal network",
      "Relax on Negombo Beach before or after a flight",
    ],
    travelTips: [
      "The single best reason to stay here is proximity to the airport — book it as your first or last night, not a standalone destination",
      "The fish market is most active early morning, before the heat sets in",
    ],
    nearby: [{ name: "Colombo", slug: "colombo" }],
    tags: ["beach-coast", "family-travel"],
    hotels: [
      { name: "Jetwing Beach Hotel", link: "https://www.booking.com/searchresults.html?ss=Jetwing+Beach+Hotel+Negombo" },
      { name: "The Wallawwa", link: "https://www.booking.com/searchresults.html?ss=The+Wallawwa+Negombo" },
      { name: "Budget-friendly stays near Negombo", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Negombo%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/negombo.jpg",
    images: [
      "/images/destinations/negombo.jpg",
      "/images/destinations/negombo-2.jpg",
      "/images/destinations/negombo-3.jpg",
    ],
  },
  {
    slug: "wilpattu",
    name: "Wilpattu",
    region: "Northwest",
    elevation: "50M",
    tagline: "Sri Lanka's largest national park, with natural lakes found nowhere else on the island",
    overview:
      "Wilpattu is Sri Lanka's largest national park, known for its 'villus' — natural sand-rimmed lakes unique to the park — and for leopards and sloth bears that draw a quieter crowd than Yala. It reopened to visitors only in the years after the civil war, so it still feels considerably less discovered.",
    history:
      "Wilpattu was closed to visitors for much of the civil war and only fully reopened in 2010, which is part of why it remains far less crowded than Yala despite being the country's largest protected wildlife area.",
    bestTime: "February to September, during the drier months",
    suggestedDuration: "1 day, or 2 with an overnight near the park",
    activities: [
      "Jeep safari through the park's distinctive villu lake system",
      "Leopard and sloth bear tracking with a local guide",
      "Birdwatching around the villus, especially in the early morning",
    ],
    travelTips: [
      "A genuinely good alternative to Yala if you'd rather avoid the crowds — sightings can take a bit more patience, but the park itself feels wilder",
    ],
    nearby: [{ name: "Anuradhapura", slug: "anuradhapura" }],
    tags: ["wildlife-safari", "photography"],
    hotels: [
      { name: "Wilpattu Tree House", link: "https://www.booking.com/searchresults.html?ss=Wilpattu+Tree+House" },
      { name: "Eagle Wilpattu Resort", link: "https://www.booking.com/searchresults.html?ss=Eagle+Wilpattu+Resort" },
      { name: "Budget-friendly stays near Wilpattu", link: "https://www.booking.com/searchresults.html?ss=budget%20guesthouses%20Wilpattu%20Sri%20Lanka&nflt=pri%3D1" },
    ],
    heroImage: "/images/destinations/wilpattu.jpg",
    images: [
      "/images/destinations/wilpattu.jpg",
      "/images/destinations/wilpattu-2.jpg",
      "/images/destinations/wilpattu-3.jpg",
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
