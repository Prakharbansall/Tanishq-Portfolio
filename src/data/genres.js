/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 *  Drop real photos into /public/images/<slug>/ and list them in
 *  `photos`. Videos go in `videos` (see the commented example).
 * ─────────────────────────────────────────────────────────────
 */

// Helper: until real files are added, the cover is repeated so the
// gallery layout can be previewed. Replace with real file paths.
const preview = (slug, cover, count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    src: cover,
    // Real paths look like: `/images/${slug}/${slug}-0${i + 1}.jpg`
    alt: `${slug} photography by Tanishq Sharma — frame ${i + 1}`,
  }));

const concertPhotos = [
  "/images/concert/1.jpeg",
  "/images/concert/2.jpeg",
  "/images/concert/5.jpeg",
  "/images/concert/8.jpeg",
  "/images/concert/11.jpeg",
  "/images/concert/13.jpeg",
  "/images/concert/14.jpeg",
  "/images/concert/17.jpeg",
  "/images/concert/18.jpeg",
  "/images/concert/19.jpeg",
  "/images/concert/20.JPG",
  "/images/concert/21.JPG",
  "/images/concert/22.JPG",
  "/images/concert/23.JPG",
  "/images/concert/24.JPG",
  "/images/concert/25.JPG",
  "/images/concert/26.JPG",
].map((src, index) => ({
  src,
  alt: `Concert photography by Tanishq Sharma — frame ${index + 1}`,
}));

const cafePhotos = [
  "/images/cafe/1.jpg",
  "/images/cafe/2.jpg",
  "/images/cafe/3.jpg",
  "/images/cafe/4.jpg",
  "/images/cafe/5.jpg",
  "/images/cafe/6.jpg",
  "/images/cafe/8.jpg",
  "/images/cafe/9.jpg",
  "/images/cafe/10.jpg",
  "/images/cafe/11.jpg",
  "/images/cafe/12.jpg",
  "/images/cafe/13.jpg",
].map((src, index) => ({
  src,
  alt: `Café photography by Tanishq Sharma — frame ${index + 1}`,
}));

export const genres = [
  {
    slug: "concert",
    name: "Concert",
    icon: "music",
    description:
      "Stage lights, sweat and sound. Live music frames shot from the pit — energy preserved exactly as it happened.",
    cover: "/images/concert/25.JPG",
    photos: concertPhotos,
    videos: [
      // { src: "/videos/concert/concert-01.mp4", poster: "/images/concert/concert-01.jpg", title: "Main stage reel" },
    ],
  },
  {
    slug: "cafe",
    name: "Café",
    icon: "coffee",
    description:
      "Warm interiors, honest light and quiet detail. Brand imagery for cafés and hospitality spaces.",
    cover: "/images/cafe/3.jpg",
    photos: cafePhotos,
    videos: [],
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    icon: "gem",
    description:
      "Macro precision and controlled reflection. Every facet lit to sell the craft behind the piece.",
    cover: "/images/jewellery/jewellery-01.jpg",
    photos: preview("jewellery", "/images/jewellery/jewellery-01.jpg", 6),
    videos: [],
  },
  {
    slug: "automobile",
    name: "Automobile",
    icon: "car",
    description:
      "Metal, motion and reflection. Cinematic automotive sets shot on location and in studio.",
    cover: "/images/automobile/automobile-01.jpg",
    photos: preview("automobile", "/images/automobile/automobile-01.jpg", 6),
    videos: [],
  },
  {
    slug: "celeb-events",
    name: "Celeb Events",
    icon: "star",
    description:
      "Red carpets, press walls and the seconds in between. Fast, discreet, publication ready.",
    cover: "/images/celeb-events/celeb-events-01.jpg",
    photos: preview("celeb-events", "/images/celeb-events/celeb-events-01.jpg", 6),
    videos: [],
  },
  {
    slug: "fashion",
    name: "Fashion",
    icon: "shirt",
    description:
      "Editorial styling and bold colour. Lookbooks, campaigns and portfolio builds for models.",
    cover: "/images/fashion/fashion-01.jpg",
    photos: preview("fashion", "/images/fashion/fashion-01.jpg", 7),
    videos: [],
  },
  {
    slug: "street",
    name: "Street",
    icon: "signpost",
    description:
      "Unposed, unplanned, unrepeatable. Monochrome documentary work from Indian streets after dark.",
    cover: "/images/street/street-01.jpg",
    photos: preview("street", "/images/street/street-01.jpg", 6),
    videos: [],
  },
  {
    slug: "wildlife",
    name: "Wildlife",
    icon: "pawprint",
    description:
      "Long lenses and longer waits. Field work from India's national parks and reserves.",
    cover: "/images/wildlife/wildlife-01.jpg",
    photos: preview("wildlife", "/images/wildlife/wildlife-01.jpg", 6),
    videos: [],
  },
  {
    slug: "events",
    name: "Events",
    icon: "calendar",
    description:
      "Weddings, launches and celebrations covered end to end with a documentary eye.",
    cover: "/images/events/events-01.jpg",
    photos: preview("events", "/images/events/events-01.jpg", 7),
    videos: [],
  },
];

export const getGenre = (slug) => genres.find((g) => g.slug === slug);
