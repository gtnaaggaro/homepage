$(document).ready(function () {
  //Json Content for Questions
  var questionArray = [
    {
      question: "How to open bank account online? -- video",
    },
    {
      question: "How to Link Aadhar Card to your bank account in 4 simple...",
    },
    {
      question: "How to access your ICICI Bank Canada account?",
    },
    {
      question: "How to recharge TataSky DTH with an SMS",
    },
    {
      question: "How to login to your ICICI Bank Canada account?",
    },
    {
      question: "How to secure your ICICI Bank Cards",
    },
    {
      question: "How to use your PayLater account?",
    },
    {
      question: "How to log into InstaBIZ app",
    },
    {
      question: "How to pay via ICICI Bank Pay2Corp for PCS users",
    },
  ];

  $(".search-box-area input").focus(function () {
    $(".search-listing .video-content").hide();
  });

  $(".search-box-area input").keyup(function () {
    var inputText = $(this)[0].value;
    if (inputText.length > 0)
    {
      var searchArray = searchItems(questionArray, 'question', inputText);
      generateSearchResult(searchArray, inputText, 'question', 'ul.quetion-list',  false);
    }
    else
      $('.quetion-list').html('');
  });

  $(document).on("click", ".search-listing ul li", function () {
    $(".search-box-area input").val($(this).text());
    $(".search-listing ul").hide();
    if($('.search-listing .video-content').length > 0)
    {
      $(".search-listing .video-content").show();
    }
    else
    {
      $(".search-container").removeClass("active");
      $(".search-listing").removeClass("active");
    }
  });
});