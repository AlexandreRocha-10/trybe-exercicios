// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(`${ifScope} o que estou fazendo aqui ? :O`);
//   }

//   testingScope(true);


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {
    const newArray = array.sort((a, b) => a - b);
    return newArray
  }

  const sortedArray = sortOddsAndEvens(oddsAndEvens)

  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);