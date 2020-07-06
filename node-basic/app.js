const { sum } = require('./helpers');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello from node http server updatesss');
});

server.listen(3000);


const total = sum(2,333);
console.log("Total: ", total);
