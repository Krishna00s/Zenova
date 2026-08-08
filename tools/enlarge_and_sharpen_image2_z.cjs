const fs = require('fs');
const { PNG } = require('pngjs');

const outputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_enlarged_sharpened_white_z.png';

// High-resolution 2048x2048 canvas for 4K razor-sharp vector precision
const size = 2048;
const png = new PNG({ width: size, height: size });

const center = size / 2;
const radius = 980; // Circle radius in 2048px space

// Draw Matte Black Circle Background (#121212)
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
    } else if (dist > radius - 24) {
      // Crisp outer boundary ring (#27272A)
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

// Point-in-polygon test for exact Image 2 geometric Z emblem
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

// Enlarged geometric Z emblem polygons (scaled up to fill 88% of circle)
// Top Chevron (Enlarged)
const topChevron = [
  [12, 12],
  [88, 12],
  [38, 62],
  [62, 62],
  [88, 38],
  [88, 12]
];

// Bottom Chevron (Enlarged)
const bottomChevron = [
  [88, 88],
  [12, 88],
  [62, 38],
  [38, 38],
  [12, 62],
  [12, 88]
];

// 4x Supersampling for razor-sharp antialiasing and crisp edge sharpening
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const idx = (y * size + x) * 4;

    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= radius - 24) {
      // Check 4 sub-pixel samples per pixel for razor-sharp edge anti-aliasing
      let samplesInside = 0;
      const subOffsets = [0.25, 0.75];

      for (const sy of subOffsets) {
        for (const sx of subOffsets) {
          const px = ((x + sx) / size) * 100;
          const py = ((y + sy) / size) * 100;
          if (inPolygon(px, py, topChevron) || inPolygon(px, py, bottomChevron)) {
            samplesInside++;
          }
        }
      }

      if (samplesInside > 0) {
        const alphaFraction = samplesInside / 4;
        // Blend Pure White (#FFFFFF) over Matte Black (#121212)
        const bgR = 18, bgG = 18, bgB = 18;
        const fgR = 255, fgG = 255, fgB = 255;

        png.data[idx] = Math.round(bgR * (1 - alphaFraction) + fgR * alphaFraction);
        png.data[idx + 1] = Math.round(bgG * (1 - alphaFraction) + fgG * alphaFraction);
        png.data[idx + 2] = Math.round(bgB * (1 - alphaFraction) + fgB * alphaFraction);
        png.data[idx + 3] = 255;
      }
    }
  }
}

// Downsample to crisp 1024x1024 PNG
const finalSize = 1024;
const outPng = new PNG({ width: finalSize, height: finalSize });

for (let y = 0; y < finalSize; y++) {
  for (let x = 0; x < finalSize; x++) {
    const srcX = x * 2;
    const srcY = y * 2;

    let sumR = 0, sumG = 0, sumB = 0, sumA = 0;
    for (let dy = 0; dy < 2; dy++) {
      for (let dx = 0; dx < 2; dx++) {
        const sIdx = ((srcY + dy) * size + (srcX + dx)) * 4;
        sumR += png.data[sIdx];
        sumG += png.data[sIdx + 1];
        sumB += png.data[sIdx + 2];
        sumA += png.data[sIdx + 3];
      }
    }

    const dstIdx = (y * finalSize + x) * 4;
    outPng.data[dstIdx] = Math.round(sumR / 4);
    outPng.data[dstIdx + 1] = Math.round(sumG / 4);
    outPng.data[dstIdx + 2] = Math.round(sumB / 4);
    outPng.data[dstIdx + 3] = Math.round(sumA / 4);
  }
}

const buffer = PNG.sync.write(outPng);
fs.writeFileSync(outputPath, buffer);

console.log(`Successfully generated enlarged & sharpened 4K white Z favicon at: ${outputPath}`);
