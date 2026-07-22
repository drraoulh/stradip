"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "Où se trouvent l'entrepôt et le showroom de STRADIP SARL à Douala ?",
    answer: "Notre entrepôt principal et showroom sont situés à Akwa, rue PO juste derrière AFRIQUE CONSTRUCTION à Douala, Cameroun. Vous pouvez vous y rendre pour choisir vos carreaux et matériels sanitaires directement sur place."
  },
  {
    question: "Livrez-vous vos carreaux, sanitaires et ciment colle à Yaoundé et dans les autres régions ?",
    answer: "Oui ! Nous assurons la livraison logistique par camions sur chantiers à Douala, Yaoundé, Bafoussam, Kribi et dans toutes les régions du Cameroun ainsi que dans la sous-région CEMAC."
  },
  {
    question: "Comment calculer la quantité de Ciment Colle STRADIP nécessaire pour mes carreaux ?",
    answer: "En règle générale, il faut prévoir environ 1 sac de Ciment Colle STRADIP 25kg pour 4 à 5 m² de carrelage de sol classique. Nos techniciens calculent gratuitement le nombre exact de sacs nécessaires selon vos métrages."
  },
  {
    question: "Proposez-vous des tarifs préférentiels pour les grossistes, revendeurs et entrepreneurs BTP ?",
    answer: "Absolument. En tant qu'importateur direct et fabricant, nous accordons des remises préférentielles sur les achats en gros et demi-gros pour les chantiers immobiliers, revendeurs et quincailleries."
  },
  {
    question: "Comment obtenir un devis proforma officiel rapidement ?",
    answer: "Vous pouvez nous contacter directement par WhatsApp (+237 697 272 108), par téléphone ou via notre formulaire en ligne. Un devis proforma officiel vous est transmis sous 15 minutes."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 my-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-black uppercase tracking-widest text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
          Foire Aux Questions (FAQ)
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3">
          Toutes les Réponses à vos Questions
        </h3>
        <p className="text-slate-600 text-sm mt-2 font-normal">
          Tout ce que vous devez savoir sur la commande de carreaux, sanitaires, ciment colle et livraison au Cameroun.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-sky-600 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-sky-600 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-sky-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-500 font-medium">
          Une autre question ?{" "}
          <a
            href="https://wa.me/237697272108?text=Bonjour%20STRADIP,%20j'ai%20une%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 font-bold underline inline-flex items-center gap-1 hover:text-emerald-700"
          >
            <MessageSquare size={14} /> Posez-la directement sur WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
