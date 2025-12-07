const http = require('http');

const port = process.env.PORT || 8000
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Server started in port ${port}`);
});

server.listen(port, () => {
    console.log(`Server started in port ${port}`);
});