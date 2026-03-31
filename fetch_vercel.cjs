const https = require('https');
const fs = require('fs');

https.get('https://ranxpanxteam.vercel.app/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const match = data.match(/src="(\/assets\/index-[^"]+\.js)"/);
        if (match) {
            https.get('https://ranxpanxteam.vercel.app' + match[1], (jsRes) => {
                let jsData = '';
                jsRes.on('data', chunk => jsData += chunk);
                jsRes.on('end', () => {
                    // beautify slightly for grepping
                    jsData = jsData.replace(/;/g, ';\n').replace(/\{/g, '{\n').replace(/\}/g, '}\n');
                    fs.writeFileSync('vercel_bundle.js', jsData);
                    console.log("Saved vercel_bundle.js");
                });
            });
        }
    });
});
