function retornaSoma(numero) {
    let soma = 0;
    for (i=1; i<=numero; i+=1) {
        soma += i;
    }
    return soma;
}
console.log(retornaSoma(2))