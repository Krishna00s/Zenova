const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

// High-resolution generated Proposal 5 image path
const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_v2_logo_5_1786201851129.jpg';
const outputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_inverted_purple_z_logo.png';

const jpegData = fs.readFileSync(inputPath);
const rawImageData = jpeg.decode(jpegData, { useTolerantUnknown: true });

const width = rawImageData.width;
const height = rawImageData.height;
const centerX = width / 2;
const centerY = height / 2;

// Measure purple circle radius from center
let purpleRadius = 0;
for (let r = 20; r < width / 2; r++) {
  const x = Math.round(centerX + r);
  const y = Math.round(centerY);
  const idx = (y * width + x) * 4;
  const red = rawImageData.data[idx];
  const green = rawImageData.data[idx + 1];
  const blue = rawImageData.data[idx + 2];

  if (red < 25 && green < 25 && blue < 35) {
    purpleRadius = r - 2;
    break;
  }
}

if (purpleRadius === 0) {
  purpleRadius = Math.floor(width * 0.38);
}

console.log(`Original image: ${width}x${height}, circle radius: ${purpleRadius}px`);

const tempPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const r = rawImageData.data[idx];
    const g = rawImageData.data[idx + 1];
    const b = rawImageData.data[idx + 2];

    const isOuterDarkBox = r < 25 && g < 25 && b < 35;
    const isLightBackground = r > 180 && g > 180 && b > 180;

    if (dist > purpleRadius || isOuterDarkBox || isLightBackground) {
      // 100% Transparent outside circle
      tempPng.data[idx] = 0;
      tempPng.data[idx + 1] = 0;
      tempPng.data[idx + 2] = 0;
      tempPng.data[idx + 3] = 0;
    } else {
      // Inside circle: Invert colors!
      // White/light Z text (high brightness) -> turn Deep Purple (#3B1F52 -> R:59, G:31, B:82)
      // Dark purple background (low brightness) -> turn Pure White (#FFFFFF)
      const brightness = (r + g + b) / 3;

      if (brightness > 140) {
        // This is the Z lettermark emblem -> Deep Purple (#3B1F52)
        tempPng.data[idx] = 59;   // R: #3B
        tempPng.data[idx + 1] = 31; // G: #1F
        tempPng.data[idx + 2] = 82; // B: #52
        tempPng.data[idx + 3] = 255;
      } else {
        // This is the circle background -> Pure White (#FFFFFF) with purple accent border
        tempPng.data[idx] = 255;
        tempPng.data[idx + 1] = 255;
        tempPng.data[idx + 2] = 255;
        tempPng.data[idx + 3] = 255;
      }
    }
  }
}

// Find tight bounding box
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    if (tempPng.data[idx + 3] > 10) {
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
    croppedPng.data[dstIdx] = tempPng.data[srcIdx];
    croppedPng.data[dstIdx + 1] = tempPng.data[srcIdx + 1];
    croppedPng.data[dstIdx + 2] = tempPng.data[srcIdx + 2];
    croppedPng.data[dstIdx + 3] = tempPng.data[srcIdx + 3];
  }
}

const finalBuffer = PNG.sync.write(croppedPng);
fs.writeFileSync(outputPath, finalBuffer);

console.log(`Successfully generated color-inverted Z logo at: ${outputPath}`);
