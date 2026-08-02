import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import {
  WhatsAppIcon,
  PhoneIcon,
  EmailIcon,
  PinIcon,
  InstagramIcon,
  FacebookIcon,
  TripAdvisorIcon,
} from "@/components/ContactIcons";
import { whatsappLink } from "@/lib/whatsapp";
import { siteInfo } from "@/lib/siteInfo";

export const metadata: Metadata = {
  title: "Contact — Ceylon Vantage",
  description:
    "Get in touch with Ceylon Vantage to plan your private Sri Lanka trip — WhatsApp, email, or the trip form.",
};

export default function ContactPage() {
  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40 text-soft-white">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-3">GET IN TOUCH</p>
          <h1 className="font-display text-4xl sm:text-5xl">
            Let&apos;s plan your Sri Lanka trip
          </h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            Send us a WhatsApp message, drop an email, or fill in the form
            below — we typically reply within one business day with a real
            itinerary and a fixed price, no obligation.
          </p>
        </div>
      </section>

      <section className="bg-soft-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <p className="eyebrow mb-3">FIND US</p>
              <div className="overflow-hidden rounded-2xl border hairline">
                <iframe
                  src={siteInfo.mapEmbedSrc}
                  title="Ceylon Vantage location"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 font-body text-xs text-ink-charcoal-soft/70">
                <PinIcon className="h-3.5 w-3.5" />
                <span>
                  {siteInfo.address.line1} {siteInfo.address.line2}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div>
              <p className="eyebrow mb-3">WAYS TO REACH US</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <ContactCard
                  href={whatsappLink("Hi! I'd like to plan a trip to Sri Lanka.")}
                  external
                  icon={<WhatsAppIcon />}
                  title="WhatsApp"
                  badge="Fastest"
                  body="Message any time — usually a reply within a few hours."
                  value={siteInfo.phoneDisplay}
                />

                <ContactCard
                  href={`tel:${siteInfo.phoneDisplay.replace(/\s+/g, "")}`}
                  icon={<PhoneIcon />}
                  title="Call"
                  body="Talk it through directly, Sri Lanka business hours."
                  value={siteInfo.phoneDisplay}
                />

                <ContactCard
                  href={`mailto:${siteInfo.email}`}
                  icon={<EmailIcon />}
                  title="Email"
                  body="A full itinerary proposal, straight to your inbox."
                  value={siteInfo.email}
                />

                <ContactCard
                  href={siteInfo.social.instagram}
                  external
                  icon={<InstagramIcon />}
                  title="Instagram"
                  body="Trip photos, routes, and behind-the-scenes."
                  value={siteInfo.social.instagramHandle}
                />

                <ContactCard
                  href={siteInfo.social.facebook}
                  external
                  icon={<FacebookIcon />}
                  title="Facebook"
                  body="Follow our page for updates and traveler posts."
                  value="View our page"
                />

                <ContactCard
                  href={siteInfo.social.tripadvisor}
                  external
                  icon={<TripAdvisorIcon />}
                  title="TripAdvisor"
                  body="Read verified reviews from past travelers."
                  value="View our listing"
                />

                <div className="group flex items-start gap-4 rounded-xl border hairline bg-warm-stone p-5 transition hover:border-vantage-gold/70 hover:shadow-sm sm:col-span-2">
                  <PinIcon />
                  <div>
                    <p className="font-display text-base text-ink-teal">
                      Address
                    </p>
                    <p className="mt-1 font-body text-sm text-ink-charcoal-soft">
                      Visit by appointment — happy to meet in person to plan.
                    </p>
                    <p className="mt-2 font-body text-sm font-medium text-ink-teal">
                      {siteInfo.address.line1} {siteInfo.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

function ContactCard({
  href,
  external,
  icon,
  title,
  badge,
  body,
  value,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  title: string;
  badge?: string;
  body: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex items-start gap-4 overflow-hidden rounded-xl border hairline bg-warm-stone p-5 transition duration-300 hover:-translate-y-0.5 hover:border-vantage-gold/70 hover:shadow-md"
    >
      {/* Gold accent bar that slides in from the left on hover -- a
          small, consistent "this is interactive" cue across every card. */}
      <span className="absolute inset-y-0 left-0 w-[3px] -translate-x-full bg-vantage-gold transition-transform duration-300 group-hover:translate-x-0" />
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="flex items-center font-display text-base text-ink-teal">
          {title}
          {badge && (
            <span className="ml-2 font-body text-xs font-medium uppercase tracking-wide text-vantage-gold">
              {badge}
            </span>
          )}
        </p>
        <p className="mt-1 font-body text-sm text-ink-charcoal-soft">{body}</p>
        <p className="mt-2 truncate font-body text-sm font-medium text-ink-teal">
          {value}
        </p>
      </div>
    </a>
  );
}