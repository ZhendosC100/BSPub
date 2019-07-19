 let gallery = document.querySelector('.gallery'),
        promotion = document.querySelector('.promotion'),
        isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
        isIE = /*@cc_on!@*/false || !!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia;

        function scrollBox (name, k) {
            name.forEach(function(item){
        
                item.addEventListener('click', function(e){
                    e.preventDefault();
                    let id = item.getAttribute('href'),
                        blockTop = document.querySelector(id).offsetTop - k;
                
                    window.scrollTo({
                        top: blockTop,
                        behavior: 'smooth'
                    });
                });
        
            });
        }
        
            if(!isIE){
                scrollBox(gallery, 30);
                scrollBox(promotion, 120);
            }