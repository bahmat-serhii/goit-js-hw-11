import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  toggleLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();
  handleSearch();
  input.value = '';
});

function handleSearch() {
  const query = input.value.trim();
  if (!query) return showError('Please enter a search term!');

  clearGallery();
  toggleLoader(true);

  fetchImages(query)
    .then(data => {
      if (!data.hits.length) {
        showWarning(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(data.hits);
      }
    })
    .catch(() => showError('Something went wrong!'))
    .finally(() => toggleLoader(false));
}

function showError(message) {
  iziToast.error({ title: 'Error', message });
}

function showWarning(message) {
  iziToast.warning({ message });
}

const classBtn = document.querySelector('button');
classBtn.classList.add('form-btn');
const classInput = document.querySelector('input');
classInput.classList.add('form-input');
