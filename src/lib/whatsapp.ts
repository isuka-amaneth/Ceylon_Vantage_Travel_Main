const WHATSAPP_NUMBER = "94766110172";

/**
 * Builds a wa.me link with a pre-filled message, so a tap opens WhatsApp
 * with context already typed in rather than a blank chat -- removes a
 * step for the visitor and tells us immediately what they're asking about.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
