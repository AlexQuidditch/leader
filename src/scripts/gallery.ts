import SwiperCore, { Pagination, Autoplay, Navigation, SwiperOptions } from 'swiper/core';
import 'swiper/swiper-bundle.css'

import { useScrollBy } from './scroll';

SwiperCore.use([
  Pagination,
  Autoplay,
  Navigation,
]);

export function useGallery(selector: string, options?: SwiperOptions) {
  const swiper = new SwiperCore(selector, options ?? {
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 45000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: `${selector.replaceAll('#', '')}__pagination-bullet`,
    },
    navigation: {
      prevEl: '.reviews-slider__control._prev',
      nextEl: '.reviews-slider__control._next',
    },
  });
  return swiper;
}

export function initSlidersBySelectorList(selectors: string[]): void {
  const scrollButtons: Element[] = []

  selectors.forEach(selector => scrollButtons.push(...Array.from(document.querySelectorAll(selector))))

  scrollButtons.forEach(button => {
    const target = button.getAttribute('data-target')
    const direction = button.getAttribute('data-direction')
    if (!target || !direction) { return }

    button.addEventListener('click', e => {
      const $target = document.querySelector(target)
      if (!$target) { return }
      useScrollBy($target, { left: direction === 'right' ? 100 : -100 })
    })
  })
}
