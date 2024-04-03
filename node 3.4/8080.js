var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    const fileStream = fs.createReadStream('node 3.4/content/big2.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(8080);