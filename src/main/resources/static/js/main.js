function configSwiper(params) {
    const thumbSwiper = new Swiper('.thumb-swiper', {
        slidesPerView: 5,        
        freeMode: false,
        watchSlidesProgress: true
    });

    const _ = new Swiper('.main-swiper', {
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 400,
        spaceBetween: 24,
        thumbs: {
            swiper: thumbSwiper
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    const recognitionSwiper = new Swiper('.recognitions-swiper', {
        autoplay: { delay: 5000 },
        loop: true, 
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 16
    })
}
function configHover() {
    $('[data-action="hover"]').hover(function () {
        var target = $(this).data('target');
        console.log(target);
        $(target).addClass('active-hover');
    }, function () {
        var target = $(this).data('target');
        console.log(target);
        $(target).removeClass('active-hover');
    });
}

$(() => {
    configSwiper();
    configHover();
});