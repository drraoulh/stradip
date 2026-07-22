import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { ProductSpecsMatrix } from "@/components/home/ProductSpecsMatrix";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { TechnicalSheets } from "@/components/products/TechnicalSheets";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/Button";
import { getSiteData, getProducts, getTechnicalSheets, getGalleryItems, getRealisations } from "@/lib/content";
import { Section as PageSection, SectionHeader } from "@/components/ui/Section";
import { 
  ArrowRight, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  MessageSquare, 
  CheckCircle2, 
  Grid, 
  Droplet, 
  Layers, 
  Paintbrush, 
  Sparkles,
  PhoneCall,
  Star,
  Quote
} from "lucide-react";

// Informative & Exact Image Mapping for Domains
const categoryHighlights = [
  {
    title: "Carreaux & Revêtements",
    subtitle: "Grès Cérame & Faïences",
    desc: "Polis 60x60, 80x80, faïences murales pour cuisine et salle de bain, marbre et pavés antidérapants.",
    image: "/images/products/carreaux.jpg",
    icon: Grid,
    badge: "Arrivage Douala",
    slug: "carreaux-revetements"
  },
  {
    title: "Plomberie & Matériels Sanitaires",
    subtitle: "Pots W.C. & Lave-mains",
    desc: "Pots W.C. monoblocs & suspendus, lave-mains compacts, lavabos sur colonne, colonnes de douche et robinetterie inox.",
    image: "/images/generated/plomberie-pot-wc.jpg",
    icon: Droplet,
    badge: "Sanitaires & Robinets",
    slug: "plomberie-sanitaires"
  },
  {
    title: "Ciment Colle STRADIP 25kg",
    subtitle: "Production locale certifiée",
    desc: "Sacs de 25kg haute adhésion spécialement formulés pour résister au climat tropical et garantir la pose de carrelage.",
    image: "/images/generated/ciment-colle-sacs.jpg",
    icon: Layers,
    badge: "Sac de 25kg",
    slug: "ciment-colle"
  },
  {
    title: "Peintures Bâtiment & Vernis",
    subtitle: "Intérieur, Extérieur & Étanchéité",
    desc: "Peintures mates, laques satinées et peintures d'étanchéité façades avec nuancier complet.",
    image: "/images/generated/peintures-seaux.jpg",
    icon: Paintbrush,
    badge: "Seaux 15L / 20L",
    slug: "peintures-vernis"
  },
  {
    title: "Produits de Beauté & Cosmétiques",
    subtitle: "Distribution & Commerce Général",
    desc: "Gammes de soins corporels et cosmétiques distribuées aux boutiques et revendeurs au Cameroun.",
    image: "/images/generated/beaute-cosmetiques.jpg",
    icon: Sparkles,
    badge: "Négoce & Gros",
    slug: "produits-beaute"
  }
];

const commitments = [
  {
    icon: Award,
    title: "Qualité Certifiée & Contrôlée",
    desc: "Carreaux haute résistance au trafic et sanitaires étanches rigoureusement sélectionnés.",
    tag: "Normes Int."
  },
  {
    icon: MapPin,
    title: "Stock Permanent à Douala",
    desc: "Infrastructures d'entreposage à Akwa garantissant une disponibilité immédiate sans délai.",
    tag: "Akwa Douala"
  },
  {
    icon: Truck,
    title: "Livraison Logistique Nationale",
    desc: "Distribution rapide sur chantiers à Douala, Yaoundé, Bafoussam et dans toutes les régions.",
    tag: "Toutes Régions"
  },
  {
    icon: ShieldCheck,
    title: "Accompagnement Technico-Commercial",
    desc: "Conseils par des experts pour le choix des carreaux, le dosage des colles et les sanitaires.",
    tag: "Conseil Offert"
  },
];

const testimonials = [
  {
    name: "Jean-Paul Mba",
    role: "Promoteur Immobilier, Douala",
    content: "STRADIP nous a fourni plus de 2 500 m² de carreaux grès cérame et 30 pots W.C. pour notre dernier immeuble à Akwa. Qualité impeccable et livraison dans les délais !",
    rating: 5
  },
  {
    name: "Alain Nkou",
    role: "Entrepreneur BTP, Yaoundé",
    content: "Le ciment colle STRADIP est d'une adhérence exceptionnelle. Nos carreleurs l'utilisent sur tous nos chantiers. Le service client est très réactif sur WhatsApp.",
    rating: 5
  },
  {
    name: "Sandrine Tagne",
    role: "Architecte d'Intérieur, Douala",
    content: "J'ai trouvé chez STRADIP des lave-mains et une robinetterie au design moderne très élégant pour mes projets de rénovation de villas.",
    rating: 5
  }
];

