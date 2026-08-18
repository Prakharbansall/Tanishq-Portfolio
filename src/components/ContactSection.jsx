import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";
import { site, whatsappLink, externalLink, mailtoLink } from "@/config/site";

const Row = ({ href, icon: Icon, label, value, external }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    className="group flex items-center justify-between gap-4 border-b border-border py-6 transition-colors hover:border-primary"
  >
    <span className="flex min-w-0 items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block text-sm font-medium text-foreground">{value}</span>
      </span>
    </span>
    <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

export default function ContactSection({ as: Heading = "h1", className = "pb-20 pt-28 sm:pt-32" }) {
  return (
    <section id="contact" className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.24em] text-primary">CONTACT</p>
          <Heading className="mt-3 font-display text-[clamp(2.2rem,8vw,4rem)] leading-[0.9] text-primary">
            LET&apos;S CONNECT
          </Heading>
          <span className="mt-5 block h-[3px] w-16 bg-primary" />
          <p className="mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
            Available for concerts, campaigns, weddings and commercial commissions across India.
            Fastest reply is on WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Row href={whatsappLink()} icon={WhatsAppIcon} label="WHATSAPP" value="Book a shoot instantly" external />
          <Row href={externalLink(site.instagramUrl)} icon={Instagram} label="INSTAGRAM" value="Latest frames & stories" external />
          <Row href={mailtoLink()} icon={Mail} label="EMAIL" value="Detailed enquiries & quotes" />
        </Reveal>

        <Reveal delay={180} className="mt-12">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 bg-primary px-8 py-5 text-[12px] font-semibold tracking-[0.16em] text-primary-foreground transition-colors hover:bg-[var(--blood)]"
          >
            BOOK A SHOOT <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
