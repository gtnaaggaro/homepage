function SrcontactUsSlider() {
  $(".sr-contact-slider").hasClass("slick-initialized") &&
    $(".sr-contact-slider").slick("unslick"),
    $(".sr-contact-slider").slick({
      dots: !0,
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 2e3,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}

$(document).ready(function () {

  /**
   * Search data changes and ul creation start for global use
  */
  var customerCareItemArray = [
    {
      careItem: "How to open bank account online? customer-care and nri",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to Link Aadhar Card to your bank account in 4 simple...",
      link: "https://www.google.com/",

    },
    {
      careItem: "How to access your ICICI Bank Canada account?",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to recharge TataSky DTH with an SMS",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to login to your ICICI Bank Canada account?",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to secure your ICICI Bank Cards",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to use your PayLater account?",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to log into InstaBIZ app",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to pay via ICICI Bank Pay2Corp for PCS users",
      link: "https://www.google.com/",
    },
  ];
  $(".search-box-area input").keyup(function () {
    var inputText = $(this)[0].value;
    if (inputText.length > 0)
    {
      var searchArray = searchItems(customerCareItemArray, 'careItem', inputText);
      generateSearchResult(searchArray, inputText, 'careItem', 'ul.quetion-list',  true);
    }
    else
      $('.quetion-list').html('');
  });
  /**
   * Search End for global function with seperate data for each page
  */

  /* search-filter-slider  */
  $(".search-filter-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* browse-product-slider */
  $(".browse-product-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });
  SrcontactUsSlider();
  $(".contact-info-nri .c-list li").click(function () {
    $(".c-list li").removeClass("active");
    $(this).addClass("active");
    $(".contact-info-list .contact-info ").removeClass("active");
    var siblingsElement = $(this).parent().siblings(".contact-info-list");
    siblingsElement.find("." + this.id).addClass("active");
    
    //Tabs scrolling to center on select
    var nav_tab =$('.contact-num-info  .c-list');
    var horizontal_width = nav_tab.scrollLeft();
    var current_tab_width = nav_tab.find('.active').width();
    var current_tab_left_offset = nav_tab.find('.active').offset().left;
    var extra_left_off = $(window).width()-current_tab_width;
    var scoll_width = horizontal_width+current_tab_left_offset-extra_left_off/2+10;
    nav_tab.animate({scrollLeft:scoll_width},300);
  });

  $("#city").selectmenu({
    change: function (event, ui) {
      $(".contact-info-inner .contact-info").removeClass("selected-city");
      var selectedIndex = $(this).val().toLowerCase();
      $(".contact-info-inner .contact-info").hide();
      if (selectedIndex == "all cities") selectedIndex = "contact-info";

      $(".contact-info-inner ." + selectedIndex).show();
      $(".contact-info-inner .contact-info:visible")
        .last()
        .addClass("selected-city");
    },
  });
  $("#branches-City, #branches-City-nri").selectmenu({
    change: function (event, ui) {
      var selectedClass = this.className;
      var selectedIndex = $(this).val().toLowerCase();
      $(
        ".branches-inner .branches-lists." + selectedClass + " .branches-list"
      ).hide();
      if (selectedIndex == "all cities") selectedIndex = "branches-list";

      $(
        ".branches-inner .branches-lists." +
          selectedClass +
          " ." +
          selectedIndex
      ).show();
    },
  });
});
