const fs = require("fs");
const os = require("os");
//class eventEmitter latter we extend it with own functionality
const EventEmitter = require("events");

class Logger extends EventEmitter {
  //log we create here by extending the existing class
  log(message) {
    // this access all properties and methods of parents class
    // emit method to broadcast 
    this.emit("message",{message})
    // this.emit("message", `${message} on ${os.EOL}`);
  }
}

//create logger obj from Logger class we created by extending EventEmitter
const logger = new Logger();
const logFile = "./eventlog.txt";

//create function to log the info and do task here
const logToFile = (event) => {
    //log this message to file ./eventlog.txt creating message string format 
    const logMessage = `${new Date().toISOString()} - ${event.message}/n`
    fs.appendFileSync(logFile,logMessage)
};

//listen for message event
logger.on("message", logToFile)

//classic logic of Node JS
// get some event catch then and load them 

setInterval(()=>{
    // known the free space available in os and total memory then calculate percentage of it
    const memoryUse = (os.freemem() / os.totalmem()) * 100
    // emit message to event emitter
    logger.log(`Memory usage ${memoryUse.toFixed(3)}%`)
},5000)


//Logger is class and logger is created object
logger.log("Application is started")
logger.log("Application event current")
