const fs = require('fs');
const { PNG } = require('pngjs');

// 1. Write ultra-crisp vector SVG favicon that fills the 16x16 tab frame with maximum white contrast
const svgContent = `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="32" fill="#4C236E" />
  <g fill="#FFFFFF">
    <path d="M 12 12 L 52 12 L 24 40 L 38 40 L 52 26 L 52 12 Z" />
    <path d="M 52 52 L 12 52 L 40 24 L 26 24 L 12 38 L 12 52 Z" />
  </g>
</svg>`;

fs.writeFileSync('./public/favicon.svg', svgContent);
console.log('Successfully written ultra-crisp SVG favicon!');

// 2. Generate high-resolution 64x64 PNG favicon with thick bright white Z mark
const size = 64;
const png = new PNG({ width: size, height: size });
const center = size / 2;
const radius = size / 2;

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const idx = (y * size + x) * 4;
    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= radius) {
      // Rich deep violet background
      png.data[idx] = 76;     // R (0x4C)
      png.data[idx + 1] = 35; // G (0x23)
      png.data[idx + 2] = 110;// B (0x6E)
      png.data[idx + 3] = 255;// Alpha 100%
    } else {
      // 100% transparent outside circle
      png.data[idx + 3] = 0;
    }
  }
}

// Draw thick bright white Z monogram on top of PNG
// Top bar and slanted arm
for (let y = 12; y <= 24; y++) {
  for (let x = 12; x <= 52; x++) {
    if (x >= y) {
      const idx = (y * size + x) * 4;
      png.data[idx] = 255;
      png.data[idx + 1] = 255;
      png.data[idx + 2] = 255;
      png.data[idx + 3] = 255;
    }
  }
}

const pngBuffer = PNG.sync.write(png);
fs.writeFileSync('./public/favicon.png', pngBuffer);
fs.writeFileSync('./public/favicon.ico', pngBuffer);
console.log('Successfully generated crisp high-contrast PNG & ICO favicon files!');
