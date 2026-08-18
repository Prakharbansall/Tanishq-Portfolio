# Tanishq Sharma Portfolio

Build a complete, production-ready, fully responsive photography portfolio website based EXACTLY on the uploaded reference image.

The uploaded image is the primary design reference. Do NOT redesign it into a generic photography website. Preserve the same visual hierarchy, layout, proportions, typography style, colors, spacing, card structure, navigation placement, and overall premium editorial feel.

1. WEBSITE IDENTITY

Photographer name:

TANISHQ SHARMA

Website type:

Premium Photography Portfolio

Visual personality:

Cinematic

Editorial

Luxury

Minimal but bold

High-end photography studio

Strong typography

White/off-white background

Deep dark red / burgundy accent

Black typography

Large photography

Subtle borders and shadows

Smooth premium animations

The website must look extremely close to the uploaded reference image.

Do not use generic templates.

2. COLOR SYSTEM

Use the reference image's color palette consistently:

Primary dark red / burgundy: approximately #A00000 / #A50000

Deep red: approximately #850000

Background: warm off-white / ivory

Text: near-black

Secondary background: very light warm gray

White for cards and buttons where required

Do not introduce random colors.

The red accent should be used for:

Logo

Headings

Active navigation

Buttons

Underlines

Icons

Hover states

Decorative lines

Section accents

3. TYPOGRAPHY

The typography is extremely important.

The large "TANISHQ SHARMA" headings should use a bold condensed/block display font visually matching the reference image.

Use a suitable Google Font or locally available equivalent if the exact font is unavailable.

The large heading should feel:

Condensed

Heavy

Geometric

Editorial

Slightly futuristic

Strong block typography

Navigation and body text should use a clean modern sans-serif.

Maintain the contrast between:

DISPLAY FONT = photographer branding

and

CLEAN SANS-SERIF = supporting content

Do NOT replace the display typography with a normal Arial/Inter-style font.

4. DESKTOP HERO SECTION

Recreate the hero section from the reference image.

Structure:

Header

Left:

TANISHQ SHARMA

Center:

HOME

WORK

ABOUT

CONTACT

Right:

BOOK A SHOOT →

The navigation should have a thin red active underline under HOME.

Header should remain visually clean and spacious.

On scroll, implement a subtle sticky/floating header effect without changing the overall design.

5. HERO CONTENT

Left side:

Small uppercase text:

PHOTOGRAPHER.

Large heading:

TANISHQ
SHARMA

Use the same large red display typography from the reference.

Below the heading:

CAPTURING MOMENTS.
CREATING MEMORIES.

Buttons:

VIEW PORTFOLIO →

and

LET'S CONNECT →

Buttons must be functional.

VIEW PORTFOLIO:

Smoothly scroll to the photography genres section.

LET'S CONNECT:

Scroll to/contact section OR open WhatsApp depending on implementation.

6. HERO IMAGE — IMPORTANT

On the right side of the hero, display a large portrait/photo of Tanishq.

However, DO NOT permanently use only one image.

Create a portfolio image pool.

Every time the website is opened/refreshed:

Randomly select one image from the photographer's available portrait/hero portfolio images.

Display that image in the exact hero position.

Make sure the image remains visually compatible with the composition.

Do not crop the face/head awkwardly.

Use object-fit/object-position intelligently.

Add a subtle cinematic entrance animation.

The random selection should happen on every fresh page load.

Use a smooth fade/scale transition.

If the portfolio contains multiple hero-worthy images, randomly rotate among them.

7. LEFT VERTICAL SOCIAL BAR

Recreate the vertical social section on the left side exactly like the reference.

Include:

Instagram

Facebook

Email

Use clean line icons.

The vertical decorative red line and small circular indicator should also be recreated.

Every icon must be functional.

Instagram:
Open photographer's Instagram profile.

Facebook:
Open photographer's Facebook profile.

Email:
Open the user's default email application using mailto.

Use placeholders for now:

INSTAGRAM_URL = "https://www.instagram.com/snapshot_tanishq?igsh=ZGkwdjJrbGVmd3Fu"
FACEBOOK_URL = "YOUR_FACEBOOK_URL"
EMAIL = "snapshot.tanishq@gmail.com"

