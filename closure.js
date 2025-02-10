//1

function createLogger() {

    let messages = [];

    return {
        
    log: function(message) {
        return messages.push(message);
    },

    getLogs: function() {
        messages.forEach(msg => {
          console.log(msg);  
        });
    } 

    }

}

const logger = createLogger();
logger.log("Application started.");
logger.log("User logged in.");
logger.log("Data loaded successfully.");
logger.getLogs();







//2

function createRandomGenerator(min, max) {

    return function getRandomNumber() {

        return ~~(Math.random() * (max - min + 1)) + min;

    }

}

random = createRandomGenerator(1, 100);
console.log(random());
