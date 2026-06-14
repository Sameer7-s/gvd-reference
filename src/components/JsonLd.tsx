/**
 * Renders one or more JSON-LD structured-data blocks.
 *
 * `suppressHydrationWarning` is required: browsers blank out the `nonce`
 * attribute in the DOM after parsing (an anti-exfiltration measure in the HTML
 * spec), so the server HTML (`nonce="…"`) never matches the hydrated DOM
 * (`nonce=""`). Suppressing the warning on these inert data scripts is the
 * correct, idiomatic fix — the script content itself is identical on both sides.
 */
export function JsonLd({ data, nonce }: { data: object | object[]; nonce?: string }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
