var button = document.querySelector(".toggle");
var nav = document.querySelector("nav");
// console.log(button);
// console.log(nav);

button.addEventListener("click",()=>{
    let x = window.getComputedStyle(nav).display
    if(x=="none"){
        nav.style.display="block"
    }else{
        nav.style.display="none"
    }
})
