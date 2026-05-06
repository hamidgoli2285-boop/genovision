import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd());
const src = path.join(root, "public", "genovision-icon.svg");
const out = path.join(root, "public");
const appDir = path.join(root, "app");

const svg = await fs.readFile(src);

async function pngAt(size, filename) {
  const buf = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(path.join(out, filename), buf);
  return buf;
}

const png16 = await pngAt(16, "favicon-16x16.png");
const png32 = await pngAt(32, "favicon-32x32.png");
await pngAt(180, "apple-touch-icon.png");
await pngAt(192, "icon-192.png");
await pngAt(512, "icon-512.png");

const ico = await pngToIco([png16, png32]);
await fs.writeFile(path.join(out, "favicon.ico"), ico);
// Next.js App Router auto-serves /favicon.ico when present in app/
await fs.writeFile(path.join(appDir, "favicon.ico"), ico);

console.log("icons generated");
