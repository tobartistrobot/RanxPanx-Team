const https = require('https');
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
                    const apiMatch = jsData.match(/apiKey:"([^"]+)"/);
                    const projMatch = jsData.match(/projectId:"([^"]+)"/);
                    console.log("Vercel API Key:", apiMatch ? apiMatch[1] : 'not found');
                    console.log("Vercel Project ID:", projMatch ? projMatch[1] : 'not found');
                });
            });
        }
    });
});
