import { preload } from "react-dom";

const WIDTHS = [640, 960, 1440, 1920] as const;

const srcSet = (base: string, ext: string) => WIDTHS.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");

/**
 * The full-bleed hero picture. A server component on purpose: the <img> is in the HTML the browser first
 * receives, with fetchpriority=high, so it is discovered and requested immediately. Files come from
 * `npm run images` (scripts/optimize-images.mjs): `base` is e.g. "/assets/hero/generated/hero".
 * Never fade this in. Motion on it must be transform-only (see .hx-img).
 */
export default function HeroImage({
  base,
  width = 1920,
  height = 1080,
  priority = true,
  sizes = "100vw",
}: {
  base: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}) {
  if (priority) {
    // Emits <link rel="preload" as="image" imagesrcset=... fetchpriority="high"> in <head>.
    preload(`${base}-1440.avif`, { as: "image", imageSrcSet: srcSet(base, "avif"), imageSizes: sizes, type: "image/avif", fetchPriority: "high" });
  }
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(base, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(base, "webp")} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hx-img"
        src={`${base}-1440.jpg`}
        srcSet={srcSet(base, "jpg")}
        sizes={sizes}
        width={width}
        height={height}
        alt=""
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
