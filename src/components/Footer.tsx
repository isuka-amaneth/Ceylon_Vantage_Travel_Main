import Link from "next/link";
import { tours } from "@/lib/tours";
import { whatsappLink } from "@/lib/whatsapp";
import { siteInfo } from "@/lib/siteInfo";

const SOCIALS = [
  {
    label: "WhatsApp",
    href: whatsappLink("Hi! I'd like to know more about Ceylon Vantage."),
    svg: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
        <path d="M16.004 3C9.377 3 4 8.373 4 14.996c0 2.19.588 4.32 1.706 6.19L4 29l8.02-1.676a13.02 13.02 0 0 0 3.984.63h.005c6.627 0 12.004-5.373 12.004-11.996C28.013 8.373 22.636 3 16.004 3Zm0 21.86h-.004a9.87 9.87 0 0 1-5.03-1.377l-.36-.213-4.76.996 1.014-4.64-.235-.376a9.83 9.83 0 0 1-1.51-5.254c0-5.457 4.44-9.895 9.9-9.895 2.644 0 5.128 1.03 6.997 2.898a9.83 9.83 0 0 1 2.897 6.998c0 5.457-4.44 9.863-9.909 9.863Zm5.42-7.396c-.297-.149-1.758-.868-2.031-.967-.273-.099-.472-.149-.67.148-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.39-1.475-.883-.788-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.67-1.614-.918-2.211-.242-.581-.487-.502-.67-.511l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.874 1.213 3.072c.148.198 2.096 3.2 5.078 4.489.709.306 1.262.489 1.693.626.711.226 1.359.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.174-1.412-.074-.124-.272-.198-.57-.347Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteInfo.social.instagram,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: siteInfo.social.facebook,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
        <path d="M14.5 8.5h2V5.3c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.84 1.75-4.84 4.97v2.6H6v3.5h3.26V21h3.6v-4.78h3.13l.5-3.5h-3.63V10.5c0-1.01.28-1.7 1.64-1.7Z" />
      </svg>
    ),
  },
  {
    label: "TripAdvisor",
    href: siteInfo.social.tripadvisor,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="13.5" r="4" />
        <circle cx="16" cy="13.5" r="4" />
        <circle cx="8" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
        <path d="M5.2 9.8C6.7 8 9 7 12 7s5.3 1 6.8 2.8" />
      </svg>
    ),
  },
];

const MAIN_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const featuredTours = tours.slice(0, 5);

  return (
    <footer className="bg-ink-teal-deep px-6 pb-8 pt-16 text-soft-white/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-xl text-soft-white">
              Ceylon Vantage
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed">
              A small, personal team dedicated to making your Sri Lanka
              holiday smooth, safe, and unforgettable — from airport pickup
              to final drop-off. Decades of local road knowledge, one
              dedicated driver-guide per trip, and a real person on the
              other end of every message.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-soft-white/15 text-soft-white/80 transition hover:-translate-y-0.5 hover:border-vantage-gold-soft hover:text-vantage-gold-soft"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-base text-soft-white">
              Main Links
            </p>
            <ul className="mt-4 space-y-2">
              {MAIN_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm transition hover:text-vantage-gold-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-base text-soft-white">
              Popular Tours
            </p>
            <ul className="mt-4 space-y-2">
              {featuredTours.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tours/${t.slug}`}
                    className="font-body text-sm transition hover:text-vantage-gold-soft"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-base text-soft-white">
              Get In Touch
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              <li>
                <a
                  href={whatsappLink(
                    "Hi! I'd like to know more about Ceylon Vantage."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-vantage-gold-soft"
                >
                  WhatsApp: {siteInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteInfo.phoneDisplay.replace(/\s+/g, "")}`}
                  className="transition hover:text-vantage-gold-soft"
                >
                  Call: {siteInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="transition hover:text-vantage-gold-soft"
                >
                  {siteInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={siteInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-vantage-gold-soft"
                >
                  Instagram: {siteInfo.social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={siteInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-vantage-gold-soft"
                >
                  Facebook
                </a>
              </li>
              <li className="pt-1 text-soft-white/60">
                {siteInfo.address.line1}
                <br />
                {siteInfo.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-soft-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-body text-xs text-soft-white/50">
            &copy; {new Date().getFullYear()} Ceylon Vantage — Private
            Driver &amp; Tour Operator, Sri Lanka.
          </p>
          <p className="font-body text-xs text-soft-white/50">
            Registered in Sri Lanka · Serving travelers island-wide ·{" "}
            <Link
              href="/privacy"
              className="underline decoration-soft-white/30 underline-offset-2 transition hover:text-vantage-gold-soft"
            >
              Privacy &amp; Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}