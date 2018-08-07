let scrollBar = new Swiper('#scrollBar', {
    direction: 'vertical',
    loop: true,
    noSwiping : true
});
function scroll(swiper) {
    let slides = swiper.slides[swiper.activeIndex];
    let content = slides.querySelector('a');
    let offset = content.offsetWidth - slides.offsetWidth;
    if (offset > 0) {
        let time = offset / 50;
        content.style.transition = 'all ' + time + 's linear';
        content.style.left = -offset + 'px';
        setTimeout(function () {
            content.removeAttribute("style");
            scrollBar.slideNext();
        },(time+1)*1000);
    } else {
        setTimeout(function () {
            scrollBar.slideNext();
        },2000)
    }
}
setTimeout(function () {
    scroll(scrollBar);
},1000);
scrollBar.on('slideNextTransitionEnd',function () {
    setTimeout(function () {
        scroll(scrollBar);
    },1000);
});