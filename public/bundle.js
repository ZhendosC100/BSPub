/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/language */ "./src/parts/language.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/slider */ "./src/parts/slider.js");
/* harmony import */ var _parts_slidezoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slidezoom */ "./src/parts/slidezoom.js");
/* harmony import */ var _parts_download_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/download_off */ "./src/parts/download_off.js");
/* harmony import */ var _parts_scroll_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/scroll_page */ "./src/parts/scroll_page.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/timer */ "./src/parts/timer.js");
/* harmony import */ var _parts_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/about */ "./src/parts/about.js");
/* harmony import */ var _parts_hidden_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/hidden_menu */ "./src/parts/hidden_menu.js");
/* harmony import */ var _parts_logo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/logo_link */ "./src/parts/logo_link.js");










window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    Object(_parts_language__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_parts_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_parts_slidezoom__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_parts_download_off__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_parts_scroll_page__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_parts_timer__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_parts_about__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_parts_hidden_menu__WEBPACK_IMPORTED_MODULE_7__["default"])();
    Object(_parts_logo_link__WEBPACK_IMPORTED_MODULE_8__["default"])();

});

/***/ }),

/***/ "./src/parts/about.js":
/*!****************************!*\
  !*** ./src/parts/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return aboutAside; });
function aboutAside(){

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

/***/ }),

/***/ "./src/parts/download_off.js":
/*!***********************************!*\
  !*** ./src/parts/download_off.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return downloadOff; });
function downloadOff() {

    (function () {
        "use strict";
    
        let el = document.createElement('div');
        el.style.cssText = 'pointer-events:auto';
    
        if (el.style.pointerEvents !== 'auto') {
            el = null;
    
            let _lock = function (evt) {
                evt = evt || window.event;
                let el = evt.target || evt.srcElement;
                if (el && /\slocked\s/.test(' ' + el.className + ' ')) {
                    if (evt.stopPropagation) {
                        evt.preventDefault();
                        evt.stopPropagation();
                    } else {
                        evt.returnValue = true;
                        evt.cancelBubble = true;
                    }
                }
            };
    
            if (document.addEventListener) {
                document.addEventListener('mousedown', _lock, false);
                document.addEventListener('contextmenu', _lock, false);
            } else {
                document.attachEvent('onmousedown', _lock);
                document.attachEvent('oncontextmenu', _lock);
            }
        }
    })();

    //Save logo

    // off context menu on the site

    window.oncontextmenu = (e) => {
        e.preventDefault();
      };
}

/***/ }),

/***/ "./src/parts/hidden_menu.js":
/*!**********************************!*\
  !*** ./src/parts/hidden_menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hideMenu; });
function hideMenu(){

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
        item.addEventListener('click', ()=>{
            cWidth = document.documentElement.clientWidth;
            if(cWidth < 977) {
                navLang = document.querySelector('.active_hidden_menu');
                plLang.style.display = 'none';
                rusLang.style.display = 'none';
                // engLang.style.display = 'none';
            }
                
            
            
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
            if(cWidth < 977 && target.classList.contains('nav_text') !== true && !hideBoolean){
                    
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
                target.onmousedown=function(){return false;};
        
            target.style.cursor = "default";
        }
        
        disableSelection(hiddenMenu);

        linkSs.forEach((item) => {
            disableSelection(item);
        });

}

/***/ }),

