import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImageSlideshow from "@/components/ImageSlideshow";
import BackButton from "@/components/BackButton";
import DestinationCard from "@/components/DestinationCard";
import { whatsappLink } from "@/lib/whatsapp";
import { tours, getTour } from "@/lib/tours";
import { destinations } from "@/lib/destinations";

// Pre-render every tour page at build time -- fast for visitors, and means
// a broken slug is caught before it ever ships, not discovered live by a
// visitor hitting a 404.
export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};

  return {
    title: `${tour.title} — Ceylon Vantage`,
    description: tour.tagline,
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const relatedDestinations = tour.relatedDestinationSlugs
    .map((s) => destinations.find((d) => d.slug === s))
    .filter((d): d is (typeof destinations)[number] => Boolean(d));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.tagline,
    touristType: tour.tags.join(", "),
    itinerary: tour.itinerary.map((stop) => ({
      "@type": "Event",
      name: stop.title,
      description: stop.description,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar />

      <section className="relative min-h-[70vh]">
        <ImageSlideshow
          images={tour.images}
          alt={tour.title}
          mode="auto"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-teal-deep via-ink-teal-deep/40 to-transparent" />
        <div className="absolute left-6 top-24 z-10">
          <BackButton href="/tours" label="← All tour packages" />
        </div>
        <div className="relative flex min-h-[70vh] flex-col justify-end px-6 pb-16 pt-40">
          <div className="mx-auto w-full max-w-4xl">
            <p className="eyebrow mb-4">
              {tour.duration} · {tour.region.toUpperCase()}
            </p>
            <h1 className="font-display text-4xl text-soft-white sm:text-6xl">
              {tour.title}
            </h1>
            <p className="mt-4 max-w-xl font-body text-lg text-soft-white/85">
              {tour.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-white px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1fr_auto_260px]">
          <div>
            <p className="eyebrow mb-3">OVERVIEW</p>
            <p className="font-body leading-relaxed text-ink-charcoal-soft">
              {tour.overview}
            </p>

            <p className="eyebrow mb-4 mt-10">HIGHLIGHTS</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="rounded-xl border hairline bg-warm-stone/40 p-5"
                >
                  <span className="eyebrow flex h-8 w-8 items-center justify-center rounded-full border border-vantage-gold/40 !text-vantage-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-base text-ink-teal">
                    {h.title}
                  </p>
                  <p className="mt-1 font-body text-sm text-ink-charcoal-soft">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="eyebrow mb-4 mt-10">THE ITINERARY</p>
            <ol className="space-y-6">
              {tour.itinerary.map((stop) => (
                <li
                  key={`${stop.time}-${stop.title}`}
                  className="border-l-2 border-vantage-gold pl-4"
                >
                  <p className="eyebrow mb-1 text-ink-charcoal-soft/80">
                    {stop.time}
                  </p>
                  <p className="font-display text-lg text-ink-teal">
                    {stop.title}
                  </p>
                  <p className="mt-1 font-body text-ink-charcoal-soft">
                    {stop.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-3">INCLUDED</p>
                <ul className="space-y-2">
                  {tour.inclusions.map((i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-ink-charcoal-soft"
                    >
                      ✓ {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">NOT INCLUDED</p>
                <ul className="space-y-2">
                  {tour.exclusions.map((e) => (
                    <li
                      key={e}
                      className="font-body text-sm text-ink-charcoal-soft"
                    >
                      · {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="eyebrow mb-3 mt-10">TRAVEL TIPS</p>
            <ul className="list-disc space-y-2 pl-5">
              {tour.travelTips.map((t) => (
                <li key={t} className="font-body text-ink-charcoal-soft">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden w-px bg-line-hairline md:block" />

          <aside className="h-fit rounded-2xl border hairline bg-warm-stone p-6">
            <p className="eyebrow mb-2">DURATION</p>
            <p className="font-body text-ink-charcoal">{tour.duration}</p>

            <p className="eyebrow mb-2 mt-6">TOUR TYPE</p>
            <p className="font-body text-ink-charcoal">{tour.tourType}</p>

            <p className="eyebrow mb-2 mt-6">VEHICLE</p>
            <p className="font-body text-ink-charcoal">{tour.vehicle}</p>

            <p className="eyebrow mb-2 mt-6">LANGUAGES</p>
            <p className="font-body text-ink-charcoal">{tour.languages}</p>

            <a
              href={whatsappLink(`Hi! I'd like to book the ${tour.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-ink-teal px-5 py-2.5 text-center font-body text-sm text-soft-white transition hover:bg-ink-teal-deep"
            >
              Ask about this tour on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="mt-3 block rounded-full border border-ink-teal px-5 py-2.5 text-center font-body text-sm text-ink-teal transition hover:bg-ink-teal hover:text-soft-white"
            >
              Send trip details instead
            </Link>
          </aside>
        </div>
      </section>

      {relatedDestinations.length > 0 && (
        <section className="bg-warm-stone px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-3">PLACES ON THIS TOUR</p>
            <h2 className="font-display text-3xl text-ink-teal sm:text-4xl">
              Where this trip takes you
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDestinations.map((d) => (
                <DestinationCard key={d.slug} d={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