Make these easy to replace from ONE configuration file.

8. PHOTOGRAPHY GENRE SECTION

Immediately below the hero, recreate the reference section:

Small red heading:

EXPLORE MY PHOTOGRAPHY

Large heading:

CHOOSE YOUR INTEREST

with the same decorative red underline.

Create the following genres:

CONCERT

CAFÉ

JEWELLERY

AUTOMOBILE

CELEB EVENTS

FASHION

STREET

WILDLIFE

EVENTS

Use exactly this visual card concept from the reference.

Each card contains:

Large photography image

White information panel at bottom

Genre icon

Genre name

Small red decorative underline

Rounded corners

Subtle shadow

Thin border

9. GENRE CARD INTERACTION

This is one of the MOST IMPORTANT features.

Every genre card must be clickable.

When a user clicks a genre:

DO NOT simply navigate to an empty page.

Open a dedicated genre experience.

Example:

Click:

CONCERT

Then show:

CONCERT

with a premium gallery containing:

Multiple high-quality photos

Videos if available

Full-screen image viewing

Image navigation

Video playback

Smooth transitions

Back button

The user should feel like they entered a professional photography gallery.

10. GENRE DETAIL PAGE

Each genre should have its own data.

Example data structure:

CONCERT:

Photos

Videos

Description

Featured image

CAFÉ:

Photos

Videos

Description

Featured image

JEWELLERY:

Photos

Videos

Description

Featured image

etc.

Do NOT hard-code all gallery markup repeatedly.

Create a reusable data-driven genre system.

For example:

genres = [
{
name: "Concert",
coverImage: "...",
photos: [...],
videos: [...]
}
]

Then generate the gallery dynamically.

11. GALLERY DESIGN

The detailed genre gallery should feel premium and cinematic.

Use:

Masonry-style photography layout OR elegant responsive grid

Different image aspect ratios

Large featured image

Hover effects

Smooth image transitions

Lazy loading

High-resolution images

Full-screen lightbox

When an image is clicked:

Open a fullscreen lightbox.

Features:

Previous

Next

Close

ESC to close

Swipe support on mobile

Image counter

Example:

01 / 18

12. VIDEO SUPPORT

Genres should support videos.

If a genre has videos:

Display them naturally alongside photographs.

Videos should:

Have poster thumbnails

Play on click

Open fullscreen/lightbox

Support mobile playback

Not autoplay with sound

Load efficiently

Create the gallery system so both:

photos[] and videos[]

can coexist.

13. BACK BUTTON BEHAVIOR

This is VERY IMPORTANT.

When the user enters:

CONCERT → detailed gallery

and clicks:

BACK

they must return to the normal homepage/genre section exactly as it was.

Do not reload the entire website unnecessarily.

Preserve:

Scroll position

UI state

Navigation state

Use React Router or an equivalent routing system properly.

Suggested routes:

/
/work
/work/concert
/work/cafe
/work/jewellery
/work/automobile
/work/celeb-events
/work/fashion
/work/street
/work/wildlife
/work/events
/about
/contact

Browser back button must also work correctly.

14. MOBILE RESPONSIVENESS

The mobile version must NOT be a compressed desktop version.

Create a proper mobile layout.

On mobile:

Hamburger navigation

Large readable typography

Hero image above or beside content depending on screen width

Proper spacing

Touch-friendly buttons

Genre cards should be easy to browse

Around 2 genre cards should be visible naturally as the user scrolls, without making everything tiny

Each genre should have its image clearly visible ABOVE the genre name

Do not make 8–9 tiny cards visible at once

Maintain generous vertical spacing

The mobile website should feel premium, not cramped.

Test for:

320px

375px

390px

430px

Tablet

Desktop

Large desktop

15. ANIMATIONS

Add premium photography-portfolio animations.

Do NOT over-animate.

Animations should feel cinematic and expensive.

Use Framer Motion or GSAP where appropriate.

Hero:

Text fade-up

Image fade/scale

