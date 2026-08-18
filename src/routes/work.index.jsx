import { createFileRoute } from "@tanstack/react-router";
import GenreSection from "@/components/GenreSection";

const TITLE = "Work — Photography Portfolio | Tanishq Sharma";
const DESCRIPTION =
  "Browse Tanishq Sharma's photography portfolio across concert, café, jewellery, automobile, celebrity events, fashion, street, wildlife and event work.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-[1500px] px-6 pt-10 sm:px-10 lg:px-24">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-primary">PORTFOLIO</p>
        <h1 className="mt-3 font-display text-[clamp(2.2rem,8vw,4rem)] leading-[0.9] text-primary">
          THE WORK
        </h1>
        <span className="mt-4 block h-[3px] w-16 bg-primary" />
      </div>
      <GenreSection />
    </div>
  );
}
