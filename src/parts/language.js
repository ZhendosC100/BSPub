export default function language(){
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

        });
       
    }
}