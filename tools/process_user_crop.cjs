const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\.user_uploaded\\media_1786204183767.png';

const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

const width = srcPng.width;
const height = srcPng.height;
const centerX = width / 2;
const centerY = height / 2;

// Measure purple circle radius from center
let purpleRadius = 0;
for (let r = 2; r < width / 2; r++) {
  const x = Math.round(centerX + r);
  const y = Math.round(centerY);
  const idx = (y * width + x) * 4;
  const red = srcPng.data[idx];
  const green = srcPng.data[idx + 1];
  const blue = srcPng.data[idx + 2];

  // If pixel turns into outer dark background outside purple circle, mark edge
  if (red < 20 && green < 20 && blue < 30) {
    purpleRadius = r - 1;
    break;
  }
}

if (purpleRadius === 0) {
  purpleRadius = Math.floor(width / 2) - 1;
}

console.log(`Image size: ${width}x${height}, purple radius: ${purpleRadius}px`);

// Create 100% transparent PNG containing strictly the exact purple circle badge and white Z
const outPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    outPng.data[idx] = srcPng.data[idx];       // R
    outPng.data[idx + 1] = srcPng.data[idx + 1]; // G
    outPng.data[idx + 2] = srcPng.data[idx + 2]; // B

    if (dist > purpleRadius) {
      outPng.data[idx + 3] = 0; // 100% Transparent outside circle
    } else {
      outPng.data[idx + 3] = srcPng.data[idx + 3];
    }
  }
}

// Find tight bounding box of non-transparent pixels
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

fs.writeFileSync('./public/media/zenova_logo_transparent.png', finalBuffer);
fs.writeFileSync('./public/favicon.png', finalBuffer);
fs.writeFileSync('./public/favicon.ico', finalBuffer);

console.log('Successfully set user uploaded exact logo image to public/media/zenova_logo_transparent.png and favicons!');