Staggered heading animation

Navigation:

Smooth hover underline

Subtle transitions

Genre cards:

Image zoom on hover

Slight card lift

Red underline animation

Icon micro-animation

Section reveal:

Fade + translateY

Staggered cards

Gallery:

Image reveal

Smooth hover zoom

Lightbox transition

Page transitions:

Smooth fade

Slight directional movement

Mobile animations should be lighter for performance.

Respect:

prefers-reduced-motion

16. ABOUT SECTION

Create an ABOUT section consistent with the reference design.

Keep it minimal and editorial.

Include:

Photographer introduction

Photography philosophy

Short biography

Selected specialties

Professional portrait

Do not make it look like a generic corporate About page.

17. CONTACT SECTION

Create a premium CONTACT section.

Include:

Instagram

WhatsApp

Email

Facebook if provided

Book a Shoot CTA

All links must actually work.

18. WHATSAPP INTEGRATION

The "BOOK A SHOOT" button must directly open WhatsApp.

Use:

https://wa.me/YOUR_PHONE_NUMBER

with a pre-filled message.

Example:

"Hi Tanishq, I found your photography portfolio and would like to book a shoot."

Use the photographer's WhatsApp number from a central configuration file.

Do NOT hard-code the number throughout the application.

The same WhatsApp CTA should be available in:

Header

Hero

Contact section

Mobile menu

Footer

19. INSTAGRAM INTEGRATION

Instagram icon/button should open the photographer's actual Instagram profile.

Use:

INSTAGRAM_URL

from the central configuration.

Open external social links safely in a new tab.

20. EMAIL INTEGRATION

Email button must open:

mailto:YOUR_EMAIL

Use the email from configuration.

Also optionally include:

Subject:
Photography Inquiry

Body:
Hi Tanishq,

I would like to discuss a photography booking.

Thanks.

21. VISITOR TRACKING + WHATSAPP NOTIFICATION

Implement a proper visitor tracking system.

IMPORTANT:

Do NOT try to send WhatsApp messages directly from frontend JavaScript.

Use a secure backend/serverless architecture.

Whenever a new visitor opens the website, capture useful non-sensitive analytics such as:

Timestamp

Device type

Browser

Operating system

Approximate location if available through a privacy-compliant analytics service

Page visited

Referrer

Session ID

Do NOT collect passwords, private information, or unnecessary personal data.

Create a backend/serverless function that can send a notification to the photographer.

Preferred architecture:

Frontend
↓
Analytics/event tracking
↓
Serverless Function / Edge Function
↓
WhatsApp Business Cloud API OR Twilio WhatsApp API
↓
Photographer's WhatsApp

Example notification:

"📸 New Website Visitor

Someone just visited your photography portfolio.

Page: Home
Device: Mobile
Time: 8:42 PM
Source: Instagram"

For repeat visits, avoid sending excessive WhatsApp notifications.

Implement a sensible notification cooldown, for example one notification per unique session or configurable time window.

IMPORTANT:
Never expose WhatsApp API tokens, Twilio credentials, Meta credentials, or secret keys in frontend code.

Store them securely in environment variables/secrets.

Provide clear setup instructions for:

WHATSAPP_PHONE_NUMBER
WHATSAPP_API_TOKEN
WHATSAPP_BUSINESS_ACCOUNT_ID
TWILIO credentials if Twilio is selected

If WhatsApp API credentials are not yet provided, implement the complete backend integration structure with environment variable placeholders and clearly mark where the credentials must be added.

22. PRIVACY

Because visitor tracking is implemented:

Keep tracking privacy-conscious.

Add a simple privacy/cookie notice if required.

Do not collect unnecessary personally identifiable information.

Provide a way to disable non-essential analytics if required by the chosen analytics implementation.

23. PERFORMANCE

This is a photography website, so image performance is extremely important.

Implement:

Lazy loading

Responsive image sizes

WebP/AVIF where possible

Proper image compression

Preload only the hero image

Avoid loading every portfolio image immediately

Lazy-load gallery images

Lazy-load videos

Use optimized thumbnails

Prevent layout shift

