import { getDb } from "@/lib/mongodb";
import { SEVAS, type Seva } from "@/lib/site";

/**
 * Public content readers. Each reads from MongoDB (what the admin panel edits)
 * and falls back to the static content in site.ts when the collection is empty
 * or the DB is unreachable — so the live site always renders, and admin edits
 * appear automatically once data exists.
 */

type SevaDoc = Partial<Seva> & { order?: number };

export async function getSevas(): Promise<Seva[]> {
  try {
    const db = await getDb();
    const docs = await db.collection<SevaDoc>("sevas").find({}).sort({ order: 1 }).toArray();
    const mapped: Seva[] = docs
      .filter((d) => d.slug && d.title)
      .map((d) => ({
        slug: d.slug!,
        title: d.title!,
        tagline: d.tagline ?? "",
        description: d.description ?? "",
        amounts: Array.isArray(d.amounts) && d.amounts.length ? d.amounts : [501, 1100, 2100, 5100],
        icon: d.icon ?? "Heart",
        highlight: d.highlight ?? false,
      }));
    return mapped.length ? mapped : SEVAS;
  } catch {
    return SEVAS;
  }
}
