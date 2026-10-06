const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const sharp = require('sharp');

const projects = [
  {
    id: 'knk-awadh',
    url: 'https://knk-awadh-admin.vercel.app/',
    filename: 'knk-awadh.webp',
  },
  {
    id: 'sunrise-hospital',
    url: 'https://sunrisehospitals.in/',
    filename: 'sunrise-hospital.webp',
  },
  {
    id: 'parvatias',
    url: 'https://parvatias.com/',
    filename: 'parvatias.webp',
  },
  {
    id: 'rthree-salon',
    url: 'https://rthreesalon.digitalnawab.com/',
    filename: 'rthree-salon.webp',
  },
  {
    id: 'sumeera-salon',
    url: 'https://sumeerasalonandacademy.com/',
    filename: 'sumeera-salon.webp',
  },
  {
    id: 'tender-hearts',
    url: 'https://tenderheartsschool.in/',
    filename: 'tender-hearts.webp',
  },
];

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve(__dirname, '../public/images/projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log('Starting screenshot captures for', projects.length, 'projects...');
  for (const proj of projects) {
    const tempPng = path.join(os.tmpdir(), `shot_${proj.id}_${Date.now()}.png`);
    const finalWebp = path.join(outDir, proj.filename);
    console.log(`\nCapturing [${proj.id}] from ${proj.url}...`);
    
    try {
      // Using chrome headless
      const cmd = `"${chromePath}" --headless=new --no-sandbox --disable-gpu --hide-scrollbars --window-size=1440,900 --virtual-time-budget=8000 --screenshot="${tempPng}" "${proj.url}"`;
      execSync(cmd, { stdio: 'pipe', timeout: 35000 });
      
      if (fs.existsSync(tempPng) && fs.statSync(tempPng).size > 1000) {
        console.log(`Captured PNG (${fs.statSync(tempPng).size} bytes). Converting to WebP...`);
        await sharp(tempPng)
          .webp({ quality: 90, effort: 4 })
          .toFile(finalWebp);
        console.log(`Successfully saved: ${finalWebp} (${fs.statSync(finalWebp).size} bytes)`);
        fs.unlinkSync(tempPng);
      } else {
        console.error(`PNG not created or empty for ${proj.id}`);
      }
    } catch (err) {
      console.error(`Error capturing ${proj.id}:`, err.message);
    }
  }
  console.log('\nFinished all screenshot captures!');
}

capture();
