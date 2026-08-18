import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import GenreSection from "@/components/GenreSection";
import Reveal from "@/components/Reveal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

import { site, whatsappLink } from "@/config/site";

const TITLE = "Tanishq Sharma | Professional Photographer";
const DESCRIPTION =
  "Tanishq Sharma is a professional photographer specializing in concerts, fashion, jewellery, automobiles, events, wildlife and lifestyle photography.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: "Photographer",
          description: DESCRIPTION,
          url: "/",
          knowsAbout: [
            "Concert photography",
            "Fashion photography",
            "Jewellery photography",
            "Automobile photography",
            "Wildlife photography",
            "Event photography",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <GenreSection />



      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-8 px-6 sm:px-10 lg:px-24">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-primary">
              READY WHEN YOU ARE
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.6rem,5vw,2.6rem)] leading-tight text-foreground">
              LET&apos;S MAKE SOMETHING
              <br />
              WORTH LOOKING AT.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-4 text-[12px] font-semibold tracking-[0.16em] text-primary-foreground transition-colors hover:bg-[var(--blood)]"
            >
              BOOK A SHOOT <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/work"
              className="inline-flex items-center gap-3 border border-primary px-6 py-4 text-[12px] font-semibold tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              SEE ALL WORK <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <AboutSection as="h2" className="border-t border-border pb-16 pt-16 sm:pb-20 sm:pt-20" />
      <ContactSection as="h2" className="border-t border-border pb-20 pt-16 sm:pt-20" />
    </>
  );
}

