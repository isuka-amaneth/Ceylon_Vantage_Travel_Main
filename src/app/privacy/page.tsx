import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { siteInfo } from "@/lib/siteInfo";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms — Ceylon Vantage",
  description:
    "How Ceylon Vantage collects, uses, and protects your information, and the terms that apply when you use this website or book a trip with us.",
};

const LAST_UPDATED = "2 August 2026";

export default function PrivacyPage() {
  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40 text-soft-white">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-3">LEGAL</p>
          <h1 className="font-display text-4xl sm:text-5xl">
            Privacy Policy &amp; Terms
          </h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            Plain-language version: we only collect what we need to plan
            your trip and reply to you, we don&apos;t sell your
            information to anyone, and this page explains exactly what
            happens when you use this site.
          </p>
          <p className="mt-3 font-body text-xs text-soft-white/50">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="bg-soft-white px-6 py-16">
        <div className="prose-legal mx-auto max-w-3xl font-body text-ink-charcoal-soft">
          <Section title="1. Who this policy covers">
            <p>
              This policy applies to{" "}
              <strong className="text-ink-teal">
                Ceylon Vantage
              </strong>{" "}
              (&quot;we&quot;, &quot;us&quot;), a private driver and tour
              operator based at {siteInfo.address.line1}{" "}
              {siteInfo.address.line2}, Sri Lanka, and to this website.
              It doesn&apos;t apply to third-party sites we link to
              (Instagram, Facebook, TripAdvisor, Google Maps) — each of
              those has its own privacy policy that governs how they
              handle your data on their platforms.
            </p>
          </Section>

          <Section title="2. What information we collect">
            <p>
              We collect information in two ways: what you actively give
              us, and a small amount of automatic technical data.
            </p>
            <p className="mt-3 font-medium text-ink-teal">
              Information you give us
            </p>
            <p>
              When you submit the &quot;Plan Your Trip&quot; form, we
              collect: your name, email address, WhatsApp number, and
              country, and — if you fill them in — your planned arrival
              and departure dates, number of travelers, travel type,
              budget range, destinations of interest, activities, and
              any message you write. If you contact us directly by
              WhatsApp, email, or phone instead, we receive whatever
              information that conversation naturally includes.
            </p>
            <p className="mt-3 font-medium text-ink-teal">
              Information collected automatically
            </p>
            <p>
              This site does not use analytics or advertising cookies.
              Standard web server logs (like IP address and browser
              type) may be recorded by our hosting provider for security
              and reliability purposes — this is normal for any website
              and isn&apos;t used to build a profile of you.
            </p>
          </Section>

          <Section title="3. How we use your information">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>To reply to your trip inquiry with an itinerary and pricing</li>
              <li>To communicate with you before, during, and after your trip</li>
              <li>To keep a record of past inquiries and bookings for our own reference</li>
              <li>To improve this website and the trips we design</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your information to anyone,
              and we do not use it for advertising.
            </p>
          </Section>

          <Section title="4. Where your information goes when you submit the form">
            <p>
              Submitting the trip-planning form sends your details
              directly to our business email address so a real person
              can reply. As an optional backup, the same details may
              also be stored in a private database we control, purely so
              we don&apos;t lose track of inquiries. Nothing you submit
              is shared with any third party for marketing purposes.
            </p>
          </Section>

          <Section title="5. Third-party services embedded on this site">
            <p>
              A few pages on this site load content from other
              companies. When they do, that company&apos;s own privacy
              policy applies to the data they collect:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong className="text-ink-teal">Google Maps</strong> —
                embedded on the Contact page to show our location.
              </li>
              <li>
                <strong className="text-ink-teal">TripAdvisor</strong> —
                embedded on the Reviews page to show our live rating.
              </li>
              <li>
                <strong className="text-ink-teal">Google Fonts</strong> —
                used to load the typefaces on this site.
              </li>
            </ul>
          </Section>

          <Section title="6. How long we keep your information">
            <p>
              We keep inquiry and booking records for as long as
              reasonably useful for our business relationship with you
              and for our own records (for example, tax and accounting
              purposes). If you&apos;d like us to delete your
              information, contact us using the details below and
              we&apos;ll do so unless we&apos;re required to keep it for
              a legal reason.
            </p>
          </Section>

          <Section title="7. Your rights">
            <p>
              Depending on where you&apos;re contacting us from, you may
              have rights to access, correct, or delete the personal
              information we hold about you, or to ask what we hold. To
              exercise any of these, email us at{" "}
              <a
                href={`mailto:${siteInfo.email}`}
                className="text-ink-teal underline decoration-vantage-gold/50 underline-offset-2 hover:text-vantage-gold"
              >
                {siteInfo.email}
              </a>{" "}
              and we&apos;ll respond as quickly as we can.
            </p>
          </Section>

          <Section title="8. Terms of use">
            <p>
              By using this website, you agree to the following:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Content on this site (photos, itineraries, and text) is
                either owned by us or used with permission, and
                shouldn&apos;t be reproduced elsewhere without asking
                first.
              </li>
              <li>
                Prices, availability, and itineraries shown or discussed
                are indicative until confirmed in writing for your
                specific dates.
              </li>
              <li>
                We work to keep this site accurate and available, but
                don&apos;t guarantee it will always be error-free or
                uninterrupted.
              </li>
            </ul>
            <p className="mt-4 rounded-lg border hairline bg-warm-stone p-4 text-sm">
              <strong className="text-ink-teal">
                A note on booking terms:
              </strong>{" "}
              This page covers the website itself. Specific booking
              terms — deposits, cancellation and refund policy, payment
              schedule, and liability during the trip — should be
              confirmed in writing with each guest at the time of
              booking, since these often vary by trip. If you&apos;d
              like, a dedicated Booking Terms section can be added here
              once you&apos;ve decided on those policies.
            </p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>
              If this policy changes, we&apos;ll update the date at the
              top of this page. Significant changes will be reflected
              here before they take effect.
            </p>
          </Section>

          <Section title="10. Contact us">
            <p>
              Questions about this policy or your information?
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Email: {siteInfo.email}</li>
              <li>WhatsApp / Phone: {siteInfo.phoneDisplay}</li>
              <li>
                Address: {siteInfo.address.line1} {siteInfo.address.line2}
              </li>
            </ul>
          </Section>

          <p className="mt-10 border-t hairline pt-6 text-xs text-ink-charcoal-soft/60">
            This page is provided as a good-faith, plain-language summary
            and isn&apos;t a substitute for legal advice. If you handle
            EU/UK visitors regularly or want airtight legal wording,
            it&apos;s worth having a lawyer review this before you rely
            on it as your sole compliance document.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="font-display text-xl text-ink-teal">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed">{children}</div>
    </div>
  );
}