/* eslint-disable @next/next/no-img-element -- ImageResponse (Satori) only renders plain <img> */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/lib/content";

// Shared social-share card (WhatsApp, LinkedIn, Google, X) for inner pages:
// the page's own photo, a dark brand overlay, the page eyebrow + headline, and contact line.
// Used by the opengraph-image.tsx file in each route; rendered at build time.

export const ogSize = { width: 1200, height: 630 };
// JPEG keeps cards ~100–250 KB; WhatsApp often drops preview images much larger than ~600 KB
export const ogContentType = "image/jpeg";

const markSvg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 86 100'><g fill='#00A654'><rect x='0' y='0' width='23.5' height='100' rx='1.6'/><rect x='62.5' y='0' width='23.5' height='100' rx='1.6'/><circle cx='42.5' cy='52' r='37.5'/></g><g fill='none' stroke='#fff' stroke-width='1.6' stroke-linecap='round'><path d='M 23.5 19.7 A 37.5 37.5 0 0 0 23.5 84.3'/><path d='M 62.5 20.3 A 37.5 37.5 0 0 1 79.3 44.6'/><path d='M 79.7 57 A 37.5 37.5 0 0 1 62.5 83.7'/><path d='M 24.5 44.6 H 79.3'/><path d='M 24.5 57 H 79.7'/></g><path d='M 29 42.6 A 14.3 9.2 0 0 1 57.6 42.6 Z' fill='#1a1a1a' stroke='#fff' stroke-width='1.6' stroke-linejoin='round'/><path d='M 29.5 59 A 14 7.4 0 0 0 57.5 59 Z' fill='#1a1a1a' stroke='#fff' stroke-width='1.6' stroke-linejoin='round'/></svg>";
const markSrc = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

/** Page photo as a JPEG data URI (the OG renderer cannot read WebP). Returns null on any failure. */
async function photo(src?: string): Promise<string | null> {
  if (!src) return null;
  try {
    if (src.startsWith("/")) {
      const sharp = (await import("sharp")).default;
      const buf = await sharp(await readFile(join(process.cwd(), "public", src)))
        .resize(1200, 630, { fit: "cover" }).jpeg({ quality: 72 }).toBuffer();
      return `data:image/jpeg;base64,${buf.toString("base64")}`;
    }
    // Unsplash: ask for a JPEG at share size
    const url = src.replace(/([?&])w=\d+/, "$1w=1200").replace(/([?&])auto=format/, "$1fm=jpg") + "&h=630";
    const res = await fetch(url);
    if (!res.ok) return null;
    return `data:image/jpeg;base64,${Buffer.from(await res.arrayBuffer()).toString("base64")}`;
  } catch {
    return null;
  }
}

export async function ogCard({ eyebrow, title, image }: { eyebrow: string; title: string; image?: string }) {
  const bg = await photo(image);
  const size = title.length > 52 ? 54 : title.length > 36 ? 62 : 70;
  const png = new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0A1D33", color: "#fff" }}>
        {bg && <img src={bg} width={1200} height={630} alt="" style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }} />}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, display: "flex",
          background: bg
            ? "linear-gradient(90deg, rgba(10,29,51,0.96) 0%, rgba(10,29,51,0.86) 48%, rgba(10,29,51,0.35) 100%)"
            : "radial-gradient(120% 120% at 80% 0%, #1F497D 0%, #0A1D33 55%, #06121F 100%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "56px 68px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={markSrc} width={56} height={65} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#33C27A", letterSpacing: 1 }}>HYDRO ENVIRONMENTAL</div>
              <div style={{ fontSize: 18, fontWeight: 600 }}>&amp; ENGINEERING SERVICES LLC</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
            <div style={{ fontSize: 20, letterSpacing: 5, color: "#33C27A", textTransform: "uppercase" }}>{eyebrow}</div>
            <div style={{ fontSize: size, lineHeight: 1.06, fontWeight: 600 }}>{title}</div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#B9C8D8" }}>
            <span>heesllc.ae</span><span style={{ color: "#33C27A" }}>•</span><span>{company.phone}</span><span style={{ color: "#33C27A" }}>•</span><span>Sharjah, UAE</span>
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
  // ImageResponse only renders PNG; re-encode to JPEG for size
  const buf = Buffer.from(await png.arrayBuffer());
  try {
    const sharp = (await import("sharp")).default;
    const jpg = await sharp(buf).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    return new Response(new Uint8Array(jpg), { headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" } });
  } catch {
    return new Response(new Uint8Array(buf), { headers: { "Content-Type": "image/png" } });
  }
}
