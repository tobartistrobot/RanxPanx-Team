const fs = require('fs');
const content = fs.readFileSync('vercel_bundle.js', 'utf8');
const searchMatch = content.match(/.{0,50}artifacts.{0,50}/g);
console.log(searchMatch ? searchMatch : "No 'artifacts' found");

const collectionMatch = content.match(/collection\([^)]+\)/g);
console.log(collectionMatch ? collectionMatch.slice(0, 10) : "No 'collection(' found");

const dbMatch = content.match(/getFirestore/g);
console.log("getFirestore found:", dbMatch ? dbMatch.length : 0);
