
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '.project-image-wrapper',
  children: 'a',
  showHideAnimationType: 'fade',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();



/* import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const options = {
  gallery: '.project-image-wrapper',
  children: 'a',

  secondaryZoomLevel: 'fit',
  controls: true,
  counter: true,

  imageClickAction: 'close',
  tapAction: 'close',

  // tap delay is removed if set to false
  doubleTapAction: false,
  
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')

};

const lightbox = new PhotoSwipeLightbox(options);

lightbox.init();
*/




