function retornaMaisRepetido(array) {
    let contRepetido = 0;
    let contNumero = 0;
    let iNumRepetido = 0;
    for (i=0; i<array.length; i+=1) {
       let verificaNumero = array[i];
       for (i2=0; i2<array.length; i2+=1) {
        if (verificaNumero === array[i2]) {
            contRepetido += 1;
        }
       }
       if (contNumero > contRepetido) {
        contRepetido = contNumero;
        iNumRepetido = i;
       }
       contNumero = 0;
    }
    return array[iNumRepetido];
}

console.log(retornaMaisRepetido([2, 3, 6, 7, 5, 2]))