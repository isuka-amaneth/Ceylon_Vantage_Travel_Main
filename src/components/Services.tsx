import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import ServiceCardImage from "./ServiceCardImage";

const SERVICES = [
  {
    // Add your own photo at this exact path (public/images/services/) —
    // see public/images/services/README.md for filenames and sizing.
    image: "/images/services/airport-transfers.jpg",
    title: "Airport Transfers",
    description:
      "We track your flight, meet you at arrivals with a name board, and take you straight to your hotel — a fixed price agreed in advance, no waiting, no haggling.",
    ctaLabel: "Book airport pickup",
    ctaHref: whatsappLink("Hi! I'd like to book an airport transfer."),
    external: true,
  },
  {
    image: "/images/services/private-day-tours.jpg",
    title: "Private Day Tours & Excursions",
    description:
      "Sigiriya, Kandy, Ella, the south coast — explored at your own pace with a private driver-guide who adapts the day to you. No group schedules, no rushed stops.",
    ctaLabel: "Browse day tours",
    ctaHref: "/tours",
    external: false,
  },
  {
    image: "/images/services/custom-tour-packages.jpg",
    title: "Custom Sri Lanka Tour Packages",
    description:
      "Tell us what you want to see and we'll design a tailor-made circuit across the Cultural Triangle, hill country, and southern beaches — route, stops, and logistics all handled.",
    ctaLabel: "Start planning",
    ctaHref: "/contact",
    external: false,
  },
  {
    image: "/images/services/car-van-hire.jpg",
    title: "Private Car & Van Hire with Driver",
    description:
      "Hire a private vehicle with an experienced driver for as long as you need — a few hours, a full day, or your entire trip. Ideal for families and small groups.",
    ctaLabel: "Get a quote",
    ctaHref: whatsappLink("Hi! I'd like a quote for a private car/van with driver."),
    external: true,
  },
];

export default function Services() {
  return (
    <section className="bg-warm-stone px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">WHAT WE OFFER</p>
        <h2 className="font-display max-w-xl text-3xl text-ink-teal sm:text-4xl">
          Everything you need to travel Sri Lanka comfortably
        </h2>
        <p className="mt-4 max-w-xl font-body text-ink-charcoal-soft">
          From the moment you land to the moment you depart, Ceylon Vantage
          covers every journey in between.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="card-pop group flex flex-col justify-between overflow-hidden bg-soft-white p-6"
            >
              <div>
                <ServiceCardImage src={s.image} alt={s.title} />
                <p className="font-display text-lg text-ink-teal">
                  {s.title}
                </p>
                <p className="mt-2 font-body text-sm text-ink-charcoal-soft">
                  {s.description}
                </p>
              </div>

              {s.external ? (
                <a
                  href={s.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-ink-teal px-5 py-2 text-center font-body text-sm text-soft-white transition hover:bg-ink-teal-deep"
                >
                  {s.ctaLabel}
                </a>
              ) : (
                <Link
                  href={s.ctaHref}
                  className="mt-5 inline-block rounded-full bg-ink-teal px-5 py-2 text-center font-body text-sm text-soft-white transition hover:bg-ink-teal-deep"
                >
                  {s.ctaLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
