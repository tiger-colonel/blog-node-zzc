const http = require('http');

const PORT = 3000;
const serverHandler = require('../app.js');
const server = http.createServer(serverHandler);

server.listen(PORT)
