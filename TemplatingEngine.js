// Injecting Javascript code into the html file, use Template Engine

var express = require('express');

var app = express();

app.set('view engine', 'ejs')   // way to tell express, we're going to use ejs as our templating engine = view engine
                                // express will look for view inside /views folder bydefault, it will look for .ejs files and not .html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

//WE PASS THE DYNAMIC DATA TO THE VIEW VIA OBJECT {}
app.get('/profile/:name', function(req, res){
  var data = {age:24, job:'coder', hobbies: ['Reading','Coding','Swimming']};  // Sending arbitary data to profile
  res.render('profile', {person: req.params.name, data: data});       // render is for rendering views.
});                                                                  // Passing the data  'req.params.name' to profile.ejs and
                                                                    // access that data using 'person' property of the object
app.listen(3000);
