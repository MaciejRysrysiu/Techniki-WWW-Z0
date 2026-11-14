const naglowek = document.querySelector('header');
let ostania_pozcyja_scrolla = 0;
window.addEventListener("scroll", function(){
    let pozycja_scrolla = window.pageYOffset || document.documentElement.scrollTop;
    if(window.innerWidth >= 1100){
        return;
    }
    if(pozycja_scrolla > ostania_pozcyja_scrolla){
        naglowek.style.top = "-100%";
    } else {
        naglowek.style.top = "0";
    }
    ostania_pozcyja_scrolla = pozycja_scrolla;
});