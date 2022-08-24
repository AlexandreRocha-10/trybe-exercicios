function verificaFinal(word, ending) {
    let fimWord = "";
    for(let i=0; i<word.length; i+=1) {
        fimWord = word[word.length-2]+word[word.length-1]
    }
    if (fimWord === ending) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaFinal("trybe", "be"))