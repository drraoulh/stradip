import { createMetadata } from "@/lib/seo";
import { getProducts, getTechnicalSheets } from "@/lib/content";
import { Section, SectionHeader, PageHero } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCards";
import { TechnicalSheets } from "@/components/products/TechnicalSheets";

export const metadata = createMetadata({
  title: "Nos Produits — Carreaux, Plomberie, Sanitaires & Mortiers",
  description:
    "Importation et vente de carreaux grès cérame, pots W.C., lave-mains, sanitaires, ciment colle STRADIP, peintures et produits de beauté à Douala, Cameroun.",
  path: "/produits",
});

export default function ProduitsPage() {
  const products = getProducts();
  const sheets = getTechnicalSheets();

  return (
    <>
      <PageHero
        title="Nos Produits &amp; Gammes"
        subtitle="Carreaux grand format, matériels de plomberie & sanitaires (pots W.C., lave-mains), ciment colle, peintures et produits cosmétiques à Douala."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Section>

      <Section background="sky">
        <SectionHeader
          badge="DOCUMENTATION"
          title="Fiches Techniques &amp; Spécifications"
          subtitle="Téléchargez la documentation officielle de nos colles et produits de bâtiment."
        />
        <TechnicalSheets sheets={sheets} />
      </Section>
    </>
  );
}
