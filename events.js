var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on('someEvent', function(){
  console.log('someEvent occured !');
})

myEmmitter.emit('someEvent');
