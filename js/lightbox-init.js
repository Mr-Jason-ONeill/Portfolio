
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';


const lightbox = new PhotoSwipeLightbox({

  gallery: '.project-image-wrapper',
  children: 'a',
  showHideAnimationType: 'fade',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});

lightbox.init();





