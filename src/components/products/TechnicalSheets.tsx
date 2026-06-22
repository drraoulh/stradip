import { FileDown } from "lucide-react";
import type { TechnicalSheet } from "@/types/content";

export function TechnicalSheets({ sheets }: { sheets: TechnicalSheet[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sheets.map((sheet) => (
        <a
          key={sheet.id}
          href={sheet.file}
          download
          className="group flex items-start gap-4 bg-white rounded-2xl p-6 card-shadow hover:border-brand border border-transparent transition-all"
        >
          <div className="p-2.5 rounded-xl bg-sky text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
            <FileDown size={20} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">{sheet.product}</p>
            <h3 className="mt-1 font-bold text-primary group-hover:text-brand transition-colors">
              {sheet.title}
            </h3>
            <p className="mt-1 text-sm text-slate">{sheet.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
