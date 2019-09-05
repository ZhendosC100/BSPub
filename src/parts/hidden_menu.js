export default function hideMenu(){

    let navLang,
        hiddenMenu = document.querySelector('.hide_menu'),
        navText = document.querySelectorAll('.nav_text'),
        logoBox = document.querySelector('.logo_box'),
        body = document.body,
        langIcon = document.querySelectorAll('.lang_icon'),
        cWidth,
        k = false,

        plLang = document.querySelector('.pl-lang'), //hideIndex: 0
        rusLang = document.querySelector('.rus-lang'), //hideIndex: 1
        engLang = document.querySelector('.eng-lang'); //hideIndex: 2

    langIcon.forEach((item) => {
        item.addEventListener('click', (e)=>{

            navLang = document.querySelector('.active_hidden_menu');
            plLang.style.display = 'none';
            rusLang.style.display = 'none';
            // engLang.style.display = 'none';
        });
    });
    

    const showHiddenMenu = function(){
        navLang = document.querySelector('.active_hidden_menu');
        navLang.style.display = 'flex';
        logoBox.style.zIndex = '-1';
        k = true;
    };
    const hideHiddenMenu = function(){
        navLang = document.querySelector('.active_hidden_menu');
        navLang.style.display = 'none';
        logoBox.style.zIndex = '2';
        k = false;
    };

    hiddenMenu.addEventListener('click', () => {
        
        if (k){

            hideHiddenMenu();

        } else {

            showHiddenMenu();
        }
    });


    navText.forEach((item) => {
        item.addEventListener('click', (e)=>{
            let target = e.target;
                cWidth = document.documentElement.clientWidth;

            if(cWidth < 977 && target.classList.contains('nav_text')){
                
                hideHiddenMenu();
            }
        });

    });    
        body.addEventListener('click', (e) => {
            let target = e.target,
                hideBoolean;
                cWidth = document.documentElement.clientWidth;
                navLang = document.querySelector('.active_hidden_menu');
                target = target.closest('.hide_menu');

                if(target){
                    hideBoolean = true;
                }else{
                    hideBoolean = false;
                }

                target = e.target;
            if(cWidth < 977 && target.classList.contains('nav_text') !== true && !hideBoolean || target.classList.contains('shine-icon')){
                    
                hideHiddenMenu();
            }
            
            
        });

        
        
    

    // var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        

        let browserGhanger = function(){
            let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
                addressSpan = document.querySelectorAll('.address_span');

            if(isSafari){
                
                addressSpan.forEach((item) => {
                    item.style.textDecoration = 'none';
                });
            }
        };

        browserGhanger();

        // убирает выделение DOM элемента
        let hideMenuImg = document.querySelector('.hide_menu__img'),
            linkSs = document.querySelectorAll('.link_ss');

        function disableSelection(target){
            if (typeof target.onselectstart!="undefined") // if IE
                target.onselectstart=function(){return false}
            else if (typeof target.style.MozUserSelect!="undefined") // if Firefox
                target.style.MozUserSelect="none";
            else // others
                target.onmousedown=function(){return false;}
        
            target.style.cursor = "default";
        }
        
        disableSelection(hiddenMenu);

        linkSs.forEach((item) => {
            disableSelection(item);
        });

}