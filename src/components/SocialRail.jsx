import { Instagram, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink, externalLink, mailtoLink } from "@/config/site";

/** Fixed vertical social rail with the decorative red line (desktop only). */
export default function SocialRail() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-30 hidden h-screen w-16 lg:flex lg:flex-col lg:items-center">
      <div className="mt-6 h-40 w-px bg-primary/70" />
      <span className="my-2 block size-2 rounded-full bg-primary" />
      <div className="h-24 w-px bg-primary/70" />

      <div className="pointer-events-auto mt-auto mb-24 flex flex-col items-center gap-6">
        <a
          href={externalLink(site.instagramUrl)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
          className="text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
        >
          <Instagram className="size-5" strokeWidth={1.8} />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="WhatsApp"
          className="text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
        >
          <WhatsAppIcon className="size-5" />
        </a>
        <a
          href={mailtoLink()}
          aria-label="Email"
          className="text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
        >
          <Mail className="size-5" strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
