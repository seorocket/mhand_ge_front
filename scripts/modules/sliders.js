const slider_classes = [
    {
        name: 'test'
    },
    {
        name: 'test2'
    }
]

slider_classes.forEach(element => {
    // console.log(element.name);
});

// home-calendar-swiper
new Swiper('.calendar-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
})
new Swiper('.today-mobile-calendar', {
    slidesPerView: 1,
})
new Swiper('.calendar-mobile-swiper', {
    slidesPerView: 3,
    spaceBetween: 9,
})

new Swiper('.address-swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.address-next',
        prevEl: '.address-prev',
      },
})

new Swiper('.more-info-calendar-swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.more-info-calendar-next',
        prevEl: '.more-info-calendar-prev',
    },
})

new Swiper('.brand-swiper', {
    slidesPerView: 4,
    spaceBetween: 80,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        820: {
            slidesPerView: 8,
            spaceBetween: 80,
        },
        1280: {
            slidesPerView: 10,
        }
      }
})
new Swiper('.detailed-calendar-swiper', {
    navigation: {
        nextEl: '.detailed-calendar-next',
        prevEl: '.detailed-calendar-prev',
      },
})