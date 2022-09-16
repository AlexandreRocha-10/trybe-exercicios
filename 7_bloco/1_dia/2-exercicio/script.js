const factorial = (n) => {
    let result = 1;

    for (let index = 2; index <= n; index += 1) {
        result *= index;
    }
    return result;
}

const result = factorial(4);
console.log(`Esse é o fatorial ${result}`);