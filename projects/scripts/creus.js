const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);

// Footer pieces ^^^^
// Hamburger Menu vvvv


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});
