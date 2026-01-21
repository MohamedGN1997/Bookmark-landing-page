

// Start Menu humbrger

let navbarMenu = document.querySelector("body .navbar-menu");
let navbar = document.querySelector("body header .navbar");
    // hide the navbarMenu
let humbrgerIconClose = document.querySelector("body .navbar-menu .container .logo .humbrger-icon .humbrger-close");
humbrgerIconClose.addEventListener("click",function(){
    navbarMenu.classList.remove("active");
    navbar.classList.remove("active");
    console.log("Hola Cruel close")

});
    // show the navbarMenu
let humbrgerIconOpen = document.querySelector("body header .navbar .humbrger-icon .humbrger-open");
humbrgerIconOpen.addEventListener("click",function(){
    navbarMenu.classList.add("active");
    navbar.classList.add("active");
    console.log("Hola Cruel open")
});

