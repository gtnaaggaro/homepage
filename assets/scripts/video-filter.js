$(document).ready(function () {
  var videoData = {
    videoDetails: [
      {
        videotitle: "Aatmanirbhar Banking for #AatmanirbharBharat-noLikes",
        videoid: "UZ7EX6Bgzhw",
        views: "2151151",
        likes: "9000",
        publishdate: "2019-07-28T07:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "Bank",
        subcategory: "Bank_getting_started",
        thumbnailimage: "assets/images/video-img/video-img-3.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "Creation of Business User on RBI FIRMS Portal",
        videoid: "UZ7EX6Bgzhw",
        views: "2151150",
        likes: "4000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Pdf",
        timeSize: "5mb",
        category: "security",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-4.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "This Rakshabandhan, #GiftAMask",
        videoid: "UZ7EX6Bgzhw",
        views: "9526",
        likes: "9000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "cards",
        subcategory: "gen",
        thumbnailimage: "assets/images/video-img/video-img-5.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "Happy Rakshabandhan | Protect those who you bank on",
        videoid: "UZ7EX6Bgzhw",
        views: "8524",
        likes: "8000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "loans",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-6.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle:
          "Two best friends make their next big plan this Friendship Day!",
        videoid: "UZ7EX6Bgzhw",
        views: "7541",
        likes: "7000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "investment",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-1.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle:
          "How to register on Money2India Europe and send money to India",
        videoid: "UZ7EX6Bgzhw",
        views: "6244",
        likes: "6000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "insure",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-2.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "How to send money to India using Money2India Europe",
        videoid: "UZ7EX6Bgzhw",
        views: "5214",
        likes: "5000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bill",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-3.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "Creation of Entity User on RBI FIRMS Portal",
        videoid: "UZ7EX6Bgzhw",
        views: "3205",
        likes: "3025",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "internet_banking",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-5.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "Download your Interest Certificate using iMobile",
        videoid: "UZ7EX6Bgzhw",
        views: "2222",
        likes: "2222",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "i_mobile",
        subcategory: "Generate id and password",
        thumbnailimage: "assets/images/video-img/video-img-6.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "This Rakshabandhan, #GiftAMask-noViews-11Likes",
        videoid: "UZ7EX6Bgzhw",
        likes: "11",
        publishdate: "2020-08-25T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_getting_started",
        thumbnailimage: "assets/images/video-img/video-img-3.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle:
          "Happy Rakshabandhan | Protect those who you bank on-NoviewsLikes",
        videoid: "UZ7EX6Bgzhw",
        publishdate: "2018-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_getting_started",
        thumbnailimage: "assets/images/video-img/video-img-2.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle:
          "Two best friends make their next big plan this Friendship Day!-1views",
        videoid: "UZ7EX6Bgzhw",
        views: "1",
        likes: "1245215",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_getting_started",
        thumbnailimage: "assets/images/video-img/video-img-1.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle:
          "How to register on Money2India Europe and send money to India",
        videoid: "UZ7EX6Bgzhw",
        views: "6000",
        likes: "6000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_account",
        thumbnailimage: "assets/images/video-img/video-img-2.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "How to send money to India using Money2India Europe",
        videoid: "UZ7EX6Bgzhw",
        views: "5000",
        likes: "5000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_atm",
        thumbnailimage: "assets/images/video-img/video-img-3.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "Creation of Business User on RBI FIRMS Portal",
        videoid: "UZ7EX6Bgzhw",
        views: "4000",
        likes: "4000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Pdf",
        timeSize: "5mb",
        category: "bank",
        subcategory: "bank_login",
        thumbnailimage: "assets/images/video-img/video-img-4.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "Creation of Entity User on RBI FIRMS Portal",
        videoid: "UZ7EX6Bgzhw",
        views: "3205",
        likes: "3025",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_others",
        thumbnailimage: "assets/images/video-img/video-img-5.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
      {
        videotitle: "How to send money to India using Money2India Europe",
        videoid: "UZ7EX6Bgzhw",
        views: "5000",
        likes: "5000",
        publishdate: "2020-08-03T05:20:45Z",
        type: "Video",
        timeSize: "5.24",
        category: "bank",
        subcategory: "bank_atm",
        thumbnailimage: "assets/images/video-img/video-img-2.jpg",
        referencelink: "assets/pdf/blank.pdf",
        description: "test video",
        cta1: "default1",
        cta1link: "default1link",
        cta2: "default2",
        cta2link: "default2link",
        cta3: "default3",
        cta3link: "default3link",
        relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
      },
    ],
  };
  let tempArray = [];

  // load all videos from videoData json on document ready
  sortCards(videoData["videoDetails"]);
  
  //Filter video form sidebar selection category
  $(".sidebar-content li div").click(function (event) {
    if (event.target !== this) return; // Do nothing
    /* Code update 05/03/2021 */
    if($(event.target).closest('.mCSB_draggerContainer').length > 0) return;
     /* Code update end 05/03/2021 */
    if ($(this).parent().hasClass("dropdown")) {
      renderVideoCards(
        $(this).siblings(".dropdown-list").find("li:first").attr("id")
      );
    } else renderVideoCards($(this).parent().attr("id"));
  });
   
  //Filter video form sidebar selection sub-category
  $(".sidebar-content .dropdown-list li").click(function (event) {
    renderVideoCards($(this).attr("id"));
  });

  //Filter and render reuired videos only
  function renderVideoCards(filterId) {
    tempArray = [];
    if (filterId == "all") {
      sortCards(videoData["videoDetails"]);
    } else {
      for (let index = 0; index < videoData["videoDetails"].length; index++) {
        var element = videoData["videoDetails"][index];
        if (
          element["category"].toLowerCase() == filterId.toLowerCase() ||
          element["subcategory"].toLowerCase() == filterId.toLowerCase()
        ) {
          tempArray.push(element);
        }
      }
      sortCards(tempArray);
    }
    generateFilterTags("#filterTags", filterId);
  }

  /**
   *Filter close remove from list
   */
  $(document).on("click", ".filter-cat img", function () {
    $(this).parent().remove();
    $(".filter-cat .filter-clear").click();
    sortCards(videoData["videoDetails"]);
  });
  $(document).on("click", ".filter-cat .filter-clear", function () {
    sortCards(videoData["videoDetails"]);
  });

  //Sorting videos click event
  $(".sort-dropdown .dropdown-inner li").click(function () {
    if (tempArray.length > 0) sortCards(tempArray);
    else sortCards(videoData["videoDetails"]);
  });

  //Sorting cards functions provide sort Id
  function sortCards(dataArray) {
    var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
    if (sortId == "latest") {
      dataArray.sort(custom_sort_date);
      dataArray.reverse();
    } else if (sortId == "oldest") {
      dataArray.sort(custom_sort_date);
    } else if (sortId == "viewed") {
      dataArray.sort(custom_sort_view);
      dataArray.reverse();
    } else if (sortId == "liked") {
      dataArray.sort(custom_sort_like);
      dataArray.reverse();
    }
    generateVideoListItems(dataArray);
  }
});

function generateVideoListItems(videoData) {
  let html = "",
    videoCardGroupCount = 6;
  for (let index = 0; index < videoData.length; index++) {
    if (index % videoCardGroupCount == 0) {
      if (index >= videoCardGroupCount)
        html += '<div class="video-list hidden-card">';
      else html += '<div class="video-list">';
    }

    var type = videoData[index]["type"];
    html += generateHTML(
      videoData[index]["videotitle"],
      videoData[index]["thumbnailimage"],
      type,
      intToString(videoData[index]["views"]),
      getTimePassed(videoData[index]["publishdate"]),
      videoData[index]["videoid"],
      videoData[index]["referencelink"]
    );

    if (index % videoCardGroupCount == videoCardGroupCount - 1) {
      html += "</div>";
    }
  }

  //Display result
  if (html.length > 0) {
    $("#videoListWrapper").html(html);
    $(".filter-top .sort-tools").removeClass("disable-sorting");
  } else {
    $("#videoListWrapper").html('<div class="no-result"></div>');
    $(".filter-top .sort-tools").addClass("disable-sorting");
  }
}

function generateHTML(
  vidTitle,
  videoThumbnailImage,
  type,
  viewCount,
  timePassed,
  youtubeVideoId,
  pdfLink
) {
  var playBtn = "",
    titleLink = "#",
    viewClass = "download",
    imgUrl = "",
    videoDivs = "";
  var pdfSpan =
    '<a class="' + viewClass + '" download href="' + pdfLink + '"></a>';

  if (type == "Video") {
    playBtn = '<a href="video-details.html" class="play-btn"></a>';
    imgUrl = '<a href="video-details.html">';
    titleLink = "video-details.html";
    viewClass = "num-viewer";
    videoDivs =
      '<a download class="pdf" href="' +
      pdfLink +
      '"></a><div class="bookmark"></div>';
    pdfSpan = '<span class="' + viewClass + '">' + viewCount + "</span>";
  }

  var html =
    '<div class="video-card"><div class="card-inner"><div class="media"> ' +
    imgUrl +
    ' <img src="' +
    videoThumbnailImage +
    '" alt="video"></a>' +
    playBtn +
    '</div><div class="content"><a href="' +
    titleLink +
    '" class="card-title">' +
    vidTitle +
    '</a><div class="card-bottom"><div class="date-readtime"><span class="date">' +
    timePassed +
    "</span>" +
    pdfSpan +
    '</div><div class="bookmark-share">' +
    videoDivs +
    '<div class="share"></div><div class="share-content"><div class="inner-content"><div class="share-header"><p>Share</p><span class="close-icon"><img src="assets/images/icons/close-orange.svg" alt="fb" /></a></span></div><ul class="share-link"><li><a href="#" target="_blank" tabindex="0"><span class="n-icon"><img src="assets/images/icons/video/whatsapp.svg" alt="whatsapp"></span> <span class="h-icon"><img src="assets/images/icons/video/whatsapp-o.svg" alt="whatsapp"> </span></a></li><li><a href="#" target="_blank" tabindex="0"> <span class="n-icon"><img src="assets/images/icons/fb-black.svg" alt="fb"></span><span class="h-icon"><img src="assets/images/icons/fb-orange.svg"alt="fb"></span></a></li><li><a href="#" target="_blank" tabindex="0"><span class="n-icon"><img src="assets/images/icons/tw-black.svg" alt="tw"></span><span class="h-icon"><img src="assets/images/icons/tw-orange.svg" alt="tw"></span></a></li><li><a href="#" target="_blank" tabindex="0"><span class="n-icon"><img src="assets/images/icons/ln-black.svg" alt="ln"></span><span class="h-icon"><img src="assets/images/icons/ln-orange.svg" alt="ln"></span></a></li></ul><div class="youtube-text"><input type="text" name="link" value="https://www.youtube.com/watch?v=' +
    youtubeVideoId +
    '" /><span>Copy</span></div></div></div></div></div></div></div></div>';

  return html;
}

function custom_sort_date(a, b) {
  return new Date(a.publishdate).getTime() - new Date(b.publishdate).getTime();
}
function custom_sort_view(a, b) {
  var viewsOne = a.views,
    viewsTwo = b.views;
  if (viewsOne == undefined) viewsOne = 0;
  if (viewsTwo == undefined) viewsTwo = 0;

  return viewsOne - viewsTwo;
}
function custom_sort_like(a, b) {
  var likeOne = a.likes,
    likeTwo = b.likes;
  if (likeOne == undefined) likeOne = 0;
  if (likeTwo == undefined) likeTwo = 0;

  return likeOne - likeTwo;
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
