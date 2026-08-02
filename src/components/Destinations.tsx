import Link from "next/link";
import { destinations } from "@/lib/destinations";
import DestinationCard from "./DestinationCard";
import Reveal from "./Reveal";

// Homepage shows a featured subset -- the full 16-destination catalog
// lives at /destinations so the homepage doesn't turn into one giant grid.
const FEATURED_SLUGS = ["sigiriya", "ella", "galle", "yala", "mirissa", "kandy"];

export default function Destinations() {
  const featured = FEATURED_SLUGS.map((slug) =>
    destinations.find((d) => d.slug === slug)
  ).filter((d): d is (typeof destinations)[number] => Boolean(d));

  return (
    <section id="destinations" className="bg-warm-stone px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">WHERE TO GO</p>
            <h2 className="font-display text-3xl text-ink-teal sm:text-4xl">
              Destinations worth the detour
            </h2>
          </div>
          <Link
            href="/destinations"
            className="font-body text-sm text-ink-teal underline decoration-vantage-gold underline-offset-4"
          >
            See all {destinations.length} destinations →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d, i) => (
            <Reveal key={d.slug} delayMs={i * 80} className="h-full">
              <DestinationCard d={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
