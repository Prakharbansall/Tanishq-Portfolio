import { genres } from "@/data/genres";
import GenreCard from "./GenreCard";
import Reveal from "./Reveal";

export default function GenreSection() {
  return (
    <section id="genres" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-24">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-primary">
            EXPLORE MY PHOTOGRAPHY
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,5.5vw,2.7rem)] leading-tight text-primary">
            CHOOSE YOUR INTEREST
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-16 bg-primary" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {genres.map((genre, i) => (
            <Reveal key={genre.slug} delay={(i % 5) * 70}>
              <GenreCard genre={genre} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
