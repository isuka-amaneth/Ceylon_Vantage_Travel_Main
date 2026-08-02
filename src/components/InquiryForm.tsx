"use client";

import { useState, type FormEvent } from "react";

const TRAVEL_TYPES = [
  "Couple",
  "Family",
  "Honeymoon",
  "Solo",
  "Friends / group",
];

const BUDGET_RANGES = [
  "Under $1,500 pp",
  "$1,500 – $3,000 pp",
  "$3,000 – $5,000 pp",
  "$5,000+ pp",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border hairline bg-soft-white p-10 text-center">
        <p className="eyebrow mb-3">RECEIVED</p>
        <h3 className="font-display text-2xl text-ink-teal">
          Your trip details are in.
        </h3>
        <p className="mt-3 font-body text-ink-charcoal-soft">
          We reply within one business day — usually over WhatsApp or email,
          whichever you prefer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      {/* Honeypot -- invisible to real visitors and skipped by screen
          readers, but simple bots that auto-fill every input tend to
          fill this in too. Server rejects silently if it's non-empty. */}
      <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="WhatsApp number" name="whatsapp" type="tel" required />
      <Field label="Country" name="country" required />
      <Field label="Arrival date" name="arrivalDate" type="date" />
      <Field label="Departure date" name="departureDate" type="date" />
      <Field label="Number of travelers" name="travelers" type="number" min={1} />

      <SelectField label="Travel type" name="travelType" options={TRAVEL_TYPES} />
      <SelectField
        label="Budget range"
        name="budget"
        options={BUDGET_RANGES}
        className="sm:col-span-2"
      />

      <Field
        label="Destinations you're interested in"
        name="destinations"
        placeholder="e.g. Sigiriya, Ella, Yala, southern beaches"
        className="sm:col-span-2"
      />
      <Field
        label="Activities you have in mind"
        name="activities"
        placeholder="e.g. wildlife safari, tea plantation tour, surfing"
        className="sm:col-span-2"
      />

      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="font-body text-sm text-ink-charcoal">
          Anything else we should know
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Special requirements, occasions, accessibility needs, pace you prefer..."
          className="rounded-sm border hairline bg-soft-white px-4 py-3 font-body text-ink-charcoal placeholder:text-ink-charcoal-soft/50 focus:border-vantage-gold"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-ink-teal px-8 py-3 font-body text-sm font-medium text-soft-white transition hover:bg-ink-teal-deep disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send trip details"}
        </button>
        {status === "error" && (
          <p className="mt-3 font-body text-sm text-red-700">
            Something went wrong sending this — please try again, or reach us
            directly on WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-body text-sm text-ink-charcoal">
        {label}
        {required && <span className="text-vantage-gold"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        className="rounded-sm border hairline bg-soft-white px-4 py-3 font-body text-ink-charcoal placeholder:text-ink-charcoal-soft/50 focus:border-vantage-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-body text-sm text-ink-charcoal">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-sm border hairline bg-soft-white px-4 py-3 font-body text-ink-charcoal focus:border-vantage-gold"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
