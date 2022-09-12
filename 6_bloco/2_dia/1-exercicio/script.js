function handleSubmit(event) {
    event.preventDefault();
  }

window.onload = () => {
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
};

const name = document.querySelector('#name');

const picker = new Pikaday({ field: document.getElementById('datepicker') });
const validate = new window.JustValidate('#form');