const port = 8080;
const serverUrl = '127.0.0.1';

const http = require('http');
const path = require('path');
const fs = require('fs');

console.log('Starting web server at ' + serverUrl + ':' + port);

function getFile(localPath, res, mimeType) {
  fs.readFile(localPath, (err, contents) => {
    if (!err) {
      res.setHeader('Content-Length', contents.length);
      res.setHeader('Content-Type', mimeType);
      res.statusCode = 200;
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}

http.createServer((req, res) => {
  const filename = (req.url !== '/') ? req.url : '/index.html';
  const ext = path.extname(filename);
  let localPath = __dirname;
  const validExtensions = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.txt': 'text/plain',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
  };

  const isValidExt = validExtensions[ext];

  if (isValidExt) {
    localPath += filename;
    fs.exists(localPath, (exists) => {
      if (exists) {
        console.log('Serving file: ' + localPath);
        getFile(localPath, res, isValidExt);
      } else {
        console.log('File not found: ' + localPath);
        res.writeHead(404);
        res.end();
      }
    });
  } else {
    console.log('Invalid file extension detected, file: ' + filename);
    res.writeHead(404);
    res.end();
  }
}).listen(port, serverUrl);
