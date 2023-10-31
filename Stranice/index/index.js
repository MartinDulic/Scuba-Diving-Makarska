$(document).ready(function() {

    //Menu button animation cancel after load
    setTimeout(menuBtnFixed,4500);

    function menuBtnFixed() {

        document.getElementById("menu-btn").className="menu-btn-after-4s";

    }

    var mainPage = document.getElementById("page-content");
    var logoContainer=document.getElementById("header-logo-container");
    var sidebarHeader=document.getElementById("sidebar-header");
    var sidebar=document.getElementById("sidebar");

    $('.menu-btn').click(function() {

        mainPage.classList.toggle('pageIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebarHeader.classList.toggle('sidebarIsRight');
        sidebar.classList.toggle('sidebarIsRight');

    });

    var sidebarDivingCourse=document.getElementById("sidebar-diving-course");

    $('.sidebar-link-diving-course-icon-div').click(function() {

        sidebarDivingCourse.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');

    });

    $('.sidebar-diving-course-x-icon-div').click(function() {

        sidebarDivingCourse.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');

    });

    var sidebarScubaDiving=document.getElementById('sidebar-scuba-diving');

    $('#scuba-diving-sidebar-link').click(function() {
        
        sidebarScubaDiving.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');

    });


    
    $('.sidebar-scuba-diving-x-icon-div').click(function() {

        sidebarScubaDiving.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');

    });

});
// Event listener that changes the href attribute
document.addEventListener('DOMContentLoaded', function() {
    var cardButtons = document.querySelectorAll('.book-btn');
    for (var i = 0; i < cardButtons.length; i++) {
        var cardButton = cardButtons[i];
        cardButton.href='https://wa.me/385993026898?text=Hello,%20I\'m%20interested%20in%20your%20scuba%20diving%20programs!'

    }

});

//gallery js
var slideindex=1;
var slideindexDuo=1;

var slides=document.getElementsByClassName("img-from-gallery");

for(var e in slides)
showSlides(slideindex,e);


function plusSlides(n,e) {
    showSlides(slideindex += n,e);
    
    
}

function currentSlide(n,e) {
    showSlides(slideindex = n,e);
    
    
}      

function showSlides(n,e){
    
    let i;
    slides = document.getElementsByClassName(e);
    if (n > slides.length) {slideindex = 1} 
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" on"," off");  
    }
    
    
    slides[slideindex-1].className=slides[slideindex-1].className.replace(" off"," on");
    
}




var slidesDuo=document.getElementsByClassName("img-from-gallery-duo");

function plusSlidesDuo(n,e) {

    showSlidesDuo(slideindexDuo+=n,e);


}

function showSlidesDuo(n,e) {

    slidesDuo=document.getElementsByClassName(e);

    if(n>slidesDuo.length) {slideindexDuo=1}
    if(n<0) {slideindexDuo=slidesDuo.length}

    let j;
    for(j=0;j<slidesDuo.length;j++) {
        slidesDuo[j].className=slidesDuo[j].className.replace(" on"," off");
        slidesDuo[j].className=slidesDuo[j].className.replace(" duoSlideIsLeft"," duoSlideIsRight");
    }

    console.log(slideindexDuo);
    
    if(slideindexDuo!=slidesDuo.length && slideindexDuo!=0){

        slidesDuo[slideindexDuo-1].className=slidesDuo[slideindexDuo-1].className.replace(" off"," on");
        slidesDuo[slideindexDuo].className=slidesDuo[slideindexDuo].className.replace(" off"," on");
        slidesDuo[slideindexDuo-1].className=slidesDuo[slideindexDuo-1].className.replace(" duoSlideIsRight"," duoSlideIsLeft");
        
    }

    else if(slideindexDuo==slidesDuo.length){

        slidesDuo[slideindexDuo-1].className=slidesDuo[slideindexDuo-1].className.replace(" off"," on");
        slidesDuo[0].className=slidesDuo[0].className.replace(" off"," on");
        slidesDuo[slideindexDuo-1].className=slidesDuo[slideindexDuo-1].className.replace(" duoSlideIsRight"," duoSlideIsLeft");

    }

    else if (slideindexDuo==0) {

        slidesDuo[0].className=slidesDuo[0].className.replace(" off"," on");
        slidesDuo[slidesDuo.length-1].className=slidesDuo[slidesDuo.length-1].className.replace(" off"," on");
        slidesDuo[0].className=slidesDuo[0].className.replace(" duoSlideIsRight"," duoSlideIsLeft");
        
    }

}






// Function to check if the user is on a mobile device
function isMobileDevice() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        return true ;
    } else {
        return false ;
    }
}

function StickyDivSetHref() {



}
