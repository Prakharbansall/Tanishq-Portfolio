import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import GenreGallery from "@/components/GenreGallery";
import { getGenre } from "@/data/genres";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const genre = getGenre(params.slug);
    if (!genre) throw notFound();
    return { genre };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Gallery unavailable | Tanishq Sharma" }, { name: "robots", content: "noindex" }],
      };
    }
    const { genre } = loaderData;
    const title = `${genre.name} Photography | Tanishq Sharma`;
    return {
      meta: [
        { title },
        { name: "description", content: genre.description },
        { property: "og:title", content: title },
        { property: "og:description", content: genre.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: genre.description },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: GenreNotFound,
  component: GenrePage,
});

function GenrePage() {
  const { genre } = Route.useLoaderData();
  return <GenreGallery genre={genre} />;
}

function GenreNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-4xl text-primary">GALLERY NOT FOUND</h1>
      <p className="mt-3 text-sm text-muted-foreground">That category doesn&apos;t exist yet.</p>
      <Link
        to="/work"
        className="mt-6 bg-primary px-6 py-3 text-[12px] font-semibold tracking-[0.16em] text-primary-foreground"
      >
        BACK TO WORK
      </Link>
    </div>
  );
}
