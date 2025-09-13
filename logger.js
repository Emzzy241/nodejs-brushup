const EventEmitter = require('events')
const uuid = require('uuid');

class logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg});
    }
}

// module.exports = logger

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

let logs = logger.log('Hello World')
logs = logger.log('Hi there')
logs = logger.log('Aloha')