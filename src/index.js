import './index.html';
import './cart.html';
import './card.html';
import './index.scss';

  import Swiper, {Thumbs} from 'swiper';
  import 'swiper/css';

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