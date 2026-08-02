import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImageSlideshow from "@/components/ImageSlideshow";
import BackButton from "@/components/BackButton";
import { whatsappLink } from "@/lib/whatsapp";
import { destinations, getDestination } from "@/lib/destinations";

// Pre-render every destination page at build time -- fast for visitors,
// and means a broken slug is caught before it ever ships, not discovered
// live by a visitor hitting a 404.
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};

  return {
    title: `${destination.name} — Ceylon Vantage`,
    description: destination.tagline,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: destination.name,
    description: destination.tagline,
    touristType: destination.tags.join(", "),
    address: {
      "@type": "PostalAddress",
      addressRegion: destination.region,
      addressCountry: "LK",
    },
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
          images={destination.images}
          alt={destination.name}
          mode="auto"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-teal-deep via-ink-teal-deep/40 to-transparent" />
        <div className="absolute left-6 top-24 z-10">
          <BackButton href="/destinations" label="← All destinations" />
        </div>
        <div className="relative flex min-h-[70vh] flex-col justify-end px-6 pb-16 pt-40">
          <div className="mx-auto w-full max-w-4xl">
            <p className="eyebrow mb-4">
              {destination.elevation} · {destination.region.toUpperCase()}
            </p>
            <h1 className="font-display text-4xl text-soft-white sm:text-6xl">
              {destination.name}
            </h1>
            <p className="mt-4 max-w-xl font-body text-lg text-soft-white/85">
              {destination.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-white px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1fr_auto_260px]">
          <div>
            <p className="eyebrow mb-3">OVERVIEW</p>
            <p className="font-body leading-relaxed text-ink-charcoal-soft">
              {destination.overview}
            </p>

            <p className="eyebrow mb-3 mt-10">HISTORY</p>
            <p className="font-body leading-relaxed text-ink-charcoal-soft">
              {destination.history}
            </p>

            <p className="eyebrow mb-3 mt-10">THINGS TO DO</p>
            <ul className="space-y-2">
              {destination.activities.map((a) => (
                <li
                  key={a}
                  className="border-l-2 border-vantage-gold pl-4 font-body text-ink-charcoal-soft"
                >
                  {a}
                </li>
              ))}
            </ul>

            <p className="eyebrow mb-3 mt-10">TRAVEL TIPS</p>
            <ul className="list-disc space-y-2 pl-5">
              {destination.travelTips.map((t) => (
                <li key={t} className="font-body text-ink-charcoal-soft">
                  {t}
                </li>
              ))}
            </ul>

            {destination.hotels.length > 0 && (
              <>
                <p className="eyebrow mb-3 mt-10">WHERE TO STAY</p>
                <ul className="space-y-2">
                  {destination.hotels.map((h) => (
                    <li key={h.name}>
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="font-body text-ink-teal underline decoration-vantage-gold underline-offset-4 hover:text-vantage-gold"
                      >
                        {h.name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-body text-xs text-ink-charcoal-soft/70">
                  We suggest these as a starting point — we&apos;ll confirm the
                  right fit for your budget and dates when we plan your trip.
                </p>
              </>
            )}
          </div>

          <div className="hidden w-px bg-line-hairline md:block" />

          <aside className="h-fit rounded-2xl border hairline bg-warm-stone p-6">
            <p className="eyebrow mb-2">BEST TIME TO VISIT</p>
            <p className="font-body text-ink-charcoal">{destination.bestTime}</p>

            <p className="eyebrow mb-2 mt-6">SUGGESTED DURATION</p>
            <p className="font-body text-ink-charcoal">
              {destination.suggestedDuration}
            </p>

            {destination.nearby.length > 0 && (
              <>
                <p className="eyebrow mb-2 mt-6">NEARBY</p>
                <ul className="space-y-1">
                  {destination.nearby.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/destinations/${n.slug}`}
                        className="font-body text-ink-teal underline decoration-vantage-gold underline-offset-4"
                      >
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <a
              href={whatsappLink(`Hi! I'd like to plan a trip to ${destination.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-ink-teal px-5 py-2.5 text-center font-body text-sm text-soft-white transition hover:bg-ink-teal-deep"
            >
              Ask about {destination.name} on WhatsApp
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

      <Footer />
    </main>
  );
}
