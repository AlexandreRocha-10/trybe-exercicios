const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');

    for (let i = 0; i < fraseArray.length; i += 1) {
        if (fraseArray[i] === 'x') {
            fraseArray[i] = nome;
        }
    }
    return fraseArray.join(' ');
  };
  
const minhasSkills = (func1) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resp = `${func1} Minhas três principais habilidades são: ${skills[0]} ${skills[1]} ${skills[2]}.`;
    return resp;
}

console.log(minhasSkills(substituaX('Bebeto')));