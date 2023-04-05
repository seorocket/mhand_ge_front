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
new Swiper('.home-calendar-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
})

new Swiper('.brand-swiper', {
    slidesPerView: 7,
    autoplay: {
        delay: 3000,
      },
})