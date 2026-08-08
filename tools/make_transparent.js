const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

// Original exact Proposal 5 image path
const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_v2_logo_5_1786201851129.jpg';
const outputPath = './public/media/zenova_logo_transparent.png';

const jpegData = fs.readFileSync(inputPath);
const rawImageData = jpeg.decode(jpegData, { useTolerantUnknown: true });

const width = rawImageData.width;
const height = rawImageData.height;
const png = new PNG({ width, height });

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

  // If color turns into dark background outside purple circle, mark edge
  // Or if lightness drops to near black outer box
  // Let's check:
  if (red < 20 && green < 20 && blue < 25) {
    purpleRadius = r - 2;
    break;
  }
}

if (purpleRadius === 0) {
  purpleRadius = Math.floor(width * 0.40);
}

console.log(`Image size: ${width}x${height}, purple radius: ${purpleRadius}px`);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    png.data[idx] = rawImageData.data[idx];       // R
    png.data[idx + 1] = rawImageData.data[idx + 1]; // G
    png.data[idx + 2] = rawImageData.data[idx + 2]; // B

    // Check outer dark box or outer white ring pixels
    const r = rawImageData.data[idx];
    const g = rawImageData.data[idx + 1];
    const b = rawImageData.data[idx + 2];

    const isOuterDarkBox = r < 25 && g < 25 && b < 30;
    const isLightBackground = r > 180 && g > 180 && b > 180;

    if (dist > purpleRadius || isOuterDarkBox || isLightBackground) {
      png.data[idx + 3] = 0; // 100% Transparent
    } else {
      png.data[idx + 3] = 255; // 100% Opaque
    }
  }
}

const buffer = PNG.sync.write(png);
fs.writeFileSync(outputPath, buffer);
console.log(`Successfully written 100% transparent PNG to: ${outputPath}`);
