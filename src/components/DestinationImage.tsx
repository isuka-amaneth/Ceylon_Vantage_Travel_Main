"use client";

import { useState } from "react";
import RidgeLine from "./RidgeLine";

export default function DestinationImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden bg-ink-teal-deep ${className}`}>
      {!failed && (
        // Destination photos are dropped in by the site owner at runtime,
        // not known at build time, so next/image's build-time optimization
        // doesn't apply here.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {failed && (
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
            [ add photo: {src.replace("/images/", "")} ]
          </p>
        </>
      )}
    </div>
  );
}
