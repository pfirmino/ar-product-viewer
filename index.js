const https = require('https');
const fs = require('fs');
const hostname = 'localhost';
const port = 8080;

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});