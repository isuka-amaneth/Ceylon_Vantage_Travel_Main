"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery";

const FILTERS = ["All", "Trips", "Tours", "Destinations"] as const;

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const shown =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 font-body text-sm transition ${
              filter === f
                ? "border-ink-teal bg-ink-teal text-soft-white"
                : "border-line-hairline text-ink-charcoal-soft hover:border-ink-teal"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border hairline bg-warm-stone"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              width={600}
              height={450}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-teal-deep/85 to-transparent p-4">
              <p className="font-body text-sm text-soft-white">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
