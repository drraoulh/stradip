import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getSiteData } from "@/lib/content";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const { company } = getSiteData();

  return (
    <footer className="bg-primary text-white">
      <div className="page-hero-gradient py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="inline-block bg-white rounded-2xl px-5 py-4 mb-6">
                <Logo variant="footer" className="object-contain" />
              </div>
              <p className="text-white/75 text-sm leading-relaxed max-w-md">
                {company.description}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white/50 mb-5">Navigation</p>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/a-propos", label: "À propos" },
                  { href: "/produits", label: "Nos produits" },
                  { href: "/services", label: "Nos services" },
                  { href: "/contact", label: "Contact" },
                  { href: "/mentions-legales", label: "Mentions légales" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white/50 mb-5">Contact</p>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{company.address}{company.bp && <><br />{company.bp}</>}</span>
                </li>
                <li>
                  <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-3 hover:text-white">
                    <Phone size={16} className="text-accent shrink-0" />
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-white">
                    <Mail size={16} className="text-accent shrink-0" />
                    {company.email}
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#25D366] text-white hover:opacity-90"
                >
                  WhatsApp
                </a>
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
            <p>© {new Date().getFullYear()} STRADIP SARL — RCCM {company.rccm}</p>
            <p>CNPS {company.cnps} · NIU {company.niu}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
