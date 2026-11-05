import sharp from "sharp";
import fs from "fs";
import path from "path";

const SOURCE_IMAGE = "C:/Users/home/.gemini/antigravity/brain/c05fb34f-68e4-4dd1-843e-0ef5020f10e0/.user_uploaded/media_1793847241218_57e3bd5a.jpg";

async function run() {
  console.log("Reading source image:", SOURCE_IMAGE);
  const src = sharp(SOURCE_IMAGE);
  const { data, info } = await src.raw().toBuffer({ resolveWithObject: true });

  // 1. Find bounding box of logo content (non-white pixels)
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      if (r < 240 || g < 240 || b < 240) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropPadding = 12;
  const left = Math.max(0, minX - cropPadding);
  const top = Math.max(0, minY - cropPadding);
  const width = Math.min(info.width - left, (maxX - minX + 1) + cropPadding * 2);
  const height = Math.min(info.height - top, (maxY - minY + 1) + cropPadding * 2);

  console.log(`Cropped logo dimensions: ${width}x${height} (at ${left}, ${top})`);

  // Extract cropped buffer
  const cropped = await sharp(SOURCE_IMAGE)
    .extract({ left, top, width, height })
    .png()
    .toBuffer();

  // Save base cropped logo
  fs.writeFileSync("public/logo.png", cropped);
  console.log("Saved public/logo.png");

  // Create transparent version for light backgrounds (make white pixels transparent)
  const { data: cData, info: cInfo } = await sharp(cropped).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const transBuf = Buffer.alloc(cInfo.width * cInfo.height * 4);
  const darkBuf = Buffer.alloc(cInfo.width * cInfo.height * 4);

  for (let i = 0; i < cInfo.width * cInfo.height; i++) {
    const srcIdx = i * 4;
    const r = cData[srcIdx];
    const g = cData[srcIdx + 1];
    const b = cData[srcIdx + 2];

    // Compute distance from pure white (255, 255, 255)
    // If pixel is near white (>245), make transparent
    const brightness = (r + g + b) / 3;
    let alpha = 255;
    if (brightness > 248) {
      alpha = 0;
    } else if (brightness > 230) {
      alpha = Math.round((248 - brightness) / 18 * 255);
    }

    // Light background logo (preserves red and black text)
    transBuf[srcIdx] = r;
    transBuf[srcIdx + 1] = g;
    transBuf[srcIdx + 2] = b;
    transBuf[srcIdx + 3] = alpha;

    // Dark background logo (converts black text & black wings to pure crisp white, leaves red vibrant)
    // Red detection: r is significantly higher than g and b
    const isRed = r > 140 && (r - g) > 50 && (r - b) > 50;
    if (isRed) {
      // Vivid bright scarlet for maximum visibility on black: #FF2E48 or #FF3B53
      darkBuf[srcIdx] = 255;
      darkBuf[srcIdx + 1] = 55;
      darkBuf[srcIdx + 2] = 75;
      darkBuf[srcIdx + 3] = alpha;
    } else if (alpha > 0) {
      // It's the black wings or black text -> make it pure white for dark backgrounds
      darkBuf[srcIdx] = 255;
      darkBuf[srcIdx + 1] = 255;
      darkBuf[srcIdx + 2] = 255;
      darkBuf[srcIdx + 3] = alpha;
    } else {
      darkBuf[srcIdx] = 0;
      darkBuf[srcIdx + 1] = 0;
      darkBuf[srcIdx + 2] = 0;
      darkBuf[srcIdx + 3] = 0;
    }
  }

  await sharp(transBuf, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .png()
    .toFile("public/logo-transparent.png");
  console.log("Saved public/logo-transparent.png");

  await sharp(darkBuf, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .png()
    .toFile("public/logo-dark-mode.png");
  console.log("Saved public/logo-dark-mode.png");

  // 2. Generate Favicon & App Icons (Must be perfectly SQUARE, crisp, and contain the official uploaded logo)
  // For favicon, we center the cropped logo horizontally and vertically in a square canvas.
  // We'll create:
  // - app/icon.png (512x512)
  // - app/apple-icon.png (180x180)
  // - public/favicon.ico & app/favicon.ico (48x48 PNG format readable as icon)

  // 512x512 square icon
  const squareSize = 512;
  const logoTargetWidth = Math.round(squareSize * 0.92); // 92% width so it's large and legible in tab
  const scaledLogo = await sharp(cropped)
    .resize({ width: logoTargetWidth, fit: "inside" })
    .toBuffer();

  const scaledMeta = await sharp(scaledLogo).metadata();
  const topPad = Math.round((squareSize - scaledMeta.height) / 2);
  const leftPad = Math.round((squareSize - scaledMeta.width) / 2);

  const square512 = await sharp({
    create: {
      width: squareSize,
      height: squareSize,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 } // Crisp clean white card background for favicon
    }
  })
    .composite([{ input: scaledLogo, top: topPad, left: leftPad }])
    .png()
    .toBuffer();

  fs.writeFileSync("app/icon.png", square512);
  console.log("Saved app/icon.png (512x512 square)");

  // 180x180 apple icon
  const appleIcon = await sharp(square512)
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync("app/apple-icon.png", appleIcon);
  console.log("Saved app/apple-icon.png (180x180 square)");

  // 48x48 and 32x32 ico
  const favicon32 = await sharp(square512)
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync("public/favicon.ico", favicon32);
  fs.writeFileSync("app/favicon.ico", favicon32);
  console.log("Saved public/favicon.ico & app/favicon.ico (48x48 square)");

  // Clean up any extraneous app/icon.jpg so Next.js doesn't get confused
  if (fs.existsSync("app/icon.jpg")) {
    fs.unlinkSync("app/icon.jpg");
    console.log("Removed app/icon.jpg to prevent Next.js icon resolution ambiguity");
  }
}

run().catch(err => {
  console.error("Error in process-logo:", err);
  process.exit(1);
});

