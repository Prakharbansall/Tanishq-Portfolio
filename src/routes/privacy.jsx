import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Privacy Note — Tanishq Sharma Photography";
const DESCRIPTION =
  "How this photography portfolio handles anonymous visit analytics, and how to opt out.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  const optOut = () => {
    localStorage.setItem("ts_analytics_optout", "1");
    alert("Analytics disabled on this device.");
  };

  return (
    <section className="pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[760px] px-6 sm:px-10">
        <h1 className="font-display text-[clamp(1.9rem,6vw,3rem)] leading-[0.95] text-primary">
          PRIVACY NOTE
        </h1>
        <span className="mt-5 block h-[3px] w-16 bg-primary" />

        <div className="mt-8 space-y-5 text-sm leading-8 text-muted-foreground">
          <p>
            This site records a small, anonymous record of each visit so the studio knows when
            people are browsing the portfolio.
          </p>
          <p>
            <strong className="text-foreground">What is recorded:</strong> page visited, device type,
            browser, operating system, coarse country, referring source, a random session id and a
            timestamp.
          </p>
          <p>
            <strong className="text-foreground">What is never recorded:</strong> names, email
            addresses, phone numbers, precise location, form contents or any account credentials.
          </p>
          <p>
            Notifications to the photographer are rate limited to one per session (and at most once
            every six hours per device). All messaging credentials are stored server-side and are
            never exposed to the browser.
          </p>
        </div>

        <button
          type="button"
          onClick={optOut}
          className="mt-8 border border-primary px-6 py-3 text-[12px] font-semibold tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          DISABLE ANALYTICS ON THIS DEVICE
        </button>
      </div>
    </section>
  );
}
