// Writes the desktop avatars (public/avatars/*.svg) and the favicons with
// DiceBear's pixel-art style. Run: node scripts/avatars.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { Avatar, Style } from "@dicebear/core";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const style = new Style(require("@dicebear/styles/pixel-art.json"));

// One Doris, many moods.
const doris = {
  seed: "Doris",
  hairVariant: "long12",
  hairColor: "#603a14",
  skinColor: "#f5cfa0",
  eyesVariant: "variant01",
  clothesVariant: "variant12",
  beardProbability: 0,
  hatProbability: 0,
  glassesProbability: 0,
  accessoriesProbability: 0,
};

const faces = {
  about: { tile: "#ffd9b3", clothingColor: "#428bca", mouthVariant: "happy09", accessoriesProbability: 100, accessoriesVariant: "variant01", accessoriesColor: "#daa520" },
  games: { tile: "#f0714f", clothingColor: "#ffeead", mouthVariant: "happy12" },
  projects: { tile: "#a5c6ee", clothingColor: "#ffd969", mouthVariant: "happy11" },
  experience: { tile: "#bfe3c9", clothingColor: "#ff6f69", mouthVariant: "happy08", glassesProbability: 100, glassesVariant: "light05", glassesColor: "#43677d" },
  skills: { tile: "#ffd969", clothingColor: "#d11141", mouthVariant: "happy10", glassesProbability: 100, glassesVariant: "dark06", glassesColor: "#191919" },
  books: { tile: "#f6c4cc", clothingColor: "#8f6bbf", mouthVariant: "happy11", book: "#c0392b" },
  resume: { tile: "#cfe3f6", clothingColor: "#03396c", mouthVariant: "happy07" },
  player: { tile: "#d9c8f0", clothingColor: "#44c585", mouthVariant: "happy13", eyesVariant: "variant07" },
};

// DiceBear has no long curly cut, so the long hair gets long15's curls on top.
const hair = /<g id="hair-[^"]+">([\s\S]*?<\/g>)<\/g>/;
const crown = new Avatar(style, { ...doris, hairVariant: "long15" }).toString().match(hair)[1];
const curls = `<g id="curls">${crown}</g>`;

// An open book held to the chest: pages dipping at the spine with a line of
// text each, the cover underneath and a hand on either side.
const book = (cover) =>
  `<path fill="#fff" d="M4 13h3v1H4zM9 13h3v1H9zM4 14h8v1H4z"/>` +
  `<path fill="#c9ccd6" d="M5 14h2v1H5zM9 14h2v1H9z"/>` +
  `<path fill="${cover}" d="M3 15h10v1H3z"/>` +
  `<path fill="${doris.skinColor}" d="M3 14h1v1H3zM12 14h1v1h-1z"/>`;

const avatar = (face, options = {}) => {
  const { tile, book: cover, ...mood } = faces[face];
  return new Avatar(style, { ...doris, ...mood, backgroundColor: tile, ...options })
    .toString()
    .replace("</defs>", `${curls}</defs>`)
    .replace(/<use href="#hair-[^"]+"\/>/, '$&<use href="#curls"/>')
    .replace("</g></svg>", `${cover ? book(cover) : ""}</g></svg>`);
};

mkdirSync("public/avatars", { recursive: true });
for (const face of Object.keys(faces)) {
  writeFileSync(`public/avatars/${face}.svg`, avatar(face));
  console.log(`public/avatars/${face}.svg`);
}

// Favicons from the About face. The 16x16 grid is rendered 1:1 and scaled up
// by whole pixels so it stays crisp at every size.
const grid = await sharp(Buffer.from(avatar("about", { size: 16 }))).png().toBuffer();
const scaled = (size) => sharp(grid).resize(size, size, { kernel: "nearest" }).png().toBuffer();

// ICO files may hold PNGs directly: a 6-byte header, a 16-byte entry per
// image, then the image data.
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(({ data }) => data)]);
}

const favicon = ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await scaled(size) }))));
const appleTouch = await sharp({ create: { width: 180, height: 180, channels: 4, background: faces.about.tile } })
  .composite([{ input: await scaled(176), left: 2, top: 2 }])
  .png()
  .toBuffer();

const files = {
  "app/favicon.ico": favicon,
  "public/favicon.ico": favicon,
  "public/favicon-16x16.png": await scaled(16),
  "public/favicon-32x32.png": await scaled(32),
  "public/apple-touch-icon.png": appleTouch,
  "public/android-chrome-192x192.png": await scaled(192),
  "public/android-chrome-512x512.png": await scaled(512),
};
for (const [path, data] of Object.entries(files)) {
  writeFileSync(path, data);
  console.log(path);
}
