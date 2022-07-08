import { API_URI } from "./var";

const createCardImageSlider = (largeImages) => {
  const cardImageSlider = document.createElement('ul');
  cardImageSlider.className = 'swiper-wrapper';

  const cardImageSlides = largeImages.map(url => {
    const li = document.createElement('li');
    li.className = 'swiper-slide';
    const img = new Image();
    img.src = `${API_URI}${url}`;
    li.append(img);
    return li;
  })

  cardImageSlider.append(...cardImageSlides);
  return cardImageSlider;
}

export const renderItem = item => {
  const cardImage = document.querySelector('.card__image');
  cardImage.append(createCardImageSlider(item.images.large))
}