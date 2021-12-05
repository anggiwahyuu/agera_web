const biodataToggle = document.querySelector('.biodata-toggle input');
const biodata = document.querySelector('aside');

biodataToggle.addEventListener('click', function() {
    biodata.classList.toggle('slide');
});