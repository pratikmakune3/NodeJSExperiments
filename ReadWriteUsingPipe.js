var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request was made to URL : '+req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');


// The pipe() function reads data from a readable stream as
    // it becomes available and writes it to a destination writable stream, here response object !
