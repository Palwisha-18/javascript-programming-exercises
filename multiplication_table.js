function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        result = i * number;
        console.log(`${number} * ${i} = ${result}`)
    }
}

const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt('Enter Integer: '));
multiplicationTable(number);