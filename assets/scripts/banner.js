function iframeHeight() {
    $(".banner-slider .video-media iframe").height($(".image-media").height()), $(".banner-slider .video-media video").height($(".image-media").height())
}

function setClassTagline() {
    setTimeout(function () {
        $(".banner-list .tagline").addClass("banner-nudge-active")
    }, 1e3)
}
/* //update 05-08-2021 : begin */
$(".banner-slider").on("beforeChange", function (e, i, n, a) {
    $(".banner-list .tagline").removeClass("banner-nudge-active"), setClassTagline()
}),
    /* 02/07/2021 start */
    $(".banner-slider").on("afterChange init", function (e, slick) {
        console.log(`%c slider event is ${e.type} & current slide index is ${slick.currentSlide}`, 'background: #222; color: #bada55');
    }),
    /*   //update 05-08-2021 : end */
    $(".banner-slider").slick({
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 5e3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                adaptiveHeight: !0
            }
        }]
    });
/* 02/07/2021 end */
$(document).ready(function () {
    iframeHeight(), setClassTagline()
});
var timeout = 0;
$(window).resize(function () {
    clearInterval(timeout), timeout = setTimeout(function () {
        iframeHeight()
    }, 100)
});
var vidClip = $("#myVideo");

function playVid() {
    myVideo.play()
}

function pauseVid() {
    myVideo.pause()
}
$.each(vidClip, function () {
    this.controls = !1
}), $(".btn-control").on("click", function () {
    $(".play-btn, .pause-btn").toggle()
}), vidClip.onended = function (e) {
    $(".play-btn, .pause-btn").toggle()
};
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
(new WOW).init(), $("#myVideo")[0].play();