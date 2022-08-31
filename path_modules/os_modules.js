// basically the osmodule gives us information about our os, our envirument

const os = require('os');

// we will look at the platform method first
// lets say you want to get information about the platform you are working with , then you can use this method
console.log('platform------------', os.platform() )


// now what if i want to get information about the cpu uptime, like how well the system has been running so far
// well we can do this using the uptime method

console.log('processing time-------------', os.uptime() )

// lets say we want information about our home directory

console.log('homedirectory-----------', os.homedir(), )

// total memory of system

console.log('total memory---------', os.totalmem())


//to get the free memory


console.log( 'free memory--------', os.freemem())


//cpus core

console.log(os.cpus())

// cpu architecture

console.log(os.arch())