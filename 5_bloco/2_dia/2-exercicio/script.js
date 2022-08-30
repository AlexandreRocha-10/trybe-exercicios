const pai = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'irmaoDoElemento';
pai.appendChild(irmao);

const ondeEsta = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('filho');
filho.id = 'filho';
ondeEsta.appendChild(filho);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const terceiro = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

