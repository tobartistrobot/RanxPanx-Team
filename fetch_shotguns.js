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

https.get(searchUrl, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Extract sound URLs using Regex: /media/sounds/filename.mp3
        const matches = [...data.matchAll(/\/media\/sounds\/([^'"]+\.mp3)/g)];

        let count = 0;
        const downloaded = new Set();

        for (let i = 0; i < matches.length && count < 3; i++) {
            const fileName = matches[i][1];
            if (downloaded.has(fileName)) continue;
            downloaded.add(fileName);

            const fileUrl = `https://www.myinstants.com/media/sounds/${fileName}`;
            const targetPath = path.join(SOUNDS_DIR, `shotgun_${count + 1}.mp3`);

            console.log(`Downloading Option ${count + 1}: ${fileUrl}`);

            const currentCount = count + 1;
            https.get(fileUrl, (fileRes) => {
                const stream = fs.createWriteStream(targetPath);
                fileRes.pipe(stream);
                stream.on('finish', () => {
                    console.log(`Successfully saved: shotgun_${currentCount}.mp3`);
                    stream.close();
                });
            });
            count++;
        }

        if (count === 0) console.log("No shotgun sounds found!");
    });
}).on('error', err => console.error("Error fetching MyInstants:", err));
