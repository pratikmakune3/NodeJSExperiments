var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var pratik = new Person('Pratik');
var ryu = new Person('Ryu');
var people = [james, pratik, ryu];

people.forEach(function(person){
  person.on('someEvent', function(mssg){
    console.log(mssg);
  });
});

james.emit('someEvent', 'hey Dudes !');
pratik.emit('someEvent', 'wats upp !');
ryu.emit('someEvent', 'cooool !');
