$(document).ready(function () {
  $(".banking-banner-slider").not(".slick-initialized").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });

  $(".whatsnew-slider").not(".slick-initialized").slick({
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".customer-review-slider").not(".slick-initialized").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".service-card-slider")
    .not(".slick-initialized")
    .slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: true,
      //21/07/2021 autoplaySpeed change
      autoplaySpeed: 5000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

  $(".short-card-slider")
    .not(".slick-initialized")
    .slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: true,
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
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 550) {
      $(".qrcode-notification-alert").show();
    } else {
      $(".qrcode-notification-alert").hide();
    }

    //update 14-07-2021 sticky navbar
    const bankingBannerEl = $(".banking-banner-nav");
    if (bankingBannerEl.length) {
      const bannerElBottomOffset = (bankingBannerEl.get(0).offsetTop + bankingBannerEl.get(0).offsetHeight);
      if ($(window).width() > 767) {
        if ((window.pageYOffset) > bannerElBottomOffset) {
          bankingBannerEl.addClass('sticky');
        } else {
          bankingBannerEl.removeClass('sticky');
        }
      }
    }

  });
});

/* banking-slide  */
var current = 1;
setInterval(function () {
  var divs = $(".banking-slider .slide").hide();
  divs.eq(current).fadeIn("normal");
  if (current < divs.length - 1) current++;
  else current = 0;
}, 3000);

/* qrcode */
/* 16/06/2021 start */
$(".qrcode-icon").click(function () {
  $(this).next(".qrcode-popup").show();
});
$(".qrcode-popup .close").click(function () {
  $(".qrcode-popup").hide();
});
/* 16/06/2021 end */

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

/* openvideo */
function playVid() {
  $("#popupvideo").trigger("play"),
    $(".play-btn").hide(),
    $(".pause-btn").show();
}

function pauseVid() {
  $("#popupvideo").trigger("pause"),
    $(".play-btn").show(),
    $(".pause-btn").hide();
}

function stopPopupVideo(element) {
  pauseVid(),
    element
      .parent()
      .find("iframe")
      .attr("src", "about:blank"); //code update - 23/06/2021
}

$(".openvideo").click(function () {
  var iframe = $("#videoiFrame");
  //code update 23/06/2021
  var anchorEl = $(this);
  iframe.attr("src", anchorEl.data("iframe-src") ? anchorEl.data("iframe-src") : iframe.data("iframe-src"));
  //code update 23/06/2021
  $(".other-dropdown, .menu-level-1, .other-menu.active").removeClass("active");
  $(".video-popup").show();
  $(".card-section").addClass("open-popup");
  $("body").addClass("no-scroll");
  $(".mob-announcement-section:visible").length > 0
    ? (scrolltoHt =
      $(".mob-announcement-section:visible").height() +
      $(".header.mobile").height() -
      100)
    : (scrolltoHt = $(".header.mobile").height() - 100),
    $(window).width() > 991 &&
    !isNaN(scrolltoHt) &&
    $("html, body").animate(
      {
        scrollTop: scrolltoHt,
      },
      1000
    );
});
$(".popup-close").click(function () {
  $(".video-popup").hide(),
    $(".card-section").removeClass("open-popup"),
    $("body").removeClass("no-scroll");
});
$(".video-popup .btn-control").on("click", function () {
  $(".video-popup .play-btn, .pause-btn").toggle();
});

/*  mobile vallidation*/
function numberValidate(e) {
  whatsapp_mobile_number = $(".mobile-valid").val();
  if (whatsapp_mobile_number.length < 9) {
    $("#mobile-err").removeClass("hide");
  } else {
    $("#mobile-err").addClass("hide");
  }
  e = e ? e : window.event;
  var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
  var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
  var str =
    e.type && e.type == "paste"
      ? clipboardData.getData("Text")
      : String.fromCharCode(key);
  return /^\d+$/.test(str);
}
jQuery.fn.ForceNumericOnly = function () {
  return this.each(function () {
    $(this).keydown(function (e) {
      var key = e.charCode || e.keyCode || 0;
      return (
        key == 8 ||
        key == 9 ||
        key == 13 ||
        key == 46 ||
        key == 110 ||
        key == 190 ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      );
    });
  });
};

$(".mobile-valid").ForceNumericOnly();
$(".mobile-valid").on("keypress", function (e) {
  numberValidate(e);
});

$(".whatsapp-submit").on("click", function (e) {
  e.preventDefault();
  return numberValidate(e);
});
