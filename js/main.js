$(document).ready(function () {
    const mMenuBtn = $(".mobil-button");
    const mMenu = $(".m-menu");
    const btn = $(".btn");
    const actors = $(".actors");
    const casts = $(".casts");

    mMenuBtn.on("click", function(){
        mMenu.toggleClass("active");
        $('body').toggleClass("no-scroll");
    })

    btn.on("click", () => {
        btn.toggleClass('active');
        actors.toggleClass('activ');
        casts.toggleClass('activ');
    })
});

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        1200:{
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
            navigation: {
                nextEl: ".next-button",
            }
        },
        376: {
            slidesPerView: 1,
            navigation: {
                nextEl: ".next-button",
            }
        }
    }
});