// Swiper Slide
var swiper = new Swiper('.swiper-container1', {
    loop: true,
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: 2500,
    speed: 1000,
    autoplayDisableOnInteraction: true,
    slidersPerView: 1,
    effect: "fade",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
// Slider btns 1
document.querySelector('.swiper-container1').addEventListener('mouseout',function(){
    document.querySelector('.slider-btns').style.display = 'none';
})
document.querySelector('.swiper-container1').addEventListener('mouseover',function(){
    document.querySelector('.slider-btns').style.display = 'block';
})


var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next2',
        prevEl: '.swiper-prev2',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

// Back To Top

//Get the button:
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});