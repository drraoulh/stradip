import { Grid, Droplet, Layers, Paintbrush, ShieldCheck, Truck } from "lucide-react";

const matrixData = [
  {
    category: "Carreaux Grès Cérame & Faïence",
    formats: "60x60, 80x80, 30x60, 20x120 (effet bois)",
    usage: "Sols intérieurs/extérieurs, douches, façades, terrasses",
    specs: "Haute résistance au trafic, finition brillante/mate/marbre",
    packaging: "Cartons scellés sur palettisation usine",
    delivery: "Immédiate (Stock Akwa Douala) / 24h Yaoundé",
    Icon: Grid
  },
  {
    category: "Matériels de Plomberie & Sanitaires",
    formats: "Pots W.C. monoblocs, cuvettes suspendues, lave-mains",
    usage: "Villas, immeubles, hôtels, hôpitaux, locaux commerciaux",
    specs: "Céramique émaillée cuite à haute température, double chasse éco",
    packaging: "Carton de protection renforcé + accessoires inclus",
    delivery: "Disponible immédiatement à Akwa Douala",
    Icon: Droplet
  },
  {
    category: "Ciment Colle STRADIP 25kg",
    formats: "Sacs de 25 kg renforcés",
    usage: "Pose carrelage, faïence, pierres murales & pavés",
    specs: "Adhérence C1/C2 certifiée, formule spéciale climat tropical",
    packaging: "Sacs en papier kraft résistant 3 plis",
    delivery: "Livraison par camion plateau sur chantier",
    Icon: Layers
  },
  {
    category: "Peintures Bâtiment & Vernis",
    formats: "Seaux de 5L, 15L, 20L",
    usage: "Murs intérieurs, plafonds, façades extérieures, bois & fer",
    specs: "Anti-moisissures, haute lavabilité, tenue UV 10 ans",
    packaging: "Seaux étanches avec poignée de transport",
    delivery: "Expédition immédiate sur tout le territoire",
    Icon: Paintbrush
  }
];

export function ProductSpecsMatrix() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-slate-200/80 my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
            Guide Technique Informative
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Tableau Comparatif &amp; Spécifications des Matériaux
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 p-3 rounded-2xl">
          <ShieldCheck size={18} className="text-emerald-600" />
          <span>Fiches Homologuées Cameroun</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 text-xs font-extrabold uppercase tracking-wider">
              <th className="py-4 px-4 rounded-l-xl">Gamme Matériaux</th>
              <th className="py-4 px-4">Dimensions &amp; Formats</th>
              <th className="py-4 px-4">Utilisation Conseillée</th>
              <th className="py-4 px-4">Spécifications Techniques</th>
              <th className="py-4 px-4 rounded-r-xl">Délais de Livraison</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
            {matrixData.map((row) => {
              const IconComp = row.Icon;
              return (
                <tr key={row.category} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-50 text-sky-700">
                      <IconComp size={16} />
                    </div>
                    <span>{row.category}</span>
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-semibold">{row.formats}</td>
                  <td className="py-4 px-4 text-slate-600">{row.usage}</td>
                  <td className="py-4 px-4 text-slate-600">{row.specs}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      <Truck size={12} />
                      {row.delivery}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
