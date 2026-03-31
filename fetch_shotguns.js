import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOUNDS_DIR = path.join(__dirname, 'public', 'sounds');
if (!fs.existsSync(SOUNDS_DIR)) fs.mkdirSync(SOUNDS_DIR, { recursive: true });

// Scrape MyInstants for "shotgun reload"
const searchUrl = 'https://www.myinstants.com/en/search/?name=shotgun+reload';

const getHtml = (url) => new Promise((resolve, reject) => {
    const options = {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    };
    https.get(url, options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
    }).on('error', reject);
});

async function run() {
    try {
        console.log("🔍 Searching on MyInstants...");
        const searchHtml = await getHtml(searchUrl);

        // Extract individual sound page links: /en/instant/shotgun-reload-23461/
        const pageMatches = [...searchHtml.matchAll(/\/en\/instant\/[a-zA-Z0-9-]+\//g)];
        const uniquePages = [...new Set(pageMatches.map(m => m[0]))];

        let count = 0;
        for (const relativePath of uniquePages) {
            if (count >= 3) break;

            const pageUrl = `https://www.myinstants.com${relativePath}`;
            console.log(`📄 Analyzing page: ${pageUrl}`);
            const pageHtml = await getHtml(pageUrl);

            // Extract direct link to MP3 from the "Download MP3" button
            const mp3Match = pageHtml.match(/https:\/\/www\.myinstants\.com\/media\/sounds\/[^'"]+\.mp3/);

            if (mp3Match) {
                const mp3Url = mp3Match[0];
                const targetPath = path.join(SOUNDS_DIR, `shotgun_${count + 1}.mp3`);

                console.log(`⬇️ Downloading ${count + 1}: ${mp3Url}`);
                await new Promise((resolve) => {
                    https.get(mp3Url, (res) => {
                        const stream = fs.createWriteStream(targetPath);
                        res.pipe(stream);
                        stream.on('finish', () => {
                            console.log(`✅ Saved: shotgun_${count + 1}.mp3`);
                            stream.close();
                            resolve();
                        });
                    });
                });
                count++;
            }
        }

        if (count === 0) console.log("❌ No shotgun sounds found!");
        else console.log("✨ All 3 shotgun sounds downloaded successfully.");

    } catch (err) {
        console.error("💥 Error during execution:", err);
    }
}

run();
