import type { ReactNode } from "react";

type IconProps = { className?: string };

/** Shared wrapper: a soft circular badge in the brand's gold, holding a
 *  thin-stroke line icon -- the same restrained, editorial treatment
 *  used for the rest of the site's iconography (RidgeLine, checkmarks). */
function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vantage-gold/12 text-vantage-gold">
      {children}
    </span>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`${className} fill-current`}>
        <path d="M16.004 3C9.377 3 4 8.373 4 14.996c0 2.19.588 4.32 1.706 6.19L4 29l8.02-1.676a13.02 13.02 0 0 0 3.984.63h.005c6.627 0 12.004-5.373 12.004-11.996C28.013 8.373 22.636 3 16.004 3Zm0 21.86h-.004a9.87 9.87 0 0 1-5.03-1.377l-.36-.213-4.76.996 1.014-4.64-.235-.376a9.83 9.83 0 0 1-1.51-5.254c0-5.457 4.44-9.895 9.9-9.895 2.644 0 5.128 1.03 6.997 2.898a9.83 9.83 0 0 1 2.897 6.998c0 5.457-4.44 9.863-9.909 9.863Zm5.42-7.396c-.297-.149-1.758-.868-2.031-.967-.273-.099-.472-.149-.67.148-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.39-1.475-.883-.788-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.67-1.614-.918-2.211-.242-.581-.487-.502-.67-.511l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.874 1.213 3.072c.148.198 2.096 3.2 5.078 4.489.709.306 1.262.489 1.693.626.711.226 1.359.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.174-1.412-.074-.124-.272-.198-.57-.347Z" />
      </svg>
    </IconBadge>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5c0-.8.6-1.5 1.5-1.5h2.2c.6 0 1.1.4 1.3 1l1 3c.2.6 0 1.2-.5 1.6l-1.4 1.1a13 13 0 0 0 5.7 5.7l1.1-1.4c.4-.5 1-.7 1.6-.5l3 1c.6.2 1 .7 1 1.3v2.2c0 .9-.7 1.5-1.5 1.5C10.6 20.9 3.1 13.4 3.1 5.9 3.1 5.7 4 5.5 4 5.5Z" />
      </svg>
    </IconBadge>
  );
}

export function EmailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    </IconBadge>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    </IconBadge>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    </IconBadge>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" stroke="none">
        <path d="M14.5 8.5h2V5.3c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.84 1.75-4.84 4.97v2.6H6v3.5h3.26V21h3.6v-4.78h3.13l.5-3.5h-3.63V10.5c0-1.01.28-1.7 1.64-1.7Z" />
      </svg>
    </IconBadge>
  );
}

export function TripAdvisorIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="13.5" r="4" />
        <circle cx="16" cy="13.5" r="4" />
        <circle cx="8" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
        <path d="M11 12.2c.35-.55.65-.55 1 0" />
        <path d="M5.2 9.8C6.7 8 9 7 12 7s5.3 1 6.8 2.8" />
        <path d="M9.3 7 7 5.2" />
        <path d="M14.7 7 17 5.2" />
      </svg>
    </IconBadge>
  );
}