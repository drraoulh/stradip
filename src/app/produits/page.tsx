import { createMetadata } from "@/lib/seo";
import { getProducts, getTechnicalSheets } from "@/lib/content";
import { Section, SectionHeader, PageHero } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCards";
import { TechnicalSheets } from "@/components/products/TechnicalSheets";

export const metadata = createMetadata({
  title: "Nos produits",
  description:
    "Ciment colle, peintures & vernis, produits de beauté — les gammes STRADIP SARL à Douala.",
  path: "/produits",
});

export default function ProduitsPage() {
  const products = getProducts();
  const sheets = getTechnicalSheets();

  return (
    <>
      <PageHero
        title="Nos produits"
        subtitle="Ciment colle, peintures et produits de beauté — conçus pour la performance."
      />

      <Section>
        <div className="grid grid-cols-1 gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Section>

      <Section background="sky">
        <SectionHeader
          badge="Documentation"
          title="Fiches techniques"
          subtitle="Documentation produit à télécharger."
        />
        <TechnicalSheets sheets={sheets} />
      </Section>
    </>
  );
}
