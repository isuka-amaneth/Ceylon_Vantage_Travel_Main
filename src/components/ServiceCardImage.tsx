"use client";

import { useState } from "react";
import RidgeLine from "./RidgeLine";

/**
 * Image strip for a service card. The photo fades into the card's own
 * background color at the bottom edge, so the title and description
 * -- which sit in that solid area, never on top of the photo itself --
 * stay perfectly legible no matter what image is dropped in here later.
 *
 * To add or swap a photo: replace the file at the `src` path passed in
 * from Services.tsx (see the SERVICES array). Nothing else needs to
 * change -- if the file is missing, a clean branded placeholder shows
 * instead of a broken image.
 */
export default function ServiceCardImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative -mx-6 -mt-6 mb-5 h-36 overflow-hidden bg-ink-teal-deep">
      {!failed ? (
        // These are site-owner-supplied photos dropped in at runtime, not
        // known at build time, so next/image's build pipeline doesn't
        // apply here.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      ) : (
        <>
          <RidgeLine
            tone="stone"
            className="absolute bottom-2 left-[-10%] h-16 w-[130%] opacity-[0.18]"
          />
          <RidgeLine
            tone="gold"
            className="absolute bottom-0 left-[-5%] h-10 w-[130%] opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="eyebrow !text-soft-white/40">Photo space</span>
          </div>
        </>
      )}
      {/* Fade straight into the card's own background so text placed
          below never sits on top of the image itself. */}
      <div className="absolute inset-0 bg-gradient-to-t from-soft-white via-soft-white/0 to-transparent" />
    </div>
  );
}
