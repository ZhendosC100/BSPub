export default function scrollPage(){

    let gallery = document.querySelectorAll('.gallery_scroll'),
        promotion = document.querySelectorAll('.promo_scroll'),
        arrowUp = document.querySelectorAll('.up-box'),
        aboutUs = document.querySelectorAll('.about_us'),
        isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
        isIE = /*@cc_on!@*/false || !!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia,
        cWidth = document.documentElement.clientWidth,
        cHeight;

        

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
        
            if(!isIE && cWidth > 490){
                scrollBox(gallery, 490);
                scrollBox(promotion, 980);
                scrollBox(arrowUp, -25);
                scrollBox(aboutUs, 980);
            }else if(!isIE && cWidth <= 490 ){
                scrollBox(gallery, 400);
                scrollBox(promotion, 870);
                scrollBox(arrowUp, -25);
                scrollBox(aboutUs, 980);
            }

            
            // if 
            
        //--------------Function of showing or hidding arrow "Up"---------// 

            let upBox = document.querySelector('.up-box');

            
            window.addEventListener('scroll', () =>{
                cHeight = document.documentElement.clientHeight;

                arrowUp.forEach(function(item){

                    if(document.documentElement.scrollTop > 220){
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                if(cHeight > 700){
                    upBox.style.bottom = '71px';
                }else{
                    upBox.style.bottom = '21px';
                }
                
                
            });
        //------------- End of function show/hide "Up" --------------//
        // console.log(cWidth);
}
 

