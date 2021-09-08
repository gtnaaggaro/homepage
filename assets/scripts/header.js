function showNotifications() {
  $(".notification-icon")
    .parent(".notification")
    .find(".notification-list-container")
    .show(),
    /* 31/07/2021 */
    /* $("body").addClass("no-scroll"), */
    $(
      ".personal-banking-overlay, .personal-banking-container, .search-overlay"
    ).hide();
  $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
  $(".sub-menu-wrapper").removeClass("is-active");
}

function closeNotifications() {
  $(".noti-close-btn")
    .closest(".notification")
    .find(".notification-list-container, .notification-overlay")
    .hide(),
    $("body").removeClass("no-scroll"),
    $(".notification-icon, .menu-search-box, .user-login").show();
}

function closePersonalBanking() {
  $(".personal-banking").removeClass("is-active"),
    $(".personal-close-btn")
      .closest(".personal-banking-wrapper")
      .siblings(".personal-banking-overlay")
      .hide()
      .removeClass("is-active"),
    $(".personal-close-btn")
      .closest(".personal-banking-wrapper")
      .find(".personal-banking-container, .personal-banking-overlay")
      .hide();
}

function closeSerach() {
  $("#search-main, #Search").val(""),
    $(".search-overlay, .overlay-search-box").hide(),
    $("header .menu-search-box #search-main, .mobile .search-box #Search").val(
      ""
    );
  $(".search-overlay").removeClass("is-active"),
    $("body").removeClass("no-scroll"),
    $(".burger-menu").show();
}

function closeRightProduct() {
  $(".find-product-menu").find(".title").removeClass("is-active");
  $(".find-product-menu").find(".find-product-dropdown").removeClass("is-active");
  $(".find-product-menu").siblings(".menu-overlay").hide();
  $('.fp-selectmenu').removeClass('ui-selectmenu-open');
  $('.ui-selectmenu-button').removeClass('ui-selectmenu-button-open');
}

