const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'))
myEmitter.on('halo', () => console.log('halo Event Fired!'))

// Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('halo')