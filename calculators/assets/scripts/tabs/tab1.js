var disableEventsClass="disable-el";function deactiveArrow(){$(".form-slider .slick-arrow").addClass("arrow-disable")}function activateArrow(){$(".form-slider .slick-arrow").removeClass("arrow-disable")}function showFormError(){$(".form-slider .slick-active").find(".form-group-inner").addClass("error")}function disableSlickDots(index){$("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass),$("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass)}function enableSlickDot(index){$("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass),$("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass)}function validateMobile($this){return flag=!1,msg="",mobile=$($this).val(),""==$.trim(mobile)?disableSlickDots(2):$.isNumeric(mobile)?mobile.length<10?(showFormError(),msg="Please enter valid Mobile number",$($this).addClass("error"),disableSlickDots(2)):($($this).removeClass("error"),$(".form-slider .slick-active").find(".form-group-inner").removeClass("error"),activateArrow(),enableSlickDot(2),flag=!0):(showFormError(),msg="Please enter valid Mobile number",$($this).addClass("error"),disableSlickDots(2)),$(".error-msg").html(msg),flag}function validateName($this){flag=!1,msg="";var regName=/^[a-zA-Z ]+$/;return name=$($this).val(),""==$.trim(name)?(disableSlickDots(1),disableSlickDots(2)):regName.test(name)?($($this).removeClass("error"),$(".form-slider .slick-active").find(".form-group-inner").removeClass("error"),activateArrow(),enableSlickDot(1),$(".slick-dots").show(),flag=!0):(showFormError(),msg="Please enter valid Name",$($this).addClass("error"),disableSlickDots(1),disableSlickDots(2)),$(".error-msg").html(msg),flag}function validateEmail($this){flag=!1,msg="";var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return email=$($this).val(),""==$.trim(email)||(regEmail.test(email)?($($this).removeClass("error"),$(".form-slider .slick-active").find(".form-group-inner").removeClass("error"),activateArrow(),$(".slick-dots").show(),flag=!0):(showFormError(),msg="Please enter valid Email ID",$($this).addClass("error"))),$(".error-msg").html(msg),flag}var timeout=0;$(window).on("load resize orientationchange",(function(){clearInterval(timeout),$("#myTab li").on("click",(function(){$("#myTab > li:eq(0)").hasClass("active")?$(".find-right-product-section .notification-alert").show():$(".find-right-product-section .notification-alert").hide(),$(".loan-forms .form-slider").slick("refresh"),$(".loan-forms .form-slider").slick("refresh")})),$("#myTab1 li").on("click",(function(){var index=$("#myTab1 li").index($(this));$(".loan-forms .form-slider").slick("refresh"),$(".loan-forms .form-slider").slick("refresh")})),$(".form-slider").on("afterChange",(function(event,slick,currentSlide){0==currentSlide?validateName($(".input-name"))?activateArrow():deactiveArrow():1==currentSlide?validateMobile($(".input-mobile"))?activateArrow():deactiveArrow():2==currentSlide?validateEmail($(".input-email"))?activateArrow():deactiveArrow():($("#offer-form").trigger("reset"),$("#offer-form-mob").trigger("reset"))})),$("form input").on("keyup",(function(){deactiveArrow(),$(this).hasClass("input-mobile")?validateMobile($(this)):$(this).hasClass("input-name")?validateName($(this)):$(this).hasClass("input-email")&&validateEmail($(this))})),deactiveArrow(),disableSlickDots(1),disableSlickDots(2),$(".form-slider .slick-dots li").last().hide(),$(".slick-arrow").on("click",(function(e){$(this).hasClass("arrow-disable")&&e.preventDefault()}))})),$(document).ready((function(){$(".Loan2").hide(),$(".Loan3").hide(),$(".Loan4").hide(),$(".desktop-section .find-right-product .tabpanel-inner").hide(),$(".desktop-section .find-right-product .tabpanel-inner:eq(0)").show(),selectArray=[],setArray=[];var option="",selectedIndex="",arrayOne=["Loan1","Loan2"];arrayTwo=["Loan3","Loan4"],selectArray.push(arrayOne),selectArray.push(arrayTwo),$(".intSelectTwo").selectmenu(),$(".intSelectOne").selectmenu({change:function(event,ui){selectedIndex=parseInt($(this).val()),setArray=selectArray[selectedIndex],option="",$.each(setArray,(function(key,value){option+="<option value="+value+">"+value+"</option>"})),setOption='<option value="">-Select-</option>'+option,$(".intSelectTwo").selectmenu("destroy"),$(".intSelectTwo").html(setOption),$(".intSelectTwo").selectmenu({change:function(event,ui){innerTabPanel=$(this).val(),""!=innerTabPanel&&null!=innerTabPanel&&($(".find-right-product .tabpanel-inner").hide(),$(".find-right-product .tabpanel-inner .card-panel").hide(),$(".find-right-product .tabpanel-inner."+innerTabPanel).show(),leftPanelDiv=$("."+innerTabPanel).find(".left-panel"),$(leftPanelDiv).find(".card-panel").hide(),$(leftPanelDiv).find(".card-panel:eq(0)").show(),rightPanelDiv=$("."+innerTabPanel).find(".right-panel"),$(rightPanelDiv).find(".tab-content .tab-pane").removeClass("active"),$(rightPanelDiv).find(".tab-content .tab-pane:eq(0)").addClass("active"),$(rightPanelDiv).find(".tab-content .tab-pane:eq(0) .card-panel").show(),$(rightPanelDiv).find(".nav-tabs li").removeClass("active"),$(rightPanelDiv).find(".nav-tabs li:eq(0)").addClass("active"),$(".loan-forms .form-slider").slick("refresh"),$(".loan-forms .form-slider").slick("refresh"))}})}}),deactiveArrow(),disableSlickDots(1),disableSlickDots(2),$(".nav-tabs li").on("click",(function(){$(".tab-pane .active .card-panel").length>0&&$(".tab-pane .active .card-panel").show()}))}));