!(function(){
  var cardsData = {
    cards: [
      {
        cardId: '20200504195123',
        image: 'assets/images/orange-hub/orangebook-1.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-07-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'How to build an Emergency Fund?',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "11500",
        likes: "10000",
        volumeId: 'volume1',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195124',
        image: 'assets/images/orange-hub/orangebook-2.jpg',
        type: 'Article',
        readTime: '2mins',
        publishdate: "2019-07-29T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'How to build an Emergency Fund?',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "11",
        likes: "1002",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195126',
        image: 'assets/images/orange-hub/orangebook-3.jpg',
        type: 'Article',
        readTime: '8mins',
        publishdate: "2019-07-02T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'How to get funds quickly? In case of an emergency',
        tags: ['Mobile banking', 'iMobilePay'],
        viewers: "1500",
        likes: "1000",
        volumeId: 'volume1',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195129',
        image: 'assets/images/orange-hub/orangebook-4.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-08-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'Get yourself covered for healthcare-related expenses',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "18500",
        likes: "10800",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195129',
        image: 'assets/images/orange-hub/orangebook-4.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-08-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'Get yourself covered for healthcare-related expenses',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "18500",
        likes: "10800",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195129',
        image: 'assets/images/orange-hub/orangebook-4.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-08-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'Get yourself covered for healthcare-related expenses',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "18500",
        likes: "10800",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195129',
        image: 'assets/images/orange-hub/orangebook-4.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-08-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'Get yourself covered for healthcare-related expenses',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "18500",
        likes: "10800",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195129',
        image: 'assets/images/orange-hub/orangebook-4.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-08-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'Get yourself covered for healthcare-related expenses',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "18500",
        likes: "10800",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195129',
        image: 'assets/images/orange-hub/orangebook-4.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-08-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'Get yourself covered for healthcare-related expenses',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "18500",
        likes: "10800",
        volumeId: 'volume2',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195123',
        image: 'assets/images/orange-hub/orangebook-5.jpg',
        type: 'Article',
        readTime: '10mins',
        publishdate: "2020-07-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'How to build an Emergency Fund?',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "11500",
        likes: "10000",
        volumeId: 'volume1',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
      {
        cardId: '20200504195165',
        image: 'assets/images/orange-hub/orangebook-6.jpg',
        type: 'Article',
        readTime: '1mins',
        publishdate: "2019-07-28T07:20:45Z",
        link: 'orange-book-details.html',
        title: 'How to build an Emergency Fund?',
        tags: ['Money2India', 'iMobilePay'],
        viewers: "11500",
        likes: "10440",
        volumeId: 'volume3',
        video: '',
        videoDuration: '',
        podcast: '',
        podcastDuration: ''
      },
    ]
  };
  let tempArray = [];
  let filters = [];

  $(document).ready(function () {
    sortCards(cardsData['cards']);
  });  

  function sortCards(dataArray) {
    setTimeout(() => {
      var sortId = $('.sort-dropdown .dropdown-inner li.active').attr('id');
      if (sortId == 'latest') {
        dataArray.sort(custom_sort_date);
        dataArray.reverse();
      } else if (sortId == 'oldest') {
        dataArray.sort(custom_sort_date);
      } else if (sortId == 'viewed') {
        dataArray.sort(custom_sort_view);
        dataArray.reverse();
      } else if (sortId == 'liked') {
        dataArray.sort(custom_sort_like);
        dataArray.reverse();
      }
      createOrangeList(dataArray);      
    }, 500);
  }

  function custom_sort_date(a, b) {
    return new Date(a.publishdate).getTime() - new Date(b.publishdate).getTime();
  }

  function custom_sort_view(a, b) {
    var viewsOne = a.viewers,
      viewsTwo = b.viewers;
    if (viewsOne == undefined) viewsOne = 0;
    if (viewsTwo == undefined) viewsTwo = 0;

    return parseInt(viewsOne) - parseInt(viewsTwo);
  }

  function custom_sort_like(a, b) {
    var likeOne = a.likes,
      likeTwo = b.likes;
    if (likeOne == undefined) likeOne = 0;
    if (likeTwo == undefined) likeTwo = 0;

    return parseInt(likeOne) - parseInt(likeTwo);
  }

  //Filter from search box input
  $('.filter-content .search-box-area input').focus(function () {
    $('.filter-content .search-box-area input').val('');
  });
  $('.filter-content .search-box-area input').keyup(function () {
    var inputText = $(this)[0].value;
    if (inputText.length > 0) {
      var titleArray = searchItems(cardsData['cards'], 'title', inputText);
      var resultArray = titleArray;
      // var resultArray = titleArray.concat(descArray, brandArray);
      resultArray = uniqueData(resultArray, 'cardId');
      sortCards(resultArray);
    } else sortCards(cardsData['cards']);
  });

  function uniqueData(array, property) {
    var unique = {};
    var distinct = [];
    for (var i in array) {
      if (typeof unique[array[i][property]] == 'undefined') {
        distinct.push(array[i]);
      }
      unique[array[i][property]] = 0;
    }
    return distinct;
  }

  $(document).on('click', '.sidebar-content .checkbox-list input', function () {
    $('.filter-content .filter-cat').show();
    $('.filter-content .filter-cat').addClass('active');
    if ($(window).width() > 991) {
      createFilterArray();
    }
  });

  function createFilterArray() {
    filters = [];
    $.each($('.sidebar-content .checkbox-list input:checked'), function () {
      if (filters.indexOf($(this).val()) == -1) filters.push($(this).val());
    });
    if (filters.length == 0) {
      if ($(window).width() <= 991) {
        // $('.feature-offer-section').show();
        // $('.announcement-section').show();
        $('.filter-inner-container').removeClass('active');
        $('.filter-top').removeClass('filter-selected');
        $('.filter-top').removeClass('filter-sticky');
      }
      $('.filter-content .filter-cat').hide();
      $('.filter-content .filter-cat').removeClass('active');
      sortCards(cardsData['cards']);
      generateFilterTags('#filterTags', '');
    } else {
      generateFilterTags('#filterTags', filters);
      renderOfferCards();
    }
  }

  /**
   *Filter close remove from list
   */
   $(document).on('click', '.filter-cat img', function () {
    var removefilterId = $(this).closest('span').attr('data-filter');
    $('[value=' + removefilterId + ']').prop('checked', false);
    $('[value=' + removefilterId + ']')
      .closest('li')
      .removeClass('active');
    createFilterArray();
  });

  $(document).on('click', '.filter-cat .filter-clear', function () {
    $('.sidebar-content .checkbox-list input').prop('checked', false);
    $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
    createFilterArray();
  });

  $('.sidebar-header .close').click(function () {
    $('.filter-content .filter-cat').hide();
    $('.filter-content .filter-cat').removeClass('active');
    $('.sidebar-content .checkbox-list input').prop('checked', false);
    $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
    $(this).parent().removeClass('active');
  });

  $('.sidebar-footer .apply, .sidebar-footer .clear-all').click(function () {
    setTimeout(function () {
      createFilterArray();
    }, 500);
  });

  $('.sort-dropdown .dropdown-inner li').click(function () {
    if (tempArray.length > 0) sortCards(tempArray);
    else sortCards(cardsData['cards']);
  });

  function renderOfferCards(filterId) {
    tempArray = [];
    if (filterId == 'all') {
      sortCards(cardsData['cards']);
    } else {
      for (let index = 0; index < cardsData['cards'].length; index++) {
        var element = cardsData['cards'][index];
        if (element['volumeId'] == filterId) {
          tempArray.push(element);
        }
        if (
          filters.indexOf(element['volumeId']) != -1
          // filters.indexOf(element['brandName']) != -1 ||
          // filters.indexOf(element['paymentGateway']) != -1
        ) {
          tempArray.push(element);
        }
      }
      sortCards(tempArray);
    }
  }

  function intToString(value) {
    if (value == undefined) return 0;
  
    if (value && value.length <= 3) return value;
  
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  }

  function getTimePassed(publishDate) {
    // Set the date we're counting down to
    var countDownDate = new Date(publishDate).getTime();
    var now = new Date().getTime();
    var distance = now - countDownDate;
  
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);
  
    var message = "";
    if (years == 1) message = years + " Year Ago";
    else if (years > 0) message = years + " Years Ago";
    else if (months == 1) message = months + " Month Ago";
    else if (months > 0) message = months + " Months Ago";
    else if (days == 1) message = days + " Day Ago";
    else if (days > 1 && days < 7) message = days + " Days Ago";
    else if (days >= 7) {
      var weeks = Math.round(days / 7);
      if (weeks == 1) message = weeks + " Week Ago";
      else message = weeks + " Weeks Ago";
    } else if (hours == 1) message = hours + " Hour Ago";
    else if (hours > 0) message = hours + " Hours Ago";
    else message = minutes + " Minutes Ago";
  
    return message;
  }
  

  function createOrangeList(cardData) {
    let htmlMarkup = '';
    cardGroupCount = 6;
    for (let index = 0; index < cardData.length; index++) {
      if (index % cardGroupCount == 0) {
        if (index >= cardGroupCount) htmlMarkup += '<div class="orangebook-list hidden-card">';
        else htmlMarkup += '<div class="orangebook-list">';
      }
  
      htmlMarkup += generateHTML(
        cardData[index]['image'],
        cardData[index]['type'],
        cardData[index]['readTime']+' Read',
        getTimePassed(cardData[index]['publishdate']),
        cardData[index]['link'],
        cardData[index]['title'],
        cardData[index]['tags'],
        intToString(cardData[index]['viewers']),
        intToString(cardData[index]['likes'])
      );
  
      if (index % cardGroupCount == cardGroupCount - 1) {
        htmlMarkup += '</div>';
      }
    }
  
    //Display result
    if (htmlMarkup.length > 0) {
      $('#orangeListWrapper').html(htmlMarkup);
      $('.filter-top .sort-tools').removeClass('disable-sorting');
      // getRemainingTime();
    } else {
      $('#orangeListWrapper').html('<div class="no-result"></div>');
      $('.filter-top .sort-tools').addClass('disable-sorting');
    }
  }

  function generateHTML(cardImage, cardType, readTime, timeAgo, pageLink, cardTitle, tagsArr, viewers, likes) {
    var tagsHtml = tagsArr.map((tag) => '<div class="tag">'+ tag +'</div>').join('');
    var html =
      '<div class="orangebook-card"><div class="card-inner"><div class="media"><a href="'+ pageLink + '">' +
      '<img src="' +
      cardImage +
      '" alt="amazon"></a></div><div class="content">\n\
      <div class="card-top">\n\
          <div class="blue-tag">' +
      cardType +
      '</div>\n\
      <div class="date">' +
      readTime + ' | ' + timeAgo +
      '</div>\n\
      </div><a href="'+ pageLink + '"class="card-title">' +
      cardTitle +
      '</a><div class="card-tags">' +
      tagsHtml +
      '</div>\n\
      \n\
      <div class="card-bottom">\n\
          <div class="date-readtime"><span class="num-viewer">' +
      viewers + '</span></div>\n\
      <div class="bookmark-share">\n\
          <div class="like"><span>'+
      likes + 
      '</span></div>\n\
          <div class="share"></div>\n\
          <div class="share-content">\n\
              <div class="inner-content">\n\
                  <div class="share-header">\n\
                      <p>Share</p><span class="close-icon"><img\n\
                              src="assets/images/icons/close-orange.svg"\n\
                              alt="fb"></span>\n\
                  </div>\n\
                  <ul class="share-link">\n\
                      <li><a href="#" target="_blank"><span\n\
                                  class="n-icon"><img\n\
                                      src="assets/images/icons/video/whatsapp.svg"\n\
                                      alt="whatsapp"></span> <span\n\
                                  class="h-icon"><img\n\
                                      src="assets/images/icons/video/whatsapp-o.svg"\n\
                                      alt="whatsapp"> </span></a></li>\n\
                      <li><a href="#" target="_blank"> <span\n\
                                  class="n-icon"><img\n\
                                      src="assets/images/icons/fb-black.svg"\n\
                                      alt="fb"></span><span\n\
                                  class="h-icon"><img\n\
                                      src="assets/images/icons/fb-orange.svg"\n\
                                      alt="fb"></span></a></li>\n\
                      <li><a href="#" target="_blank"><span\n\
                                  class="n-icon"><img\n\
                                      src="assets/images/icons/tw-black.svg"\n\
                                      alt="tw"></span><span\n\
                                  class="h-icon"><img\n\
                                      src="assets/images/icons/tw-orange.svg"\n\
                                      alt="tw"></span></a></li>\n\
                      <li><a href="#" target="_blank"><span\n\
                                  class="n-icon"><img\n\
                                      src="assets/images/icons/ln-black.svg"\n\
                                      alt="ln"></span><span\n\
                                  class="h-icon"><img\n\
                                      src="assets/images/icons/ln-orange.svg"\n\
                                      alt="ln"></span></a></li>\n\
                  </ul>\n\
                  <div class="youtube-text"><input type="text" name="link"\n\
                          value="https://www.youtube.com/watch?v=UZ7EX6Bgzhw"><span>Copy</span>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
    </div>\n\
    </div>\n\
    </div>\n\
    </div>';
  
    return html;
  }
}());
