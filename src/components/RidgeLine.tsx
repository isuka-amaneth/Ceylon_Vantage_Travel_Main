type RidgeLineProps = {
  className?: string;
  tone?: "gold" | "stone" | "teal";
};

/**
 * The brand's signature motif: a layered elevation-profile line, evoking
 * the hill-country ridges a chauffeur reads like a second language, and
 * literalizing "vantage" as a matter of standing at the right elevation.
 * Reused as section dividers, hero backdrop, and card accents.
 */
export default function RidgeLine({ className = "", tone = "gold" }: RidgeLineProps) {
  const stroke =
    tone === "gold" ? "#b8873a" : tone === "teal" ? "#13332e" : "#d8cdb4";

  return (
    <svg
      viewBox="0 0 1200 80"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 L120 34 L210 52 L330 12 L420 44 L540 24 L660 56 L780 20 L900 48 L1020 8 L1110 38 L1200 26"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
