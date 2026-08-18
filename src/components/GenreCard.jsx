import { Link } from "@tanstack/react-router";
import { genreIcon } from "./genreIcons";

export default function GenreCard({ genre }) {
  const Icon = genreIcon(genre.icon);

  return (
    <Link
      to="/work/$slug"
      params={{ slug: genre.slug }}
      className="card-lift group block overflow-hidden rounded-md border border-border bg-card shadow-[0_10px_30px_-24px_rgba(0,0,0,0.55)]"
      aria-label={`${genre.name} photography gallery`}
    >
      <div className="aspect-[16/11] overflow-hidden bg-muted sm:aspect-[16/10]">
        <img
          src={genre.cover}
          alt={`${genre.name} photography by Tanishq Sharma`}
          width={1280}
          height={853}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
      </div>

      <div className="flex items-center gap-3 bg-card px-4 py-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
          <Icon className="size-5" strokeWidth={1.7} />
        </span>
        <span>
          <span className="block text-[13px] font-semibold tracking-[0.13em] text-foreground uppercase">
            {genre.name}
          </span>
          <span className="mt-1.5 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />
        </span>
      </div>
    </Link>
  );
}
