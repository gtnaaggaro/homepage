$(document).ready(function () {
  $('#interest-rates .option-table').hide();
  $('#interest-rates #option1').show();
  /**
   * Search data changes and ul creation start for global use
   */
  var customerCareItemArray = [
    {
      careItem: "How to open bank account online? customer-care and nri",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to Link Aadhar Card to your bank account in 4 simple...",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to access your ICICI Bank Canada account?",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to recharge TataSky DTH with an SMS",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to login to your ICICI Bank Canada account?",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to secure your ICICI Bank Cards",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to use your PayLater account?",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to log into InstaBIZ app",
      link: "https://www.google.com/",
    },
    {
      careItem: "How to pay via ICICI Bank Pay2Corp for PCS users",
      link: "https://www.google.com/",
    },
  ];
  $(".search-box-area input").keyup(function () {
    var inputText = $(this)[0].value;
    if (inputText.length > 0) {
      var searchArray = searchItems(
        customerCareItemArray,
        "careItem",
        inputText
      );
      generateSearchResult(
        searchArray,
        inputText,
        "careItem",
        "ul.quetion-list",
        true
      );
    } else $(".quetion-list").html("");
  });

  $("#interest-rate-table").selectmenu({
    change: function (event, ui) {
      $('#interest-rates .option-table').hide();
      let selecedOption = $(this).val();
      $('#interest-rates #'+selecedOption).show();
    },
  });

});
