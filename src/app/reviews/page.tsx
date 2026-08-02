import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TripAdvisorWidget from "@/components/TripAdvisorWidget";
import { GoogleMark, TripAdvisorMark } from "@/components/BrandLogos";
import { whatsappLink } from "@/lib/whatsapp";
import { siteInfo } from "@/lib/siteInfo";

export const metadata: Metadata = {
  title: "Reviews — Ceylon Vantage",
  description:
    "Verified guest reviews for Ceylon Vantage, pulled live from TripAdvisor and Google.",
};

/**
 * TripAdvisor is live -- see TripAdvisorWidget.tsx for the embed.
 * Google Reviews is still a placeholder panel below until that listing
 * exists and has reviews. SWAP-IN INSTRUCTIONS for Google, once verified:
 *  - There's no official free embed that shows review text. Cheapest
 *    real options are a small embed tool (Elfsight/EmbedSocial) pointed
 *    at your Business Profile, or linking the badge below straight to
 *    your public Google review page once you have a g.page/r/... link.
 */
export default function ReviewsPage() {
  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40 text-soft-white">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-3">WHAT GUESTS SAY</p>
          <h1 className="font-display text-4xl sm:text-5xl">
            Reviews &amp; feedback
          </h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            Verified feedback from travelers we&apos;ve driven around the
            island, shown here exactly as it appears on our public
            listings — nothing edited, nothing hand-picked.
          </p>
        </div>
      </section>

      <section className="bg-soft-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="card-pop flex h-full flex-col bg-warm-stone p-8">
                <div className="flex items-center gap-3">
                  <GoogleMark className="h-9 w-9" />
                  <div>
                    <p className="font-display text-lg text-ink-teal">
                      Google Reviews
                    </p>
                    <p className="font-body text-xs uppercase tracking-wide text-ink-charcoal-soft/60">
                      Business Profile
                    </p>
                  </div>
                </div>
                <p className="mt-5 flex-1 font-body text-sm leading-relaxed text-ink-charcoal-soft">
                  Our Google Business Profile is being verified. Once it
                  goes live, ratings and reviews will appear here
                  automatically — the same panel, not a redesign.
                </p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border hairline px-3 py-1 font-body text-xs text-ink-charcoal-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-vantage-gold" />
                  Listing in progress
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="card-pop flex h-full flex-col bg-warm-stone p-8">
                <div className="flex items-center gap-3">
                  <TripAdvisorMark className="h-9 w-9" />
                  <div>
                    <p className="font-display text-lg text-ink-teal">
                      TripAdvisor
                    </p>
                    <p className="font-body text-xs uppercase tracking-wide text-ink-charcoal-soft/60">
                      Live rating
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-body text-sm leading-relaxed text-ink-charcoal-soft">
                  Pulled directly from our TripAdvisor listing — this
                  updates automatically as new reviews come in.
                </p>
                <div className="mt-5">
                  <TripAdvisorWidget />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={200}>
            <div className="mx-auto mt-6 rounded-2xl border hairline bg-ink-teal px-6 py-8 text-center text-soft-white sm:px-10">
              <p className="font-display text-xl">
                Want to hear from a recent traveler directly?
              </p>
              <p className="mx-auto mt-2 max-w-md font-body text-sm text-soft-white/75">
                Message us and we&apos;ll happily connect you with
                references from a trip similar to the one you&apos;re
                planning.
              </p>
              <a
                href={whatsappLink(
                  "Hi! Could you share some references or past guest feedback?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-vantage-gold px-6 py-2.5 font-body text-sm font-medium text-ink-teal-deep transition hover:bg-vantage-gold-soft"
              >
                Ask us on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={280}>
            <p className="mt-8 text-center font-body text-xs text-ink-charcoal-soft/60">
              Prefer Instagram? See recent trips and behind-the-scenes at{" "}
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink-teal underline decoration-vantage-gold/50 underline-offset-2 hover:text-vantage-gold"
              >
                {siteInfo.social.instagramHandle}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
