import type { ExperienceTag } from "./destinations";

export type Experience = {
  slug: ExperienceTag;
  label: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    slug: "honeymoon",
    label: "Honeymoon",
    description:
      "Beaches, boutique stays, and a slower pace — destinations suited to a trip built around two people, not a checklist.",
  },
  {
    slug: "wildlife-safari",
    label: "Wildlife safari",
    description:
      "Sri Lanka's national parks and coastlines, from leopard-dense jungle to elephant herds to blue whales offshore.",
  },
  {
    slug: "cultural-heritage",
    label: "Cultural & heritage",
    description:
      "Ancient capitals, sacred sites, and centuries of history — the destinations that explain how the island became what it is.",
  },
  {
    slug: "hill-country-hiking",
    label: "Hill country & hiking",
    description:
      "Cool highland air, tea estates, and some of the best short and long hikes on the island.",
  },
  {
    slug: "beach-coast",
    label: "Beach & coast",
    description:
      "From laid-back surf towns to resort beaches to quiet natural harbours — the full range of Sri Lanka's coastline.",
  },
  {
    slug: "food-tea",
    label: "Food & tea",
    description:
      "Where Ceylon tea actually comes from, and the regional food traditions worth building a trip around.",
  },
  {
    slug: "photography",
    label: "Photography",
    description:
      "The destinations that consistently produce the shots people bring home from Sri Lanka.",
  },
  {
    slug: "family-travel",
    label: "Family travel",
    description:
      "Destinations that work well across ages — manageable distances, safe pacing, and things for kids to actually engage with.",
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
