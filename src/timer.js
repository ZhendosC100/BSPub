export default function timerEvent() {
    let events = document.querySelectorAll('.event'),
        close = document.querySelector('.close-events'),
        asideMask = document.querySelector('.aside-mask'),
        eventsBox = document.querySelector('.events'),
        step = 1;



    events.forEach((item) =>
        item.addEventListener('click', function () {
            eventsBox.style.display = 'flex';
            asideMask.style.display = 'flex';


            let deadline = '2019-06-01T09:00:00',
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


            let t = Date.parse('2019-06-01T09:00:00') - Date.parse(new Date()),
                days_d = document.getElementById('days'),
                hours_d = document.getElementById('hours'),
                minutes_d = document.getElementById('minutes'),
                seconds_d = document.getElementById('seconds'),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                days = Math.floor((t / (1000 * 60 * 60 * 24)));
    
            console.log(days);
    
        function stepNumber(start, stop, step, times) {
            setInterval(function () {
                if (start < stop) {
                    start += step;
                    // for (let i = 0; i < text_disc.length; i++){
                    times.textContent = `${start}`;
                    // } 
                }
            }, 20);
        }
    
        stepNumber(0, days, step, days_d);
        stepNumber(0, hours, step, hours_d);
        stepNumber(0, minutes, step, minutes_d);
        stepNumber(0, seconds, step, seconds_d);


        })
    );

    close.addEventListener('click', function () {
        eventsBox.classList.add('close-event');
        asideMask.classList.add('close-event');

        setTimeout(function () {
            eventsBox.style.display = 'none';
            asideMask.style.display = 'none';
            eventsBox.classList.remove('close-event');
            asideMask.classList.remove('close-event');
        }, 1200);

    });

   

}