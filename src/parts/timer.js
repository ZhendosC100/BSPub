export default function timerEvent() {
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

                    if (days.textContent.length < 2) {
                        days.textContent = '0' + t.days;
                    }
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