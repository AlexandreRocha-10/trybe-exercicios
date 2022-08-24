function maiorNome(array) {
    let maiorNome = array[0];
    for (i=0; i<array.length; i+=1) {
        if (maiorNome.length < array[i].length) {
            maiorNome = array[i]
        }
    }
    return maiorNome
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))