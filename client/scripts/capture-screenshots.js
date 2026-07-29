import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS = [
  {
    name: 'Hospital IoT AI Agent',
    url: 'https://github.com/dharmu689/hospital-iot-telemetry',
    filename: 'hospital-iot-ai-agent.png',
    outputSubdir: 'projects'
  },
  {
    name: 'KiranaSmart - Smart Inventory Management',
    url: 'https://kirana-store-oq3u.vercel.app',
    filename: 'kiranasmart.png',
    outputSubdir: 'projects'
  },
  {
    name: 'GoldenBite - Food Delivery Web App',
    url: 'https://goldenbite.vercel.app',
    filename: 'goldenbite.png',
    outputSubdir: 'projects'
  }
];

const CERTIFICATES = [
  {
    name: 'Generative AI Foundations',
    url: 'https://drive.google.com/file/d/1K-rIYD-IJGOjXPr1jzzbhGcN_tGqcCpk/view?usp=sharing',
    filename: 'generative-ai-foundations.png',
    outputSubdir: 'certificates'
  },
  {
    name: 'Database and SQL',
    url: 'https://drive.google.com/file/d/1VusW7CVwR2z9L-hKVsRvjHlXM4cBBoY2/view?usp=sharing',
    filename: 'database-sql.png',
    outputSubdir: 'certificates'
  },
  {
    name: 'Complete Web Development Course',
    url: 'https://drive.google.com/file/d/1r8sj-_RPYL7SWcM9iiepHDx7lq0JPNcj/view',
    filename: 'complete-web-development.png',
    outputSubdir: 'certificates'
  },
  {
    name: 'Learn C++',
    url: 'https://www.linkedin.com/posts/dharmu689_codechef-certificate-dharmu-kumar-activity-7265413443191459840-r2dh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx8yIkBk1ScSwesckwedEMSMTBBhTWkRJ8',
    filename: 'learn-cpp.png',
    outputSubdir: 'certificates'
  },
  {
    name: 'JavaScript Essentials 1',
    url: 'https://drive.google.com/file/d/1yQ4D9S-vMJZy82ImOkcg8U88TVNPsgyq/view?usp=sharing',
    filename: 'javascript-essentials-1.png',
    outputSubdir: 'certificates'
  },
  {
    name: 'IT Essentials',
    url: 'https://drive.google.com/file/d/1DKIFVMBXsvwBSKAB4SmumYYHE2Yj9U_1/view',
    filename: 'it-essentials.png',
    outputSubdir: 'certificates'
  }
];

async function captureScreenshots() {
  const assetsDir = path.resolve(__dirname, '../src/assets');
  
  // Ensure directories exist
  const projectsDir = path.join(assetsDir, 'projects');
  const certificatesDir = path.join(assetsDir, 'certificates');
  
  for (const dir of [projectsDir, certificatesDir]) {
    if (!fs.existsSync(dir)) {
      console.log(`Creating directory: ${dir}`);
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const allTargets = [...PROJECTS, ...CERTIFICATES];

  try {
    for (const item of allTargets) {
      console.log(`\nProcessing: ${item.name}`);
      console.log(`Navigating to: ${item.url}`);
      
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 720 });
      
      try {
        // Navigate
        await page.goto(item.url, { 
          waitUntil: 'domcontentloaded', 
          timeout: 60000 
        });
        
        // Dynamic wait depending on page type
        let waitTime = 5000; // default 5 seconds
        if (item.url.includes('drive.google.com')) {
          console.log('Google Drive URL detected. Waiting 10 seconds for document viewer to render...');
          waitTime = 10000;
        } else if (item.url.includes('linkedin.com')) {
          console.log('LinkedIn URL detected. Waiting 8 seconds...');
          waitTime = 8000;
        } else {
          console.log(`Waiting ${waitTime / 1000} seconds for page to settle...`);
        }
        
        await new Promise(resolve => setTimeout(resolve, waitTime));
        
        const outputPath = path.join(assetsDir, item.outputSubdir, item.filename);
        await page.screenshot({ 
          path: outputPath,
          fullPage: false
        });
        
        console.log(`✓ Screenshot saved successfully to ${outputPath}`);
      } catch (err) {
        console.error(`✗ Failed to capture screenshot for ${item.name}:`, err.message);
      } finally {
        await page.close();
      }
    }
  } finally {
    console.log('\nClosing browser...');
    await browser.close();
  }
}

captureScreenshots().catch(err => {
  console.error('Critical error in screenshot capture script:', err);
  process.exit(1);
});
