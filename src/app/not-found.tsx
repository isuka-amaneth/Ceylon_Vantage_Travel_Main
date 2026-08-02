import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <NavBar />
      <section className="flex min-h-screen flex-col items-center justify-center bg-ink-teal px-6 py-40 text-center text-soft-white">
        <p className="eyebrow mb-3">LOST YOUR WAY?</p>
        <h1 className="font-display text-4xl sm:text-5xl">
          This road doesn&apos;t lead anywhere.
        </h1>
        <p className="mt-4 max-w-md font-body text-soft-white/80">
          The page you&apos;re looking for doesn&apos;t exist — but the
          rest of Sri Lanka still does. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-vantage-gold px-7 py-3 font-body text-sm font-medium text-ink-teal-deep transition hover:bg-vantage-gold-soft"
        >
          Back to homepage
        </Link>
      </section>
      <Footer />
    </main>
  );
}
