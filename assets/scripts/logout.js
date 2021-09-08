(function() {

var experience_rating = 0;
var rating_data = {};
var refer_data = {};
var selectedProdArray = [];

//cached selectors
var $submit_btn_exp = $('#submit_btn_exp');
var $overall_exp_feedback = $('#overall-exp-feedback');
var $refer_submit = $('#refer-submit');
var $overall_exp_comment = $('.overall-exp-comment');
var $ms_option_checkbox = $(".ms-options-wrap > .ms-options > ul input[type='checkbox']");
var $voucher_box = $('.voucher-box');
function validateAboutExperienceForm() {
  let enable_submit_btn = true;
  $submit_btn_exp.addClass('disable');
  const overall_experience = $('input[name="overall_experience"]:checked').val();
  const overall_experience_feedback = $overall_exp_feedback.val();
  const ease_logging = $('input[name="ease_logging"]:checked').val();
  const friendliness = $('input[name="friendliness"]:checked').val();
  const ease_transaction = $('input[name="ease_transaction"]:checked').val();
  const looking_in_website = $('input[name="looking_in_website"]:checked').val();
  const looking_in_website_feedback = $('#looking-in-website-feedback').val();
  const transction_attempt = $('input[name="transction_attempt"]:checked').val();
  const website_speed = $('input[name="website_speed"]:checked').val();
  const txt_suggestion = $('#txt_suggestion').val();
  checkMax(txt_suggestion, 'txt_sugg_err', 100);
  checkMax(overall_experience_feedback, 'overall-exp-feedback-err', 100);
  checkMax(looking_in_website_feedback, 'looking-in-website-feedback-err', 50);

  $('.looking-in-website-comment').addClass('hide');
  $overall_exp_comment.addClass('hide');
  let checkOverallFeedback = false;
  if (overall_experience == 'poor' || overall_experience == 'very-poor') {
    $overall_exp_comment.removeClass('hide');
    checkOverallFeedback = true;
  } else {
    $overall_exp_feedback.val('');
  }
  let checkLookingInFeedback = false;
  if (looking_in_website == 'No') {
    $('.looking-in-website-comment').removeClass('hide');
    checkLookingInFeedback = true;
  } else {
    $('#looking-in-website-feedback').val('');
  }
  if (
    !overall_experience ||
    !ease_logging ||
    !friendliness ||
    !ease_transaction ||
    !looking_in_website ||
    !transction_attempt ||
    !website_speed ||
    txt_suggestion == '' ||
    (checkLookingInFeedback && looking_in_website_feedback == '') ||
    (checkOverallFeedback && overall_experience_feedback == '')
  ) {
    enable_submit_btn = false;
  }

  if (enable_submit_btn) {
    rating_data['overall_experience'] = overall_experience;
    rating_data['overall_experience_feedback'] = overall_experience;
    rating_data['ease_logging'] = ease_logging;
    rating_data['friendliness'] = friendliness;
    rating_data['ease_transaction'] = ease_transaction;
    rating_data['looking_in_website'] = looking_in_website;
    rating_data['website_speed'] = website_speed;
    rating_data['txt_suggestion'] = txt_suggestion;
    $submit_btn_exp.removeClass('disable');
  }
}

//code change 02/02/2021
function validateReferVoucherForm() {
  let enable_submit_btn = true;
  //$refer_submit.addClass('disable');
  const friend_name = $('.friend_name').val();
  const friend_mobile_number = $('.friend_mobile_number').val();
  const friend_email = $('.friend_email').val();
  if (friend_name == '' || selectedProdArray.length == 0) {
    refer_data = {
      name: friend_name,
      mobile_number: friend_mobile_number,
      email: friend_email,
      product: selectedProdArray,
    };
    enable_submit_btn = false;
  }
  /*if (enable_submit_btn) {
    $refer_submit.removeClass('disable');
  }*/
}
//code change 02/02/2021 end

$(document).ready(function () {
  $('#product-select-button').remove();
  $('select[multiple]').multiselect({
    columns: 1,
    search: false,
    texts: {
      placeholder: 'Select a product',
    },
    showCheckbox: true,
    onOptionClick: function (element, option) {
      if (option.checked) {
        selectedProdArray.push(option.value);
      } else {
        const index = selectedProdArray.indexOf(option.value);
        if (index > -1) {
          selectedProdArray.splice(index, 1);
        }
      }
      validateReferVoucherForm();
    },
  });

  $ms_option_checkbox.click(function () {
    var countchecked = $(".ms-options-wrap > .ms-options > ul input[type='checkbox']:checked").length;
    if (countchecked >= 5) {
      $ms_option_checkbox.not(':checked').attr('disabled', true);
    } else {
      $ms_option_checkbox.not(':checked').attr('disabled', false);
    }
  });

  $('.rating-slider').not('.slick-initialized').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  /*  */
  $('.handpicked-slider').not('.slick-initialized').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.rating-slider .item').each(function (index) {
    $(this).on('click', function () {
      experience_rating = $(this).data('value');
      $('.rating-slider .num').each(function (index) {
        $(this).removeClass('active');
      });
      $(this).find('.num').addClass('active');
      $('.rate-us').removeClass('disable');
    });
  });

  $('.rate-us').on('click', function () {
    rating_data['rating'] = experience_rating;
    $('.logout-top').hide();
    $('.logout-bottom').hide();
    $('.blog-section').hide();
    $('#experience_rating').html(experience_rating);
    $('.rating-contents').removeClass('hide');
    $('.rating-heading').removeClass('hide');
    if (experience_rating > 6) {
      $('.high-rating-content').removeClass('hide');
    }
    window.scrollTo(0, 0);
  });

  $('#tell_your_exp').on('input', function (event) {
    if ($(this).val() != '') {
      $('#next_btn_exp').removeClass('disable');
    }
  });

  $('#next_btn_exp').on('click', function (e) {
    e.preventDefault();
    rating_data['txt_recommendation'] = $('#tell_your_exp').val();
    $('.rating-contents').addClass('hide');
    $('.rating-form-content').removeClass('hide');
    window.scrollTo(0, 0);
  });

  $submit_btn_exp.on('click', function (e) {
    e.preventDefault();
    $('.rating-form-content').addClass('hide');
    $('.thankyou-section').removeClass('hide');
    $('.rating-heading').addClass('hide');
    if (experience_rating > 6) {
      $('.hrate-content').removeClass('hide');
    } else {
      $('.Lrate-content').removeClass('hide');
    }
    window.scrollTo(0, 0);
  });

  /*$(".more_TNC").toggle(function() {
      $(this).text("less..").siblings(".tnc_more").show();
  }, function(){
      $(this).text("more..").siblings(".tnc_more").hide();
  });*/

  $('.more_TNC').click(function () {
    $voucher_box.height($voucher_box[0].scrollHeight);

    if ($('.tnc_more').css('display') == 'none') {
      $(this).text('less..').siblings('.tnc_more').show();
    } else {
      $(this).text('more..').siblings('.tnc_more').hide();
    }
  });

  $('form').on('focus', 'input[type=number]', function (e) {
    $(this).on('wheel.disableScroll', function (e) {
      e.preventDefault();
    });
  });

  $('#agree').click(function () {
    if (this.checked) {
      $refer_submit.removeClass('disable');
    } else {
      $refer_submit.addClass('disable');
    }
  });

  $refer_submit.on('click', function (e) {
    e.preventDefault();
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const friend_name = $('.friend_name').val();
    const friend_mobile_number = $('.friend_mobile_number').val();
    const friend_email = $('.friend_email').val();
    var inValidCount = 0;

    if (friend_name == '') {
      $('#fname-err').removeClass('hide');
      inValidCount++;
    } else {
      $('#fname-err').addClass('hide');
    }

    if (friend_mobile_number.length < 10) {
      $('#mobile-err').removeClass('hide');
      inValidCount++;
    } else {
      $('#mobile-err').addClass('hide');
    }

    if (friend_email != '') {
      if (!regEmail.test(friend_email)) {
        $('#email-err').removeClass('hide');
        inValidCount++;
      } else {
        $('#email-err').addClass('hide');
      }
    }

    if (selectedProdArray.length == 0) {
      $('#product-err').removeClass('hide');
      inValidCount++;
    } else {
      $('#product-err').addClass('hide');
    }

    if (inValidCount == 0) {
      //$('.voucher-content').addClass('hide');
      // $('.amazon-box').removeClass('hide');
      // window.scrollTo(0, 0);

      /*Custom code*/
      var formajax = $voucher_box.find('form').attr('ajax-page');
      //alert(formajax);
      var productId = [];
      productId = selectedProdArray;
      //alert(productId);
      //alert("product number..."+productId.length);
      var customerName = $voucher_box.find('form div input.friend_name').val();
      var words = customerName.split(' ');
      var customerFirstName;
      var customerLastName
      // alert(words.length);
      if (words.length == 1) {
        customerFirstName = customerName;
        customerLastName = customerName;
      } else {
        customerFirstName = customerName.substr(0, customerName.indexOf(' '));
        var k = customerName.substr(customerName.indexOf(' '));
        customerLastName = k.replace(/ /g, '');
      }

      var customerContactNo = $voucher_box.find('form div input.friend_mobile_number').val();
      var customerEmailId = $voucher_box.find('form div input.friend_email').val();
      //alert(customerFirstName);
      //alert(customerLastName);
      //alert(customerContactNo);
      //alert(customerEmailId);
      var callbackRequest;

      if (
        (typeof formajax != 'undefined' &&
          typeof productId != 'undefined' &&
          typeof customerFirstName != 'undefined' &&
          typeof customerLastName != 'undefined' &&
          typeof customerContactNo != 'undefined') ||
        typeof customerEmailId != 'undefined'
      ) {
        if (
          (formajax != null &&
            formajax != '' &&
            productId != null &&
            productId != '' &&
            customerFirstName != null &&
            customerFirstName != '' &&
            customerLastName != null &&
            customerLastName != '' &&
            customerContactNo != null &&
            customerContactNo != '') ||
          customerEmailId != null ||
          customerEmailId != ''
        ) {
          callbackRequest =
            formajax +
            'productCode=' +
            productId +
            '&custName=' +
            customerFirstName +
            '&lastName=' +
            customerLastName +
            '&custMobNo=' +
            customerContactNo +
            '&custEmail=' +
            customerEmailId;
        }
      }
      if (typeof callbackRequest != 'undefined') {
        if (callbackRequest != null && callbackRequest != '') {
          $.ajax({
            dataType: 'json',
            url: callbackRequest,
            type: 'POST',
            success: function (response) {
              getCallbackResults = response.getCallbackResults;
             
              var successFlag = 0;
             
              for (var i = 0; i < getCallbackResults.length; i++) {
                var crmServiceResponce = getCallbackResults[i].crmServiceResponce;
                var message = getCallbackResults[i].message;
                var crmItemKey = getCallbackResults[i].crmItemKey;
              
                if (typeof message != 'undefined' && typeof crmItemKey != 'undefined' && typeof crmServiceResponce != 'undefined') {
                  if (
                    message != null &&
                    message != '' &&
                    crmItemKey != null &&
                    crmItemKey != '' &&
                    crmServiceResponce != null &&
                    crmServiceResponce != ''
                  ) {
                    if (message == 'Success') {
                    
                      successFlag++;
                    }
                  }
                }
              }
              //alert(successFlag);
              //alert(productId.length);
              if (successFlag != 0 && productId.length >= successFlag) {
                $('.voucher-content').addClass('hide');
                $('.amazon-box').removeClass('hide');
              }
            },
            error: function () {
            
              if (inValidCount == 0) {
                $voucher_box.find('form p.note').removeClass('hide');
                $refer_submit.addClass('disable');
              }
              executed = false;
            },
          });
        }
      }
    }
  });

  $('#product-select').selectmenu({
    change: validateReferVoucherForm,
  });
});

