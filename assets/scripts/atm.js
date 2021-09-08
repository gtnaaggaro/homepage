$(document).ready(function () {
  $(".short-card-slider")
    .not(".slick-initialized")
    .slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            centerMode: true,
            centerPadding: '15px',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

  $(".service-offerd-slider")
    .not(".slick-initialized")
    .slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });

  $(".service-heading").click(function () {
    $(this).toggleClass("active");
    $(".service-content").toggleClass("active");
  })

  $(".service-content .more-link").click(function () {
    $(this).hide();
    $(".service-list-more").addClass("active");
  })

  if ($(window).width() < 991) {
    $(".atm-landing-section .map-section .filter-icon").click(function () {
      $(this).toggleClass("active");
      $(this).next(".sidebar-body").toggleClass("active");
    })

    $(document).on('click', function (e) {
      const filterIconObj = $(".atm-landing-section .map-section .filter-icon");
      if (($(e.target).closest(".sidebar-body").length === 0) && !(($(e.target)[0] == filterIconObj[0]) || ($(e.target).closest(".filter-icon")[0] == filterIconObj[0]))) {
        $(".sidebar-body").removeClass("active");
        filterIconObj.removeClass("active");
      }
    });
  }

});


function bankingCardSlider() {
  $(".banking-card-section .card-lists").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
  });
}

var timeoutCounter;
$(window).on("load orientationchange", function () {
  clearTimeout(timeoutCounter);
  timeoutCounter = setTimeout(function () {
    $(".accordion--scroll").mCustomScrollbar();
    if ($(window).width() < 991) {
      bankingCardSlider();
    } else {
      $(".banking-card-section .card-lists").hasClass("slick-initialized") &&
        $(".banking-card-section .card-lists").slick("unslick");
    }
  }, 250);
});