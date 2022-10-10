// const fetch = require('node-fetch');

// const fetchInspiration = () => {
//   const url = 'https://api.goprogram.ai/inspiration';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(`"${data.quote}" | ${data.author}`));
// }

// fetchInspiration();

// const fetch = require('node-fetch');

// const fetchInspiration = () => {
//   const url = 'api.goprogram.ai/inspiration';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(`"${data.quote}" | ${data.author}`))
//     .catch((error) => console.log(`Algo deu errado - ${error}`));
// }

// fetchInspiration();

// // Algo deu errado - TypeError: Only absolute URLs are supported

const fetch = require('node-fetch');

const fetchInspiration = async () => {
  const url = 'https://api.goprogram.ai/inspiration';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(`"${data.quote}" | ${data.author}`))
    .catch((error) => console.log(`Algo deu errado - ${error}`));
}

fetchInspiration();