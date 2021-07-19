var navToggle = document.querySelector('.nav-toggle'),
    nav = document.querySelector('.nav');

navToggle.addEventListener("click", function(e){

    e.preventDefault();
    nav.classList.toggle('is-active');
    navToggle.classList.toggle('is-active');

});