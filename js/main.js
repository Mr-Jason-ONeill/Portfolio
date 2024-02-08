const checkbox = document.getElementById('colorCheckbox');
const svgs = document.querySelectorAll('svg');

/* rgb(250, 247, 232) or rgb(250, 248, 239) = White
   rgb(17, 16, 16) = Black */

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'rgb(250, 248, 239)';
        document.body.style.color = 'rgb(17, 16, 16)';
        svgs.forEach(svg => {
            svg.style.fill = 'rgb(17, 16, 16)';
        });
    } else {
        document.body.style.backgroundColor = 'rgb(17, 16, 16)';
        document.body.style.color = 'rgb(250, 247, 232)';
        svgs.forEach(svg => {
            svg.style.fill = 'rgb(250, 247, 232)';
        });
    }
});