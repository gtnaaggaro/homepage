function hideLeftArrow() {
  $('.tabs-section').each(function (index) {
    if ($(this).find('ul li:eq(0)').hasClass('active')) {
      $(this).find('.left-arrow').addClass('arrow-hidden');
    }
    else {
      $(this).find('.left-arrow').removeClass('arrow-hidden');
    }

    if ($(this).find('ul li').last().hasClass('active')) {
      $(this).find('.right-arrow').addClass('arrow-hidden');
    }
    else {
      $(this).find('.right-arrow').removeClass('arrow-hidden');
    }
  });
}

$(document).ready(function () {

  function tabclickevent($this) {
    tab_content = $($this).closest('.tabs-section').siblings('.tab-content');
    if (tab_content.length == 0) {
      tab_content = $($this).closest('.sidebar-content').siblings('.tab-content');
    }
    $(tab_content).find('.tab-pane').removeClass('active');
    var _self = $($this);
    $($this).parent('.nav-tabs').find('li').removeClass('active');
    $($this).parent('.nav-tabs').find('li').css('pointer-events', 'all');
    _self.addClass('active');
    //_self.addClass('active').css('pointer-events','none');
    var nav_tab = _self.parent('.nav-tabs');
    scrollHorizontalToActive(nav_tab);
    activeIndex = $(nav_tab).find('li').index($(nav_tab).find('li.active'));
    $(tab_content).children('.tab-pane:eq(' + activeIndex + ')').addClass('active');
    if ($($this).find('a').hasClass('link-tab')) {
      $('html, body').animate({
        scrollTop: $($($this).find('a').attr('href')).offset().top - 60
      }, 1000);
    }
    if ($('.slick-slider').length > 0) {
      $(tab_content).find('.slick-slider').slick('refresh');
    }

    if ($('.trending-deals-tab').length > 0) {
      setOfferHeight();
    }
    hideLeftArrow();
  }

  $('.tabs-section').find('.nav-tabs li').on('click', function (event) {
    tabclickevent($(this));
  });

  $(document).on('click', '.right-arrow', function (event) {
    $curr_tab = $(this).siblings('.nav-tabs');
    activeIndex = $($curr_tab).find('li').index($($curr_tab).children('li.active'));
    //$('.tabs-section').find('.nav-tabs li:eq(0)').trigger('click');
    //Added for calculator content change
    $($curr_tab).children('li.active').next('li').trigger('click');
    nextIndex = parseInt(activeIndex) + parseInt(1);
    tabclickevent($($curr_tab).find('li:eq(' + nextIndex + ')'));

    if ($(this).find('a').hasClass('link-tab')) {
      $('html, body').animate({
        scrollTop: $($(this).find('a').attr('href')).offset().top
      }, 1000);
    }
  })

  $(document).on('click', '.left-arrow', function (event) {
    $curr_tab = $(this).siblings('.nav-tabs');
    activeIndex = $($curr_tab).find('li').index($($curr_tab).children('li.active'));
    //Added for calculator content change
    $($curr_tab).children('li.active').prev('li').trigger('click');
    prevIndex = parseInt(activeIndex) - parseInt(1);
    tabclickevent($($curr_tab).find('li:eq(' + prevIndex + ')'));
  });

});

