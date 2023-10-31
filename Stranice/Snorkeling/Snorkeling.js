window.addEventListener('scroll', function() {

    var scrolledFromTop= window.pageYOffset; 

    var link1= document.getElementById("sticky-div-link1");
    var link2= document.getElementById("sticky-div-link2");
    var link3= document.getElementById("sticky-div-link3");


    if(scrolledFromTop>=736 & scrolledFromTop<900) {

        link1.classList.add('stickyDivLinkOnPagePart');
        link2.classList.remove('stickyDivLinkOnPagePart');
    }

    else if(scrolledFromTop>=900 & scrolledFromTop<1334) {

        link1.classList.remove('stickyDivLinkOnPagePart');
        link2.classList.add('stickyDivLinkOnPagePart');
        link3.classList.remove('stickyDivLinkOnPagePart');
    }

    else if(scrolledFromTop>=1334) {

        link2.classList.remove('stickyDivLinkOnPagePart');
        link3.classList.add('stickyDivLinkOnPagePart');
    }
})