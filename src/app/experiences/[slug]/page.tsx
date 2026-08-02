import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/destinations";
import { experiences, getExperience } from "@/lib/experiences";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};

  return {
    title: `${experience.label} in Sri Lanka — Ceylon Vantage`,
    description: experience.description,
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const matches = destinations.filter((d) => d.tags.includes(experience.slug));

  return (
    <main>
      <NavBar />

      <section className="bg-ink-teal px-6 pb-16 pt-40">
        <div className="mx-auto max-w-6xl">
          <BackButton href="/#experiences" label="← Ways to travel" className="mb-8 inline-block" />
          <p className="eyebrow mb-4">WAYS TO TRAVEL</p>
          <h1 className="font-display max-w-2xl text-4xl text-soft-white sm:text-5xl">
            {experience.label}
          </h1>
          <p className="mt-4 max-w-xl font-body text-soft-white/80">
            {experience.description}
          </p>
        </div>
      </section>

      <section className="bg-warm-stone px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {matches.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((d) => (
                <DestinationCard key={d.slug} d={d} />
              ))}
            </div>
          ) : (
            <p className="font-body text-ink-charcoal-soft">
              We&apos;re still building out this page — in the meantime,{" "}
              <Link
                href="/#contact"
                className="text-ink-teal underline decoration-vantage-gold underline-offset-4"
              >
                tell us what you have in mind
              </Link>{" "}
              and we&apos;ll shape a trip around it directly.
            </p>
          )}

          <div className="mt-14 border-t hairline pt-8">
            <p className="eyebrow mb-4">OTHER WAYS TO TRAVEL</p>
            <div className="flex flex-wrap gap-3">
              {experiences
                .filter((e) => e.slug !== experience.slug)
                .map((e) => (
                  <Link
                    key={e.slug}
                    href={`/experiences/${e.slug}`}
                    className="rounded-full border hairline px-5 py-2.5 font-body text-sm text-ink-charcoal transition hover:border-vantage-gold hover:text-ink-teal"
                  >
                    {e.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
