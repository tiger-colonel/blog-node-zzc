const http = require('http')

const PORT = 8001
const serverHandle = require('../app')

const server = http.createServer(serverHandle);

server.listen(PORT);
