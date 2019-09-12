import language from './parts/language';
import slider from './parts/slider';
import slideZoom from './parts/slidezoom';
import downloadOff from './parts/download_off';
import scrollPage from './parts/scroll_page';
import timerEvent from './parts/timer';
import aboutAside from './parts/about';
import hideMenu from './parts/hidden_menu';
import logo_link from './parts/logo_link';

window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    language();
    scrollPage();
    slider();
    slideZoom();
    downloadOff();
    
    timerEvent();
    aboutAside();
    hideMenu();
    logo_link();

});