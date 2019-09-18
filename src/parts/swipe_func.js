

    // // swipe slide
    let getSupportedEvents = function() {
        let events, support = {
          pointer: !!("PointerEvent" in window || (window.MSPointerEvent && window.navigator.msPointerEnabled)),
          touch: !!(typeof window.orientation !== "undefined" || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in window || navigator.msMaxTouchPoints || 'maxTouchPoints' in window.navigator > 1 || 'msMaxTouchPoints' in window.navigator > 1)
        };
        switch (true) {
          case support.pointer:
            events = {
              type:   "pointer",
              start:  "PointerDown",
              move:   "PointerMove",
              end:    "PointerUp",
              cancel: "PointerCancel",
              leave:  "PointerLeave"
            };
            // добавление префиксов для IE10
            let ie10 = (window.navigator.msPointerEnabled && Function('/*@cc_on return document.documentMode===10@*/')());
            for (let value in events) {
              if (value === "type") continue;
              events[value] = (ie10) ? "MS" + events[value] : events[value].toLowerCase();
            }
            break;
          case support.touch:
            events = {
              type:   "touch",
              start:  "touchstart",
              move:   "touchmove",
              end:    "touchend",
              cancel: "touchcancel"
            };
            break;
          default:
            events = {
              type:  "mouse",
              start: "mousedown",
              move:  "mousemove",
              end:   "mouseup",
              leave: "mouseleave"
            };
            break;
        }
        return events;
      };
      
    //   /**
    //   * Объединение событий mouse/pointer и touch.
    //   * @param e {object} - принимает в качестве аргумента событие.
    //   * @returns {TouchList|e} возвращает либо TouchList, либо оставляет событие без изменения.
    //   */
      let eventsUnify = function(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
      };

      // settings of swipe
      let swipe = function(el, settingsSwipe) {
        // default settings
        let settings = Object.assign({}, {
          minDist: 60,  // минимальная дистанция, которую должен пройти указатель, чтобы жест считался как свайп (px)
          maxDist: 120, // максимальная дистанция, не превышая которую может пройти указатель, чтобы жест считался как свайп (px)
          maxTime: 700, // максимальное время, за которое должен быть совершен свайп (ms)
          minTime: 50   // минимальное время, за которое должен быть совершен свайп (ms)
        }, settingsSwipe);
      };
      let consOk = 'swipe export ok';
      
      let cWidth = document.documentElement.clientWidth;


export default {cWidth, consOk}
// export default function getSupportedEvents();
// export default function eventsUnify();
// export default function swipe();
