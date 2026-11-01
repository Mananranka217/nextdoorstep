// Generates responsive AVIF + WebP + JPEG versions of each hero image, plus the 1200x630 social image.
//
//   node scripts/optimize-images.mjs            (or: npm run images)
//
// For each folder below, drop in your photo as source.jpg / source.png / source.webp (it wins over
// source.svg, the placeholder) and re-run. Output goes to <folder>/generated/ and is committed, so the
// site build never needs sharp. sharp already ships with Next.js.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const widths = [640, 960, 1440, 1920];
const budgetKB = { 640: 150, 960: 150, 1440: 250, 1920: 250 }; // mobile <= 150 KB, desktop <= 250 KB
const heroes = ["hero", "owners", "tenants-buyers", "nexus"].map((d) => ({ name: d, dir: path.join(root, "public/assets", d) }));
const kb = (n) => Math.round(n / 1024);

function findSource(dir) {
  for (const ext of ["jpg", "jpeg", "png", "webp", "svg"]) {
    const f = path.join(dir, `source.${ext}`);
    if (fs.existsSync(f)) return f;
  }
  throw new Error(`No source.* image in ${dir}`);
}

let over = 0;
for (const { name, dir } of heroes) {
  const src = findSource(dir);
  const out = path.join(dir, "generated");
  fs.mkdirSync(out, { recursive: true });
  const meta = await sharp(src, { density: 144 }).metadata();
  console.log(`\n${name}: ${path.basename(src)} (${meta.width}x${meta.height})`);
  for (const w of widths) {
    const base = sharp(src, { density: 144 }).resize({ width: w, withoutEnlargement: false });
    const files = [
      [`${name}-${w}.avif`, base.clone().avif({ quality: 50, effort: 5 })],
      [`${name}-${w}.webp`, base.clone().webp({ quality: 72 })],
      [`${name}-${w}.jpg`, base.clone().jpeg({ quality: 74, mozjpeg: true, progressive: true })],
    ];
    const sizes = [];
    for (const [file, pipeline] of files) {
      const info = await pipeline.toFile(path.join(out, file));
      sizes.push(`${path.extname(file).slice(1)} ${kb(info.size)}KB`);
      if (kb(info.size) > budgetKB[w]) { over++; sizes[sizes.length - 1] += " (OVER BUDGET)"; }
    }
    console.log(`  ${w}px  ${sizes.join("  ")}`);
  }
}

// Social share image (Open Graph): 1200x630, built from the Nexus/neighbourhood artwork.
const og = path.join(root, "public/assets/og");
fs.mkdirSync(og, { recursive: true });
const ogInfo = await sharp(findSource(path.join(root, "public/assets/nexus")))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 78, mozjpeg: true, progressive: true })
  .toFile(path.join(og, "og-image.jpg"));
console.log(`\nog-image.jpg 1200x630 ${kb(ogInfo.size)}KB`);
if (over) console.log(`\n${over} file(s) over the size budget: lower the quality in this script or use a simpler photo.`);
