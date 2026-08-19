/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 *  Drop real photos into /public/images/<slug>/ and list them in
 *  `photos`. Videos go in `videos` (see the commented example).
 * ─────────────────────────────────────────────────────────────
 */

const photosFor = (genre, filenames) =>
  filenames.map((filename, index) => ({
    src: `/images/${genre}/${filename}`,
    alt: `${genre} photography by Tanishq Sharma — frame ${index + 1}`,
  }));

const concertPhotos = photosFor("concert", [
  "1.jpeg", "2.jpeg", "5.jpeg", "8.jpeg", "11.jpeg", "13.jpeg", "14.jpeg",
  "17.jpeg", "18.jpeg", "19.jpeg", "20.JPG", "21.JPG", "22.JPG", "23.JPG",
  "24.JPG", "25.JPG", "26.JPG",
]);

const cafePhotos = photosFor("cafe", [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "8.jpg", "9.jpg",
  "10.jpg", "11.jpg", "12.jpg", "13.jpg"
]);

const jewelleryPhotos = photosFor("jewellery", [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.JPG",
  "9.JPG", "10.jpg", "11.jpg", "12.jpg",
]);

const automobilePhotos = photosFor("automobile", [
  "1.jpg", "2.JPG", "3.JPG", "4.JPG", "5.jpg", "6.jpg", "7.JPG", "8.jpg",
  "9.JPG", "10.JPG", "11.JPG", "12.JPG", "13.JPG",
]);

const celebEventsPhotos = photosFor("celeb-events", [
  "1.jpeg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpg", "6.jpg", "7.jpeg", "8.jpg",
  "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.JPG",
  "17.JPG", "18.JPG", "19.JPG", "20.jpg", "21.jpg",
]);

const fashionPhotos = photosFor("fashion", [
  "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.jpg", "6.jpg", "7.jpg", "8.jpg",
  "9.jpg", "10.jpg", "11.JPG", "12.JPG", "13.JPG", "14.JPG", "15.JPG", "16.JPG",
  "17.JPG",
]);

const streetPhotos = photosFor("street", [
  "1.jpeg", "2.jpeg", "3.JPG", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
  "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpg", "street-01.jpg",
]);

const wildlifePhoto = photosFor("wildlife", [
  "1.JPG", "2.jpeg", "3.jpeg", "4.JPG", "5.jpg", "6.jpeg", "7.jpeg", "8.jpeg",
  "9.jpeg",
]);

const eventsPhotos = photosFor("events", [
  "1.jpg", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "7.JPG", "8.JPG",
  "9.JPG", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg",
  "17.jpg", "18.jpg",
]);

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
    cover: "/images/jewellery/3.jpg",
    photos: jewelleryPhotos,
    videos: [],
  },
  {
    slug: "automobile",
    name: "Automobile",
    icon: "car",
    description:
      "Metal, motion and reflection. Cinematic automotive sets shot on location and in studio.",
    cover: "/images/automobile/1.jpg",
    photos: automobilePhotos,
    videos: [],
  },
  {
    slug: "celeb-events",
    name: "Celeb Events",
    icon: "star",
    description:
      "Red carpets, press walls and the seconds in between. Fast, discreet, publication ready.",
    cover: "/images/celeb-events/1.jpeg",
    photos: celebEventsPhotos,
    videos: [],
  },
  {
    slug: "fashion",
    name: "Fashion",
    icon: "shirt",
    description:
      "Editorial styling and bold colour. Lookbooks, campaigns and portfolio builds for models.",
    cover: "/images/fashion/13.JPG",
    photos: fashionPhotos,
    videos: [],
  },
  {
    slug: "street",
    name: "Street",
    icon: "signpost",
    description:
      "Unposed, unplanned, unrepeatable. Monochrome documentary work from Indian streets after dark.",
    cover: "/images/street/3.JPG",
    photos: streetPhotos,
    videos: [],
  },
  {
    slug: "wildlife",
    name: "Wildlife",
    icon: "pawprint",
    description:
      "Long lenses and longer waits. Field work from India's national parks and reserves.",
    cover: "/images/wildlife/1.JPG",
    photos: wildlifePhoto,
    videos: [],
  },
  {
    slug: "events",
    name: "Events",
    icon: "calendar",
    description:
      "Weddings, launches and celebrations covered end to end with a documentary eye.",
    cover: "/images/events/2.JPG",
    photos: eventsPhotos,
    videos: [],
  },
];

export const getGenre = (slug) => genres.find((g) => g.slug === slug);
