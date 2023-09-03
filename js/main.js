$(document).ready(function(){
    const owl = $(".owl-carousel")

    owl.owlCarousel({
        items: 1,
        loop: true,
        responsive: {
            899: {
                items: 3
            }
        }    
    })

    $('.slider__prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    $('.slider__next').click(function() {
        owl.trigger('next.owl.carousel');
    })
});



const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

navIcon.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
})

navLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');
    })
})