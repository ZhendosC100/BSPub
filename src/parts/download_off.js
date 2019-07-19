export default function downloadOff() {

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