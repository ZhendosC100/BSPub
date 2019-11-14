export default function logo_link (){

    let logoClick = document.querySelector('.logo_box__img');
    
    logoClick.addEventListener('click', ()=>{
        location.href="https://www.google.com/maps/place/Beer+Station/@52.250727,21.0360703,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf65f5d6c9d579fb6!8m2!3d52.250727!4d21.038259?hl=pl";
        
    });

}