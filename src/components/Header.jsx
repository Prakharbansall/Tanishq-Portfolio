import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Instagram, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink, externalLink, mailtoLink } from "@/config/site";

const NAV = [
  { label: "HOME", to: "/" },
  { label: "WORK", to: "/work" },
  { label: "ABOUT", to: "/about", section: "about" },
  { label: "CONTACT", to: "/contact", section: "contact" },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  // On the homepage, About/Contact smooth-scroll to their in-page sections.
  const handleNav = (item) => (e) => {
    if (!item.section || pathname !== "/") return;
    const el = document.getElementById(item.section);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 py-3 backdrop-blur-md shadow-[0_8px_30px_-24px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 sm:px-8 lg:pl-24 lg:pr-10">
        <Link to="/" className="flex items-center text-primary">
          <img
            src={site.logo}
            alt={site.logoAlt}
            className="h-10 w-10 rounded-full   sm:h-19 sm:w-19"
          />
          <span className="font-display text-xl leading-none sm:text-2xl">{site.nameUpper}</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleNav(item)}
              className="group relative text-[13px] font-medium tracking-[0.14em] text-foreground/80 transition-colors hover:text-primary"
            >

              <span className={isActive(item.to) ? "text-primary" : ""}>{item.label}</span>
              <span
                className={`absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-primary transition-transform duration-300 ${
                  isActive(item.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 bg-primary px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-primary-foreground transition-colors hover:bg-[var(--blood)] sm:inline-flex"
          >
            BOOK A SHOOT <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 h-dvh origin-top bg-background px-6 pb-10 pt-24 transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleNav(item)}
              className="border-b border-border/70 py-5 font-display text-3xl text-foreground"
            >

              <span className={isActive(item.to) ? "text-primary" : ""}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold tracking-[0.14em] text-primary-foreground"
        >
          BOOK A SHOOT <ArrowUpRight className="size-4" />
        </a>

        <div className="mt-10 flex items-center gap-6">
          <a href={externalLink(site.instagramUrl)} target="_blank" rel="noreferrer noopener" aria-label="Instagram">
            <Instagram className="size-5 text-primary" />
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
            <WhatsAppIcon className="size-5 text-primary" />
          </a>
          <a href={mailtoLink()} aria-label="Email">
            <Mail className="size-5 text-primary" />
          </a>
        </div>
      </div>
    </header>
  );
}
