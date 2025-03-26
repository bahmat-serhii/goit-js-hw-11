import axios from 'axios';

const API_KEY = '49539740-9fa855f5a07e4e22441b65a56';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw new Error('Failed to fetch images. Please try again later.');
    });
}
