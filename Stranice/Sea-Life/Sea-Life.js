$(document).ready(function() {
    
    
    $('.img-gallery-fixed-xbtn-div').click(function() {
        
        console.log("ISUS");
        var fixedGallerys=document.getElementsByClassName("img-gallery-fixed-div");
        
        for (const e of fixedGallerys) {
            
            e.classList.add("display-off");
            
        }
        
    });
    
})


function onClickPlacesGridItem(id) {

    var targetGallery="fixed-galery" +id;
    document.getElementById(targetGallery).classList.toggle("display-off");    

}


var titleindex=1;
var titles=document.getElementsByClassName("gallery-fixed-text");

for(var e in titles)
showTitles(titleindex,e);


function plusTitles(n,e) {
    showTitles(titleindex += n,e);
    
    
}

function currentTitle(n,e) {
    showTitles(titleindex = n,e);
    
    
}      

function showTitles(n,e){
    
    let i;
    titles = document.getElementsByClassName(e);
    if (n > titles.length) {titleindex = 1} 
    if (n < 1) {titleindex = titles.length}
    for (i = 0; i < titles.length; i++) {
        titles[i].className = titles[i].className.replace(" on"," off");  
    }
    
    titles[titleindex-1].className=titles[titleindex-1].className.replace(" off"," on");
    
}







//gallery js
var textindex=1;
var texts=document.getElementsByClassName("text-container");

for(var e in texts)
showTexts(textindex,e);


function plusTexts(n,e) {
    showTexts(textindex += n,e);


}

function currentText(n,e) {
    showTexts(textindex = n,e);
    

}      

function showTexts(n,e){

    let i;
    texts = document.getElementsByClassName(e);
    if (n > texts.length) {textindex = 1} 
    if (n < 1) {textindex = texts.length}
    for (i = 0; i < texts.length; i++) {
        texts[i].className = texts[i].className.replace(" on"," off");  
    }
    
    
    texts[textindex-1].className=texts[textindex-1].className.replace(" off"," on");

}