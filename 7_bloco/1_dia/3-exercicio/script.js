const longestWord = (text) => {
    let maior = 0;
    let arrayText = text.split(' ');
    let result = '';

    for (let i of arrayText) {
        if (i.length > maior) {
            maior = i.length;
            result = i;
        }
    }
    return result;
}

const resposta = longestWord('asdnJN ADNAIsduna AdnsoaDSNODs');

console.log(resposta);