/***/ "./src/parts/language.js":
/*!*******************************!*\
  !*** ./src/parts/language.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return language; });
function language(){
    console.log("Lang OK");

    let selectLang = document.querySelectorAll('.lang_icon'),
        lang = document.querySelectorAll('.lng_opt-info'),
        iconLang = document.querySelectorAll('.icon_text'),
        navLanguage = document.querySelectorAll('.nav-lang'),
        address = document.querySelectorAll('.address'),
        phoneLang = document.querySelectorAll('.phone'),
        openLang = document.querySelectorAll('.lng_opt-open'),
        timeLang = document.querySelectorAll('.time'),
        titleGallery = document.querySelectorAll('.lng_opt-section-name'),
        promoTitle = document.querySelectorAll('.lng_opt-promotion'),
        promoTextLang = document.querySelectorAll('.promo_info'),
        aboutList = document.querySelectorAll('.about_list'),
        more = document.querySelectorAll('.more'),
        eventName = document.querySelectorAll('.event-name'),
        eventInfo = document.querySelectorAll('.event-info'),
        aboutFooter = document.querySelectorAll('.lng_opt-about'),
        footerInfo = document.querySelectorAll('.footer-about-info');

    let langNonActive = (b, name_box, z) =>{
        for(let i = b; i < name_box.length; i++){
            name_box[i].classList.remove(z);
        }
    };
    
    let langActive = (a, name_box, z) => {
        name_box[a].classList.add(z);
    };

    for(let i=0; i < selectLang.length; i++){

        let k=i;
        selectLang[i].addEventListener('click', ()=>{
            //---------#### Header ####--------------//
            // Selector of languages
            langNonActive(0, iconLang, 'active_select'); 
            langActive(k, iconLang, 'active_select');

            langNonActive(0, lang, 'active'); 
            langActive(k, lang, 'active');

            // Navigation menu
            // langNonActive(0, navLanguage, 'active'); 
            // langActive(k, navLanguage, 'active');
            langNonActive(0, navLanguage, 'active_hidden_menu'); 
            langActive(k, navLanguage, 'active_hidden_menu');

            // Address
            langNonActive(0, address, 'active'); 
            langActive(k, address, 'active');

            // Phone
            langNonActive(0, phoneLang, 'active'); 
            langActive(k, phoneLang, 'active');

            // Open/close time
            langNonActive(0, openLang, 'active'); 
            langActive(k, openLang, 'active');

            langNonActive(0, timeLang, 'active'); 
            langActive(k, timeLang, 'active');
            //------------##### End of Header ##### --------//

            //-----------##### Gallery ##### ------------//
            // Title of gallery
            langNonActive(0, titleGallery, 'active'); 
            langActive(k, titleGallery, 'active');
            //----------##### End of Gallery ####--------//

            //----------##### Promotions #####----------//
            //Title of Promotions
            langNonActive(0, promoTitle, 'active'); 
            langActive(k, promoTitle, 'active');

            //Text of promotions
            langNonActive(0, promoTextLang, 'active'); 
            langActive(k, promoTextLang, 'active');

            //---------##### About #####---------------//
            //Text about us
            langNonActive(0, aboutList, 'active'); 
            langActive(k, aboutList, 'active');

            //Telephone about box
            langNonActive(0, more, 'active'); 
            langActive(k, more, 'active');

            //-------##### Footer #####--------------//
            //Title of Footer about
            langNonActive(0, aboutFooter, 'active'); 
            langActive(k, aboutFooter, 'active');

            //Footer about  info text
            langNonActive(0, footerInfo, 'active'); 
            langActive(k, footerInfo, 'active');
            
            //------##### Events #####-------------//
            langNonActive(0, eventInfo, 'active'); 
            langActive(k, eventInfo, 'active');

            langNonActive(0, eventName, 'active'); 
            langActive(k, eventName, 'active');
            

        });
       
    }
}

/***/ }),

/***/ "./src/parts/logo_link.js":
/*!********************************!*\
  !*** ./src/parts/logo_link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logo_link; });
function logo_link (){

    let logoClick = document.querySelector('.logo_box__img');
    
    logoClick.addEventListener('click', ()=>{
        location.href="https://www.google.com/maps/place/K%C4%99pna+15,+00-001+Warszawa/@52.250727,21.0360703,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecc465d3f1c23:0xac304d6fece44071!8m2!3d52.250727!4d21.038259";
        
    });

}

/***/ }),

/***/ "./src/parts/scroll_page.js":
/*!**********************************!*\
  !*** ./src/parts/scroll_page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollPage; });
function scrollPage(){

    let gallery = document.querySelectorAll('.gallery_scroll'),
        promotion = document.querySelectorAll('.promo_scroll'),
        arrowUp = document.querySelectorAll('.up-box'),
        aboutUs = document.querySelectorAll('.about_us'),
        isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification),
        isIE = /*@cc_on!@*/ false || !!document.documentMode,
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
                console.log(cHeight);
                
            });
        //------------- End of function show/hide "Up" --------------//
        
}

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
function slider(){

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

/***/ }),

