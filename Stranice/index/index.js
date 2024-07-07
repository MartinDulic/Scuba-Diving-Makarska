$(document).ready(function() {

    //Menu button animation cancel after load
    setTimeout(menuBtnFixed,4500);

    function menuBtnFixed() {

        document.getElementById("menu-btn").className="menu-btn-after-4s";

    }

    // Sidebar 

    // Main sidebar
    var mainSidebarIsOpen = false;


    var mainPage = document.getElementById("page-content");
    var logoContainer=document.getElementById("header-logo-container");
    var sidebarHeader=document.getElementById("sidebar-header");
    var sidebar=document.getElementById("sidebar");

    $('.menu-btn').click(function() {

        /*
        mainPage.classList.toggle('pageIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebarHeader.classList.toggle('sidebarIsRight');
        sidebar.classList.toggle('sidebarIsRight');
        */


        if(mainSidebarIsOpen){
            logoContainer.classList.toggle('logoMarginLeft');
            mainPage.style.left= "0";
            sidebar.style.left="-70vw";
            sidebarHeader.style.left ="-70vw";
        } else {
            logoContainer.classList.toggle('logoMarginLeft');
            mainPage.style.left= "70vw";
            sidebar.style.left="0";
            sidebarHeader.style.left ="0";
        }
        mainSidebarIsOpen = !mainSidebarIsOpen;
    });

    //Secondary sidebars
    var sidebarDivingCourse=document.getElementById("sidebar-diving-course");

    $('.sidebar-link-diving-course-icon-div').click(function() {
/*
        sidebarDivingCourse.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');
        */

        logoContainer.classList.toggle('logoMarginLeft');
        sidebarDivingCourse.style.left="0";
        sidebarHeader.style.left ="0";
        

    });

    $('.sidebar-diving-course-x-icon-div').click(function() {

        /*
        sidebarDivingCourse.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');
        */
        logoContainer.classList.toggle('logoMarginLeft');
        sidebarDivingCourse.style.left="-70vw";
        sidebarHeader.style.left ="-70vw";

    });

    var sidebarScubaDiving=document.getElementById('sidebar-scuba-diving');

    $('#scuba-diving-sidebar-link').click(function() {
        /*
        sidebarScubaDiving.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');
        */
        logoContainer.classList.toggle('logoMarginLeft');
        sidebarScubaDiving.style.left="0";
        sidebarHeader.style.left ="0";

    });


    
    $('.sidebar-scuba-diving-x-icon-div').click(function() {
/*
        sidebarScubaDiving.classList.toggle('sidebarIsRight');
        logoContainer.classList.toggle('logoMarginLeft');
        sidebar.classList.toggle('sidebarIsRight');
        */
        logoContainer.classList.toggle('logoMarginLeft');
        sidebarScubaDiving.style.left="-70vw";
        sidebarHeader.style.left ="-70vw";

    });

    //initNavigation();


    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;
    const intervalTime = 6000; // 4 seconds

    function showNextItem() {
        items.removeClass('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items.eq(currentIndex).addClass('active');
    }

    // Initialize the first item
    items.eq(currentIndex).addClass('active');

    // Set interval to switch images
    setInterval(showNextItem, intervalTime);


});

// Card BOOK NOW
// Event listener that changes the href attribute
document.addEventListener('DOMContentLoaded', function() {
    var cardButtons = document.querySelectorAll('.book-btn');
    for (var i = 0; i < cardButtons.length; i++) {
        var cardButton = cardButtons[i];
        cardButton.href='https://wa.me/385993026898?text=Hello,%20I\'m%20interested%20in%20your%20scuba%20diving%20programs!'

    }

});

//Gallery single picture
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

// Gallery Double picture
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

// Paths

function getRelativePath(source, target) {
	var sep = (source.indexOf("/") !== -1) ? "/" : "\\",
		targetArr = target.split(sep),
		sourceArr = source.split(sep),
		filename = targetArr.pop(),
		targetPath = targetArr.join(sep),
		relativePath = "";
	
	while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
		sourceArr.pop();
		relativePath += ".." + sep;
	}
	
	var relPathArr = targetArr.slice(sourceArr.length);
	relPathArr.length && (relativePath += relPathArr.join(sep) + sep);
	
	return relativePath + filename;
}

