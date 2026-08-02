"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RidgeLine from "./RidgeLine";

type Props = {
  images: string[];
  alt: string;
  className?: string;
  /** "hover" only cycles while the cursor is over the element (cards).
   *  "auto" cycles continuously regardless of hover (hero, detail banners). */
  mode?: "hover" | "auto";
  intervalMs?: number;
  /** Set true only for the one image on a page that's visible without
   *  scrolling (hero banners, detail-page headers) so Next.js loads it
   *  immediately at full priority instead of lazily -- this is what
   *  keeps the largest/first-visible image from being the thing making
   *  the initial page load feel slow. Every other slideshow (card grids
   *  further down the page) should leave this false so those images
   *  don't load until the visitor actually scrolls near them. */
  priority?: boolean;
  /** Passed straight through to next/image so it only downloads a
   *  resolution appropriate to how large the image actually renders on
   *  screen, instead of always fetching the full-size original. */
  sizes?: string;
};

export default function ImageSlideshow({
  images,
  alt,
  className = "",
  mode = "auto",
  intervalMs = mode === "hover" ? 1400 : 5000,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: Props) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const usable = images.filter((_, i) => !failed.has(i));
  const allFailed = images.length > 0 && failed.size === images.length;

  const advance = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  const startCycling = () => {
    if (intervalRef.current || images.length <= 1) return;
    intervalRef.current = setInterval(advance, intervalMs);
  };

  const stopCycling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // "auto" mode cycles from the moment it mounts, no hover needed
  useEffect(() => {
    if (mode === "auto") {
      startCycling();
      return stopCycling;
    }
    // "hover" mode starts/stops cleanup on unmount only
    return stopCycling;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, images.length]);

  const handlers =
    mode === "hover"
      ? {
          onMouseEnter: startCycling,
          onMouseLeave: () => {
            stopCycling();
            setIndex(0);
          },
        }
      : {};

  return (
    <div
      className={`overflow-hidden bg-ink-teal-deep ${className}`}
      {...handlers}
    >
      {allFailed || images.length === 0 ? (
        <>
          <RidgeLine
            tone="stone"
            className="absolute bottom-4 left-[-10%] h-24 w-[130%] opacity-[0.15]"
          />
          <RidgeLine
            tone="gold"
            className="absolute bottom-0 left-[-5%] h-14 w-[130%] opacity-40"
          />
          <p className="eyebrow absolute bottom-4 left-4 text-soft-white/50">
            [ add photo: {images[0]?.replace("/images/", "") ?? "none set"} ]
          </p>
        </>
      ) : (
        images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : ""}
            fill
            sizes={sizes}
            // Only the very first frame of a priority slideshow (the
            // one visible on load) skips lazy-loading -- every other
            // frame in the same slideshow, and every card slideshow
            // further down the page, still loads lazily.
            priority={priority && i === 0}
            loading={priority && i === 0 ? undefined : "lazy"}
            onError={() => setFailed((prev) => new Set(prev).add(i))}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              i === index && !failed.has(i) ? "opacity-100" : "opacity-0"
            }`}
          />
        ))
      )}
      {/* Subtle position dots — only shown once more than one photo is actually available */}
      {usable.length > 1 && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                i === index ? "bg-soft-white opacity-90" : "bg-soft-white opacity-40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
