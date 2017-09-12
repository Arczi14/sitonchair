document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var showSubmenu = document.querySelector('.main-nav-submenu');
    var menu = document.querySelector('.show-sub-menu');

    menu.addEventListener('mousemove', function(){
        showSubmenu.style.opacity = '1';
        showSubmenu.style.visibility = 'visible';  
    })

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
                    if (counter < 0) {
                        counter = sliderCnt.length - 1;
                        sliderCnt[i].classList.add("active");
                        sliderCnt[0].classList.remove("active");
                    } else {
                        sliderCnt[i + 1].classList.remove("active");
                        sliderCnt[i].classList.add("active");
                    }
            });




    var myPicture = document.querySelectorAll('.picture-cnt');
    var pictureTitle = document.querySelectorAll('.picture-cnt-description');
    myPicture[2].classList.add("active");

    myPicture[0].addEventListener('mouseover', function() {
        pictureTitle[0].style.opacity = '0';
    })
    myPicture[0].addEventListener('mouseout', function() {
        pictureTitle[0].style.opacity = '1';
    })
    myPicture[1].addEventListener('mouseover', function() {
        pictureTitle[1].style.opacity = '0';
    })
    myPicture[1].addEventListener('mouseout', function() {
        pictureTitle[1].style.opacity = '1';
    })
    myPicture[2].addEventListener('mouseover', function() {
        pictureTitle[2].style.opacity = '0';
    })
    myPicture[2].addEventListener('mouseout', function() {
        pictureTitle[2].style.opacity = '1';
    })

});