Good Core Web Vitals

Do not sacrifice image quality excessively.

24. SEO

Implement proper SEO.

Homepage:

Title:
Tanishq Sharma | Professional Photographer

Meta description:
Tanishq Sharma is a professional photographer specializing in concerts, fashion, jewellery, automobiles, events, wildlife and lifestyle photography.

Add:

Open Graph metadata

Twitter/X metadata

Canonical URL

Semantic HTML

Proper H1/H2 hierarchy

Image alt text

Descriptive URLs

Sitemap-ready structure

robots.txt

Add Photographer/Person structured data where appropriate.

25. FOOTER

Recreate the footer from the reference image.

Dark red full-width footer.

Left:

LET'S CONNECT

Social icons:

Instagram
Facebook
YouTube
Email

Center:

TANISHQ SHARMA

using the same display font.

Right:

© 2025 Tanishq Sharma
All Rights Reserved.

Make the year dynamic so it automatically updates.

26. ADMIN/CONTENT FRIENDLY STRUCTURE

Make it easy for the photographer to update portfolio content later.

Centralize:

Name

Instagram

Facebook

YouTube

WhatsApp

Email

Hero images

Genre names

Genre cover images

Gallery images

Gallery videos

Do not scatter these values throughout components.

Create a clean configuration/data structure.

27. IMAGE PLACEHOLDERS

Use the uploaded reference image only as the design reference.

For actual portfolio images, create clearly named placeholder paths such as:

/images/hero/hero-01.webp
/images/hero/hero-02.webp

/images/concert/concert-01.webp
/images/concert/concert-02.webp

/images/cafe/cafe-01.webp

/images/jewellery/jewellery-01.webp

/images/automobile/automobile-01.webp

etc.

Make it extremely easy for the photographer to replace these files with real portfolio photos.

28. TECH STACK

Use:

React

Vite

Tailwind CSS

React Router

Framer Motion or GSAP

Lucide React or suitable icon library

For backend/visitor notifications use:

Supabase Edge Functions OR

Vercel Serverless Functions

Choose the architecture that integrates most reliably with Lovable.

Use clean reusable components.

Suggested components:

Header
Hero
SocialRail
GenreSection
GenreCard
GenreGallery
Lightbox
VideoGallery
About
Contact
Footer
MobileMenu
WhatsAppButton
VisitorTracker

29. DESIGN ACCURACY

The uploaded reference image is the source of truth.

Pay very close attention to:

Header height

Logo position

Hero proportions

Hero image position

Left social rail

Red vertical line

Heading size

Button dimensions

Genre card dimensions

White information panels

Red decorative lines

Footer structure

Spacing between sections

Border radius

Shadows

Overall whitespace

Do not make the design look like a standard Tailwind template.

The final result should look like the reference was transformed into a real, polished, interactive website.

30. IMPORTANT FINAL REQUIREMENT

Before considering the project complete:

Make every navigation link work.

Make every genre card clickable.

Make every genre open its detailed gallery.

Make photos open in fullscreen lightbox.

Make videos playable.

Make browser back button work.

Make the Book a Shoot button open WhatsApp.

Make Instagram clickable.

Make Facebook clickable.

Make Email clickable.

Make hero image randomly change on every fresh website load.

Make the site fully responsive.

Make animations smooth.

Make the visitor tracking architecture functional.

Make WhatsApp visitor notification backend-ready.

Keep all API secrets server-side.

Optimize images and loading.

Add SEO.

Test mobile navigation.

Test desktop navigation.

Test direct URL access to genre pages.

Test browser refresh on genre pages.

Test browser back/forward.

Test lightbox.

Test WhatsApp CTA.

Do not stop after creating the visual frontend.

This must be a fully functional photography portfolio website, not just a static mockup.

Most importantly:

Preserve the exact visual identity of the uploaded reference image while making the experience modern, responsive, cinematic and interactive.
Use React JS and don't use typescript

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cinematic-focus-gallery.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/65c61dcb-60a8-4c69-9fc0-5ef67399f77a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
#   T a n i s h q - P o r t f o l i o  
 