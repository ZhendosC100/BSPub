export default function hideMenu(){

    let navLang = document.querySelector('.nav-lang'),
        hiddenMenu = document.querySelector('.hide_menu'),
        cWidth = document.documentElement.clientWidth,
        k = false;
    hiddenMenu.addEventListener('click', () => {

        if (k){
            navLang.style.display = 'none';
            k = false;
        } else {
            navLang.style.display = 'flex';
            k = true;
        }
    });

}