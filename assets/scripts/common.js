($.fn.equalHeights = function () {
	var max_height = 0;
	$(this).each(function () {
		max_height = Math.max($(this).height(), max_height);
	}),
		$(this).each(function () {
			$(this).height(max_height);
		});
}),
	$(
		(function ($, win) {
			$.fn.inViewport = function (cb) {
				return this.each(function (i, el) {
					function visPx() {
						var H = $(this).height(),
							r = el.getBoundingClientRect(),
							t = r.top,
							b = r.bottom;
						return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
					}
					visPx(), $(win).on("resize scroll", visPx);
				});
			};
		})(jQuery, window)
	);

/**
 * Window Load added
 */
/*  $(window).on('load', function(){
	 //Remove Banner Loading class
	 $('.banner-card-section').removeClass('loading-banner');
 }); */

/* accordion */
$(document).ready(function () {
	$(".card-accordion .btn-group a").on("click", function (e) {
		e.preventDefault();
		var wrapper = $(this).closest(".card-accordion");
		if (wrapper.length > 0) {
			$(this).siblings().addClass("active");
			$(this).removeClass("active");
			if ($(this).hasClass("expand-all")) {
				wrapper.find(".accordion-list .accordion-head").addClass("active");
				wrapper.find(".accordion-list .accordion-content").slideDown(200);
			} else {
				wrapper.find(".accordion-list .accordion-head").removeClass("active");
				wrapper.find(".accordion-list .accordion-content").slideUp(200);
			}
		}
	});
	/**
	 * Code Update start
	 * date : 17/02/2021
	 */
	$('a.scroll-to-content[href^="#"]').on("click", function (e) {
		e.preventDefault();
		var target = $(this).attr("href").replace("#", "");

		var target_offset =
			($("#" + target).offset() && $("#" + target).offset().top) ||
			($("." + target).offset() && $("." + target).offset().top);
		var header_offset = $(".header-menu").outerHeight() * 2;
		$("html, body").animate(
			{
				scrollTop: target_offset - header_offset,
			},
			"slow"
		);
	});
	$(".open-target").on("click", function () {
		$(this).data("target") ? $($(this).data("target")).show() : "";
	});
	$(".close-target").on("click", function () {
		$(this).data("target") ? $($(this).data("target")).hide() : "";
	});
	/**
	 * Code Update end
	 * date : 17/02/2021
	 */
	$(
		".accordion:not(.default-none) .accordion-list:first-child .accordion-head"
	).addClass("active");
	$(
		".accordion:not(.default-none) .accordion-list:first-child .accordion-content"
	).show();

	// code change 13/01/2020
	$(
		".offer-bottom-content .accordion .accordion-list:first-child .accordion-head"
	).removeClass("active");
	$(
		".offer-bottom-content .accordion .accordion-list:first-child .accordion-content"
	).hide();
	// end code change 13/01/2020

	$(".accordion-list .accordion-head").on("click", function () {
		let thisElement = $(this);
		if (thisElement.hasClass("active")) {
			thisElement.removeClass("active");
			thisElement.siblings(".accordion-content").slideUp(200);
		} else {
			$(".accordion-list .accordion-head").removeClass("active");
			thisElement.addClass("active");
			$(".accordion-content").slideUp(200);
			thisElement.siblings(".accordion-content").slideDown(200, function () {
				$("html, body").animate(
					{
						scrollTop:
							thisElement.offset().top - ($(".new-header").height() + 50),
					},
					"slow"
				);
			});
		}
	});

	/**
	 * Share Global Functionality Start
	 */
	$(document).on(
		"click",
		".bookmark-share .share,.bookmark-share .close-icon,.bookmark-share .youtube-text span",
		function (event) {
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				var shareUrl = $(this)
					.siblings(".share-content")
					.find(".youtube-text input")
					.val();
				/* Code start 22/02/2021 */
				var dataTitle = $(this).data("title");
				var dataText = $(this).data("text");
				var dataUrl = $(this).data("url");
				if (navigator.share) {
					navigator.share({
						title: dataTitle || "ICICI",
						text: dataText || "Check out this video",
						url: dataUrl || shareUrl,
					});
				}
				/* Code end 22/02/2021 */
			} else {
				$(".share-content").removeClass("active");
				if (this.className == "share")
					$(this).siblings(".share-content").addClass("active");
				else if (this.className == "close-icon")
					$(this).closest(".share-content").removeClass("active");
				else {
					var copyText = $(this).siblings("input");
					copyText.select();
					document.execCommand("copy");
				}
			}
		}
	);
	$(document).click(function (event) {
		var $target = $(event.target);
		if (
			!$target.closest(".share-content").length &&
			!$target.closest(".bookmark-share .share").length
		) {
			$(".share-content").removeClass("active");
		}

		// Most View Popup
		/* Code added 01/07/2021 */
		if (!$target.closest(".sort-tools").length && $(".dropdown-wrapper").is(":visible")) {
			$(".sort-dropdown span").removeClass("active");
			$(".dropdown-wrapper").hide();
		}
	});
	/**
	 * Share Global Functionality End
	 */

	/**
	 * Search Global UI Changes Start
	 */
	$(".search-box-area input").focus(function () {
		$(".search-container").addClass("active");
		$(".search-listing ul").show();
		$(".search-box-area input").val("");
		$(".search-listing").addClass("active");
		$(".quetion-list").html("");
	});
	$(document).click(function (event) {
		var $target = $(event.target);
		if (
			!$target.closest(".search-listing").length &&
			!$target.closest(".search-box-area input").length &&
			$(".search-listing").hasClass("active")
		) {
			$(".search-container").removeClass("active");
			$(".search-listing").removeClass("active");
			$(".search-box-area input").val("");
		}
		$(".search-listing .search-overlay-area").click(function () {
			if ($(".search-listing").hasClass("active")) {
				$(".search-container").removeClass("active");
				$(".search-listing").removeClass("active");
				$(".search-box-area input").val("");
			}
		});
	});
	/**
	 * Search Global UI Changes End
	 */
});

