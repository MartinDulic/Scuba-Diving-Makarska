var link1= document.getElementById("sticky-div-link1");
var link2= document.getElementById("sticky-div-link2");
var link3= document.getElementById("sticky-div-link3");

$(document).ready(function() {

    $('#sticky-div-link1').click(function() {

        console.log(link1);
        window.scrollTo({
            top: 800,
            behavior: "smooth"
        });

    });

    $('#sticky-div-link2').click(function() {

        console.log(link1);
        window.scrollTo({
            top: 980,
            behavior: "smooth"
        });

    });

    $('#sticky-div-link3').click(function() {

        console.log(link1);
        window.scrollTo({
            top: 1470,
            behavior: "smooth"
        });

    });

});


window.addEventListener('scroll', function() {

    var scrolledFromTop= window.pageYOffset; 

    if(scrolledFromTop>=800 & scrolledFromTop<980) {

        link1.classList.add('stickyDivLinkOnPagePart');
        link2.classList.remove('stickyDivLinkOnPagePart');
    }

    else if(scrolledFromTop>=980 & scrolledFromTop<1470) {

        link1.classList.remove('stickyDivLinkOnPagePart');
        link2.classList.add('stickyDivLinkOnPagePart');
        link3.classList.remove('stickyDivLinkOnPagePart');
    }

    else if(scrolledFromTop>=1460) {

        link2.classList.remove('stickyDivLinkOnPagePart');
        link3.classList.add('stickyDivLinkOnPagePart');
    }
})