import RidgeLine from "./RidgeLine";
import TestimonialsCollage from "./TestimonialsCollage";

// Placeholder testimonial copy, written in the voice of the kind of trip
// this company actually runs -- swap each line for a real traveler quote
// as reviews come in. Shown with no names attached, by design.
const TESTIMONIALS = [
  "Our itinerary changed twice while we were on the road and it was never a problem — it felt like traveling with someone who actually knew the island, not a fixed schedule.",
  "We told them what we cared about once, at the start, and every day of the trip reflected it. That's rarer than it should be.",
  "No haggling, no surprise stops, no commission detours to shops we didn't ask for — just the price we agreed and the trip we asked for.",
  "Early flight, late transfer, a change of plan halfway through — every message got a real reply within minutes, not a queue.",
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-warm-stone px-6 py-24">
      {/* Background collage -- add photos to public/images/testimonials/
          (see the README there) and they'll show here automatically. */}
      <TestimonialsCollage />
      {/* A light wash so the collage reads as a unified backdrop rather
          than clashing photos, while staying clearly visible itself.
          Legibility of the text on top comes from the frosted panel
          below, not from hiding this image. */}
      <div className="absolute inset-0 bg-warm-stone/45" />
      <RidgeLine
        tone="gold"
        className="absolute bottom-0 left-[-5%] h-10 w-[130%] opacity-30"
      />

      <div className="relative mx-auto max-w-6xl rounded-3xl bg-warm-stone/92 p-8 shadow-lg backdrop-blur-sm sm:p-14">
        <p className="eyebrow mb-3">FROM THE ROAD</p>
        <h2 className="font-display max-w-xl text-3xl text-ink-teal sm:text-4xl">
          What it feels like to travel with us
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          {TESTIMONIALS.map((quote, i) => (
            <blockquote key={i} className="border-l-2 border-vantage-gold pl-6">
              <p className="font-display text-xl italic leading-snug text-ink-teal">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
