const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\.user_uploaded\\media_1786204736419.png';

const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

const width = srcPng.width;
const height = srcPng.height;
const centerX = Math.floor(width / 2);
const centerY = Math.floor(height / 2);

// Measure white circle radius: start from center and scan rightward
let circleRadius = 0;
for (let r = Math.floor(width * 0.2); r < width / 2; r++) {
  const x = Math.min(width - 1, centerX + r);
  const y = centerY;
  const idx = (y * width + x) * 4;
  const red = srcPng.data[idx];
  const green = srcPng.data[idx + 1];
  const blue = srcPng.data[idx + 2];

  // When pixel turns into outer dark background outside white circle
  if (red < 50 && green < 50 && blue < 50) {
    circleRadius = r - 2;
    break;
  }
}

if (circleRadius === 0) {
  circleRadius = Math.floor(Math.min(width, height) / 2) - 4;
}

console.log(`Image 2: ${width}x${height}, Detected white circle radius: ${circleRadius}px`);

const tempPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    tempPng.data[idx] = srcPng.data[idx];       // R
    tempPng.data[idx + 1] = srcPng.data[idx + 1]; // G
    tempPng.data[idx + 2] = srcPng.data[idx + 2]; // B

    if (dist > circleRadius) {
      tempPng.data[idx + 3] = 0; // 100% Transparent outside circle
    } else {
      tempPng.data[idx + 3] = 255;
    }
  }
}

// Find tight bounding box of non-transparent circle
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

fs.writeFileSync('./public/favicon.png', finalBuffer);
fs.writeFileSync('./public/favicon.ico', finalBuffer);
fs.writeFileSync('./public/media/zenova_exact_image2_favicon.png', finalBuffer);

console.log(`Successfully cropped user Image 2 (Cropped to ${cropW}x${cropH}) to public/favicon.png!`);
