import DestinationImage from "./DestinationImage";

export default function FounderStory() {
  return (
    <section id="about" className="bg-ink-teal px-6 py-24 text-soft-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <DestinationImage
            src="/images/founder/father.jpg"
            alt="Mr. Saman Enderage, founder of Ceylon Vantage"
            className="absolute inset-0 h-full w-full"
          />
          {/* Legibility gradient + name caption, matching the destination-page caption style */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-teal-deep/90 via-ink-teal-deep/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-display text-lg text-soft-white">
              Mr. Saman Enderage
            </p>
            <p className="eyebrow mt-1">FOUNDER OF CEYLON VANTAGE</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-3">HOW WE STARTED</p>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Thirty years of reading the island by road.
          </h2>
          <p className="mt-6 font-body leading-relaxed text-soft-white/85">
            Ceylon Vantage began with one driver, not a business plan. For
            decades, our founder worked as a professional chauffeur across
            Sri Lanka — learning which viewpoints are worth the detour, which
            back roads save an hour, and which small guesthouse serves a
            better breakfast than the resort next door.
          </p>
          <p className="mt-4 font-body leading-relaxed text-soft-white/85">
            That knowledge, built one trip at a time, is what we design
            around now. Every itinerary starts with the same question we
            always asked ourselves on the road: what would actually make
            this worth the traveler&apos;s time?
          </p>
        </div>
      </div>
    </section>
  );
}
