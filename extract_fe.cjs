const fs = require('fs');
const content = fs.readFileSync('vercel_bundle.js', 'utf8');

// Find declaration of fe in the string
const fbRegex = /[^a-zA-Z0-9_]fe="([^"]+)"/g;
let m;
while ((m = fbRegex.exec(content)) !== null) {
    console.log("fe assigned string:", m[1]);
}

const fbRegex2 = /[^a-zA-Z0-9_]fe='([^']+)'/g;
let m2;
while ((m2 = fbRegex2.exec(content)) !== null) {
    console.log("fe assigned string2:", m2[1]);
}

const feContext = content.match(/.{0,20}[^a-zA-Z0-9_]fe=[^,;}]+.{0,20}/g);
console.log("fe declarations context:");
if (feContext) feContext.forEach(mx => console.log(mx));