function removeFirstDotDotSlash(path) {
    return path.replace(/^\.\.\//, '');
}

function getRelativePathToPage(source, target){
    return removeFirstDotDotSlash(getRelativePath(source, target));
}

function getCurrentFileName(){
    var currentUrl = window.location.href;
    var fileName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    return fileName;
}






function initNavigation(){

    var paths = [
        //Relative paths from root
        "mainFolder/index.html",
        // Diving Course Folder
        "mainFolder/Stranice/Diving-Course/Diving-Course-Main/Diving-Course-Main.html",
        "mainFolder/Stranice/Diving-Course/Advanced-Open-Water-Diver/Advanced-Open-Water-Diver.html",
        "mainFolder/Stranice/Diving-Course/Bubble-Maker/Bubble-Maker.html",
        "mainFolder/Stranice/Diving-Course/Divemaster/Divemaster.html",
        "mainFolder/Stranice/Diving-Course/Open-Water-Diver/Open-Water-Diver.html",
        "mainFolder/Stranice/Diving-Course/Rescue-Diver-Course/Rescue-Diver-Course.html",
        "mainFolder/Stranice/Diving-Course/Scuba-Diver/Scuba-Diver.html",
        // Scuba Diving Folder
        "mainFolder/Stranice/Scuba-Diving/Beach_Diving/Beach-Diving.html",
        "mainFolder/Stranice/Scuba-Diving/Every-Day_divingtrip/Every-day-diving-trip.html",
        "mainFolder/Stranice/Scuba-Diving/Diving-Trip-Divers-Certificate/Diving-Trip-Divers-Certificate.html",
        // Main folder
        "mainFolder/Stranice/Snorkeling/Snorkeling.html",
        "mainFolder/Stranice/Sea-Life/Sea-Life.html",
        "mainFolder/Stranice/Trips/Trips.html"
    ];

    var linkSidebarElements = [
        document.getElementById("link-sidebar-home"),
        //Diving Course
        document.getElementById("sidebar-link-diving-course"),//Diving course main
        document.getElementById("link-sidebar-advanced-open-water-diver"),
        document.getElementById("link-sidebar-bubble-maker"),
        document.getElementById("link-sidebar-rescue-divemaster"),
        document.getElementById("link-sidebar-open-water-diver"),
        document.getElementById("link-sidebar-rescue-diver-course"),
        document.getElementById("link-sidebar-scuba-diver"),
        //Scuba diving
        document.getElementById("link-sidebar-beach-diving"),
        document.getElementById("link-sidebar-every-day-diving-trip"),
        document.getElementById("link-sidebar-divers-certificate"),
        //Main navbar
        document.getElementById("link-sidebar-snorkeling"),
        document.getElementById("link-sidebar-sea-life"),
        document.getElementById("link-sidebar-trips"),
    ];

    var linkHeaderElements = [
        document.getElementById("link-header-home"),
        //Diving course
        document.getElementById("link-header-diving-course-main"),
        document.getElementById("link-header-advanced-open-water-diver"),
        document.getElementById("link-header-bubble-maker"),
        document.getElementById("link-header-rescue-divemaster"),
        document.getElementById("link-header-open-water-diver"),
        document.getElementById("link-header-rescue-diver-course"),
        document.getElementById("link-header-scuba-diver"),
        //Scuba diving
        document.getElementById("link-header-beach-diving"),
        document.getElementById("link-header-every-day-diving-trip"),
        document.getElementById("link-header-divers-certificate"),
        //Main navbar
        document.getElementById("link-header-snorkeling"),
        document.getElementById("link-header-sea-life"),
        document.getElementById("link-header-trips"),
    ];

    var currentFilePath;
    var currentFileName = getCurrentFileName();

    paths.forEach(function(path) {
        if(path.includes(currentFileName)){
            currentFilePath = path;
        }
    });

    let index = 0;
    paths.forEach(path => {
        try{
        var pathTopage = getRelativePathToPage(currentFilePath,path);
        linkHeaderElements[index].href = pathTopage;
        linkSidebarElements[index].href = pathTopage;
        console.log("Header: "+linkHeaderElements[index].href);
        console.log("Sidebar: "+linkSidebarElements[index].href);
        index++;
        } catch(e){
            console.log(e);
        }
    });

}










