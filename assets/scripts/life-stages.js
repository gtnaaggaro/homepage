function lifestageSliders() {
  $(".solutions-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          infinite: true,
        },
      },
    ],
  });

  $(".ls-blog-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
          centerMode: true,
          centerPadding: "20px",
          infinite: true,
        },
      },
    ],
  });

  /* insurance-slider */
  $(".insurance-slider").slick({
    lazyLoad: "ondemand",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

lifestageSliders();

function sliderContentHeight(mainDiv, divContent) {
  var heights = [];
  var divHeight = "";
  var maxHeight = "";
  $(mainDiv)
    .find($(".slick-list .slick-track"))
    .each(function () {
      sectionInner = $(this);

      $(this)
        .find($(divContent))
        .each(function () {
          divHeight = $(this).height();
          heights.push(divHeight);
        });

      maxHeight = Math.max.apply(null, heights);

      $(mainDiv)
        .find($(".slick-list .slick-track"))
        .find($(divContent))
        .each(function () {
          $(this).height(maxHeight);
        });
      heights = [];
    });
}

function setRightContentHeight() {
  var heights = [];
  var divHeight = "";
  var maxHeight = "";

  $(".section-inner").each(function () {
    sectionInner = $(this);
    heights = [];

    $(this)
      .find(".rightview-content")
      .each(function () {
        divHeight = $(this).height();
        heights.push(divHeight);
      });

    maxHeight = Math.max.apply(null, heights);
    $(sectionInner).height(maxHeight);
  });
}

function reziseLifeStgaeContent() {
  sliderContentHeight(".tab-pane .solutions-slider", ".top-content");
  sliderContentHeight(".ls-blog-slider", ".card-title");
}

function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0) {
    // If Internet Explorer, return version number
    return true;
  } else {
    return false;
  }
}
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {
  $(".solutions-slider .solutions-card").equalHeights();
  if ($(window).width() > 991) {
    setRightContentHeight();
    reziseLifeStgaeContent();
  }
  $(".solutions-section li, .slick-arrow, .arrows-tab").on(
    "click",
    function () {
      $(".slick-slider").slick("refresh");
      // lifestageSliders();
      sliderContentHeight(".tab-pane .solutions-slider", ".top-content");
      sliderContentHeight(".ls-blog-slider", ".card-title");
    }
  );

  $(".link-tab").on("click", function (e) {
    e.preventDefault();
    if ($(".announcement-section").is(":visible") == true) {
      scrollHt =
        $($(this).attr("href")).offset().top -
        $(".new-header").height() -
        $(".sticky-link-area").height() * 2;
      if ($(".announcement-section").isInViewport()) {
        scrollHt -= $(".announcement-section").height();
      }
    } else {
      scrollHt =
        $($(this).attr("href")).offset().top -
        $(".new-header").height() -
        $(".sticky-link-area").height();
    }
    $("html, body").animate(
      {
        scrollTop: scrollHt,
      },
      1000
    );
  });

  $(".link-area li").on("click", function () {
    $(".link-area li").removeClass("active");
    $(this).addClass("active");
  });
});

var leftSidebarTopHt = $(".ls-top-content").offset().top;
var announcementHtLife = 0;
if($(".announcement-section").length > 0)
  announcementHtLife += $(".announcement-section").height();
if($(".new-header.desktop").length > 0 )
  announcementHtLife += $(".new-header.desktop").height();
var linkAreaOffset = $(".link-area").offset().top + $(".new-header").height(),
  solutionsHt = $(".solutions-section").offset().top,
  wayToBankHt = $(".ways-to-bank-section").offset().top;
lsBlogdHt = $(".blog-card").offset().top;

