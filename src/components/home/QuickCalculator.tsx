"use client";

import { useState } from "react";
import { Calculator, MessageSquare, ArrowRight, Check } from "lucide-react";

export function QuickCalculator() {
  const [category, setCategory] = useState("carreaux");
  const [quantity, setQuantity] = useState("100");
  const [city, setCity] = useState("Douala");

  const getWhatsappUrl = () => {
    let text = "";
    if (category === "carreaux") {
      text = `Bonjour STRADIP, je souhaite un devis pour environ ${quantity} m² de carreaux (sol/mur) à livrer sur ${city}.`;
    } else if (category === "plomberie") {
      text = `Bonjour STRADIP, je souhaite un devis pour des équipements sanitaires (pots W.C. / lave-mains - qté approx: ${quantity}) sur ${city}.`;
    } else if (category === "ciment-colle") {
      text = `Bonjour STRADIP, je souhaite commander environ ${quantity} sacs de Ciment Colle STRADIP 25kg à ${city}.`;
    } else {
      text = `Bonjour STRADIP, je souhaite un devis pour de la peinture bâtiment (qté approx: ${quantity}L) à ${city}.`;
    }

    return `https://wa.me/237697272108?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 text-slate-900 w-full max-w-lg relative">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
        <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="font-extrabold text-lg text-slate-900">Calculateur &amp; Devis Instantané</h3>
          <p className="text-xs text-slate-500 font-medium">Estimez et commandez en 1 clic via WhatsApp</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Category Choice */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            1. Sélectionnez votre besoin
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "carreaux", label: "Carreaux (m²)" },
              { id: "plomberie", label: "Pots W.C. & Lave-mains" },
              { id: "ciment-colle", label: "Ciment Colle (Sacs)" },
              { id: "peintures", label: "Peintures (Litres)" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                  category === item.id
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{item.label}</span>
                {category === item.id && <Check size={14} />}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              2. Quantité estimée
            </label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="ex: 150"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-600 outline-none font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              3. Ville de livraison
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-600 outline-none font-bold"
            >
              <option value="Douala">Douala (Akwa)</option>
              <option value="Yaoundé">Yaoundé</option>
              <option value="Bafoussam">Bafoussam</option>
              <option value="Kribi">Kribi</option>
              <option value="Autre ville">Autre région</option>
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 font-extrabold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <MessageSquare size={18} />
            Obtenir le prix exact sur WhatsApp
          </a>
        </div>

        <p className="text-[11px] text-center text-slate-400 font-medium">
          ⚡ Réponse sous 15 minutes · Stock disponible immédiatement à Akwa Douala
        </p>
      </div>
    </div>
  );
}
