import { createMetadata } from "@/lib/seo";
import { getSiteData, getServices } from "@/lib/content";
import { Section, SectionHeader, PageHero } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Nos services",
  description:
    "Commerce général, import-export et prestations diverses — les services STRADIP SARL à Douala.",
  path: "/services",
});

export default function ServicesPage() {
  const site = getSiteData();
  const serviceGroups = getServices();

  return (
    <>
      <PageHero
        title="Nos services"
        subtitle="Commerce général, import-export et prestations pour entreprises et distributeurs."
      />

      <Section>
        <div className="space-y-8">
          {serviceGroups.map((group, i) => (
            <div key={group.activitySlug} className="bg-white rounded-2xl p-8 md:p-10 card-shadow">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-brand px-3 py-1 rounded-full">
                Service {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-primary">{group.title}</h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {group.services.map((s) => (
                  <div key={s.name} className="rounded-xl bg-cream p-5 border-l-4 border-brand">
                    <h4 className="font-bold text-primary">{s.name}</h4>
                    <p className="mt-2 text-slate text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader badge="Processus" title="Comment ça marche" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {site.process.map((step) => (
            <div key={step.step} className="bg-white rounded-2xl p-6 card-shadow text-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold">
                {step.step}
              </span>
              <h4 className="mt-4 font-bold text-primary text-sm">{step.title}</h4>
              <p className="mt-2 text-slate text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