function setStickyMenus() {
  if ($(window).width() > 991) {
    linkAreaHt = linkAreaOffset;
    if ($(".announcement-section").is(":visible")) {
      linkAreaHt += $(".announcement-section").height();
    }
    if ($(".life-stages-banner .media").is(":visible")) {
      linkAreaHt += $(".life-stages-banner .media").height();
    }

    if ($(window).scrollTop() > linkAreaHt) {
      if ($(".sidebar").hasClass("footerInView")) {
        $(".link-area").removeClass("linkarea-sticky");
      } else {
        $(".link-area").addClass("linkarea-sticky");
        if ($(".new-header.desktop").hasClass("sticky-enable")) {
          $(".link-area").addClass("link-header-sticky");
        }
      }
    } else if ($(window).scrollTop() < solutionsHt) {
      $(".link-area").removeClass("linkarea-sticky");
    }
  } else {
    if ($(".announcement-section").is(":visible")) {
      linkAreaHt =
        $(".life-stages-banner .media").innerHeight() +
        $(".section-inner .sidebar").height() +
        $(".announcement-section").height();
      if ($(window).scrollTop() > linkAreaHt) {
        $(".link-area").addClass("linkarea-sticky");
        if ($(".new-header.desktop").hasClass("sticky-enable")) {
          $(".link-area").addClass("link-header-sticky");
        }
      } else {
        $(".link-area").removeClass("linkarea-sticky");
      }
    } else {
      linkAreaHt =
        $(".life-stages-banner .media").height() +
        $(".section-inner .sidebar").height();
      if ($(window).scrollTop() > linkAreaHt) {
        $(".link-area").addClass("linkarea-sticky");
        if ($(".new-header.desktop").hasClass("sticky-enable")) {
          $(".link-area").addClass("link-header-sticky");
        }
      } else {
        $(".link-area").removeClass("linkarea-sticky");
      }
    }
  }
}

$(window).on("load resize scroll", function () {
  setStickyMenus();
  if ($(window).width() > 991) {
    $(".nav-tabs").each(function () {
      if ($(this).parent("div").hasClass("tabs-section") && !$(this).hasClass('nav-tabs-override')) {
        $(this).unwrap();
      }
    });
    $(".link-area ul").removeClass("nav nav-tabs");
    $(".sidebar ul").removeClass("nav nav-tabs");
    reziseLifeStgaeContent();
    setRightContentHeight();
  } else {
    $(".link-area ul").addClass("nav nav-tabs");
    $(".sidebar ul").addClass("nav nav-tabs");
  }
});

$(window).on("scroll", function () {
  // setStickyMenus();
  if ($(window).width() > 991) {
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('.sidebar').offset().top,
    distance      = (elementOffset - scrollTop);
    if(distance-50 > 0)
    {
      $(".sidebar").removeClass("footerInView");
    }
    if (($('.sidebar').offset().top + $('.sidebar').height() >= $('#footer').offset().top) && $(".sidebar").hasClass('sidebar-sticky')) {
      $(".sidebar").addClass("footerInView");
    }
  }
});

$(window).bind("scroll", function () {
  if ($(window).width() > 991) {
    if ($(window).scrollTop() > announcementHtLife) {
      $(".sidebar").addClass("sidebar-sticky");
      if ($(".new-header.desktop").hasClass("sticky-enable")) {
        $(".sidebar").addClass("sidebar-header-sticky");
      }
    } else {
      $(".sidebar").removeClass("sidebar-sticky");
    }
  } else if ($(window).width() > 991) {
    $(".sidebar").removeClass("sidebar-sticky");
  }
});

$(window).on("resize", function () {
  if ($(window).width() > 991) {
    if ($(window).scrollTop() > announcementHtLife) {
      $(".sidebar").addClass("sidebar-sticky");
      if ($(".new-header.desktop").hasClass("sticky-enable")) {
        $(".sidebar").addClass("sidebar-header-sticky");
      }
    } else {
      $(".sidebar").removeClass("sidebar-sticky");
    }
  } else if ($(window).width() < 991) {
    $(".sidebar").removeClass("sidebar-sticky");
  }
});
