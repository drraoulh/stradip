import { createMetadata } from "@/lib/seo";
import { getSiteData } from "@/lib/content";
import { Section, SectionHeader, PageHero } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez STRADIP SARL à Douala. Formulaire de devis, téléphones, email et WhatsApp.",
  path: "/contact",
});

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 card-shadow">
      <div className="p-2.5 rounded-xl bg-sky text-brand w-fit mb-4">
        <Icon size={20} />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-slate">{label}</p>
      <div className="mt-3 text-sm text-primary">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const { company } = getSiteData();

  return (
    <>
      <PageHero title="Contact" subtitle="Demandez un devis ou posez vos questions." />

      <Section background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionHeader title="Formulaire de contact" centered={false} />
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-5">
            <InfoCard icon={MapPin} label="Adresse">
              <p>{company.address}</p>
              {company.bp && <p className="text-slate mt-1">{company.bp}</p>}
            </InfoCard>

            <InfoCard icon={Phone} label="Téléphones">
              <div className="space-y-1">
                {(company.phones || [company.phone]).map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-brand transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={Mail} label="Email">
              <a href={`mailto:${company.email}`} className="hover:text-brand transition-colors">
                {company.email}
              </a>
            </InfoCard>

            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity card-shadow"
            >
              Contacter sur WhatsApp
            </a>

            <div className="rounded-2xl overflow-hidden card-shadow h-52">
              <iframe
                title="Carte — Douala, Cameroun"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d9.7!3d4.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128d0e74b79d%3A0x4b3e8b8b8b8b8b8b!2sAkwa%2C%20Douala%2C%20Cameroun!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
