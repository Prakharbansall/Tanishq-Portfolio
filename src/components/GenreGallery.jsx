import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { genreIcon } from "./genreIcons";

export default function GenreGallery({ genre }) {
  const [openIndex, setOpenIndex] = useState(null);
  const Icon = genreIcon(genre.icon);

  const items = useMemo(
    () => [
      ...genre.photos.map((p) => ({ type: "photo", ...p })),
      ...genre.videos.map((v) => ({ type: "video", ...v })),
    ],
    [genre],
  );

  return (
    <div className="pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-24">
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          BACK TO WORK
        </Link>

        <header className="mt-6 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] text-primary">
              <Icon className="size-4" strokeWidth={1.8} /> PORTFOLIO
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.2rem,8vw,4.5rem)] uppercase leading-[0.9] text-primary">
              {genre.name}
            </h1>
            <span className="mt-4 block h-[3px] w-16 bg-primary" />
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">{genre.description}</p>
        </header>

        {/* Featured frame */}
        <Reveal className="mt-10">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="group block w-full overflow-hidden rounded-md border border-border"
          >
            <img
              src={genre.cover}
              alt={`Featured ${genre.name.toLowerCase()} photograph`}
              width={1280}
              height={853}
              className="aspect-[16/10] w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 sm:aspect-[16/9]"
            />
          </button>
        </Reveal>

        {/* Masonry collage — images keep their natural aspect ratio */}
        <div className="mt-8 columns-2 gap-3 sm:gap-5 lg:columns-3 xl:columns-4 [&>*]:mb-3 sm:[&>*]:mb-5">
          {items.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden rounded-md border border-border bg-muted"
                aria-label={item.type === "video" ? `Play ${item.title || "video"}` : `Open photo ${i + 1}`}
              >
                <img
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.alt || item.title || `${genre.name} photograph ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />
                {item.type === "video" && (
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground sm:size-14">
                      <Play className="size-5 sm:size-6" />
                    </span>
                  </span>
                )}
              </button>
            </Reveal>
          ))}
        </div>

      </div>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onIndex={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </div>
  );
}
