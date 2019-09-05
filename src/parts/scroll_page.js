export default function scrollPage(){

    let gallery = document.querySelectorAll('.gallery_scroll'),
        promotion = document.querySelectorAll('.promo_scroll'),
        arrowUp = document.querySelectorAll('.up-box'),
        aboutUs = document.querySelectorAll('.about_us'),
        isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
        isIE = /*@cc_on!@*/false || !!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia,
        cWidth = document.documentElement.clientWidth;

        

        function scrollBox (name, k) {
            name.forEach(function(item){
        
                item.addEventListener('click', function(e){
                    
                    e.preventDefault();
                    let id = item.getAttribute('href'),
                        blockTop = document.querySelector(id).offsetTop + k;
                
                    window.scrollTo({
                        top: blockTop,
                        behavior: 'smooth'
                    });
                });
        
            });
        }
        
            if(!isIE){
                scrollBox(gallery, 490);
                scrollBox(promotion, 980);
                scrollBox(arrowUp, -25);
                scrollBox(aboutUs, 980);
            }

            
            // if 
            
        //--------------Function of showing or hidding arrow "Up"---------// 

            window.addEventListener('scroll', () =>{

                arrowUp.forEach(function(item){

                    if(document.documentElement.scrollTop > 220){
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }

                });
                
            });
        //------------- End of function show/hide "Up" --------------//

}