$(function ($) {
  $(document).click(function (e) {
    if ($(document).width() >= 960) {
      var $menu = $(".menu-container");
      let menuClick = $(e.target).closest('.menu-inner').parent().hasClass('menu-level-3');
      if (menuClick) {
        $('.body-overlay').show();
        return true;
      }

      $menu.is(e.target) ||
        0 !== $menu.has(e.target).length ||
        !$(".menu-overlay").hasClass("is-active") ||
        $(".login-overlay").hasClass("is-active")
        ? $menu.is(e.target) ||
        0 !== $menu.has(e.target).length ||
        ($(".primary-menu > li").stop(!0, !0).removeClass("is-active"),
          $(".secondary-menu-wrapper")
            .stop(!0, !0)
            .fadeOut()
            .removeClass("is-active"),
          $(".body-overlay").removeClass("is-active"),
          $(".body-overlay").hide())
        : ($(".menu-overlay").hide(),
          $("body").removeClass("no-scroll"),
          $(".primary-menu > li, .menu-overlay").removeClass("is-active"),
          $(".notification-list-container, .notification-menu-overlay").hide(),
          $(".personal-banking-container, .personal-banking-overlay").hide(),
          $(".personal-banking").removeClass("is-active"));
      var $menu2 = $(".menu-container .overlay-search-box");
      !$menu2.is(e.target) &&
        0 === $menu2.has(e.target).length &&
        $(".menu-overlay").hasClass("is-active") &&
        ($(".search-overlay, .overlay-search-box").hide(),
          $(
            "header .menu-search-box #search-main, .mobile .search-box #Search"
          ).val(""),
          $("#search-main, #Search").val(""),
          $("body").removeClass("no-scroll"));
    }
  }),
    /* 31/07/2021 code add */
    $(".notification-icon").on("mouseover", function (event) {
      event.stopPropagation(),
        $(".notification-menu-overlay").is(":visible")
          ? closeNotifications()
          : showNotifications();
    }),
    $(".noti-close-btn").on("click", function () {
      closeNotifications();
    }),
    $(".personal-banking").on("mouseover", function (event) {
      $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
      $(".sub-menu-wrapper").removeClass("is-active");
      closeRightProduct();
      event.preventDefault(),
        event.stopPropagation(),
        $(this).addClass("is-active"),
        $(this)
          .parent(".personal-banking-wrapper")
          .siblings(".personal-banking-overlay")
          .show()
          .addClass("is-active"),
        $(this)
          .parent(".personal-banking-wrapper")
          .find(".personal-banking-container")
          .show(),
        $(
          ".notification-list-container, .notification-menu-overlay, .search-overlay"
        ).hide();
    }),
    $(".personal-close-btn").on("click", function () {
      closePersonalBanking();
    }),
    // Begin: 04-06-2021 
    $(".personal-banking-container").on("mouseleave", function () {
      closePersonalBanking();
    }),
    // End: 04-06-2021 
    $(".personal-list a").on("click", function (e) {
      $(".personal-banking a").html(e.currentTarget.text),
        $(".personal-banking-overlay, .personal-banking-container").hide();
    }),
    $(".device-noti-btn").on("click", function () {
      $(this)
        .closest(".notification")
        .siblings(".notification-menu-overlay")
        .show()
        .addClass("is-active"),
        $(".languageselect-mob").addClass("active"),
        $(".languageselect-mob").removeClass("hide"),
        $(".countryselect-mob").addClass("active"),
        $(".notification-list-container").show(),
        $("body").addClass("no-scroll"),
        $(".search-wrapper, .device-noti-btn, .mob-user-login").hide(),
        $(".noti-close-btn .close-icon").show(),
        $(".burger-menu").hide();
      $(".search").hide();
    }),
    $(".noti-close-btn .close-icon").on("click", function () {
      $(".notification-icon, .menu-search-box, .user-login").show(),
        $(".search-wrapper, .device-noti-btn, .mob-user-login").show(),
        $(this)
          .closest(".notification-menu-overlay")
          .hide()
          .removeClass("is-active"),
        $(".languageselect-mob").removeClass("active"),
        $(".languageselect-mob").addClass("hide"),
        $(".countryselect-mob").removeClass("active"),
        $("body").removeClass("no-scroll"),
        $(".burger-menu").show();
      $(".search").show();
    }),
    $(".mob-user-login .ic-btn").on("click", function () {
      $(this).hide(),
        $(".burger-menu").hide(),
        $(
          ".login-overlay, .login-close-btn, .languageselect-mob"
        ).show(),
        $(".countryselect-mob").addClass("active"),
        $(".search-wrapper, .notification").hide(),
        $(".languageselect-mob").removeClass("hide");
      $(".countryselect-mob").removeClass("hide");
      $(".search").hide();
    }),
    $(".login-close-btn").on("click", function () {
      $(this).hide(),
        $(".burger-menu").show(),
        $(".search-wrapper, .notification,.mob-user-login .ic-btn").show(),
        $(".languageselect-mob").addClass("hide");
      $(".countryselect-mob").removeClass("active");
      $(".login-overlay").hide();
      $(".search").show();
    }),
    $(window)
      .bind("resize", function () {
        $(document).width() < 479
          ? ($(".notification-icon").on("click", function () {
            $(document).width() < 479 &&
              $(".menu-search-box, .notification-icon, .user-login").hide();
          }),
            $(".noti-close-btn:visible").length > 0 &&
            $(".menu-search-box, .notification-icon, .user-login").hide())
          : $(document).width() >= 479 &&
          $(".menu-search-box, .notification-icon, .user-login").show();
      })
      .trigger("resize"),
    $(".menu-search-box, .icon-search").on("click", function (event) {
      event.stopPropagation(),
        $(".search-overlay, .overlay-search-box, .search-filter-box").show(),
        $(".search-overlay").addClass("is-active"),
        $("#search-main").val(""),
        $("body").addClass("no-scroll"),
        $(".burger-menu").hide(),
        $(
          ".notification-list-container, .notification-menu-overlay, .personal-banking-overlay, .personal-banking-container"
        ).hide();
    }),
    $(".search-btns button.close-btn").on("click", function (event) {
      event.preventDefault(), closeSerach();
    });
  var availableTags = [
    "Track Your Home Loan Application",
    "Home Loans",
    "Apply for Home Loan Instantly",
    "Home Renovation Loan",
    "Six Reasons for Home Loan Rejection",
  ];
  $(".user-login").on("click", function (e) {
    $(this).find(".login-overlay").hasClass("is-active")
      ? ($(this).find(".login-overlay").removeClass("is-active"),
        $(this).find(".login-overlay").hide())
      : ($(this).find(".login-overlay").show(),
        $(this).find(".login-overlay").addClass("is-active"),
        $(".personal-banking").removeClass("is-active"),
        $(".personal-banking-overlay").removeClass("is-active").hide(),
        $(".personal-banking-container").hide(),
        $(
          ".notification-list-container, .notification-menu-overlay, .search-overlay"
        ).hide());
  }),
    $(".login-close-btn").on("click", function () {
      $(".search-wrapper, .notification,.mob-user-login .ic-btn").show();
    });
}),
  $(window).on("scroll", function () {
    $(window).scrollTop() > 130
      ? ($(".new-header.desktop").hasClass("sticky-enable") &&
        $(".new-header.desktop").addClass("sticky"),
        $(".new-header.mobile").hasClass("sticky-enable") &&
        $(".new-header.mobile").addClass("sticky"))
      : ($(".new-header.desktop").removeClass("sticky"),
        $(".new-header.mobile").removeClass("sticky"));

  }),
  $(document).ready(function () {
    //Toggle Classes for menu open
    $(".countryselect-mob #country").click(function () {
      $(".countryselect-mob #country-drop").toggleClass("active");
    });
    $(".languageselect-mob span").click(function () {
      $(".languageselect-mob #language-drop").toggleClass("active");
    });
    //on Select change the image and text
    $(".countryselect-mob #country-drop li").click(function () {
      var selectedCountryImage = $(this).find("img").attr("src");
      $(".countryselect-mob #country")
        .find("img")
        .attr("src", selectedCountryImage);
      $(".countryselect-mob #country-drop").removeClass("active");
    });
    $(".languageselect-mob #language-drop li").click(function () {
      var selectedCountryLanguage = $(this).find("a").text();
      $(".languageselect-mob span").text(selectedCountryLanguage);
      $(".languageselect-mob #language-drop").removeClass("active");
    });
    $(document).click(function (event) {
      var $target = $(event.target);
      if (
        !$target.closest(".countryselect-mob #country").length &&
        !$target.closest(".countryselect-mob #country-drop").length
      ) {
        $(".countryselect-mob #country-drop").removeClass("active");
      }
      if (
        !$target.closest(".languageselect-mob span").length &&
        !$target.closest(".languageselect-mob #language-drop").length
      ) {
        $(".languageselect-mob #language-drop").removeClass("active");
      }
    });

    $(".countryselect li").click(function () {
      var selectedCountryImage = $(this).find("img").attr("src");
      $(".countryselect #country")
        .find("img")
        .attr("src", selectedCountryImage),
        $("#country-drop").removeClass("is-active");
    }),
      $("#language-drop li").click(function () {
        var selectedCountryLanguage = $(this).find("a").text();
        $(".languageselect #language span").text(selectedCountryLanguage),
          $("#language-drop").removeClass("is-active");
      });

    //defualt hide first menu in hamburg if offer-header class exist
    offerHeaderDefault();
    $(".close-menu").click(function () {
      offerHeaderDefault();
    });

    function offerHeaderDefault() {
      if ($("header").hasClass("offer-header")) {
        $(
          ".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab"
        ).removeClass("active");
        $(
          ".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab-ul"
        ).hide();
        $(
          ".mobile-menu-wrapper .menu-tab-content .menu-list-item ul:first"
        ).hide();
      }
    }
    $(".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab").click(
      function () {
        if ($(this).parent().hasClass("personal-tab")) {
          $(
            ".mobile-menu-wrapper .menu-tab-content .menu-list-item ul:first"
          ).show();
        }
        $(this).parent().find(".menu-tab-ul").toggle("show");
        //$(this).toggleClass('active');
      }
    );
  });

