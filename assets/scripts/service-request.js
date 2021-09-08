function srcontactUsSlider() {
  $(".sr-contact-slider").hasClass("slick-initialized") &&
    $(".sr-contact-slider").slick("unslick"),
    $(".sr-contact-slider").slick({
      dots: !0,
      infinite: !0,
      autoplay: true,
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
  var serviceItemArray = [
    {
      serviceItem: "How to open bank account online? service",
      link: "https://www.google.com/",
    },
    {
      serviceItem:
        "How to Link Aadhar Card to your bank account in 4 simple...",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to access your ICICI Bank Canada account?",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to recharge TataSky DTH with an SMS",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to login to your ICICI Bank Canada account?",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to secure your ICICI Bank Cards",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to use your PayLater account?",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to log into InstaBIZ app",
      link: "https://www.google.com/",
    },
    {
      serviceItem: "How to pay via ICICI Bank Pay2Corp for PCS users",
      link: "https://www.google.com/",
    },
  ];
  $(".search-box-area input").keyup(function () {
    var inputText = $(this)[0].value;
    if (inputText.length > 0) {
      var searchArray = searchItems(serviceItemArray, "serviceItem", inputText);
      generateSearchResult(
        searchArray,
        inputText,
        "serviceItem",
        "ul.quetion-list",
        true
      );
    } else $(".quetion-list").html("");
  });
  /**
   * Search End for global function with seperate data for each page
   */

  if ($(window).width() < 991) {
    $(".widget-slider").hasClass("slick-initialized") &&
      $(".widget-slider").slick("unslick"),
      $(".widget-slider").slick({
        arrows: false,
        dots: !0,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2e3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px",
      });
  }
  srcontactUsSlider();
  sidebarSliderInit($(window).width());

  /**
   * filter Code Active element
   */
  $(".sidebar-content li div, .sidebar-content li img").click(function (event) {
    if (event.target !== this) return; // Do nothing
    if ($(window).width() <= 991) {
      $(".sidebar-content li").removeClass("active");
      $(this).closest('li').addClass("active");
      mobileTabDropdown();
      return;
    }
    if (
      $(this).parent().hasClass("active") &&
      $(this).parent().hasClass("dropdown")
    ) {
      $(this).parent().find(".dropdown-list").slideToggle();
      $(this).parent().removeClass("active");
      return;
    } else {
      $(".dropdown-list").hide();
      $(this).parent().find(".dropdown-list").slideDown();
    }
    $(".sidebar-content li div").parent().removeClass("active");
    $(this).parent().addClass("active");
    if ($(this).parent().hasClass("dropdown")) {
      $(this).parent().find(".dropdown-list p").removeClass("active");
      $(this).parent().find(".dropdown-list p").first().addClass("active");
    }
  });

  $(document).on("click", ".sidebar-content .dropdown-list p, #subDropdownList p", function () {
    $(".sidebar-content .dropdown-list p").removeClass("active");
    $(this).addClass("active");
    if ($(".dropdown-header").length > 0) {
      $(this).removeClass("active");
      $(".dropdown-header .dropdown-value").text($(this).text());
      $(".dropdown-list-inner").slideUp();
      $(".dropdown-header").removeClass("dropdown-open");
    }
  });

  //Dropdown mobile toggle
  $(document).on("click", "#subDropdownList .dropdown-value", function () {
    $("#subDropdownList .dropdown-list-inner").slideToggle();
    $(this).parent(".dropdown-header").toggleClass("dropdown-open");
  });

  $(document).on(
    "click",
    ".sidebar-content .tabs-section .arrows-tab",
    function () {
      mobileTabDropdown();
    }
  );

  function mobileTabDropdown() {
    var activeElement = $(".sidebar-content li.active");
    var targetElement = $('#subDropdownList');
    if (activeElement.hasClass("dropdown"))
    {
      var dropDownHtml = activeElement.find('.dropdown-list').html();
      activeElement.find('.dropdown-list').hide();

      var activeMenuText = activeElement.find(".dropdown-list p.active").text();
      if (activeMenuText.length <= 0) {
        activeMenuText = activeElement.find(".dropdown-list p").first().text();
      }
      if (targetElement.length > 0)
      {
        var html = "<div class='dropdown-header'><label>Filter</label><div class='dropdown-value'>" + activeMenuText + "</div></div>" + dropDownHtml;
        targetElement.show();
        targetElement.html(html);
        targetElement.find('.dropdown-list-inner').hide();
      }
    }
    else
    {
      $(targetElement).html('');
    }

    if ($(".dropdown-header").length > 0)
      $(".dropdown-header").removeClass("dropdown-open");
  }

  $(window).resize(function () {
    sidebarSliderInit($(this).width());
  });

  function sidebarSliderInit(windowWidth) {
    if (windowWidth <= 991) {
      $(".sidebar-body").addClass("section");
      $(".sb-nav").addClass("nav-tabs");
      tabsprevnext();
    } else {
      $(".sidebar-body").removeClass("section");
      $(".sb-nav").removeClass("nav-tabs");
    }
  }

  /**
   * Scroll Sticky
   */
  $(window).bind("scroll", function () {

    var topPosition = 0;
    if($(".service-request-content .page-topbar").length > 0)
      topPosition += $(".service-request-content .page-topbar").height();
    if ($(".announcement-section:visible").length > 0)
      topPosition += $(".announcement-section").height();

    if(topPosition <= 0)
      topPosition = 100;

    //Desktop Sticky
    if($(window).width() > 991)
    {
      if ($(window).scrollTop() > topPosition) {
        $(".sidebar-content").addClass("sticky-sidebar");
        $(".filter-inner-container").addClass("sticky-enable");
      } else {
        $(".sidebar-content").removeClass("sticky-sidebar");
        $(".filter-inner-container").removeClass("sticky-enable");
      }

      $(".sidebar-content").removeClass("disable-sticky");
      removeStickyServiceSidebar('.looking-for-section');
      removeStickyServiceSidebar('.footer');
    }
  });

  function removeStickyServiceSidebar(elementVar)
  {
    if($(elementVar).length > 0)
    {
      if($(elementVar).isOnScreen() && $(".sidebar-content").hasClass('sticky-sidebar'))
      {
        $(".sidebar-content").addClass("disable-sticky");
      }
    }
  }
});
