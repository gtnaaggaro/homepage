/* trending-deals-slider */
$('.trending-deals-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true,
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: '15px',
      infinite: true,
    }
  }
  ]
});

$(window).on('load resize', function () {
  $('.trending-deals-slider .slick-arrow').on('click', function () {
    setOfferHeight();
  });
});
$('#nudgeForTrendingDeals').hide();
$('.deals-section .nav-tabs li a').on('click', function () {
  $('.deals-section .slick-slider').slick('refresh');
  $(".compare-step-1").removeClass("hide");
  $(".compare-step-2").addClass("hide");
  $(".compare-step-3").addClass("hide");
  let nudgeContent = $(this).data('nudge-content');
  if (nudgeContent != undefined) {
    $('#nudgeForTrendingDeals').show();
    $('#nudgeForTrendingDeals').html('<p>' + nudgeContent + '</p>');
  }
  else {
    $('#nudgeForTrendingDeals').hide();
  }
  // sliders();
  setTimeout(function () {
    setOfferHeight();
  }, 500)
});

$('#deals-tab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
});

/* compare-slider */
function compareSilder() {
  $('.compare-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
          infinite: true,
        }
      }
    ]
  });
}
compareSilder();


$("#compareandfly .yatra").click(function (e) {
  e.preventDefault();
  $(".compare-step-2").removeClass("hide");
  $(".compare-step-1").addClass("hide");
  if ($('.compare-slider .slick-slider').length > 0) {
    $('.compare-slider').slick('unslick');
  }
  compareSilder();
  trendingDealSliderHeight('.compare-slider .card-text');
});

$(".yatra-2").click(function (e) {
  e.preventDefault();
  $(".compare-step-2").addClass("hide");
  $(".compare-step-3").removeClass("hide");
});

function trendingDealSliderHeight(selector) {
  var heights = [];
  var height = '';
  var maxHeight = '';
  $('#myTabContent .tab-pane.active .trending-deals-slider .slick-list .slick-track').each(function () {
    $(this).find($(selector)).each(function () {
      height = $(this).height();
      heights.push(height);
    });

    maxHeight = Math.max.apply(null, heights);

    // Set the maxHeight to every selected element
    $('#myTabContent .tab-pane.active .trending-deals-slider .slick-list .slick-track').find($(selector)).each(function () {
      $(this).height(maxHeight);
    });
  });
}

function setOfferHeight() {
  trendingDealSliderHeight('.deal-card');
  trendingDealSliderHeight('.offer');
  trendingDealSliderHeight('.description');
  trendingDealSliderHeight('.img-offer-wrapper');
}

/* select menu */
if ($(this).closest(".deals-section")) {
  $("select").selectmenu();
}
setOfferHeight();
