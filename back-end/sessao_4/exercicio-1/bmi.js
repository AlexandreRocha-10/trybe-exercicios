const readline = require('readline-sync');


const handleImc = (peso, altura) => {
    const a = altura/100;
    const alt = a * a;
    const resp = peso/alt;
    return resp;
}

function main() {
    const peso1 = readline.questionFloat('Qual o peso?');
    const altura1 = readline.questionInt('Qual a altura?');

    const imc = handleImc(peso1, altura1);

    console.log(`imc: ${imc.toFixed(2)}`);
}

main();