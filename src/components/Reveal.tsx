"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps any block of content and fades + lifts it into place the first
 * time it scrolls into view, using IntersectionObserver (no animation
 * library needed). Runs once per element -- it doesn't re-hide content
 * that scrolls back out of view, so scrolling up and down doesn't
 * re-trigger it.
 *
 * `prefers-reduced-motion` is already handled globally in globals.css,
 * which forces every transition/animation duration to ~0, so this
 * automatically becomes an instant appearance for anyone with that
 * preference set -- no extra handling needed here.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
