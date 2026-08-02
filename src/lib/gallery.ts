import fs from "fs";
import path from "path";
import { tours } from "./tours";
import { destinations } from "./destinations";

export type GalleryPhoto = {
  src: string;
  caption: string;
  category: "Tours" | "Destinations" | "Trips";
};

/**
 * Seeded from the tour/destination photo library that already exists in
 * this project, so the Gallery page has real, relevant content instead of
 * launching empty. These are representative location photos, not client
 * trip snapshots.
 */
const seededPhotos: GalleryPhoto[] = [
  ...tours.map((t) => ({
    src: t.heroImage,
    caption: t.title,
    category: "Tours" as const,
  })),
  ...destinations.map((d) => ({
    src: d.images[0],
    caption: d.name,
    category: "Destinations" as const,
  })),
];

/**
 * ADDING REAL PAST-TRIP PHOTOS: just drop image files into
 * `public/images/gallery/` (jpg, jpeg, png, or webp) -- no code edit
 * needed. Each one appears here automatically, captioned from its
 * filename, e.g. `sunrise-safari-march-2026.jpg` becomes
 * "Sunrise Safari March 2026". Rename the file first if you want a
 * different caption.
 */
function loadDroppedInPhotos(): GalleryPhoto[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .sort()
      .map((file) => {
        const nameWithoutExt = file.replace(/\.[^.]+$/, "");
        const caption = nameWithoutExt
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        return {
          src: `/images/gallery/${file}`,
          caption,
          category: "Trips" as const,
        };
      });
  } catch {
    // Folder doesn't exist yet -- perfectly fine, just nothing to add.
    return [];
  }
}

export const galleryPhotos: GalleryPhoto[] = [
  ...loadDroppedInPhotos(),
  ...seededPhotos,
];
