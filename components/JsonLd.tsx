import { seoJsonLd } from "@/lib/data";

// JSON-LD structured data for SEO.
// Content is hardcoded property data from lib/data.ts — no user input.
export default function JsonLd() {
  const jsonString = JSON.stringify(seoJsonLd);

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
