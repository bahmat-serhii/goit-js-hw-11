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

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  clearGallery();
  toggleLoader(true);

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.warning({ message: 'Sorry, no images found. Try again!' });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
  } finally {
    toggleLoader(false);
  }
});
