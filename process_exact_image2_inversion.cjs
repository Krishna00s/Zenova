const fs = require('fs');
const { PNG } = require('pngjs');

// Exact Image 2 file uploaded by the user
const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\.user_uploaded\\media_1786204736419.png';
const outputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_exact_image2_matte_black_white_z.png';

const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

const width = srcPng.width;
const height = srcPng.height;
const centerX = Math.floor(width / 2);
const centerY = Math.floor(height / 2);

// Measure white circle radius
let circleRadius = 0;
for (let r = Math.floor(width * 0.2); r < width / 2; r++) {
  const x = Math.min(width - 1, centerX + r);
  const y = centerY;
  const idx = (y * width + x) * 4;
  const red = srcPng.data[idx];
  const green = srcPng.data[idx + 1];
  const blue = srcPng.data[idx + 2];

  // Outside white circle (dark background)
  if (red < 50 && green < 50 && blue < 50) {
    circleRadius = r - 2;
    break;
  }
}

if (circleRadius === 0) {
  circleRadius = Math.floor(Math.min(width, height) / 2) - 4;
}

console.log(`Processing exact Image 2 (${width}x${height}), circle radius: ${circleRadius}px`);

// Create color-inverted PNG directly from Image 2 pixels
const invertedPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > circleRadius) {
      // 100% Transparent outside circle
      invertedPng.data[idx] = 0;
      invertedPng.data[idx + 1] = 0;
      invertedPng.data[idx + 2] = 0;
      invertedPng.data[idx + 3] = 0;
    } else {
      const r = srcPng.data[idx];
      const g = srcPng.data[idx + 1];
      const b = srcPng.data[idx + 2];
      const brightness = (r + g + b) / 3;

      if (brightness < 120) {
        // Black Z emblem in Image 2 -> Turn to Crisp Pure White (#FFFFFF)
        invertedPng.data[idx] = 255;
        invertedPng.data[idx + 1] = 255;
        invertedPng.data[idx + 2] = 255;
        invertedPng.data[idx + 3] = 255;
      } else {
        // White circle background in Image 2 -> Turn to Matte Black (#121212)
        invertedPng.data[idx] = 18;
        invertedPng.data[idx + 1] = 18;
        invertedPng.data[idx + 2] = 18;
        invertedPng.data[idx + 3] = 255;
      }
    }
  }
}

// Crop to tight bounding box of circle
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    if (invertedPng.data[idx + 3] > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
const croppedPng = new PNG({ width: cropW, height: cropH });

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = ((y + minY) * width + (x + minX)) * 4;
    const dstIdx = (y * cropW + x) * 4;
    croppedPng.data[dstIdx] = invertedPng.data[srcIdx];
    croppedPng.data[dstIdx + 1] = invertedPng.data[srcIdx + 1];
    croppedPng.data[dstIdx + 2] = invertedPng.data[srcIdx + 2];
    croppedPng.data[dstIdx + 3] = invertedPng.data[srcIdx + 3];
  }
}

const finalBuffer = PNG.sync.write(croppedPng);
fs.writeFileSync(outputPath, finalBuffer);

console.log(`Successfully generated exact Image 2 color-inverted logo at: ${outputPath}`);
