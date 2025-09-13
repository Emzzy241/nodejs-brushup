HOME WORK: Emit a couple of logs (events), and then save them in a file.

```js
const fs = require('fs')
const Logger = require('./logger');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/home-work'), {}, err => {
//     if (err) throw err;
//     console.log('Folder for logging created.')
// })

let logs = []

const logger = new Logger();

logger.on('message', data => {
    logs.push(data)
    console.log('Called Listener', data)
});

logger.log('Hello World')
logger.log('Hi there')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')
logger.log('Aloha')

console.log(logs)

fs.writeFile(path.join(__dirname, '/home-work', 'logs.txt'), JSON.stringify(logs, null, 2), {}, err => {
    if (err) throw err;
    console.log('Logs have been written to file')
})
// console.log(logs)
// console.log(logger._events.message)

// fs.writeFile(path.join(__dirname, '/home-work', 'logger.txt'), logs, {}, err => {
//     if (err) throw err;
//     console.log('Logs has been written to file')
// })

```