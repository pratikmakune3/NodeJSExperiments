//Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
//Each route can have one or more handler functions, which are executed when the route is matched.
//Route definition takes the following structure:
//app.METHOD(PATH, HANDLER)

var express = require('Express');       // express is a function

var app = express();                    //Invoking express by ();  app becomes an instance of express

app.get('/', function(req, res){
  res.send('This is Homepage');
});

app.get('/contact', function(req, res){
  res.send('This is Contact page')
})

app.get('/api', function(req, res){
  res.send('This is api');
});

app.listen(3000);
