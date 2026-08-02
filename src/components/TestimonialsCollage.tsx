"use client";

import { useState } from "react";

/**
 * Background photo collage for the testimonials section. Add your own
 * photos to public/images/testimonials/ (see the README there) -- any
 * slot without a file simply doesn't render, so the collage still looks
 * clean with only some of the six slots filled in.
 */
const COLLAGE_SLOTS = [
  "/images/testimonials/collage-1.jpg",
  "/images/testimonials/collage-2.jpg",
  "/images/testimonials/collage-3.jpg",
  "/images/testimonials/collage-4.jpg",
  "/images/testimonials/collage-5.jpg",
  "/images/testimonials/collage-6.jpg",
];

export default function TestimonialsCollage() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1">
      {COLLAGE_SLOTS.map((src) =>
        failed[src] ? (
          // Empty slot -- no file yet. Leave a bare hint of texture so the
          // grid doesn't look like a mistake, without drawing attention.
          <div key={src} className="bg-ink-teal-deep/5" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            onError={() => setFailed((prev) => ({ ...prev, [src]: true }))}
            className="h-full w-full object-cover grayscale"
          />
        )
      )}
    </div>
  );
}
