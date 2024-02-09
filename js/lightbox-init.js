
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const options = {
  gallery: '.image-container',
  children: '.screenshot',

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
