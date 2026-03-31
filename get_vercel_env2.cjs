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
                    const keys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId', 'measurementId'];
                    keys.forEach(k => {
                        const regex = new RegExp(k + ':"([^"]+)"');
                        const m = jsData.match(regex);
                        console.log("Vercel", k, ":", m ? m[1] : 'not found');
                    });
                });
            });
        }
    });
});
