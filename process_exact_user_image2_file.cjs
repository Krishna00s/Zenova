const fs = require('fs');
const { PNG } = require('pngjs');

// Exact Image 2 file uploaded by user in the latest prompt
const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\.user_uploaded\\media_1786205501349.png';
const outputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_user_exact_image2_matte_black_white_z.png';

const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

const width = srcPng.width;
const height = srcPng.height;
const centerX = Math.floor(width / 2);
const centerY = Math.floor(height / 2);

// Measure black circle radius from center
let circleRadius = 0;
for (let r = Math.floor(width * 0.2); r < width / 2; r++) {
  const x = Math.min(width - 1, centerX + r);
  const y = centerY;
  const idx = (y * width + x) * 4;
  const red = srcPng.data[idx];
  const green = srcPng.data[idx + 1];
  const blue = srcPng.data[idx + 2];

  // Look for transition to outside dark/light square background
  if (red < 15 && green < 15 && blue < 15) {
    // If further pixels are also square background edge
    circleRadius = r - 2;
  }
}

if (circleRadius === 0) {
  circleRadius = Math.floor(Math.min(width, height) / 2) - 4;
}

console.log(`Processing user uploaded Image 2 file (${width}x${height}), circle radius: ${circleRadius}px`);

// Create 100% transparent PNG outside black circle, retaining 100% of Image 2's exact pixels inside
const outPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > circleRadius) {
      // 100% Transparent outside circle
      outPng.data[idx] = 0;
      outPng.data[idx + 1] = 0;
      outPng.data[idx + 2] = 0;
      outPng.data[idx + 3] = 0;
    } else {
      outPng.data[idx] = srcPng.data[idx];       // R
      outPng.data[idx + 1] = srcPng.data[idx + 1]; // G
      outPng.data[idx + 2] = srcPng.data[idx + 2]; // B
      outPng.data[idx + 3] = srcPng.data[idx + 3]; // A
    }
  }
}

// Crop to tight bounding box of circle
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    if (outPng.data[idx + 3] > 10) {
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
    croppedPng.data[dstIdx] = outPng.data[srcIdx];
    croppedPng.data[dstIdx + 1] = outPng.data[srcIdx + 1];
    croppedPng.data[dstIdx + 2] = outPng.data[srcIdx + 2];
    croppedPng.data[dstIdx + 3] = outPng.data[srcIdx + 3];
  }
}

const finalBuffer = PNG.sync.write(croppedPng);
fs.writeFileSync(outputPath, finalBuffer);

console.log(`Successfully extracted user Image 2 exact file to: ${outputPath}`);
