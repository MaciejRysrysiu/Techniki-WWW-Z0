let aktualnySlajd = 1;
document.addEventListener("DOMContentLoaded", function(){
    pokazSlajd(aktualnySlajd);
})
function przesunSlide(n){
    aktualnySlajd += n;
    pokazSlajd(aktualnySlajd);
}
function zmienSlide(n){
    aktualnySlajd = n;
    pokazSlajd(aktualnySlajd);
}
function pokazSlajd(n){
    let slajdy = document.getElementsByClassName("slide");
    let kropki = document.getElementsByClassName("dot");
    if(slajdy.length === 0){
        return;
    }
    if(n > slajdy.length){
        aktualnySlajd = 1;
    }
    if(n < 1){
        aktualnySlajd = slajdy.length;
    }
    for(let i = 0; i < slajdy.length; i++){
        slajdy[i].style.display = "none";
    }
    for(let i = 0; i < kropki.length; i++){
        kropki[i].className = kropki[i].className.replace(" active", "");
    }
    slajdy[aktualnySlajd - 1].style.display = "block";
    if(kropki.length > 0){
        kropki[aktualnySlajd - 1].className += " active";
    }
}
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        przesunSlide(-1);
    } else if(e.key === "ArrowRight"){
        przesunSlide(1);
    }
});