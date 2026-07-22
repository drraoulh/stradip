import type {
  GalleryItem,
  Product,
  Realisation,
  ServiceGroup,
  SiteData,
  TechnicalSheet,
} from "@/types/content";

import siteData from "@/data/site.json";
import productsData from "@/data/products.json";
import servicesData from "@/data/services.json";
import galleryData from "@/data/gallery.json";
import realisationsData from "@/data/realisations.json";
import technicalSheetsData from "@/data/technical-sheets.json";

export function getSiteData(): SiteData {
  return siteData as SiteData;
}

export function getProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}

export function getServices(): ServiceGroup[] {
  return servicesData as ServiceGroup[];
}

export function getGallery(): GalleryItem[] {
  return galleryData as GalleryItem[];
}

export function getGalleryItems(): GalleryItem[] {
  return galleryData as GalleryItem[];
}

export function getRealisations(): Realisation[] {
  return realisationsData as Realisation[];
}

export function getTechnicalSheets(): TechnicalSheet[] {
  return technicalSheetsData as TechnicalSheet[];
}