$('.more').toggle(
  function () {
    $(this).text('less..').siblings('.complete').show();
  },
  function () {
    $(this).text('more..').siblings('.complete').hide();
  }
);

function copyCode(elementId, btnId, type) {
  var copyText = document.getElementById(elementId);
  var textArea = document.createElement('textarea');
  if (type == 'input') {
    copyText.disabled = false;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    copyText.disabled = true;
  } else {
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
  }
  document.execCommand('Copy');
  var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
  if (!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();
  textArea.remove();
  $('#' + btnId).html('copied');
}

$(window).resize(function () {
  lbCardsSlick();
  ltCardsSlick();
});

function lbCardsSlick() {
  if ($(window).width() > 991) {
    if ($('.lb-cards').hasClass('slick-initialized')) {
      $('.lb-cards').slick('unslick');
    }
    return true;
  }

  /*  $('.lb-cards')
    .not('.slick-initialized')
    .slick({
      dots: true,
      arrows: false,
      autoplay: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            centerPadding: '15px',
          },
        },
      ],
    }); */
}

function ltCardsSlick() {
  // code change 02/02/2021
  if ($(window).width() > 991) {
    if ($('.lt-cards').hasClass('slick-initialized')) {
      $('.lt-cards').slick('unslick');
    }
    return true;
  }
  $('.lt-cards').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    adaptiveHeight: false,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '10px',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 10,
    asNavFor: '.card-nav',
  }),
    $('.card-nav').slick({
      infinite: false,
      arrows: false,
      variableWidth: true,
      slidesToScroll: 2,
      asNavFor: '.lt-cards',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
    }),
    // code added on 08/06/2021
    $('.lb-cards').slick({
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: false,
      adaptiveHeight: false,
      centerMode: true,
      slidesToShow: 1,
      centerPadding: '10px',
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      margin: 10,
  }),
  // code added on 08/06/2021 end
    $('.logout-top .card-nav > div').click(function () {
      $('.lt-cards').slick('slickGoTo', $(this).index());
    });

  // code added on 08/06/2021
  // $('.lt-cards').slick('slickRemove', 0);
  $('.lt-cards').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.rate-icon').removeClass('active');
    $('.share-icon').removeClass('active');
    $('.refer-icon').removeClass('active');

    if (nextSlide == 0) {
      $('.rate-icon').addClass('active');
    } else if (nextSlide == 1) {
      $('.share-icon').addClass('active');
    } else if (nextSlide == 2) {
      $('.refer-icon').addClass('active');
    }
  });
  // code change end 08/06/2021

  equalizeSliderHeight('.lt-cards');
}
$('#tell_your_exp').on('change keydown paste input', function () {
  checkMax($('#tell_your_exp').val(), 'tell_your_exp_err', 100);
});
/*code change 02/02/2021*/
$('.letters_validate').on('input', function (e) {
  this.value = this.value.replace(/[^a-zA-Z .]/g, '');
});
$('.numbers_validate').on('keypress', function (e) {
  return numberValidate(e);
});
/*code change 02/02/2021 end*/
// allow only charachters and space
function lettersValidate(e) {
  e = e ? e : window.event;
  var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
  var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
  var str = e.type && e.type == 'paste' ? clipboardData.getData('Text') : String.fromCharCode(key);

  return /^[a-zA-Z\s]*$/.test(str);
}

function numberValidate(e) {
  if (e.currentTarget.value.length >= 10) {
    return false;
  }

  e = e ? e : window.event;
  var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
  var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
  var str = e.type && e.type == 'paste' ? clipboardData.getData('Text') : String.fromCharCode(key);

  return /^\d+$/.test(str);
}

function equalizeSliderHeight(slider) {
  const slides = $(slider).find('.slick-slide');
  let maxheight = 0;
  slides.each(function (index) {
    maxheight = maxheight > slides[index].clientHeight ? maxheight : slides[index].clientHeight;
  });
  slides.each(function (index) {    
    $(this).css({ height: maxheight });
  });
}

/*  02/07/2021 */
$( window ).unload(function() {
	$ms_option_checkbox.off("click");
	$(".more_TNC").off("click");
	$("#agree").off("click");
	$(".logout-top .card-nav > div").off("click");
});

})();