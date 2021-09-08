let loadedCards = [];
let cardDetails = {};
($.fn.equalMaxHeights = function () {
    var max_height = 0;
    $(this).height('auto')
    $(this).each(function () {
        max_height = Math.max($(this).outerHeight(), max_height);
    }),
        $(this).each(function () {
            $(this).height(max_height);
        });
})

$(window).on("resize orientationchange", function () {
    setCompareHeight();
});

$(window).on("load", function () {
    setCompareHeight();
    var hashData = window.location.hash.split('#').filter(function (v) { return v !== '' });
    if (hashData.length > 0) {
        loadedCards = hashData;
    }
    setTimeout(function () {
        populateCompare();
    }, 250)
});

function setCompareHeight() {
    $(".comparing-cards-section .comparing-cards").each(function () {
        $(this).find(".comparing-column .cards").equalMaxHeights();
        $(this).find(".comparing-column .cards .card-title").equalMaxHeights();
        $(this).find(".comparing-column .content").equalMaxHeights();
       /*  $(this).find(".comparing-column").equalHeights(); */
    });
    for(var i=0; i< $(".comparing-cards-section .compare-left-heading").find(".comparing-block.content").length -1; i++){
        $('.comparing-column').find('.comparing-block.content:eq('+i+')').equalMaxHeights();
    }
}

function popupSlider() {
    $(".popup-card-slider .card-slider").not(".slick-initialized").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: !0,
                    arrows: !1,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    dots: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}



$(document).ready(function () {
    loadCardData();

    $(document).on('click', '.empty-card-content', function () {
        $(".comparing-card-popup").show();
        $("body").addClass("no-scroll");
        popupSlider();
        $('.comparing-card-popup .popup-body').mCustomScrollbar();
        showLoaded();
    })

    $(".comparing-card-popup .close").click(function () {
        $(".comparing-card-popup").hide();
        $("body").removeClass("no-scroll");
    })

    $(".checkbox-list.addcompare").click(function () {
        $(".creditcard-toast").show();
    })
    $('.checkbox-list.addcompare input').click(function () {
        var id = $(this).parent().attr('id');
        if ($(this).is(':checked')) {
            addCardToCompare(id);
        } else {
            removeCardFromCompare(id);
        }
    })
    $(".creditcard-toast .removecard").click(function () {
        $(".creditcard-toast").hide();
        removeCardFromCompare('all');
        setCompareHeight();
    });

    $(".filter-dropdown").click(function () {
        $(this).toggleClass("active");
        $(".filter-dropdown-content").toggleClass("hide");
    })

    $('.selected-card li .close').click(function () {
        removeCardFromCompare($(this).parent().attr('data-id'));
    })
    $('.comparecard').click(function () {
        populateCompare();
        $(".comparing-card-popup, .creditcard-toast").hide();
        $("body").removeClass("no-scroll");

    })
    $('.removeFromCompare').click(function () {
        removeCardFromCompare($(this).closest('.comparing-column.compare-content').attr('data-id'));
        $(this).closest('.comparing-column.compare-content').find('.comparing-block').addClass('hide');
        $(this).closest('.comparing-column.compare-content').addClass('empty-card-content').find('.empty-cards').removeClass('hide');
        return false;
    })
    $('.replaceCompare').click(function () {
        removeCardFromCompare($(this).closest('.comparing-column.compare-content').attr('data-id'));
        $(".comparing-card-popup").show();
        $("body").addClass("no-scroll");
        popupSlider();
        $('.comparing-card-popup .popup-body').mCustomScrollbar();
        showLoaded();
    })
    $('.redirectToCompareCard').click(function (e) {
        var redirectData = '';
        $.each(loadedCards, function (index, id) {
            redirectData += '#' + id;
        })
        $(this).attr('href', $(this).attr('href') + '?' + redirectData);
    })
})

function addCardToCompare(id) {
    if ($.inArray(id, loadedCards) === -1) {
        if (loadedCards.length < 3) {
            loadedCards.push(id);
        }
        else {
            var empty_index = $.inArray("", loadedCards);
            if (empty_index > -1)
                loadedCards[empty_index] = id;
            else
                alert('You have already selected 3 itemss')
        }
        showLoaded();
    } else {
        alert('You have already selected this item')
    }
}

function removeCardFromCompare(id) {
    if (id == 'all') {
        loadedCards = [];
        populateCompare();
    } else {
        if ($.inArray(id, loadedCards) !== -1) {
            loadedCards[$.inArray(id, loadedCards)] = '';
        }
    }
    showLoaded();
}

function populateCompare() {
    var cardData = getCardDetail();
    $('.comparing-column.compare-content').each(function (index) {
        if (cardData[index]) {
            $(this).removeClass('empty-card-content').find('.comparing-block.empty-cards').addClass('hide');
            $(this).find('.comparing-block').not('.empty-cards').removeClass('hide');
            populateCompareData($(this), cardData[index]);
        } else {
            $(this).addClass('empty-card-content').find('.comparing-block.empty-cards').removeClass('hide');
            $(this).find('.comparing-block').not('.empty-cards').addClass('hide');
        }
    })
    setTimeout(function () {
        setCompareHeight();
    }, 250)

}

function populateCompareData(ele, data) {
    var imageBlock = $(ele).find('.comparing-block.cards').not('.empty-cards');
    jQuery.each(data, function (i, val) {
        if (i == 'ApplyNow') return;
        if (i == 'Id') {
            $(ele).attr('data-id', val);
        }
        if (i == 'Name') {
            imageBlock.find('.card-title').text(data.Name);
            return;
        }
        if (i == 'Image') {
            imageBlock.find('.card-image').attr('src', data.Image);
            return;
        }
        if (i == 'ApplyLink') {
            $(ele).find('.' + i + ' a').attr('href', val);
            return;
        }
        $(ele).find('.' + i).text(val);
    });
}

function showLoaded() {
    $('.creditcard-toast').find('.selected-card li').hide().attr('data-id', '').find('.title').text('');
    $('.checkbox-list.addcompare').find('[type="checkbox"]').prop("checked", false);
    var cardData = getCardDetail();
    $.each(loadedCards, function (index, id) {
        if (id) {
            $('#' + id).find('[type="checkbox"]').prop("checked", true);
            $('.creditcard-toast').find('.selected-card li:eq(' + index + ')').show().attr('data-id', id).find('.title').text(cardData[index].Name);
        }
    })

}

function getCardDetail() {
    let tempArray = [];
    for (let index = 0; index < cardDetails.length; index++) {
        var element = cardDetails[index];
        var element_index = $.inArray(element["Id"], loadedCards);
        if (element_index > -1) {
            tempArray[element_index] = element;
        }
    }
    return tempArray;
}

function loadCardData() {
    $.getJSON("assets/data/credit-card.json", function (data) {
        cardDetails = data;
    }).fail(function () {
        console.log("An error has occurred.");
    });
}


