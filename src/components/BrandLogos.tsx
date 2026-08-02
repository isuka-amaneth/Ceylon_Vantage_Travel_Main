type LogoProps = { className?: string };

/** Google's four-color "G" mark, used to identify the Google Reviews panel. */
export function GoogleMark({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17Z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7A22 22 0 0 0 24 46Z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.2 13.2 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A22 22 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7Z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2A22 22 0 0 0 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07Z"
      />
    </svg>
  );
}

/** A simplified, recognizable rendering of TripAdvisor's twin-circle "owl" mark in their signature green. */
export function TripAdvisorMark({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="27" r="19" fill="#34E0A1" />
      <path
        d="M9 20c3-3.6 8-6 15-6s12 2.4 15 6"
        stroke="#000"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="27.5" r="8" fill="#fff" />
      <circle cx="32.5" cy="27.5" r="8" fill="#fff" />
      <circle cx="15.5" cy="27.5" r="4" fill="#000" />
      <circle cx="32.5" cy="27.5" r="4" fill="#000" />
      <path
        d="M22.5 24c.7-1 2.3-1 3 0"
        stroke="#000"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
