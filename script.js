let icon = document.getElementById("icon");
let ul = document.querySelector("ul");
let show = true;
const showNav =()=> {
    ul.classList.toggle("showing");
    if (show) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
        show=false;
    }else{
        icon.classList.remove("fa-times")

        icon.classList.add("fa-bars")
        show=true;
    }
    }
    const showNa =()=> {
        if (window.innerWidth >= 600) {
            ul.classList.remove("showing");
        } 
    }
window.addEventListener("resize",showNa)
icon.addEventListener("click",showNav)