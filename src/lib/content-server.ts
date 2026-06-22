import "server-only";

import fs from "fs/promises";
import path from "path";
import type { Product, SiteData } from "@/types/content";

const DATA_DIR = path.join(process.cwd(), "src", "data");

export async function saveSiteData(data: SiteData): Promise<void> {
  await fs.writeFile(
    path.join(DATA_DIR, "site.json"),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

export async function saveProducts(data: Product[]): Promise<void> {
  await fs.writeFile(
    path.join(DATA_DIR, "products.json"),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}
