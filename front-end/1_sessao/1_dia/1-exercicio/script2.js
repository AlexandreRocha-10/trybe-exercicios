const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    console.log('Returned planet: ', mars);
  };
  
// Imprime Marte depois de 4 segundos
setTimeout(() => console.log(getPlanet()), 4000);