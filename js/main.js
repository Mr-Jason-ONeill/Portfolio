const checkbox = document.getElementById('colorCheckbox');
const svgs = document.querySelectorAll('svg');
const imageContainers = document.querySelectorAll('.image-container');
const downArrow = document.querySelector('.down-arrow');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'rgb(230 230 230)';
        document.body.style.color = 'rgb(17, 16, 16)';
        svgs.forEach(svg => {
            svg.style.fill = 'rgb(17, 16, 16)';
        });
        imageContainers.forEach(container => {
            container.style.backgroundColor = 'rgb(194, 194, 194)';
        });
        downArrow.style.borderColor = 'rgb(17, 16, 16)';
    } else {
        document.body.style.backgroundColor = 'rgb(17, 16, 16)';
        document.body.style.color = 'rgb(230 230 230)';
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
