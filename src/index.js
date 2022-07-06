import './index.html';
import './cart.html';
import './card.html';
import './index.scss';

import Swiper, {Thumbs} from 'swiper';
import 'swiper/css';
import { pagination } from './modules/pagination';

const paginationWrapper = document.querySelector('.pagination');
const pageURL = new URL(location);
const page = +pageURL.searchParams.get('page') || 1;

try {
  pagination(paginationWrapper, 20, page, 5);
} catch (e) {
  console.warn(e);
  console.warn('Это не главная страница');
}

const thumbSwiper =  new Swiper('.card__slider-thumb', {
  spaceBetween: 44,
  slidesPerView: 3,
});

new Swiper('.card__image', {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: thumbSwiper,
  },
  modules: [Thumbs]
});

new Swiper('.recommended__slider', {
  spaceBetween: 30,
  slidesPerView: 5,
});