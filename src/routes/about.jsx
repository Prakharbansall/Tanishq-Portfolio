import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/components/AboutSection";

const TITLE = "About — Tanishq Sharma, Photographer";
const DESCRIPTION =
  "Tanishq Sharma is a photographer working across concerts, fashion, jewellery, automobiles, wildlife and events. Cinematic, editorial, honest imagery.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return <AboutSection />;
}
