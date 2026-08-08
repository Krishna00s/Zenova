const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\krish\\.gemini\\antigravity\\brain\\2663c344-d45e-40db-8774-e479eea59bf2\\zenova_user_exact_image2_matte_black_white_z.png';

const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

const width = srcPng.width;
const height = srcPng.height;
const centerX = Math.floor(width / 2);
const centerY = Math.floor(height / 2);

// Isolate white Z emblem mask and Matte Black circle background
const circleRadius = Math.floor(Math.min(width, height) / 2) - 2;

// Extract Z emblem mask
const zPng = new PNG({ width, height });
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = srcPng.data[idx];
    const g = srcPng.data[idx + 1];
    const b = srcPng.data[idx + 2];
    const brightness = (r + g + b) / 3;

    if (brightness > 140) {
      // White Z emblem pixel
      zPng.data[idx] = 255;
      zPng.data[idx + 1] = 255;
      zPng.data[idx + 2] = 255;
      zPng.data[idx + 3] = srcPng.data[idx + 3];
    } else {
      zPng.data[idx] = 0;
      zPng.data[idx + 1] = 0;
      zPng.data[idx + 2] = 0;
      zPng.data[idx + 3] = 0;
    }
  }
}

// Scale up the Z emblem mask by ~1.20x from center
const scale = 1.20;
const enlargedPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > circleRadius) {
      // 100% Transparent outside circle
      enlargedPng.data[idx] = 0;
      enlargedPng.data[idx + 1] = 0;
      enlargedPng.data[idx + 2] = 0;
      enlargedPng.data[idx + 3] = 0;
    } else {
      // Matte Black background (#121212)
      enlargedPng.data[idx] = 18;
      enlargedPng.data[idx + 1] = 18;
      enlargedPng.data[idx + 2] = 18;
      enlargedPng.data[idx + 3] = 255;

      // Sample scaled Z emblem mask
      const srcX = Math.round(centerX + dx / scale);
      const srcY = Math.round(centerY + dy / scale);

      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        const sIdx = (srcY * width + srcX) * 4;
        if (zPng.data[sIdx + 3] > 100) {
          // Pure White Z emblem pixel (#FFFFFF)
          enlargedPng.data[idx] = 255;
          enlargedPng.data[idx + 1] = 255;
          enlargedPng.data[idx + 2] = 255;
          enlargedPng.data[idx + 3] = 255;
        }
      }
    }
  }
}

const finalBuffer = PNG.sync.write(enlargedPng);

fs.writeFileSync('./public/favicon.png', finalBuffer);
fs.writeFileSync('./public/favicon.ico', finalBuffer);
fs.writeFileSync('./public/apple-touch-icon.png', finalBuffer);
fs.writeFileSync('./public/media/zenova_exact_image2_enlarged_favicon.png', finalBuffer);

console.log('Successfully saved enlarged Image 2 white Z emblem to public/favicon.png and favicons!');
