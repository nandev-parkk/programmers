const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');

    const result = input.map((alphabet) => {
        return alphabet === alphabet.toUpperCase() ? alphabet.toLowerCase() : alphabet.toUpperCase();
    }).join('');
    
    console.log(result)
}).on('close',function(){
    str = input[0];
});