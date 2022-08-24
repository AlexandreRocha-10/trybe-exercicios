function retornaIndiceMaiorValor(array) {
    let maiorValor = array[0];
    for (i=0; i<array.length; i+=1) {
        if (maiorValor < array[i]) {
            maiorValor = i
        }
    }
    return maiorValor
}

console.log(retornaIndiceMaiorValor([2, 3, 6, 7, 5, 1]))