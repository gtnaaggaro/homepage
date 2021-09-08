function playVid() {
  $('#popupvideo').trigger('play'), $('.play-btn').hide(), $('.pause-btn').show();
}

function pauseVid() {
  $('#popupvideo').trigger('pause'), $('.play-btn').show(), $('.pause-btn').hide();
}

function stopPopupVideo(element) {
  pauseVid(), element.parent().find('iframe').attr('src', element.parent().find('iframe').attr('src'));
}

function setCardsHeight() {
  var heights = [],
    divHeight = '',
    maxHeight = '';
  $('.card-lists .card-item').each(function () {
    (sectionInner = $(this)), (heights = []), (divHeight = $(this).height()), heights.push(divHeight);
  }),
    (maxHeight = Math.max.apply(null, heights)),
    $('.card-lists .card-item').height(maxHeight);
}
$('.card-section .card-lists').slick({
  dots: !1,
  arrows: !1,
  infinite: !1,
  autoplay: !1,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  margin: 10,
  asNavFor: '.card-nav',
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: !0,
        slidesToShow: 3,
        autoplay: !0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        dots: !0,
        autoplay: !0,
        arrows: !1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: !0,
        autoplay: !0,
        arrows: !1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: !1,
        dots: !0,
        centerMode: !0,
        centerPadding: '20px',
      },
    },
  ],
}),
  $('.card-nav').slick({
    infinite: !1,
    variableWidth: !0,
    slidesToScroll: 1,
    asNavFor: '.card-lists',
    dots: !1,
    centerMode: !1,
    focusOnSelect: !0,
  }),
  $('.card-nav > div').click(function () {
    $('.card-section .card-lists').slick('slickGoTo', $(this).index());
  }),
  $('.offer-slider').slick({
    dots: !0,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 2e3,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }),
  $(document).ready(function () {
    $('.card-section .card-item').equalHeights(),
      $(window).width() <= 768 &&
        ($('.card-section .card-item').removeClass('wow slideInLeft'), $('.card-section .card-item').removeClass('wow slideInRight'));
  }),
  $(window).on('load', function () {
    $('.mscroll').mCustomScrollbar();
    $('.card-section .bill-list').click(function () {
      $('.card-section').addClass('bill-list-hover');
      $('.find-right-product-section').addClass('active');
      $('.ask-ipal').addClass('active');
    });
    $(document).click(function (event) {
      var $target = $(event.target);
      if (!$target.closest('.bill-list').length) {
        $('.card-section').removeClass('bill-list-hover');
        $('.find-right-product-section').removeClass('active');
        $('.ask-ipal').removeClass('active');
      }
    });
  }),
  $(window).on('load resize orientationchange', function () {
    $('.card-section .card-item').equalHeights();
  }),
  $('.openvideo').click(function () {
    var iframe = $('#videoiFrame');
    iframe.attr('src', iframe.data('iframe-src')),
      $('.other-dropdown, .menu-level-1, .other-menu.active').removeClass('active'),
      $('.video-popup').show(),
      $('.card-section').addClass('open-popup'),
      $('body').addClass('no-scroll'),
      $('.mob-announcement-section:visible').length > 0
        ? (scrolltoHt = $('.mob-announcement-section:visible').height() + $('.header.mobile').height() - 100)
        : (scrolltoHt = $('.header.mobile').height() - 100),
      $(window).width() > 991 &&
        !isNaN(scrolltoHt) &&
        $('html, body').animate(
          {
            scrollTop: scrolltoHt,
          },
          1e3
        );
  }),
  $('.popup-close').click(function () {
    $('.video-popup').hide(), $('.card-section').removeClass('open-popup'), $('body').removeClass('no-scroll');
  }),
  $('.video-popup .btn-control').on('click', function () {
    $('.video-popup .play-btn, .pause-btn').toggle();
  }),
  new WOW().init(),
  $(window).on('resize', function () {
    setTimeout(setCardsHeight, 2e3);
  });

$(window).resize(function () {
  var w_width = $(window).width();
  if (w_width > 991) {
    $('.card-section .bill-list').hover(
      function () {
        $('.card-section').addClass('bill-list-hover');
        $('.find-right-product-section.desktop-section').addClass('active');
      },
      function () {
        $('.card-section').removeClass('bill-list-hover');
        $('.find-right-product-section.desktop-section').removeClass('active');
      }
    );
  }
});

if (!navigator.userAgent.match(/iPad/i) && navigator.userAgent.match(/iPad/i) == null) {
  $('.card-section .bill-list').hover(function () {
    $('.card-section').toggleClass('bill-list-hover');
    $('.find-right-product-section.desktop-section').toggleClass('active');
  });
}
