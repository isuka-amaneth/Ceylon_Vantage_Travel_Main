import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import TourCard from "@/components/TourCard";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tour Packages — Ceylon Vantage",
  description:
    "Private day tours and multi-day circuits across Sri Lanka, each with a full itinerary, private driver, and flexible pacing.",
};

export default function ToursPage() {
  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40">
        <div className="mx-auto max-w-6xl">
          <BackButton href="/" label="← Back to home" className="mb-8 inline-block" />
          <p className="eyebrow mb-4">TOUR PACKAGES</p>
          <h1 className="font-display max-w-2xl text-4xl text-soft-white sm:text-5xl">
            Private tours, planned in detail
          </h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            Every package below is a real itinerary, not just a place — a
            private driver throughout, and a clear idea of what each day
            actually looks like before you book.
          </p>
        </div>
      </section>

      <section className="bg-warm-stone px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <TourCard key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
