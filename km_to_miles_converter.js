const converToMiles = function(valueInkm) {
    return valueInkm * 0.621371
}

const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt('Enter values in kilometers: '));

console.log(`${converToMiles(number)} miles`);