timeout = 0;
function tabsprevnext() {
  clearInterval(timeout);
  vw = window.innerWidth;
  if ($(window).width() <= 768) {
    $('.section').find('.nav-tabs').each(function () {
      if (!$(this).parent('div').hasClass('tabs-section')) {
        $(this).wrap("<div class='tabs-section'></div>");
      }
    });

    $('.section').find('.nav-tabs').each(function () {
      if (!$(this).siblings('div').hasClass('left-arrow')) {
        if ($(this).parent('div').parent('div').hasClass('link-area')) {
          checkWidth = $(this).parent('div').parent('div').width() + 90;
        } else {
          checkWidth = $(this).width() + 80; // add 40+40 of left right arrow //
        }
        if ($(window).width() < checkWidth || $(this).hasClass('sb-nav')) {
          var _self = $(this);
          $(this).after('<div class="right-arrow arrows-tab" id="right-tab"></div>');
          $(this).before('<div class="left-arrow arrows-tab" id="left-tab"></div>');
        }
      }
    });
    hideLeftArrow();
  }

  else if (checkOverflow($('.nav-tabs-override'))) {
    //console.log("nav Window width", $(window).width());
    $('.section .left-arrow').remove();
    $('.section .right-arrow').remove();
    $('.nav-tabs-override').closest('.section-inner').addClass('desktop-nav-tabs-override');
    $('.section').find('.nav-tabs-override').each(function () {
      let thisElement = $(this);
      if (!thisElement.parent('div').hasClass('tabs-section')) {
        setTimeout(function () {
          thisElement.wrap("<div class='tabs-section'></div>");
        }, 200);
      }
      setTimeout(function () {
        if (!thisElement.siblings('div').hasClass('left-arrow')) {
          if (thisElement.parent('div').parent('div').hasClass('link-area')) {
            checkWidth = thisElement.parent('div').parent('div').width() + 90;
          }
          else {
            checkWidth = thisElement.width() + 80; // add 40+40 of left right arrow //

          }
          //console.log("check W", checkWidth);
          if ($(window).width() < checkWidth || thisElement.hasClass('nav-tabs-override')) {
            //console.log("Check window width" + checkWidth);
            var _self = thisElement;
            thisElement.after('<div class="right-arrow arrows-tab" id="right-tab"></div>');
            thisElement.before('<div class="left-arrow arrows-tab" id="left-tab"></div>');
          }
        }
      }, 300);
    });
    setTimeout(function () {
      hideLeftArrow();
    }, 500);
  }
  else {
    $('.section .left-arrow').remove();
    $('.section .right-arrow').remove();
    $('.nav-tabs-override').closest('.section-inner').removeClass('desktop-nav-tabs-override');
  }
}

$(document).ready(function () {
  tabsprevnext();
  scrollHorizontalToActive($('.nav-tabs'))
  $(window).resize(function () {
    tabsprevnext();
  });

    if ($(window).width() <= 991) {
    
      $('.num-nav-tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var total_list=$(this).parent().parent().children('li').length;
        var parent_ul_id=$(this).parent().parent().attr('id');   
        scrollHorizontalToActive($('#'+parent_ul_id));    
      });

    }


});

$('.tabs-two-column .nav-tabs li').on('click', function () {
  parentEl = $(this).parent('ul');
  var index = $(parentEl).find('li').index($(this));
  $('.tabs-two-column .left-panel .card-panel').hide();
  $('.tabs-two-column .left-panel .card-panel:eq(' + index + ')').show();
  $('.tabs-two-column .right-panel .tab-pane').hide();
  $('.tabs-two-column .right-panel .tab-pane:eq(' + index + ')').show();
  // $('.loan-forms .form-slider').slick('refresh');
  // Call refresh again - Fix for distort design //
  // $('.loan-forms .form-slider').slick('refresh');
});
function checkOverflow(elem) {
  //19/02/21 Change greter than condition to >=
  // if (elem.prop("scrollWidth") >= elem.outerWidth()) {
    //19/02/21 End greater than condition
  //   return true;
  // } else {
  //   return false;
  // }


  //28/06/2021 change
  if(elem.length>0){
    const tabListEl = elem.find("> li");
    return tabListEl[0].offsetTop !== tabListEl[tabListEl.length-1].offsetTop;
  }
  
}
function scrollHorizontalToActive(nav_tab) {
  let subWidth = 0;
  if (nav_tab.hasClass('nav-tabs-override') || nav_tab.hasClass('sb-nav')) {
    //subWidth = 150;
  }
  var horizontal_width = nav_tab.scrollLeft();
  var current_tab_width = nav_tab.find('.active').width();
  var current_tab_left_offset = nav_tab.find('.active').offset().left;
  var extra_left_off = $(window).width() - current_tab_width;
  var scoll_width = horizontal_width + current_tab_left_offset - extra_left_off / 2 + 10;
  nav_tab.animate({ scrollLeft: scoll_width - subWidth }, 300);
  const activeNudge = nav_tab.find('.active a');
  const nudgeContent = activeNudge.data('nudge-content');
  const nudgeView = activeNudge.data('nudge-view');
  if (nudgeContent != undefined) {
    $('#' + nudgeView).show();
    $('#' + nudgeView).html('<p>' + nudgeContent + '</p>');
  }
  else {
    $('#' + nudgeView).hide();
  }
}