$(document).ready(function () {
  //Json Content for searchLists
  var searchArray = [
    {
      searchList: "How to open bank account online?",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to Link Aadhar Card to your bank account in 4 simple...",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to access your ICICI Bank Canada account?",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to recharge TataSky DTH with an SMS",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to login to your ICICI Bank Canada account?",
      searchLink: "https://www.google.com/",
    },
  ];
  /* Search Start*/
  $("header .menu-search-box #search-main, .mobile .search-box #Search ").focus(
    function () {
      $(
        "header .menu-search-box #search-main, .mobile header .menu-search-box #Search"
      ).addClass("active");
      $(
        "header .search-listing, .mobile .search-listing ul, .mobile.search-listing ul"
      ).show();
      $(
        "header .menu-search-box #search-main, .mobile .search-box #Search"
      ).val("");

      $("header .search-listing, .mobile .search-listing").addClass("active");
      var inputText = $(this)[0].value;
      if (inputText.length > 0)
        searchsearchList(
          searchArray,
          inputText,
          "header ul.search-list, .mobile ul.search-list"
        );
      else $("header .search-list").html("");
    }
  );

  $("header .menu-search-box input, .mobile .search-box input").keyup(
    function () {
      var inputText = $(this)[0].value;
      if (inputText.length > 0)
        searchsearchList(
          searchArray,
          inputText,
          "header ul.search-list, .mobile ul.search-list"
        );
      else $("header .search-list, .mobile .search-list").html("");
    }
  );

  $(document).click(function (event) {
    var $target = $(event.target);
    //Search list
    if (
      !$target.closest(".search").length &&
      !$target.closest(".search-filter-box").length &&
      !$target.closest(".search-overlay").length
    ) {
      $(
        "header .menu-search-box input, .mobile header .menu-search-box input"
      ).removeClass("active");
      $(
        "header .menu-search-box #search-main, .mobile .search-box #Search"
      ).val("");

      $("header .search-listing, .mobile .search-listing").removeClass(
        "active"
      );
    }

    $(
      "header .search-listing, .mobile .search-listing .search-overlay-area"
    ).click(function () {
      if (
        $("header .search-listing, .mobile .search-listing").hasClass("active")
      ) {
        $(
          "header .menu-search-box input, .mobile header .menu-search-box input"
        ).removeClass("active");
        $("header .search-listing, .mobile .search-listing").removeClass(
          "active"
        );
      }
    });
  });
  /* Search End*/

  $(".search-overlay").click(function () {
    $("header .menu-search-box #search-main, .mobile .search-box #Search").val(
      ""
    );
  });

  $(document).on(
    "click",
    "header .search-list li, .mobile .search-list li",
    function () {
      $(
        "header .menu-search-box #search-main, .mobile .search-box #Search"
      ).val($(this).text());
      $("header .search-overlay").hide();
    }
  );
});

function searchsearchList(searchArray, inputText, ulElement) {
  $(ulElement).html("");
  for (let index = 0; index < searchArray.length; index++) {
    let searchListItem = searchArray[index]["searchList"];
    let searchLinkItem = searchArray[index]["searchLink"];
    if (
      searchListItem.toUpperCase().includes(inputText.toUpperCase()) ||
      inputText == "all"
    ) {
      if (inputText != "all") {
        searchListItem = searchListItem.replace(
          inputText,
          "<b>" + inputText + "</b>"
        );
      }
      $(
        "<li> <a href='" + searchLinkItem + "'>" + searchListItem + "</a></li>"
      ).appendTo(ulElement);
    }
  }
}
