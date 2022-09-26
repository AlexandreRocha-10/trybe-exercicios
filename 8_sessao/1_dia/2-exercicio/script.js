const checker = (apostado, sorteado) => apostado === sorteado;

const numberGenerator = (apostado, callback) => {
  const sorteado = Math.floor((Math.random() * 5) + 1);
  if (callback(apostado,sorteado) === true) {
    return 'Lucky day, you won!'
  } else {
    return 'Try Again!'
  }
};

console.log(numberGenerator(2, checker));