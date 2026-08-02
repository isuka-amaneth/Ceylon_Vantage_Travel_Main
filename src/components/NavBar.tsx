"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open, and close it
  // automatically if the viewport is resized past the mobile breakpoint.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-ink-teal/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(216,205,180,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Clicking the logo/name always returns to the homepage, from any page */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- small
              brand mark, not a content photo, so next/image's optimization
              pipeline isn't needed here */}
          <img
            src="/images/logo/full.png"
            alt="Ceylon Vantage"
            className="h-12 w-12 rounded-2xl object-cover shadow-md ring-1 ring-vantage-gold/40"
          />
          <span className="font-display text-2xl tracking-tight text-soft-white">
            Ceylon Vantage
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm text-soft-white/85 transition hover:text-vantage-gold-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full border border-vantage-gold/70 px-5 py-2 font-body text-sm text-soft-white transition hover:bg-vantage-gold hover:text-ink-teal-deep md:inline-block"
        >
          Plan my trip
        </Link>

        {/* Hamburger -- phones and tablets only. Animates into an "X"
            when the menu is open. */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-soft-white transition-all duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-soft-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-soft-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile slide-down panel */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 font-body text-base text-soft-white/90 transition hover:bg-soft-white/10 hover:text-vantage-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-vantage-gold px-5 py-3 text-center font-body text-sm font-medium text-ink-teal-deep transition hover:bg-vantage-gold-soft"
              >
                Plan my trip
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
