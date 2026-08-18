import { createFileRoute } from "@tanstack/react-router";
import ContactSection from "@/components/ContactSection";

const TITLE = "Contact & Bookings — Tanishq Sharma Photography";
const DESCRIPTION =
  "Book a photography shoot with Tanishq Sharma. Reach out on WhatsApp, Instagram or email for concerts, fashion, events and commercial work.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return <ContactSection />;
}
