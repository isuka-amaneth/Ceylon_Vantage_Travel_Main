import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import BackButton from "@/components/BackButton";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "All Destinations — Ceylon Vantage",
  description:
    "Every destination we plan trips around across Sri Lanka, from ancient capitals to hill country to the coast.",
};

export default function AllDestinationsPage() {
  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40">
        <div className="mx-auto max-w-6xl">
          <BackButton href="/" label="← Back to home" className="mb-8 inline-block" />
          <p className="eyebrow mb-4">WHERE TO GO</p>
          <h1 className="font-display max-w-2xl text-4xl text-soft-white sm:text-5xl">
            Every destination we build trips around
          </h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            {destinations.length} places across the island, from ancient
            capitals to hill country to the coast. Tap any one to see when to
            go, what to do, and how long to stay.
          </p>
        </div>
      </section>

      <section className="bg-warm-stone px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} d={d} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
