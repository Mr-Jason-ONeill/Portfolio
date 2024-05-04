const checkbox = document.getElementById('colorCheckbox');
const svgs = document.querySelectorAll('svg');
const imageContainers = document.querySelectorAll('.image-container');
const downArrow = document.querySelector('.down-arrow');
const rootElement = document.documentElement;

checkbox.addEventListener('change', function() {
    if (this.checked) {
      rootElement.style.setProperty('--swiper-pagination-color', 'rgb(17, 16, 16');
      rootElement.style.setProperty('--swiper-pagination-bullet-inactive-color', '#373232');
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = 'rgb(17, 16, 16)';
        svgs.forEach(svg => {
            svg.style.fill = 'rgb(17, 16, 16)';
        });
        imageContainers.forEach(container => {
            container.style.backgroundColor = 'rgb(194, 194, 194)';
        });
        downArrow.style.borderColor = 'rgb(17, 16, 16)';

    } else {
      rootElement.style.setProperty('--swiper-pagination-color', '#fff');
        document.body.style.backgroundColor = 'rgb(17, 16, 16)';
        document.body.style.color = '#fff';
        svgs.forEach(svg => {
            svg.style.fill = 'rgb(230 230 230)';
        });
        imageContainers.forEach(container => {
            container.style.backgroundColor = '#1d1d1d';
        });
        downArrow.style.borderColor = 'white';
    }
});


let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 0) {
    // Scrolling down
    document.querySelector(".down-arrow").classList.remove("rotate-up");
  } else if (scrollTop === 0) {
    // At the top of the page
    document.querySelector(".down-arrow").classList.remove("rotate-up");
  } else {
    // Scrolling up
    document.querySelector(".down-arrow").classList.add("rotate-up");
  }
  lastScrollTop = scrollTop;
}, false);


/*// Vanilla JavaScript Carousel on loop option
document.addEventListener("DOMContentLoaded", function() {
  const titles = ["Shopify Theme Developer", "Web Developer", "Frontend Developer"];
  const titleElement = document.getElementsByClassName("carousel-title");
  let currentIndex = 0;

  function rotateTitle() {
    currentIndex = (currentIndex + 1) % titles.length;
    titleElement.textContent = titles[currentIndex];
  }

  setInterval(rotateTitle, 4000);
}); */

