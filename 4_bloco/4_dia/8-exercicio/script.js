function retornaIndiceMenorValor(array) {
    let menorValor = array[0];
    for (i=0; i<array.length; i+=1) {
        if (menorValor > array[i]) {
            menorValor = i
        }
    }
    return menorValor
}

console.log(retornaIndiceMenorValor([2, 3, 6, 7, 5, 1]))