import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stradip-sarl.com";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = path ? `${title} | STRADIP SARL` : `${title} — STRADIP SARL`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "STRADIP SARL",
      locale: "fr_FR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export { siteUrl };
