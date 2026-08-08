const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = './public/media/zenova_logo_transparent.png';
const outputPath = './public/favicon.png';

const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

// Find tight bounding box of non-transparent pixels
let minX = srcPng.width, maxX = 0, minY = srcPng.height, maxY = 0;

for (let y = 0; y < srcPng.height; y++) {
  for (let x = 0; x < srcPng.width; x++) {
    const idx = (y * srcPng.width + x) * 4;
    const alpha = srcPng.data[idx + 3];
    if (alpha > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const cropWidth = maxX - minX + 1;
const cropHeight = maxY - minY + 1;

console.log(`Original: ${srcPng.width}x${srcPng.height}. Bounding box: ${cropWidth}x${cropHeight} (x: ${minX}..${maxX}, y: ${minY}..${maxY})`);

// Create tightly cropped PNG
const croppedPng = new PNG({ width: cropWidth, height: cropHeight });

for (let y = 0; y < cropHeight; y++) {
  for (let x = 0; x < cropWidth; x++) {
    const srcIdx = ((y + minY) * srcPng.width + (x + minX)) * 4;
    const dstIdx = (y * cropWidth + x) * 4;

    croppedPng.data[dstIdx] = srcPng.data[srcIdx];
    croppedPng.data[dstIdx + 1] = srcPng.data[srcIdx + 1];
    croppedPng.data[dstIdx + 2] = srcPng.data[srcIdx + 2];
    croppedPng.data[dstIdx + 3] = srcPng.data[srcIdx + 3];
  }
}

// Write tightly cropped PNG
const croppedBuffer = PNG.sync.write(croppedPng);
fs.writeFileSync('./public/favicon.png', croppedBuffer);
fs.writeFileSync('./public/favicon.ico', croppedBuffer);
fs.writeFileSync('./public/media/zenova_logo_transparent.png', croppedBuffer);

console.log('Successfully cropped logo to edge-to-edge bounds for large, bold favicon fitting!');
