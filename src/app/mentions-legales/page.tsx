import { createMetadata } from "@/lib/seo";
import { getSiteData } from "@/lib/content";
import { Section, SectionHeader, PageHero } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Mentions légales, politique de confidentialité et CGV de STRADIP SARL.",
  path: "/mentions-legales",
});

export default function LegalPage() {
  const { company, legal } = getSiteData();

  return (
    <>
      <PageHero title="Mentions légales" />

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 card-shadow">
            <SectionHeader title="Informations légales" centered={false} />
            <ul className="space-y-4 text-sm text-slate">
              <li>
                <strong className="text-primary">Raison sociale :</strong> {company.name}
              </li>
              <li>
                <strong className="text-primary">Directeur Général :</strong> {company.director}
              </li>
              <li>
                <strong className="text-primary">Siège :</strong> {company.address}
              </li>
              {company.bp && (
                <li>
                  <strong className="text-primary">BP :</strong> {company.bp}
                </li>
              )}
              <li>
                <strong className="text-primary">Email :</strong> {company.email}
              </li>
              <li>
                <strong className="text-primary">Téléphone :</strong> {company.phone}
              </li>
              <li>
                <strong className="text-primary">RCCM :</strong> {company.rccm}
              </li>
              <li>
                <strong className="text-primary">N° Contribuable :</strong> {company.niu}
              </li>
              {company.cnps && (
                <li>
                  <strong className="text-primary">CNPS :</strong> {company.cnps}
                </li>
              )}
              <li>
                <strong className="text-primary">Création :</strong> {company.founded}
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-cream rounded-2xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-primary">Politique de confidentialité</h2>
            <p className="mt-4 text-sm text-slate leading-relaxed">{legal.privacy}</p>
          </div>

          <div className="mt-8 bg-cream rounded-2xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-primary">Conditions générales</h2>
            <p className="mt-4 text-sm text-slate leading-relaxed">{legal.terms}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
