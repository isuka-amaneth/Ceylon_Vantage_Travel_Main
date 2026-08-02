import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import ImageSlideshow from "./ImageSlideshow";

export default function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link
      href={`/destinations/${d.slug}`}
      className="card-pop group flex h-full flex-col justify-between overflow-hidden bg-soft-white hover:bg-ink-teal"
    >
      <div>
        <ImageSlideshow
          images={d.images}
          alt={d.name}
          mode="hover"
          className="relative aspect-[4/3] w-full"
        />
        <div className="p-7 pb-0">
          <h3 className="font-display text-xl text-ink-teal transition group-hover:text-soft-white">
            {d.name}
          </h3>
          <p className="mt-2 font-body text-sm text-ink-charcoal-soft transition group-hover:text-soft-white/75">
            {d.tagline}
          </p>
        </div>
      </div>
      <p className="eyebrow p-7 pt-8 transition group-hover:text-vantage-gold-soft">
        {d.elevation} · {d.region.toUpperCase()}
      </p>
    </Link>
  );
}
