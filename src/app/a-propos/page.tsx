import { createMetadata } from "@/lib/seo";
import { getSiteData } from "@/lib/content";
import { Section, SectionHeader, PageHero } from "@/components/ui/Section";
import { User } from "lucide-react";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Histoire, mission et valeurs de STRADIP SARL, entreprise camerounaise fondée en 2014 à Douala.",
  path: "/a-propos",
});

export default function AboutPage() {
  const site = getSiteData();

  return (
    <>
      <PageHero title="À propos" subtitle={site.company.tagline} />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <SectionHeader badge="Histoire" title="Depuis 2014" centered={false} />
            <p className="text-slate leading-relaxed text-lg">{site.about.history}</p>
          </div>
          <div className="rounded-2xl p-8 md:p-10 bg-sky card-shadow">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Mission</p>
            <p className="text-primary leading-relaxed">{site.about.mission}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mt-8 mb-4">Vision</p>
            <p className="text-primary leading-relaxed">{site.about.vision}</p>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeader badge="Valeurs" title="Ce qui nous guide" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.about.values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 card-shadow">
              <h3 className="font-bold text-primary">{v.title}</h3>
              <p className="mt-2 text-slate text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {site.about.team && site.about.team.length > 0 && (
        <Section>
          <SectionHeader badge="Équipe" title="Direction" />
          <div className="max-w-lg bg-white rounded-2xl p-8 card-shadow">
            {site.about.team.map((member) => (
              <div key={member.name} className="flex gap-5">
                <div className="p-4 bg-sky rounded-xl shrink-0">
                  <User size={28} className="text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-slate leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
