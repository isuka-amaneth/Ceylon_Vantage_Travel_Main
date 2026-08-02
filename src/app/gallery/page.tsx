import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryPhotos } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery — Ceylon Vantage",
  description:
    "Photos from Ceylon Vantage's tours and destinations across Sri Lanka.",
};

export default function GalleryPage() {
  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40 text-soft-white">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-3">A LOOK AROUND</p>
          <h1 className="font-display text-4xl sm:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            A few glimpses of the places and trips we cover across Sri Lanka.
            More photos from actual guest trips are added here regularly.
          </p>
        </div>
      </section>

      <section className="bg-soft-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <GalleryGrid photos={galleryPhotos} />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
