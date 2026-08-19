import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import { genres } from "@/data/genres";

const aboutImages = [site.aboutPortrait, ...site.heroImages];

export default function AboutSection({ as: Heading = "h1", className = "pb-20 pt-28 sm:pt-32" }) {
  const Sub = Heading === "h1" ? "h2" : "h3";
  const [image, setImage] = useState(aboutImages[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (aboutImages.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setLoaded(false);
      setImage((currentImage) => {
        const currentIndex = aboutImages.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % aboutImages.length;
        return aboutImages[nextIndex];
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [aboutImages]);

  return (
    <section id="about" className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-24">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.24em] text-primary">ABOUT</p>
          <Heading className="mt-3 font-display text-[clamp(2.2rem,7vw,3.6rem)] leading-[0.9] text-primary">
            BEHIND
            <br />
            THE LENS
          </Heading>
          <span className="mt-5 block h-[3px] w-16 bg-primary" />

          <p className="mt-8 text-base leading-8 text-foreground/85">
            I&apos;m {site.name} — a photographer who chases light, not trends. What began as a
            camera borrowed for a college fest turned into a decade-long habit of standing in the
            right place at the right second.
          </p>
          <p className="mt-5 text-sm leading-8 text-muted-foreground">
            My work sits between documentary honesty and editorial polish. I shoot in the pit at
            concerts, in controlled studio dark for jewellery, in national parks before sunrise, and
            in the middle of weddings that never pause. The intent stays the same: images that still
            hold up years later.
          </p>
          <p className="mt-5 text-sm leading-8 text-muted-foreground">
            Every project is shot personally, retouched personally, and delivered with restraint.
            No filters standing in for craft.
          </p>

          <Sub className="mt-10 text-[11px] font-semibold tracking-[0.24em] text-primary">
            SELECTED SPECIALTIES
          </Sub>
          <ul className="mt-4 flex flex-wrap gap-2">
            {genres.map((g) => (
              <li
                key={g.slug}
                className="border border-border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/80"
              >
                {g.name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <img
            key={image}
            src={image}
            alt={`${site.name} photographing on location`}
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`hero-image-in h-full max-h-[720px] w-full rounded-md border border-border object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
