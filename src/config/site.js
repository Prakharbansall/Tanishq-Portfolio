/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRAL SITE CONFIGURATION
 *  Change everything about the photographer from THIS file only.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Tanishq Sharma",
  nameUpper: "TANISHQ SHARMA",
  logo: "/logo.png",
  logoAlt: "Tanishq Sharma logo",
  role: "PHOTOGRAPHER.",
  tagline: ["CAPTURING MOMENTS.", "CREATING MEMORIES."],

  // --- Replace these with the real handles/numbers ---
  instagramUrl: "https://www.instagram.com/snapshot_tanishq?igsh=ZGkwdjJrbGVmd3Fu",
  email: "snapshot.tanishq@gmail.com",

  // Digits only, with country code. Example: "919876543210"
  whatsappNumber: "9461097291",
  whatsappMessage:
    "Hi Tanishq, I found your photography portfolio and would like to book a shoot.",

  emailSubject: "Photography Inquiry",
  emailBody:
    "Hi Tanishq,\n\nI would like to discuss a photography booking.\n\nThanks.",

  // Hero pool — one is picked at random on every fresh page load.
  heroImages: [
    "/images/hero/hero-01.jpeg",
    "/images/hero/hero-02.jpeg",
    "/images/hero/13.jpg",
    "/images/hero/chota.jpeg",
    "/images/hero/bada.jpeg",
  ],

  aboutPortrait: "/images/hero/13.jpg",
};

const isPlaceholder = (v) => !v || v.startsWith("YOUR_");

export const whatsappLink = (message = site.whatsappMessage) =>
  isPlaceholder(site.whatsappNumber)
    ? "#"
    : `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = () =>
  isPlaceholder(site.email)
    ? "#"
    : `mailto:${site.email}?subject=${encodeURIComponent(
        site.emailSubject,
      )}&body=${encodeURIComponent(site.emailBody)}`;

export const externalLink = (url) => (isPlaceholder(url) ? "#" : url);

export const randomHeroImage = () =>
  site.heroImages[Math.floor(Math.random() * site.heroImages.length)];
