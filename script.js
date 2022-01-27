var open = document.getElementById('op');
var close = document.getElementById('cl');
var nav = document.getElementById("show");

open.addEventListener('click', ()=>{
    nav.style.left = "0px"
    open.style.visibility = "hidden"
    close.style.visibility = "visible"
})
close.addEventListener('click', ()=>{
    nav.style.left = "-700px"
    open.style.visibility = "visible"
    close.style.visibility = "hidden"
})