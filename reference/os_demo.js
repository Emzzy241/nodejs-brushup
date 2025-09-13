const os = require('os');
const { uptime } = require('process');

// Platform 
console.log(os.platform())

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory: Gives amount of free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir())

// Uptime: Number of seconds that your system has been up
console.log(os.uptime())