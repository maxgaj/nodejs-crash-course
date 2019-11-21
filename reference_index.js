const Person = require("./person");
const Logger = require("./logger");

const person1 = new Person('John Doe', 30);
person1.greeting();

const logger = new Logger;
logger.on('message', (data) => console.log('Called listener:', data));

logger.log('Hello World');
logger.log('Hello World');
logger.log('Hello World');
logger.log('Hello World');