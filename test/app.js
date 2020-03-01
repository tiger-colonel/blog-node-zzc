const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        console.log('-----req.content-----', req.headers['content-type']);
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('-----postData-----', postData);
            res.end('Hello World')
        })
    }
});

server.listen(3000)
