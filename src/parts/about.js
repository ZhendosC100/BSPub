export default function aboutAside(){

    let aboutUs = document.querySelectorAll('.about_us'),
        close = document.querySelectorAll('.close-events'),
        about = document.querySelector('.about'),
        asideMask = document.querySelector('.aside-mask');

    aboutUs.forEach((item) => 
        item.addEventListener('click', function(e){
            about.style.display = 'flex';
            asideMask.style.display = 'flex';
        })
    );

    close.forEach((item) => 
        item.addEventListener('click', function(){
            //asideMask hide in "timer.js"
            about.classList.add('close-event');
    
            setTimeout(function () {
                about.style.display = 'none';
                about.classList.remove('close-event');
                asideMask.classList.remove('close-event');
            }, 1200);
        })
    );

}