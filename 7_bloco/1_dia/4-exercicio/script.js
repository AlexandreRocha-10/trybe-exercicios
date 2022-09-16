let clickCount = 0;

const text = document.getElementById('cont');
const button = document.getElementById('button');

button.addEventListener('click' , (e) => {
    if (e.target) {
        text.innerHTML = clickCount += 1;
    }
});

