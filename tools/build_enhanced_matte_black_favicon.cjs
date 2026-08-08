const fs = require('fs');
const { PNG } = require('pngjs');

// Output path for artifact preview
const outputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_matte_black_white_z_favicon.png';

const size = 1024;
const png = new PNG({ width: size, height: size });

const center = size / 2;
const radius = 490;

// High-resolution vector rasterizer for the enlarged geometric Z emblem
// The Z consists of two interlocking geometric chevrons
// Enlarged scale: Z fills ~88% of the circle height (y: center - 400 to center + 400)

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const idx = (y * size + x) * 4;
    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > radius) {
      // 100% Transparent outside circle
      png.data[idx] = 0;
      png.data[idx + 1] = 0;
      png.data[idx + 2] = 0;
      png.data[idx + 3] = 0;
    } else if (dist > radius - 16) {
      // Sleek subtle dark border ring (#27272A)
      png.data[idx] = 39;
      png.data[idx + 1] = 39;
      png.data[idx + 2] = 42;
      png.data[idx + 3] = 255;
    } else {
      // Matte Black Background (#121212)
      png.data[idx] = 18;
      png.data[idx + 1] = 18;
      png.data[idx + 2] = 18;
      png.data[idx + 3] = 255;
    }
  }
}

// Rasterize the enlarged pure white interlocking Z emblem
// Normalize coordinates to 0..100 viewBox
function inPolygon(px, py, points) {
  let isInside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const xi = points[i][0], yi = points[i][1];
    const xj = points[j][0], yj = points[j][1];
    const intersect = ((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
    if (intersect) isInside = !isInside;
  }
  return isInside;
}

// Top Chevron (Enlarged for maximum legibility at 16x16)
const topChevron = [
  [14, 14],
  [86, 14],
  [38, 62],
  [62, 62],
  [86, 38],
  [86, 14]
];

// Bottom Chevron (Enlarged)
const bottomChevron = [
  [86, 86],
  [14, 86],
  [62, 38],
  [38, 38],
  [14, 62],
  [14, 86]
];

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const idx = (y * size + x) * 4;
    
    // Convert x, y to 0..100 coordinate space
    const px = (x / size) * 100;
    const py = (y / size) * 100;

    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= radius - 16) {
      if (inPolygon(px, py, topChevron) || inPolygon(px, py, bottomChevron)) {
        // Pure White (#FFFFFF) crisp enlarged Z emblem
        png.data[idx] = 255;
        png.data[idx + 1] = 255;
        png.data[idx + 2] = 255;
        png.data[idx + 3] = 255;
      }
    }
  }
}

const buffer = PNG.sync.write(png);
fs.writeFileSync(outputPath, buffer);

console.log(`Successfully generated enlarged Matte Black + White Z favicon at: ${outputPath}`);
