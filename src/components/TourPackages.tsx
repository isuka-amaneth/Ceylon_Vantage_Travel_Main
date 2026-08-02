import Link from "next/link";
import { tours } from "@/lib/tours";
import TourCard from "./TourCard";
import Reveal from "./Reveal";

const FEATURED_SLUGS = ["ella-full-day-tour", "yala-safari", "cultural-triangle-explorer"];

export default function TourPackages() {
  const featured = FEATURED_SLUGS.map((slug) =>
    tours.find((t) => t.slug === slug)
  ).filter((t): t is (typeof tours)[number] => Boolean(t));

  return (
    <section className="bg-soft-white px-6 pb-16 pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">PLANNED FOR YOU</p>
            <h2 className="font-display text-3xl text-ink-teal sm:text-4xl">
              Tour packages, itinerary included
            </h2>
          </div>
          <Link
            href="/tours"
            className="font-body text-sm text-ink-teal underline decoration-vantage-gold underline-offset-4"
          >
            See all {tours.length} tour packages →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={t.slug} delayMs={i * 80} className="h-full">
              <TourCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
