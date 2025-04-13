const sharp = require('sharp');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const svgPath = './icons/icon.svg';

if (!fs.existsSync('./icons')) {
  fs.mkdirSync('./icons');
}

async function generateIcons() {
  for (const size of sizes) {
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(`./icons/icon-${size}x${size}.png`);
    console.log(`Created icon-${size}x${size}.png`);
  }
}

generateIcons().catch(err => console.error(err));
