const FAQS = [
  {
    question: "How much does a private trip cost?",
    answer:
      "It depends on group size, vehicle type, and how many days you're traveling — we don't use fixed packages, so every quote is built around your actual plan. Send us your dates and destinations and we'll come back with a clear, fixed price before you book anything.",
  },
  {
    question: "Can I book just a single day, or does it have to be a longer trip?",
    answer:
      "Either works. Airport transfers, single-day tours, and multi-day circuits are all available — there's no minimum booking length.",
  },
  {
    question: "Do your drivers speak English?",
    answer:
      "Yes. Every trip is run with an English-speaking driver who knows the roads and the destinations firsthand, not just the route on a map.",
  },
  {
    question: "How do I actually book a trip?",
    answer:
      "The fastest way is WhatsApp — send your travel dates, destinations, and group size and we'll reply with a full quote. You can also use the trip form on this site or email us directly; we typically respond within one business day.",
  },
  {
    question: "Is the itinerary fixed once we've booked?",
    answer:
      "No — itineraries stay flexible. If you want to slow down, add a stop, or skip something once you're already on the road, that's normal, not a problem.",
  },
  {
    question: "What parts of Sri Lanka do you cover?",
    answer:
      "The whole island — from the Cultural Triangle and hill country to the south and east coasts. If you have a specific destination in mind that isn't listed on this site, tell us and we'll work it into your route.",
  },
];

type Faq = (typeof FAQS)[number];

/**
 * Each question is rendered independently in whichever column it's given
 * -- opening one only pushes down items later in ITS OWN column. Nothing
 * about it is tied to the item next to it in the other column.
 */
function FaqItem({ f, i }: { f: Faq; i: number }) {
  return (
    <details className="group mb-5 rounded-xl border hairline bg-soft-white p-6 shadow-sm transition-all duration-300 open:border-vantage-gold/70 open:shadow-md hover:-translate-y-0.5 hover:shadow-md">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <span className="flex items-start gap-4">
          <span className="eyebrow mt-1 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg leading-snug text-ink-teal">
            {f.question}
          </span>
        </span>
        <span className="mt-1 shrink-0 text-xl text-vantage-gold transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 pl-9 font-body text-sm leading-relaxed text-ink-charcoal-soft">
        {f.answer}
      </p>
    </details>
  );
}

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  // Split into two independent columns (left gets even indices, right gets
  // odd) instead of one CSS grid where every row is shared by both
  // columns. A shared grid row means opening a question on one side
  // stretches that whole row -- which visually drags the unrelated
  // question sitting next to it, even though nothing about it changed.
  // Two separate flows fix that: opening a question only ever moves
  // items below it in its own column.
  const leftColumn = FAQS.filter((_, i) => i % 2 === 0);
  const rightColumn = FAQS.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative overflow-hidden bg-warm-stone px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Oversized decorative "?" watermark, echoing the eyebrow gold accent used sitewide */}
      <p
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-10 -top-16 text-[22rem] leading-none text-ink-teal/[0.05]"
      >
        ?
      </p>

      <div className="relative mx-auto max-w-6xl">
        <p className="eyebrow mb-3">GOOD TO KNOW</p>
        <h2 className="font-display max-w-xl text-3xl text-ink-teal sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-14 grid gap-x-5 sm:grid-cols-2">
          <div>
            {leftColumn.map((f) => (
              <FaqItem key={f.question} f={f} i={FAQS.indexOf(f)} />
            ))}
          </div>
          <div>
            {rightColumn.map((f) => (
              <FaqItem key={f.question} f={f} i={FAQS.indexOf(f)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
