
 const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

 const pai = elementoOndeVoceEsta.parentElement;
 pai.style.color = 'red';

 const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
 primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

 const primeiroFilho = pai.firstElementChild;

 const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

 const textElement = elementoOndeVoceEsta.nextSibling;

 const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

 const terceiroFilho2 = pai.lastElementChild.previousElementSibling;