/***/ "./src/parts/slidezoom.js":
/*!********************************!*\
  !*** ./src/parts/slidezoom.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideZoom; });
function slideZoom(){
    console.log('SlideZoom OK');

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

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timerEvent; });
function timerEvent() {
    let events = document.querySelectorAll('.event'),
        close = document.querySelectorAll('.close-events'),
        asideMask = document.querySelector('.aside-mask'),
        eventsBox = document.querySelector('.events'),
        step = 1,
        timerIndex = 0,
        days_d = document.getElementById('days'),
        hours_d = document.getElementById('hours'),
        minutes_d = document.getElementById('minutes'),
        seconds_d = document.getElementById('seconds'),
        dateX = '2019-09-25T09:00:00';



    events.forEach((item) =>
        item.addEventListener('click', function () {
            eventsBox.style.display = 'flex';
            asideMask.style.display = 'flex';

        setTimeout(function(){

                let deadline = dateX,
                getTimeRemaining = (endtime) => {
                    let t = Date.parse(endtime) - Date.parse(new Date()),
                        seconds = Math.floor((t / 1000) % 60),
                        minutes = Math.floor((t / 1000 / 60) % 60),
                        hours = Math.floor((t / 1000 / 60 / 60) % 24),
                        days = Math.floor((t / (1000 * 60 * 60 * 24)));

                    return {
                        'total': t,
                        'days': days,
                        'hours': hours,
                        'minutes': minutes,
                        'seconds': seconds
                    };
                };

            function setClock(endtime) {
                let days = document.getElementById('days'),
                    hours = document.getElementById('hours'),
                    minutes = document.getElementById('minutes'),
                    seconds = document.getElementById('seconds'),
                    timeInterval = setInterval(updateClock, 1000);

                function updateClock() {
                    let t = getTimeRemaining(endtime);
                    days.textContent = t.days;
                    hours.textContent = t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;

                    if (hours.textContent.length < 2) {
                        hours.textContent = '0' + t.hours;
                    }
                    if (minutes.textContent.length < 2) {
                        minutes.textContent = '0' + t.minutes;
                    }
                    if (seconds.textContent.length < 2) {
                        seconds.textContent = '0' + t.seconds;
                    }
                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                        days.textContent = '00';
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        seconds.textContent = '00';
                    }

                }
            }
            setClock(deadline);
            

            }, 4000);

            
            let t = Date.parse(dateX) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                days = Math.floor((t / (1000 * 60 * 60 * 24)));
    
        function timeoutTimerStep (start, stop, step, times, k){
            setTimeout(function(){

                function stepNumber() {
                    setInterval(function () {
                        if (start < stop) {
                            start += step;
                            
                            if(times == seconds_d && start >= 4){
                                times.textContent = (`0${start-4}`).slice(-2);
                            }else{
                                times.textContent = (`0${start}`).slice(-2);
                            }
                            
                        }
                    }, 20);
                }
                
                times.textContent = (`0${start}`).slice(-2);

                stepNumber();
            }, k);

            timerIndex = 1;
            return timerIndex;

        }
    
        if(timerIndex == 0) {
            timeoutTimerStep(0, days, step, days_d, 2000);
            timeoutTimerStep(0, hours, step, hours_d, 2700);
            timeoutTimerStep(0, minutes, step, minutes_d, 3400);
            timeoutTimerStep(0, seconds, step, seconds_d, 4100);
        }
        
    
        })
    );

    close.forEach((item) =>

    item.addEventListener('click', function () {
        eventsBox.classList.add('close-event');
        asideMask.classList.add('close-event');

        setTimeout(function () {
            eventsBox.style.display = 'none';
            asideMask.style.display = 'none';
            eventsBox.classList.remove('close-event');
            asideMask.classList.remove('close-event');
        }, 1200);

        // days_d.textContent = '--';
        // hours_d.textContent = '--';
        // minutes_d.textContent = '--';
        // seconds_d.textContent = '--';

    })

    );
    

}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map