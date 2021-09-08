/* form-slider' */
$('.loan-forms .form-slider').slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            }
        }
    ],
    onInit: function() {
        $('.slick-next .slick-arraow').css('pointer-events', 'none');
    },
});

function deactiveArrow(){
  $('.form-slider .slick-arrow').addClass('arrow-disable');
}

function activateArrow(){
  $('.form-slider .slick-arrow').removeClass('arrow-disable');
}

function showFormError(){
  $('.form-slider .slick-active').find('.form-group-inner').addClass("error");
}

var disableEventsClass = 'disable-el';
function disableSlickDots(index) {
  $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
  $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass);
}

function enableSlickDot(index) {
  $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
  $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass);
}

function validateMobile($this){
  flag = false;
  msg = '';
  mobile = $($this).val();
  if($.trim(mobile) == ''){
    disableSlickDots(2);
  }else if(! $.isNumeric(mobile)){
    showFormError()
    msg = "Please enter valid Mobile number";
    $($this).addClass('error');
    disableSlickDots(2);
  }else if (mobile.length < 10){
    showFormError()
    msg = "Please enter valid Mobile number";
    $($this).addClass('error');
    disableSlickDots(2);
  }else{
    $($this).removeClass('error');
    $('.form-slider .slick-active').find('.form-group-inner').removeClass("error");
    activateArrow();
    enableSlickDot(2);
    flag = true;
  }
  $('.error-msg').html(msg); 
  return flag;
 }

 function validateName($this){
  flag = false;
  msg = '';
  var regName = /^[a-zA-Z ]+$/;
  name = $($this).val();
  if($.trim(name) == ''){
    disableSlickDots(1);
    disableSlickDots(2);
  }else if(!regName.test(name)){
    showFormError();
    msg = "Please enter valid Name";
    $($this).addClass('error');
    disableSlickDots(1);
    disableSlickDots(2);
  }else{
    $($this).removeClass('error');
    $('.form-slider .slick-active').find('.form-group-inner').removeClass("error");
    activateArrow();
    enableSlickDot(1);
    $('.slick-dots').show();
    flag = true;
  }
  $('.error-msg').html(msg); 
  return flag;
 }

 function validateEmail($this){
  flag = false;
  msg = '';
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email = $($this).val();
  if($.trim(email) == ''){
    // showFormError();
    // msg = "Please enter Email ID";
    // $($this).addClass('error');
    // enableSlickDot(2);
  }else if(!regEmail.test(email)){
    showFormError();
    msg = "Please enter valid Email ID";
    $($this).addClass('error');
    // disableSlickDots(0);
  }else{
    $($this).removeClass('error');
    $('.form-slider .slick-active').find('.form-group-inner').removeClass("error");
    activateArrow();
    $('.slick-dots').show();
    flag = true;
  }
  $('.error-msg').html(msg); 
  return flag;
 }

var timeout = 0;

$( window ).on('load resize orientationchange', function() {
  clearInterval(timeout)
  
  $('.form-slider').on('afterChange', function(event, slick, currentSlide){
    if(currentSlide == 3){
      if(!validateMobile($('.input-mobile')))
      $('.form-slider').slickGoTo( parseInt(0) );
      else if(!validateName($('.input-name')))
      $('.form-slider').slickGoTo( parseInt(1) );
      else if(!validateEmail($('.input-email')))
      $('.form-slider').slickGoTo( parseInt(2) );
      else{
        $('#offer-form-mob').trigger("reset");
        $('#offer-form').trigger("reset");
      }
    }
    if(currentSlide == 0){
      if(!validateName($('.input-name')))
      deactiveArrow();
      else
      activateArrow();
    }
    else if(currentSlide == 1){
      if(!validateMobile($('.input-mobile')))
      deactiveArrow();
      else
      activateArrow();
    }
    else if(currentSlide == 2){
      if(!validateEmail($('.input-email')))
      deactiveArrow();
      else
      activateArrow();
    }else{
      $('#offer-form').trigger("reset");
      $('#offer-form-mob').trigger("reset");
    }
  });

  $('form input').on('keyup',function(){
    deactiveArrow();
    if($(this).hasClass('input-mobile')){
      validateMobile($(this));
    }else if($(this).hasClass('input-name')){
      validateName($(this));
    }else if($(this).hasClass('input-email')){
      validateEmail($(this));
    }
  });

  deactiveArrow();
  disableSlickDots(1);
  disableSlickDots(2);

  $('.form-slider .slick-dots li').last().hide();

  $('.slick-arrow').on('click',function(e){
    if($(this).hasClass('arrow-disable')){
      e.preventDefault();
    }
  });
});


