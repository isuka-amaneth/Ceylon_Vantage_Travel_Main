const POINTS = [
  {
    index: "01",
    title: "Local knowledge, not a script",
    body: "Every itinerary is shaped by decades of actually driving these roads — not a template pulled off a shelf.",
  },
  {
    index: "02",
    title: "One driver, one journey",
    body: "The same chauffeur-guide travels with you start to finish. No rotating roster, no re-explaining what you want.",
  },
  {
    index: "03",
    title: "Built around your pace",
    body: "No fixed packages. Your trip is designed around your interests, your budget, and how much ground you actually want to cover.",
  },
  {
    index: "04",
    title: "Fixed price, agreed upfront",
    body: "We agree the full cost before you travel — no meters, no surprise stops, no commission add-ons along the way.",
  },
  {
    index: "05",
    title: "Reachable any time, on WhatsApp",
    body: "Early flights, late transfers, last-minute changes — message us any time and get a real reply, not an automated queue.",
  },
  {
    index: "06",
    title: "A comfortable, well-kept vehicle",
    body: "Air-conditioned and properly maintained for Sri Lanka's roads, suited to longer days and luggage-heavy trips alike.",
  },
];

export default function VantagePoints() {
  return (
    <section className="border-t border-b hairline bg-soft-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">WHY CEYLON VANTAGE</p>
        <h2 className="font-display max-w-xl text-3xl text-ink-teal sm:text-4xl">
          The difference is where you&apos;re standing.
        </h2>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point.index} className="border-t hairline pt-6">
              <p className="eyebrow mb-1">POINT {point.index}</p>
              <h3 className="font-display mt-3 text-xl text-ink-teal">
                {point.title}
              </h3>
              <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-ink-charcoal-soft">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
