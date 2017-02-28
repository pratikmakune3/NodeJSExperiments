var http = require('http');

var server = http.createServer(function(req, res){    // Callback function executes when server gets a request
  console.log('Request was made to URL : '+req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});   // Writing header of response : Status-code and Content-Type
  res.end('Hello Request-maker, Server at your service !');   // End the response by sending the content to the browser
});


server.listen(3000, '127.0.0.1'); // Node listens to the port 3000 locally
console.log('now listening to port 3000');
