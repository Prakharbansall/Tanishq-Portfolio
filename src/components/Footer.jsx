import { Instagram, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappLink, externalLink, mailtoLink } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-3 md:py-8">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] opacity-90">LET&apos;S CONNECT</p>
          <div className="mt-4 flex items-center gap-5">
            <a href={externalLink(site.instagramUrl)} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <Instagram className="size-5" strokeWidth={1.8} />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="transition-opacity hover:opacity-70">
              <WhatsAppIcon className="size-5" />
            </a>
            <a href={mailtoLink()} aria-label="Email" className="transition-opacity hover:opacity-70">
              <Mail className="size-5" strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <p className="font-display text-2xl md:text-center md:text-3xl">{site.nameUpper}</p>

        <p className="text-xs leading-relaxed opacity-90 md:text-right">
          © {year} {site.name}
          <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
