import Link from "next/link";
import { Phone, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import { getSiteData } from "@/lib/content";

export function AnnouncementBar() {
  const { announcement, company } = getSiteData();

  return (
    <div className="bg-slate-950 text-white text-xs font-semibold py-2.5 px-4 border-b border-slate-800">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left item */}
        <div className="flex items-center gap-3 text-slate-300">
          <span className="flex items-center gap-1.5 text-sky-400 font-bold">
            <ShieldCheck size={14} />
            STRADIP SARL Douala
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:flex items-center gap-1 text-slate-400">
            <MapPin size={13} />
            {company.address}
          </span>
        </div>

        {/* Announcement text */}
        {announcement.enabled && (
          <div className="text-center text-slate-200 truncate font-medium">
            <Link href={announcement.link} className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <Sparkles size={13} className="text-amber-400" />
              <span>Arrivage massif : Carreaux, Pots W.C. &amp; Sanitaires à Douala !</span>
            </Link>
          </div>
        )}

        {/* Right contact phone */}
        <div className="hidden sm:flex items-center gap-3 text-slate-300">
          <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} className="text-emerald-400" />
            <span>{company.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
