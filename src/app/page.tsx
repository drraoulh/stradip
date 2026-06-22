import { Hero } from "@/components/home/Hero";
import { ProductPreview } from "@/components/products/ProductCards";
import { TechnicalSheets } from "@/components/products/TechnicalSheets";
import { Button } from "@/components/ui/Button";
import { getSiteData, getProducts, getTechnicalSheets } from "@/lib/content";
import { Section as PageSection, SectionHeader } from "@/components/ui/Section";
import { ArrowRight, Award, MapPin, Zap } from "lucide-react";

const commitments = [
  {
    icon: Award,
    title: "Qualité certifiée",
    desc: "Produits conformes aux normes, testés sur le terrain camerounais.",
  },
  {
    icon: MapPin,
    title: "Réseau national",
    desc: "Distribution à Douala et dans les principales villes du pays.",
  },
  {
    icon: Zap,
    title: "Réactivité",
    desc: "Équipe disponible pour vos commandes et demandes de devis.",
  },
];

export default function HomePage() {
  const site = getSiteData();
  const products = getProducts();
  const sheets = getTechnicalSheets();

  return (
    <>
      <Hero tagline={site.company.tagline} description={site.company.description} />

      <PageSection background="grid">
        <SectionHeader
          badge="01 — Produits"
          title="Nos gammes"
          subtitle="Ciment colle, peintures et produits de beauté pour professionnels et particuliers."
        />
        <ProductPreview products={products} />
      </PageSection>

      <PageSection>
        <SectionHeader badge="02 — Engagements" title="Pourquoi STRADIP ?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 card-shadow border border-border/50"
            >
              <div className="p-3 rounded-xl bg-sky text-brand w-fit mb-5">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection background="sky">
        <SectionHeader
          badge="03 — Documentation"
          title="Fiches techniques"
          subtitle="Téléchargez les spécifications produits pour vos devis."
        />
        <TechnicalSheets sheets={sheets} />
      </PageSection>

      <section className="hero-gradient text-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Un projet ? Parlons-en.
            </h2>
            <p className="mt-4 text-white/80 max-w-md leading-relaxed">
              Devis, partenariat distributeur ou commande — notre équipe vous répond rapidement.
            </p>
          </div>
          <Button href="/contact" size="lg" variant="primary">
            Nous contacter <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
