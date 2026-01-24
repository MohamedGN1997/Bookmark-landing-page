

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



// Start features-section "Slider"
let orderes = document.querySelectorAll("body main section.section_0 .container .features-section .orders .order");
let contentsSlider = document.querySelectorAll("body main section.section_0 .container .features-section .slider .contentsSlider");
for(i=0;i<orderes.length;i++){
    orderes[i].addEventListener("click",function(){
        this.classList.add("active");
        console.log(this)
        for(let x = 0;x<orderes.length;x++){
            if(orderes[x] !== this){
                orderes[x].classList.remove("active");
                contentsSlider[x].classList.remove("active");
            }else{
                contentsSlider[x].classList.add("active");
            }
        }
    })
}


// Start faq-item  "show the text of questions"
let faqItems = document.querySelectorAll("body main section.section_2 .container  .faq-list .faq-item");
let contentText = document.querySelectorAll("body main section.section_2 .container  .faq-list .faq-item .content-text");
faqItems.forEach(function(faqItem){
    faqItem.addEventListener("click",function(){
        faqItem.children[0].children[1].children[1].classList.add("active");
        faqItem.children[0].children[1].children[0].classList.remove("active");
        faqItem.children[1].classList.add("active");
        for(let i = 0;i<faqItems.length;i++){
            if(faqItems[i] !== faqItem){
                faqItems[i].children[0].children[1].children[1].classList.remove("active");
                faqItems[i].children[0].children[1].children[0].classList.add("active");
                faqItems[i].children[1].classList.remove("active");
            }
        }
    });
})
