import '../css/common.scss';
import '../css/gallery.scss';
import galleryCountriesTemp from '../templates/gallery.hbs';
import galleryFlags from './countries.json';

const gallery = document.querySelector('.js-gallery');

const markup = galleryCountriesTemp(galleryFlags);
gallery.insertAdjacentHTML('beforeend', markup);