$.fn.isOnScreen = function () {
	var win = $(window);
	var viewport = {
		top: win.scrollTop(),
		left: win.scrollLeft(),
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return !(
		viewport.right < bounds.left ||
		viewport.left > bounds.right ||
		viewport.bottom < bounds.top ||
		viewport.top > bounds.bottom
	);
};

function searchItems(itemsArray, key, inputText, startsWith) {
	var tempItemArray = [];
	for (let index = 0; index < itemsArray.length; index++) {
		let itemKeyValue = itemsArray[index][key];
		if (startsWith) {
			if (itemKeyValue.toUpperCase().startsWith(inputText.toUpperCase()))
				tempItemArray.push(itemsArray[index]);
		} else if (itemKeyValue.toUpperCase().includes(inputText.toUpperCase())) {
			tempItemArray.push(itemsArray[index]);
		}
	}
	return tempItemArray;
}

function generateSearchResult(
	resultArray,
	inputText,
	key,
	ulElement,
	aTagFlag
) {
	$(ulElement).html("");
	for (let index = 0; index < resultArray.length; index++) {
		var listItem = resultArray[index][key];
		listItem = listItem.replace(inputText, "<b>" + inputText + "</b>");
		if (aTagFlag)
			$(
				"<li><a href='" +
				element["link"] +
				"' target='_blank'>" +
				listItem +
				"</a></li>"
			).appendTo(ulElement);
		else $("<li>" + listItem + "</li>").appendTo(ulElement);
	}
}

function generateFilterTags(filterDiv, filterId) {
	$(filterDiv).html("");
	var filterHtml = '<span class="filter-clear">CLEAR ALL</span>',
		filterText = "";
	if (filterId.length > 0) {
		if (Array.isArray(filterId)) {
			for (let index = 0; index < filterId.length; index++) {
				var element = filterId[index];
				filterText = $("[value=" + element + "]")
					.first()
					.closest(".checkbox-list")
					.text()
					.trim();
				// code change 30-11-2020
				if (filterText == "") {
					filterText = $("[value=" + element + "]")
						.first()
						.closest(".checkbox-popup-list")
						.text()
						.trim();
				}
				//end code change 30-11-2020
				filterHtml +=
					'<span data-filter="' +
					element +
					'">' +
					filterText +
					' <img src="assets/images/icons/close-black.svg" alt="" /></span>';
			}
		} else {
			filterText = $("#" + filterId)
				.text()
				.trim();
			filterHtml +=
				'<span data-filter="' +
				filterId +
				'">' +
				filterText +
				' <img src="assets/images/icons/close-black.svg" alt="" /></span>';
		}
	}

	$(filterDiv).html(filterHtml);
}

function copyCode(elementId, btnId, type) {
	var copyText = document.getElementById(elementId);
	var textArea = document.createElement("textarea");
	if (type == "input") {
		copyText.disabled = false;
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		copyText.disabled = true;
	} else {
		textArea.value = copyText.textContent;
		document.body.appendChild(textArea);
		textArea.select();
	}
	document.execCommand("Copy");
	var selection = window.getSelection
		? window.getSelection()
		: document.selection
			? document.selection
			: null;
	if (!!selection)
		selection.empty ? selection.empty() : selection.removeAllRanges();
	textArea.remove();
	$("#" + btnId).html("copied");
}

function checkMax(inputText, errorMsgId, maxLength) {
	var msg = "";
	if (inputText.length === 0) {
		msg = "Max limit is " + maxLength + " characters.";
	} else {
		msg = "Remaining characters: " + Math.max(maxLength - inputText.length, 0);
	}
	document.getElementById(errorMsgId).innerHTML = msg;
}

//scroll to start of container
jQuery.fn.scrollCenterORI = function (elem, speed) {
	jQuery(this).animate(
		{
			scrollLeft:
				jQuery(this).scrollLeft() -
				jQuery(this).offset().left +
				jQuery(elem).offset().left,
		},
		speed == undefined ? 1000 : speed
	);
	return this;
};

//scroll to center of container
jQuery.fn.scrollCenter = function (elem, speed) {
	// this = #timepicker
	// elem = .active

	var active = jQuery(this).find(elem); // find the active element
	//var activeWidth = active.width(); // get active width
	var activeWidth = active.width() / 2; // get active width center

	//alert(activeWidth)

	//var pos = jQuery('#timepicker .active').position().left; //get left position of active li
	// var pos = jQuery(elem).position().left; //get left position of active li
	//var pos = jQuery(this).find(elem).position().left; //get left position of active li
	var pos = active.position().left + activeWidth; //get left position of active li + center position
	var elpos = jQuery(this).scrollLeft(); // get current scroll position
	var elW = jQuery(this).width(); //get div width
	//var divwidth = jQuery(elem).width(); //get div width
	pos = pos + elpos - elW / 2; // for center position if you want adjust then change this

	jQuery(this).animate(
		{
			scrollLeft: pos,
		},
		speed == undefined ? 1000 : speed
	);
	return this;
};
/* 20-01-2021 start */

/* update-href-device */
function updateLink() {
	$(".update-href-device").each(function () {
		if ($(window).width() > 767) {
			var ipadlink = $(this).data("ipad");
			$(this).attr("href", ipadlink);
		}
		if ($(window).width() <= 767) {
			var mobLink = $(this).data("mob");
			$(this).attr("href", mobLink);
		}
	});
}

/* cross-sell-popup */
function crosssellPopup() {
	setTimeout(function () {
		$(".cross-sell-popup").show();
	}, 5000);
	$(".cross-sell-popup .close").click(function () {
		$(".cross-sell-popup").hide();
	});
}

$(window).on("load resize orientationchange", function () {
	updateLink();
	crosssellPopup();
	/* 23/06/2021  code update start */
	if ($(window).width() < 991) {
		$("body").toggleClass(
			"notification-enabled",
			$(".download-notification").length &&
				$(".download-notification").is(":visible")
				? true
				: false
		);
	}
	/* 23/06/2021  code update End */
});
/* 20-01-2021 End */

/* 15-03-2021 start */
/* download-notification */
$(document).ready(function () {
	/* 23/06/2021 comment code */
	/* if ($(window).width() < 991) {
		$("body").toggleClass(
			"notification-enabled",
			$(".download-notification").length &&
				$(".download-notification").is(":visible")
				? true
				: false
		);
	} */
	/* 23/06/2021 comment end */
	$(".download-notification .close").click(function () {
		$("body").removeClass("notification-enabled");
		$(".download-notification").hide();
	});
});
/* 15-03-2021 End */

/*  22-03-2021: Notfication Experience now button code*/
function downloadapp() {
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {

		$(".smartphone-btn").attr(
			"href",
			"https://apps.apple.com/us/app/apple-store/id375276006"
		);
		//$(".smartphone-android").addClass("hide");
	} else if (navigator.userAgent.match(/(Android)/)) {

		$(".smartphone-btn").attr(
			"href",
			"https://play.google.com/store/apps/details?id=com.csam.icici.bank.imobile&hl=en_US&gl=US"
		);
		//$(".smartphone-ios").addClass("hide");
	} else {
	}
	$(".smartphone-btn").click(function (e) {
		var x = this;
		e.preventDefault();
		setTimeout(function () { if (windowHasFocus) { window.location = x.getAttribute('href'); } }, 50);
		window.location = "imobileapp://";
	});
}
$(window).on("load resize", function () {
	downloadapp();
	//check for imobileapp installation status 30-04-2021
	// !function(){
	// 	var script = document.createElement('script'); 
	// 	script.id = "imobileappscheme";
	// 	script.onload = function() { 
	// 		$(".smartphone-btn").text('Experience now');
	// 		(elem=document.getElementById("imobileappscheme")).parentNode.removeChild(elem);
	// 	} 
	// 	script.onerror = function() { 
	// 		$(".smartphone-btn").text('Download');
	// 		(elem=document.getElementById("imobileappscheme")).parentNode.removeChild(elem);
	// 	} 
	// 	script.setAttribute('src', "imobileapp://"); 
	// 	document.getElementsByTagName('head')[0].appendChild(script);
	// }();
});
/* 22-03-2021 end */

/* 16/04/2021 */
// Tooltips
/* $(".tooltips").each(function () {
	$(this).tooltip({
		html: true,
		title: $("#" + $(this).data("tooltips")).html(),
	});
}); */

var windowHasFocus;
$(window).focus(function () {
	windowHasFocus = true;
}).blur(function () {
	windowHasFocus = false;
});

/* 13/05/2022 */
/* WOW  */
new WOW().init();

/* 21/05/2021 */

var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
if ($(window).width() < 767) {
	if (isMobile.Android()) {
		$('.ios-link').addClass("hide-link");
	};
	if (isMobile.iOS()) {
		$('.android-link').addClass("hide-link");
	};
}

//code update: 06/07/2021
//nav-dropdown
var mouseOnMore;
function leaveMoreBreadcrum() {
	setTimeout(function () {
		if (!mouseOnMore) {
			$(".nav-dropdown").removeClass("active");
			$(".breadcrumb-nav .nav-dropdown-content").hide();
		}
	}, 200);
}
$(".breadcrumb-nav .nav-dropdown").on("click mouseover", function () {
	$(this).addClass("active");
	$(".breadcrumb-nav .nav-dropdown-content").hide();
	currentID = $(this).attr("id");
	$("#dropdown-" + currentID).show();
});
$(".breadcrumb-nav .nav-dropdown").on("mouseleave", leaveMoreBreadcrum);
$(".nav-dropdown-content").on("mouseover", function () {
	mouseOnMore = true;
});
$(".nav-dropdown-content").on("mouseleave", function () {
	mouseOnMore = false;
	leaveMoreBreadcrum();
});

/* 24/08/2021 codeupdate start */
const breadcrumbEl = $(".breadcrumb-nav");
if (breadcrumbEl.length) { //update 21/07/2021
	const bcElBottomOffset = (breadcrumbEl.get(0).offsetTop + breadcrumbEl.get(0).offsetHeight) + 30;
	$(window).on("scroll", function () {
		const mainMenuEl = $(".header-menu").get(0);
		if ((window.pageYOffset + mainMenuEl.offsetHeight) > bcElBottomOffset) {
			breadcrumbEl.addClass('sticky');
			$("body").addClass("breadcrumb-sticky")
		} else {
			breadcrumbEl.removeClass('sticky');
			$("body").removeClass("breadcrumb-sticky")
		}
	});
}
/* 24/08/2021 codeupdte end */

/*code update: 06/07/2021 */

/* 02/08/2021 */
$(".quick-popup").on("click", function () {
	$(this).addClass("hide")
	$(".quick-action").addClass("active");
	$(".quick-popup-content ").removeClass("hide");
})

$(".quick-action .close").on("click", function () {
	$(".quick-popup").removeClass("hide")
	$(".quick-action").removeClass("active");
	$(".quick-popup-content ").addClass("hide");
})
$(".quick-popup-content ul li").on("click", function () {
	$(".quick-popup").removeClass("hide")
	$(".quick-action").removeClass("active");
	$(".quick-popup-content ").addClass("hide");
});

/* popup */
$(".popupLink").on("click", function () {
	$(this).addClass("active");
	currentID = $(this).attr("id");
	$("#imodal-" + currentID).show();
	$("body").addClass("no-scroll")
});

$(".imodal-close").on("click", function () {
	$(".imodal-popup").hide();
	$("body").removeClass("no-scroll")
});

/* push-popup */
$(".push-popup .push-btn").on("click", function () {
	$(".push-popup").hide();
})