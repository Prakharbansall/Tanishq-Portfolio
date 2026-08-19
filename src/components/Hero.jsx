import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { site, randomHeroImage } from "@/config/site";

export default function Hero() {
  // SSR renders the first image; a random one from the pool is picked on
  // every fresh client load (avoids hydration mismatch).
  const [image, setImage] = useState(site.heroImages[0]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setImage(randomHeroImage());

    if (site.heroImages.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setLoaded(false);
      setImage((currentImage) => {
        const currentIndex = site.heroImages.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % site.heroImages.length;
        return site.heroImages[nextIndex];
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate({ to: "/" });
  };

  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-background/90 via-background/75 to-transparent">
      <div className="mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-5 px-6 pb-14 pt-28 sm:gap-8 sm:px-10 sm:pt-32 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:pb-0 lg:pl-24 lg:pr-0 lg:pt-36">
        <div className="min-w-0 max-w-xl">
          <p className="rise text-[10px] font-semibold tracking-[0.2em] text-foreground/80 sm:text-[12px] sm:tracking-[0.28em]" style={{ animationDelay: "80ms" }}>
            {site.role.replace(".", "")}
            <span className="text-primary">.</span>
          </p>

          <h1 className="rise mt-3 font-display text-[clamp(1.8rem,8.5vw,6.2rem)] leading-[0.86] text-primary sm:mt-4" style={{ animationDelay: "180ms" }}>
            TANISHQ
            <br />
            SHARMA
          </h1>

          <span className="rise mt-4 block h-[3px] w-14 bg-primary sm:mt-7 sm:w-24" style={{ animationDelay: "300ms" }} />

          <p className="rise mt-4 text-[11px] font-medium leading-6 tracking-[0.1em] text-foreground/85 sm:mt-6 sm:text-base sm:leading-7 sm:tracking-[0.16em]" style={{ animationDelay: "380ms" }}>
            {site.tagline[0]}
            <br />
            {site.tagline[1]}
          </p>


          <div className="rise mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-4" style={{ animationDelay: "460ms" }}>
            <button
              type="button"
              onClick={() => scrollTo("genres")}
              className="group inline-flex items-center gap-2 bg-primary px-4 py-3 text-[10px] font-semibold tracking-[0.12em] text-primary-foreground transition-colors hover:bg-[var(--blood)] sm:gap-3 sm:px-6 sm:py-4 sm:text-[12px] sm:tracking-[0.16em]"
            >
              VIEW PORTFOLIO
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 sm:size-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/contact" })}
              className="group inline-flex items-center gap-2 border border-primary px-4 py-3 text-[10px] font-semibold tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:gap-3 sm:px-6 sm:py-4 sm:text-[12px] sm:tracking-[0.16em]"
            >
              LET&apos;S CONNECT
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 sm:size-4" />
            </button>
          </div>
        </div>

        <div className="relative h-[46vh] min-h-[280px] w-full sm:h-[62vh] sm:min-h-[340px] lg:h-[calc(100vh-6rem)] lg:max-h-[760px]">

          <img
            key={image}
            src={image}
            alt={`${site.name}, professional photographer`}
            width={1024}
            height={1280}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`hero-image-in size-full object-cover object-[50%_22%] transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/85 via-transparent to-transparent lg:from-background/70" />
        </div>
      </div>
    </section>
  );
}
