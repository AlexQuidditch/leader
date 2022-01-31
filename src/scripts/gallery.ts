import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css'

import { useScrollBy } from './scroll';

SwiperCore.use([
  Pagination,
  Autoplay,
]);

export function useGallery(selector: string) {
  const swiper = new SwiperCore(selector, {
    centeredSlides: true,
    autoplay: {
      delay: 45000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: `${selector.replaceAll('#', '')}__pagination-bullet`
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
