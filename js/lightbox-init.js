import Lightbox from './photoswipe-lightbox.esm.js';

const lightbox = new Lightbox({
  gallery: '.image-container',
  children: '.screenshot',
  pswpModule: () => import('./photoswipe.esm.js')
});

lightbox.init();

