$(document).ready(function () {
    var videoData = {
        videoDetails: [
            {
                videotitle: "Easy to understand",
                videoid: "UZ7EX6Bgzhw",
                views: "2151151",
                name: "Mr Sameer",
                like: "6239",
                dislike: "20",
                publishdate: "2019-07-28T07:20:45Z",
                type: "Video",
                timeSize: "5.24",
                category: "Bank",
                subcategory: "Bank_getting_started",
                thumbnailimage: "assets/images/video-img/video-img-3.jpg",
                referencelink: "assets/pdf/blank.pdf",
                description: "I can view live share prices, trade shares, invest in Mutual Funds and insurance with my seamless and secure 3-in-1 Online Trading Account.",
                cta1: "default1",
                cta1link: "default1link",
                cta2: "default2",
                cta2link: "default2link",
                cta3: "default3",
                cta3link: "default3link",
                relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
            },
            {
                videotitle: "Simple Process",
                videoid: "UZ7EX6Bgzhw",
                views: "2151150",
                name: "Mr Sameer",
                like: "6239",
                dislike: "20",
                publishdate: "2020-08-03T05:20:45Z",
                type: "Pdf",
                timeSize: "5mb",
                category: "security",
                subcategory: "Generate id and password",
                thumbnailimage: "assets/images/video-img/video-img-4.jpg",
                referencelink: "assets/pdf/blank.pdf",
                description: "Since I am doing part time work, some time I get salary in ICICI account. Not on every time, I am holding this account for past 3-4 years. Whenever I do a transaction I get alert message on immediate basis. I am using net banking...",
                cta1: "default1",
                cta1link: "default1link",
                cta2: "default2",
                cta2link: "default2link",
                cta3: "default3",
                cta3link: "default3link",
                relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
            },
            {
                videotitle: "Easy to understand",
                videoid: "UZ7EX6Bgzhw",
                views: "9526",
                name: "Mr Sameer",
                like: "6239",
                dislike: "20",
                publishdate: "2020-08-03T05:20:45Z",
                type: "Video",
                timeSize: "5.24",
                category: "cards",
                subcategory: "gen",
                thumbnailimage: "assets/images/video-img/video-img-5.jpg",
                referencelink: "assets/pdf/blank.pdf",
                description: "Since fifteen years, i am using ICICI Bank savings account and this bank gives a very good service. ATM service s near to my residence and the customer service was fine. ",
                cta1: "default1",
                cta1link: "default1link",
                cta2: "default2",
                cta2link: "default2link",
                cta3: "default3",
                cta3link: "default3link",
                relatedvideos: "BnFVRqldnF8,ui_FTMy9Upk",
            },
            {
                videotitle: "Everthing Digital",
                videoid: "UZ7EX6Bgzhw",
                views: "8524",
                name: "Mr Sameer",
                like: "6239",
                dislike: "20",
                publishdate: "2020-08-03T05:20:45Z",
                type: "Video",
                timeSize: "5.24",
                category: "loans",
                subcategory: "Generate id and password",
                thumbnailimage: "assets/images/video-img/video-img-6.jpg",
                referencelink: "assets/pdf/blank.pdf",
                description: "I am holding a savings account in ICICI bank for more than 4 years. I no need to maintain a minimum balance on monthly basis. I am using mobile app and it is friendly to access. I use to get an alert message from bank whenever I do a transactions. ",
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
                    "Faster and quicker",
                videoid: "UZ7EX6Bgzhw",
                views: "7541",
                name: "Mr Sameer",
                like: "6239",
                dislike: "20",
                publishdate: "2020-08-03T05:20:45Z",
                type: "Video",
                timeSize: "5.24",
                category: "investment",
                subcategory: "Generate id and password",
                thumbnailimage: "assets/images/video-img/video-img-1.jpg",
                referencelink: "assets/pdf/blank.pdf",
                description: "Past 1 year 2 months before I taken the salary account from ICICI bank and the service has been good. The debit card is accessible in all POS machines. I have not gone to the branch till now because till now i have not faced any issue with them. ",
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
                    "Super Easy",
                videoid: "UZ7EX6Bgzhw",
                views: "6244",
                name: "Mr Sameer",
                like: "6239",
                dislike: "20",
                publishdate: "2020-08-03T05:20:45Z",
                type: "Video",
                timeSize: "5.24",
                category: "insure",
                subcategory: "Generate id and password",
                thumbnailimage: "assets/images/video-img/video-img-2.jpg",
                referencelink: "assets/pdf/blank.pdf",
                description: "In the website, i can change the maximum ATM withdrawal limit as per my convenient. The website is easy to understand. In the branch, the response was good.",
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
        if ($(event.target).closest('.mCSB_draggerContainer').length > 0) return;
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
                html += '<div class="review-card-lists horizontal-view bookmarks-lists hidden-card">';
            else html += '<div class="review-card-lists horizontal-view bookmarks-lists">';
        }

        var type = videoData[index]["type"];
        html += generateHTML(
            videoData[index]["videotitle"],
            videoData[index]["description"],
            type,
            videoData[index]["name"],
            intToString(videoData[index]["like"]),
            intToString(videoData[index]["dislike"]),
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
    reviewdesc,
    type,
    name,
    likeCount,
    dislikeCount,
    date,
) {

    var html =
        '<div class="card-list"><div class="card-icon"></div><div class="content"><div class="card-top-text"><h5>' +
        vidTitle +
        '</h5><div class="star-review"><span class="checked">Star</span><span class="checked">Star</span><span class="checked">Star</span><span class="checked">Star</span><span class="checked">Star</span></div></div><div class="card-middel-text"><p>' +
        reviewdesc
        + '</p></div><div class="card-bottom-text"><div class="card-date"><div class="name">' +
        name
        + '</div><div class="date">' +
        date
        + '</div></div><div class="social-share"><a class="social-dislike" tabindex="0"><span class="dislike icon"></span><span class="count">'
        + dislikeCount +
        '</span></a><a class="social-like" tabindex="0"><span class="like icon"></span><span class="count">' +
        likeCount + '</span></a></div></div></div></div>';

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
