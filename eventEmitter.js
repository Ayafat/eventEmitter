var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I see the sunrise');
}

//Assign the event handler to an event:
eventEmitter.on('sunrise', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('sunrise');

