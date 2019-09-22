export default function slideZoom(){
    // console.log('SlideZoom OK');

    let sliderBox = document.querySelector('.slider'),
        zoomImage = document.querySelectorAll('.slider-link'),
        sliderImg = document.querySelectorAll('.slider-img'),
        dark = document.createElement('div'),
        img = document.createElement('img'),
        step = 3,
        k;
        

        img.style.cssText = 'display:flex;\
                            align-items: center;\
                            justify-content: center;\
                            margin: auto;\
                            z-index: 10; \
                            display: none;\
                            border-radius: 18px';

        dark.style.cssText = 'position: fixed;\
                                top: 0; \
                                left: 0; \
                                align-items: center;\
                                justify-content: center;\
                                width: 100%; \
                                height: 100%; \
                                z-index: 9; \
                                display: none;\
                                background-color: rgba(0, 0, 0, 0.5);';
        document.body.appendChild(dark);
        dark.appendChild(img);
        dark.classList.add('dark');

        // console.log(document.documentElement.clientWidth);
        // console.log(k);

        function stepNumber(start, stop, step){
            setInterval(function(){
                if(start < stop){
                    start += step;
                
                        img.style.height = `${start}px`;
                }
            }, 2);
        }

        // function slideZoom(z) {
        //     for (let i = 0; i < zoomImage.length; i++) {
        //         if (target == sliderImg[i]) {
        //             img.src = zoomImage[i].getAttribute('href');
        //             dark.style.display = 'flex';
        //             img.style.display = 'flex';
                    
        //             setTimeout(function(){
        //                 stepNumber(0, k, step);
        //             }, 250);

        //             img.classList.add(z);
        //             img.classList.add('locked');
        //             break;
        //         }
        //     }
        // }


        sliderBox.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
           
            if (target && target.classList.contains('slider-img')) {

                function slideZoom(z) {
                    for (let i = 0; i < zoomImage.length; i++) {
                        if (target == sliderImg[i]) {
                            img.src = zoomImage[i].getAttribute('href');
                            dark.style.display = 'flex';
                            img.style.display = 'flex';
                            
                            setTimeout(function(){
                                stepNumber(0, k, step);
                            }, 250);

                            img.classList.add(z);
                            img.classList.add('locked');
                            break;
                        }
                    }
                }

                if(document.documentElement.clientWidth < 550){
                    k = document.documentElement.clientWidth * 0.72791318;
                    slideZoom('zoom_mobile');
                } else {
                    k = document.documentElement.clientWidth * 0.42791318;
                    slideZoom('zoom');
                }
                
            }
        });

        dark.addEventListener('click', (event) => {
            let target = event.target;
            if (target && target.classList.contains('dark') || target.classList.contains('zoom') || target.classList.contains('zoom_mobile') ) {
                dark.style.display = 'none';
                img.style.display = 'none';
                if(img.classList.contains('zoom')){
                    img.classList.remove('zoom');
                }else if(img.classList.contains('zoom_mobile')){
                    img.classList.remove('zoom_mobile');
                }
                img.classList.remove('locked');
                img.style.height = '0px';
            }
        });
    
      
       
} 