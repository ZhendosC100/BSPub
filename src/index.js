import language from './parts/language';
import slider from './parts/slider';
import slideZoom from './parts/slidezoom';
import downloadOff from './parts/download_off';
import scrollPage from './parts/scroll_page';
import timerEvent from './parts/timer';
import aboutAside from './parts/about';
import hideMenu from './parts/hidden_menu';

window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    language();
    slider();
    slideZoom();
    downloadOff();
    scrollPage();
    timerEvent();
    aboutAside();
    hideMenu();

});