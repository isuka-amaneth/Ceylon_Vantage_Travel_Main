import Link from "next/link";

/**
 * Always navigates to an explicit destination rather than relying on
 * browser history (router.back()). History-based "back" is unreliable
 * here because internal links like `/#experiences` push same-page hash
 * entries onto the stack -- going back can land on one of those and just
 * scroll the current page instead of actually navigating away, which is
 * confusing. An explicit href is predictable every time.
 */
export default function BackButton({
  href,
  label = "← Back",
  className = "",
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-body text-sm text-soft-white/80 transition hover:text-vantage-gold-soft ${className}`}
    >
      {label}
    </Link>
  );
}
