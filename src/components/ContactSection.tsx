import InquiryForm from "./InquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink-teal px-6 py-24 text-soft-white">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-3">PLAN YOUR TRIP</p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Tell us where you want to go.
        </h2>
        <p className="mt-4 max-w-xl font-body text-soft-white/80">
          No fixed packages, no pressure — just tell us what you have in
          mind and we&apos;ll come back with a real itinerary shaped around it,
          usually within one business day.
        </p>

        <div className="mt-12 rounded-sm bg-warm-stone p-6 sm:p-10">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
