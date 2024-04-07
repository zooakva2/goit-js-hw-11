import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

export const galleryList = document.querySelector('ul.gallery');
let query = '';

const displayLoader = () => {
  galleryList.innerHTML += '<span class="loader"></span>';
};
const searchForm = document.querySelector('.search-bar');
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const query = document.getElementById('search-input').value.trim();

  if (query && query.length >= 3) {
    displayLoader();

    fetchImages(query)
      .then(data => {
        renderImages(data);
        document.getElementById('search-input').value = '';
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
        document.getElementById('search-input').value = '';
      });
  } else {
    iziToast.info({
      title: 'Info',
      message: 'Please enter a valid search query with at least 3 characters.',
      position: 'topRight',
    });
  }
});
