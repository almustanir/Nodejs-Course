// const logEvents = require('./logEvents');


// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}


// //initialize event object
// const myEmitter = new MyEmitter();


// //add event listener    
// myEmitter.on('log', (msg) => logEvents(msg));
// myEmitter.emit('log', 'event emmited')
// setTimeout(() => {

// }, 2000);

const logEvents = require('./logEvents');
const { EventEmitter } = require('node:events')

//initialize our events
const myEmitter = new EventEmitter();
myEmitter.on('log', (msg) => logEvents(msg));

// console.log(myEmitter.listeners("logs"))
setTimeout (() => {
    myEmitter.emit("log", 'emitted');
}, 3000)