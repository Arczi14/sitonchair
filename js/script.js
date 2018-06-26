document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var submenu = document.querySelector('.main-nav-submenu');
    var menu = document.querySelector('.show-sub-menu');

    //pojawienie się submenu po najechaniu na "o firmie"
    menu.addEventListener('mouseenter', function(){
        submenu.style.opacity = '1';
        submenu.style.visibility = 'visible';  
    })

    //ukrycie submenu bo zjechaniu myszką
    submenu.addEventListener('mouseleave', function(){
        submenu.style.opacity = '0';
        submenu.style.visibility = 'hidden';  
    })


    // konfiguracja slidera
    var sliderCnt = document.querySelector(".slider-cnt").children;
    var next = document.querySelector(".right");
    var previous = document.querySelector(".left");
    var i = 0;

    sliderCnt[0].classList.add("active");

    next.addEventListener("click", function (){
                    i++;
                    if (i > sliderCnt.length - 1) {
                        i = 0;
                        sliderCnt[0].classList.add("active");
                        sliderCnt[sliderCnt.length -1].classList.remove("active");
                    } else {
                        sliderCnt[i].classList.add("active");
                        sliderCnt[i - 1].classList.remove("active");
                    }
            });

            previous.addEventListener("click", function (){
                    i--;
                    if (i < 0) {
                        i = sliderCnt.length - 1;
                        sliderCnt[i].classList.add("active");
                        sliderCnt[0].classList.remove("active");
                    } else {
                        sliderCnt[i + 1].classList.remove("active");
                        sliderCnt[i].classList.add("active");
                    }
            });

    //zmiana ze zdjecia na opis
    var myPicture = document.querySelectorAll('.picture-cnt');
    var pictureTitle = document.querySelectorAll('.picture-cnt-description');

    myPicture[0].addEventListener('mouseenter', function() {
        pictureTitle[0].style.opacity = '1';
        myPicture[0].classList.add("active");
    })
    myPicture[0].addEventListener('mouseleave', function() {
        pictureTitle[0].style.opacity = '1';
        myPicture[0].classList.remove("active");
    })
    myPicture[1].addEventListener('mouseenter', function() {
        pictureTitle[1].style.opacity = '1';
        myPicture[1].classList.add("active");
    })
    myPicture[1].addEventListener('mouseleave', function() {
        pictureTitle[1].style.opacity = '1';
        myPicture[1].classList.remove("active");
    })
    myPicture[2].addEventListener('mouseenter', function() {
        pictureTitle[2].style.opacity = '1';
        myPicture[2].classList.add("active");
    })
    myPicture[2].addEventListener('mouseleave', function() {
        pictureTitle[2].style.opacity = '1';
        myPicture[2].classList.remove("active");
    })

});