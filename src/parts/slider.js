import consOk from './swipe_func';
import getSupportedEvents from './swipe_func';
import eventsUnify from './swipe_func';
import swipe from './swipe_func';

export default function slider(){

    
    consOk;
    // getSupportedEvents();
    // eventsUnify();
    // swipe();
    console.log("slider OK");

    let slides = document.querySelectorAll('.slider-link'),
        prev = document.querySelector('.left_arrow'),
        next = document.querySelector('.right_arrow'),
        cWidth = document.documentElement.clientWidth,
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

    console.log(cWidth);
    // slides.forEach((item) => {
    //     swipe(item, { maxTime: 1000, minTime: 100, maxDist: 150,  minDist: 60 });

    //     item.addEventListener("swipe", function() {
    //         console.log(e.detail);
    //       });
    // });
}