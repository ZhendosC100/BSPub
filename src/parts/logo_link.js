export default function logo_link (){

    let logoClick = document.querySelector('.logo_box__img'),
    body = document.querySelector('body');

    body.addEventListener('click', (e)=> {
        let target = e.target;
    });
    
    logoClick.addEventListener('click', ()=>{
        location.href="https://www.google.com/maps/place/K%C4%99pna+15,+00-001+Warszawa/@52.250727,21.0360703,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecc465d3f1c23:0xac304d6fece44071!8m2!3d52.250727!4d21.038259";
        
    });

}