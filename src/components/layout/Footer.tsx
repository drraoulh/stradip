import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { getSiteData } from "@/lib/content";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const { company } = getSiteData();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Company Description & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-block bg-white rounded-xl px-4 py-2.5 shadow-sm">
              <Logo variant="footer" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-normal">
              {company.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 p-3 rounded-xl w-fit">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Siège Social &amp; Entrepôts : Akwa, Douala</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/a-propos", label: "À propos" },
                { href: "/produits", label: "Catalogue Produits" },
                { href: "/services", label: "Services & Import-Export" },
                { href: "/contact", label: "Contact & Devis" },
                { href: "/mentions-legales", label: "Mentions légales" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Gammes Produits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Gammes Matériaux
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/produits#carreaux-revetements" className="hover:text-white transition-colors">
                  • Carreaux Grès Cérame &amp; Faïence
                </Link>
              </li>
              <li>
                <Link href="/produits#plomberie-sanitaires" className="hover:text-white transition-colors">
                  • Pots W.C. &amp; Lave-mains
                </Link>
              </li>
              <li>
                <Link href="/produits#ciment-colle" className="hover:text-white transition-colors">
                  • Ciment Colle STRADIP 25kg
                </Link>
              </li>
              <li>
                <Link href="/produits#peintures-vernis" className="hover:text-white transition-colors">
                  • Peintures Bâtiment &amp; Vernis
                </Link>
              </li>
              <li>
                <Link href="/produits#produits-beaute" className="hover:text-white transition-colors">
                  • Cosmétiques &amp; Beauté
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Contact &amp; Devis
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sky-500" />
                <span className="text-xs leading-relaxed">{company.address}</span>
              </li>
              <li>
                <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2.5 hover:text-white transition-colors text-xs font-medium">
                  <Phone size={16} className="text-emerald-500 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors text-xs font-medium">
                  <Mail size={16} className="text-sky-500 shrink-0" />
                  {company.email}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20je%20souhaite%20demander%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-xl transition-all shadow-sm w-full"
              >
                <MessageSquare size={15} />
                Devis WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Legal Mentions */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} STRADIP SARL — Tous droits réservés. RCCM {company.rccm}</p>
          <p className="flex items-center gap-3">
            <span>NIU: {company.niu}</span>
            <span>·</span>
            <span>CNPS: {company.cnps}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
