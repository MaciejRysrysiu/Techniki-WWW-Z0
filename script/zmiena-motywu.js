const switch_checkbox = document.querySelector("#switch");
const aktualnyMotyw = localStorage.getItem("theme");
if (aktualnyMotyw === "light") {
    switch_checkbox.checked = true;
}

motyw = "dark";
function zmienMotyw(){
    if (motyw === "dark") {
        motyw = "light";
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        motyw = "dark";
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}