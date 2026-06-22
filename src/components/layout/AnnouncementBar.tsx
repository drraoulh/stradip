import Link from "next/link";
import { getSiteData } from "@/lib/content";

export function AnnouncementBar() {
  const { announcement } = getSiteData();

  if (!announcement.enabled) return null;

  return (
    <div className="bg-accent text-white text-sm font-medium py-2.5 px-4 text-center">
      <Link href={announcement.link} className="hover:underline">
        {announcement.text}
      </Link>
    </div>
  );
}
