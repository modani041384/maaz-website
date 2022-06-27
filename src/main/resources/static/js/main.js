$(() => {
    const thumbSwiper = new Swiper('.thumb-swiper', {
        slidesPerView: 5,        
        freeMode: false,
        watchSlidesProgress: true
    });

    const mainswiper = new Swiper('.main-swiper', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        speed: 400,
        spaceBetween: 100,
        thumbs: {
            swiper: thumbSwiper
        },
        navigation: {
            nextEl: ".main-swiper-next",
            prevEl: ".main-swiper-prev",
        }
    });
    updateSwiperStatus(mainswiper);
    mainswiper.on('slideChange', function (e) {
        updateSwiperStatus(e);
    });

    const serviceSwiper = new Swiper('.service-swiper', {
        autoplay: { delay: 5000 },
        loop: true, 
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    const recognitionSwiper = new Swiper('.recognitions-swiper', {
        autoplay: { delay: 5000 },
        loop: true, 
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 16
    })
});

function updateSwiperStatus(swiper) {
    var slidesCount = swiper.slides.length - 2;
    var realIndex = swiper.activeIndex % slidesCount;
    realIndex = realIndex || slidesCount;
    $('.swiper-status').text(`${realIndex}/5`);
}