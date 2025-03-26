import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

const classBtn = document.querySelector('button');
classBtn.classList.add('form-btn');
const classInput = document.querySelector('input');
classInput.classList.add('form-input');
const classFieldSet = document.querySelector('fieldset');
classFieldSet.classList.add('form-fieldset');
const classLabel = document.querySelector('label');
classLabel.classList.add('form-label');
const classFieldInput = document.querySelectorAll('fieldset input');
classFieldInput.forEach(item => item.classList.add('form-field-input'));
const classFieldLabel = document.querySelectorAll('fieldset label');
classFieldLabel.forEach(item => item.classList.add('form-field-label'));
