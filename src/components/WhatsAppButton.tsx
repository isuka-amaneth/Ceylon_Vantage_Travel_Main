"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * Fixed, always-on-screen WhatsApp button. Lives in the root layout (not
 * a page component) so it's the exact same element on every route and
 * never scrolls away -- a true constant across the whole site, not just
 * the homepage.
 */
export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  // Drives a one-time entrance animation on load rather than the button
  // just appearing instantly.
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink("Hi! I'd like to know more about planning a trip to Sri Lanka.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ceylon Vantage on WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex items-center transition-all duration-500 ease-out sm:bottom-8 sm:right-8 ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {/* Tooltip -- expands out to the left on hover, hidden on very small screens */}
      <span className="mr-3 hidden -translate-x-2 whitespace-nowrap rounded-full bg-ink-teal px-4 py-2 font-body text-sm text-soft-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>

      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
        {/* Pulsing ring -- continuous, subtle, draws the eye without being obnoxious */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-90 shadow-[0_6px_24px_-4px_rgba(37,211,102,0.6)]" />

        {/* Icon sits above the pulse layers, scales up slightly on hover/tap */}
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="relative h-6 w-6 fill-white transition-transform duration-300 group-hover:scale-110 group-active:scale-95 sm:h-7 sm:w-7"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 14.996c0 2.19.588 4.32 1.706 6.19L4 29l8.02-1.676a13.02 13.02 0 0 0 3.984.63h.005c6.627 0 12.004-5.373 12.004-11.996C28.013 8.373 22.636 3 16.004 3Zm0 21.86h-.004a9.87 9.87 0 0 1-5.03-1.377l-.36-.213-4.76.996 1.014-4.64-.235-.376a9.83 9.83 0 0 1-1.51-5.254c0-5.457 4.44-9.895 9.9-9.895 2.644 0 5.128 1.03 6.997 2.898a9.83 9.83 0 0 1 2.897 6.998c0 5.457-4.44 9.863-9.909 9.863Zm5.42-7.396c-.297-.149-1.758-.868-2.031-.967-.273-.099-.472-.149-.67.148-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.39-1.475-.883-.788-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.67-1.614-.918-2.211-.242-.581-.487-.502-.67-.511l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.874 1.213 3.072c.148.198 2.096 3.2 5.078 4.489.709.306 1.262.489 1.693.626.711.226 1.359.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.174-1.412-.074-.124-.272-.198-.57-.347Z" />
        </svg>
      </span>
    </a>
  );
}
