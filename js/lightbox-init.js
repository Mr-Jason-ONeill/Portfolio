
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const backEasing = {
  in: 'cubic-bezier(0.6, -0.28, 0.7, 1)',
  out: 'cubic-bezier(0.3, 0, 0.32, 1.275)',
  inOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

const lightbox = new PhotoSwipeLightbox({

  gallery: 'project-image-wrapper',
  children: 'a',

  showHideAnimationType: 'zoom',
  showAnimationDuration: 1000,
  hideAnimationDuration: 1000,

  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),

  loop: true,
  arrowKeys: true
});

lightbox.on('firstUpdate', () => {
  lightbox.pswp.options.easing = backEasing.out;
});
lightbox.on('initialZoomInEnd', () => {
  lightbox.pswp.options.easing = backEasing.inOut;
});
lightbox.on('close', () => {
  lightbox.pswp.options.easing = backEasing.in;
});

lightbox.init();





