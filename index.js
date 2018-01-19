var chalk = require("chalk");

var message = "Hello " + chalk.yellow.bold.italic.inverse.bgCyanBright("World");
console.log(message);
