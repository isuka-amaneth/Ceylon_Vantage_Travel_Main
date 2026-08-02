import Link from "next/link";
import { experiences } from "@/lib/experiences";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-soft-white px-6 pb-24 pt-16">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">WAYS TO TRAVEL</p>
        <h2 className="font-display max-w-xl text-3xl text-ink-teal sm:text-4xl">
          Every trip starts with what you actually want to do.
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
              className="rounded-full border hairline px-5 py-2.5 font-body text-sm text-ink-charcoal shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-vantage-gold hover:text-ink-teal hover:shadow-md"
            >
              {exp.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
