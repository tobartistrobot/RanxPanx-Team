const fs = require('fs');
const content = fs.readFileSync('vercel_bundle.js', 'utf8');
const searchMatch = content.match(/.{0,50}artifacts.{0,50}/g);
console.log("Context around artifacts:");
searchMatch.forEach(m => console.log(m));

// Let's try to find replacing slashes since that's how safeAppId is computed
const replaceMatch = content.match(/=\s*"([^"]+)"\.replace/g);
console.log("Replaced strings:", replaceMatch);