export default function HomePage() {
  const site = getSiteData();
  const sheets = getTechnicalSheets();
  const gallery = getGalleryItems();

  // Curate a balanced 8-item preview for homepage to prevent tile overload
  const featuredGallery = gallery.slice(0, 8);

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero tagline={site.company.tagline} description={site.company.description} />

      {/* 2. ELEGANT HARMONIZED STATS STRIP */}
      <div className="bg-slate-900 text-white py-8 border-y border-slate-800 shadow-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl md:text-4xl font-extrabold text-amber-400">10+ Ans</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1 block">D&apos;Expérience à Douala</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl md:text-4xl font-extrabold text-sky-400">50+</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1 block">Références Matériaux</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-400">100%</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1 block">Stock Akwa Douala</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="block text-3xl md:text-4xl font-extrabold text-sky-300">500+</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1 block">Chantiers Approvisionnés</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NOS DOMAINES D'EXPERTISE (EXACT CORRESPONDING IMAGES) */}
      <PageSection background="grid">
        <SectionHeader
          badge="NOS DOMAINES D'EXPERTISE"
          title="Importation, Vente &amp; Distribution à Douala"
          subtitle="Accédez directement aux informations, photos exactes et tarifs de gros pour chaque gamme de matériaux."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryHighlights.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-3xl overflow-hidden card-shadow hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-slate-900/90 text-amber-400 border border-amber-400/30 px-3 py-1 rounded-xl shadow-md backdrop-blur-md">
                    {cat.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">{cat.subtitle}</span>
                  <h3 className="text-xl font-extrabold mt-0.5">{cat.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {cat.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/237697272108?text=${encodeURIComponent(`Bonjour STRADIP, je souhaite avoir les tarifs et disponibilités pour : ${cat.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3.5 py-2.5 rounded-xl transition-colors"
                  >
                    <MessageSquare size={15} />
                    WhatsApp Devis
                  </a>

                  <Link
                    href={`/produits#${cat.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors"
                  >
                    Détails <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 4. PRODUCT COMPARISON MATRIX SECTION */}
      <PageSection>
        <ProductSpecsMatrix />
      </PageSection>

      {/* 5. CARREAUX & PLOMBERIE HIGHLIGHT BANNER */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white relative overflow-hidden border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-amber-400/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full">
                Arrivage Massif · Akwa Douala
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Importation &amp; Vente de <span className="text-amber-400 underline decoration-amber-400 underline-offset-8">Carreaux</span> &amp; <span className="text-sky-400 underline decoration-sky-400 underline-offset-8">Matériels Sanitaires</span>
              </h2>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                STRADIP SARL importe directement les meilleures collections de carrelages grand format, faïences murales, pots W.C. (monoblocs et suspendus), lave-mains et colonnes de douche pour vos chantiers résidentiels et professionnels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Carreaux grès cérame polis 60x60 & 80x80",
                  "Pots W.C. cuvettes suspendues & monoblocs",
                  "Lave-mains compacts & meubles lavabos",
                  "Colonnes de douche & robinetterie inox",
                  "Ciment colle STRADIP formulation tropicale",
                  "Livraison rapide à Douala, Yaoundé et régions"
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20je%20souhaite%20un%20devis%20pour%20des%20carreaux%20et%20des%20sanitaires."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-extrabold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-7 py-4 rounded-xl shadow-xl transition-all"
                >
                  <MessageSquare size={18} />
                  Commander par WhatsApp Direct
                </a>
                <Button href="/contact" size="lg" variant="outline-light">
                  Formulaire Devis Express
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/15 shadow-xl flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-amber-400/20 text-amber-300">
                  <Grid size={32} />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-white">Showroom Carrelage Akwa</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Plus de 48 références de carreaux en stock immédiat.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/15 shadow-xl flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-sky-400/20 text-sky-300">
                  <Droplet size={32} />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-white">Équipements Sanitaires</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Pots W.C., lave-mains et robinetterie de haute qualité.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/15 shadow-xl flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-emerald-400/20 text-emerald-300">
                  <Layers size={32} />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-white">Ciment Colle STRADIP 25kg</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Fabrication locale certifiée pour adhérence maximale.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. GALERIE PHOTOS SELECTIONNEES (BALANCED PREVIEW) */}
      <PageSection background="grid">
        <SectionHeader
          badge="APERÇU GALERIE PHOTOS"
          title="Sélection de Nos Matériaux &amp; Sanitaires"
          subtitle="Découvrez un aperçu équilibré de nos carreaux, équipements sanitaires, ciment colle et peintures."
        />
        <GalleryGrid items={featuredGallery} />
      </PageSection>

      {/* 7. FAQ ACCORDION */}
      <PageSection>
        <FaqAccordion />
      </PageSection>

      {/* 8. ENGAGEMENTS & VALEURS */}
      <PageSection background="sky">
        <SectionHeader badge="NOS ENGAGEMENTS" title="Pourquoi Choisir STRADIP SARL ?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 card-shadow border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3.5 rounded-2xl bg-sky-100 text-sky-700 shadow-xs">
                    <item.icon size={26} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 9. TEMOIGNAGES CLIENTS */}
      <PageSection>
        <SectionHeader
          badge="TEMOIGNAGES CLIENTS"
          title="Ils Nous Font Confiance à Douala &amp; Yaoundé"
          subtitle="Retours d'expérience de nos clients promoteurs, entrepreneurs BTP et architectes au Cameroun."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-8 card-shadow border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote size={28} className="text-sky-200 mb-2" />
                <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-slate-800 text-white font-black flex items-center justify-center text-sm shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* 10. DOCUMENTATION TECHNIQUE */}
      <PageSection background="cream">
        <SectionHeader
          badge="DOCUMENTATION TECHNIQUE"
          title="Fiches Techniques Produits"
          subtitle="Téléchargez les fiches techniques officielles pour vos dossiers de chantier."
        />
        <TechnicalSheets sheets={sheets} />
      </PageSection>

      {/* 11. FINAL CALL TO ACTION */}
      <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-md">
              Demande Devis &amp; Informations
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Prêt à Commander vos Carreaux ou Sanitaires ?
            </h2>
            <p className="mt-4 text-slate-200 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
              Notre équipe commerciale basée à Akwa Douala vous répond en moins de 15 minutes. Profitez des meilleurs tarifs de grossiste du Cameroun.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="tel:+237697272108"
              className="inline-flex items-center gap-2 font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 px-6 py-4 rounded-xl shadow-lg transition-all"
            >
              <PhoneCall size={18} className="text-sky-600" />
              Appeler le +237 697 272 108
            </a>

            <a
              href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20je%20souhaite%20commander."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-extrabold text-sm bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-xl transition-all"
            >
              <MessageSquare size={18} />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
