export default function slider(){

    console.log("slider OK");

    let slides = document.querySelectorAll('.slider-link'),
        prev = document.querySelector('.left_arrow'),
        next = document.querySelector('.right_arrow'),
        slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n){
        if(n > slides.length){
            slideIndex = 1;
        }

        if(n < 1){
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; //wyświetla się przy załadowaniu strony
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
        console.log("prev");
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
}