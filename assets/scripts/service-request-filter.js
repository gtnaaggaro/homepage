$(document).ready(function () {
  var requestsData = {
    requests: [
      {
        Id: "1",
        Title: "Request for change of <span>Communication Address</span>",
        sectionTitle: "Most Used",
        category: "bank",
        subcategory: "account",
      },
      {
        Id: "2",
        Title:
          "Request for <span>updating Aadhaar number</span> in Savings Account",
        sectionTitle: "Cards Related Requests",
        category: "cards",
        subcategory: "acc",
      },
      {
        Id: "3",
        Title:
          "Request to <span>update employer name </span> in Savings Account",
        sectionTitle: "Loans Related Requests",
        category: "loans",
        subcategory: "acc",
      },
      {
        Id: "4",
        Title: "<span>Account conversion</span> from Resident to NRI not done",
        sectionTitle: "Deposit Related Requests",
        category: "deposit",
        subcategory: "acc",
      },
      {
        Id: "5",
        Title: "Upgrade to <span>Privilege Banking</span>",
        sectionTitle: "Demat Related Requests",
        category: "demat",
        subcategory: "acc",
      },
      {
        Id: "6",
        Title: "Request for <span>Address Change</span> not processed",
        sectionTitle: "Investment Related Requests",
        category: "investment",
        subcategory: "acc",
      },
      {
        Id: "7",
        Title: "Transfer Your <span>Account Online</span>",
        sectionTitle: "Insure Related Requests",
        category: "otherServices",
        subcategory: "acc",
      },
      {
        Id: "8",
        Title: "<span>Account transfer</span> not done as per request",
        sectionTitle: "Bill Related Requests",
        category: "bill",
        subcategory: "acc",
      },
      {
        Id: "1",
        Title: "Request for change of <span>Communication Address</span>",
        sectionTitle: "Transaction Related Request",
        category: "bank",
        subcategory: "transaction",
      },
      {
        Id: "2",
        Title:
          "Request for <span>updating Aadhaar number</span> in Savings Account",
        sectionTitle: "Cards Related Requests",
        category: "cards",
        subcategory: "acc",
      },
      {
        Id: "3",
        Title:
          "Request to <span>update employer name </span> in Savings Account",
        sectionTitle: "Loans Related Requests",
        category: "loans",
        subcategory: "acc",
      },
      {
        Id: "4",
        Title: "<span>Account conversion</span> from Resident to NRI not done",
        sectionTitle: "Deposit Related Requests",
        category: "deposit",
        subcategory: "acc",
      },
      {
        Id: "5",
        Title: "Upgrade to <span>Privilege Banking</span>",
        sectionTitle: "Demat Related Requests",
        category: "demat",
        subcategory: "acc",
      },
      {
        Id: "6",
        Title: "Request for <span>Address Change</span> not processed",
        sectionTitle: "Investment Related Requests",
        category: "investment",
        subcategory: "acc",
      },
      {
        Id: "7",
        Title: "Transfer Your <span>Account Online</span>",
        sectionTitle: "Insure Related Requests",
        category: "otherServices",
        subcategory: "acc",
      },
      {
        Id: "8",
        Title: "<span>Account transfer</span> not done as per request",
        sectionTitle: "Bill Related Requests",
        category: "bill",
        subcategory: "acc",
      },
      {
        Id: "1",
        Title: "Request for change of <span>Communication Address</span>",
        sectionTitle: "ATM / Debit Card Related",
        category: "bank",
        subcategory: "atm",
      },
      {
        Id: "2",
        Title:
          "Request for <span>updating Aadhaar number</span> in Savings Account",
        sectionTitle: "Cheque Related Requests",
        category: "bank",
        subcategory: "cheque",
      },
      {
        Id: "3",
        Title:
          "Request to <span>update employer name </span> in Savings Account",
        sectionTitle: "Bank Statement Related Requests",
        category: "bank",
        subcategory: "statement",
      },
      {
        Id: "4",
        Title: "<span>Account conversion</span> from Resident to NRI not done",
        sectionTitle: "Internet / Mobile Banking",
        category: "bank",
        subcategory: "mobile",
      },
      {
        Id: "5",
        Title: "Upgrade to <span>Privilege Banking</span>",
        sectionTitle: "Bank Other Requests",
        category: "bank",
        subcategory: "others",
      },
      {
        Id: "6",
        Title: "Request for <span>Address Change</span> not processed",
        sectionTitle: "Most Used",
        category: "bank",
        subcategory: "account",
      },
      {
        Id: "7",
        Title: "Transfer Your <span>Account Online</span>",
        sectionTitle: "Account / Personal Details",
        category: "bank",
        subcategory: "account",
      },
      {
        Id: "8",
        Title: "<span>Account transfer</span> not done as per request",
        sectionTitle: "Account / Personal Details",
        category: "bank",
        subcategory: "account",
      },
      {
        Id: "8",
        Title: "<span>Account transfer</span> not done as per request",
        sectionTitle: "Account / Personal Details",
        category: "popular",
        subcategory: "account",
      },
      {
        Id: "8",
        Title: "<span>Account transfer</span> not done as per request",
        sectionTitle: "Banking",
        category: "popular",
        subcategory: "account",
      },
    ],
  };
  // load first item cards
  $(".sidebar-content li:first").addClass("active");
  if ($(".sidebar-content li:first").hasClass("dropdown"))
    renderCards(
      $(".sidebar-content li:first").find(".dropdown-list p:first").attr("id")
    );
  else renderCards($(".sidebar-content li:first").attr("id"));

  //Filter cards form sidebar selection category
  $(".sidebar-content li div, .sidebar-content li img").click(function (event) {
    if (event.target !== this) return; // Do nothing
    if ($(this).closest('li').hasClass("dropdown"))
      renderCards($(this).closest('li').find(".dropdown-list").find("p:first").attr("id"));
    else 
      renderCards($(this).closest('li').attr("id"));
  });

  //Filter cards form sidebar selection sub-category
  $(document).on("click", ".sidebar-content .dropdown-list p, #subDropdownList p", function () {
    renderCards($(this).attr("id"));
  });

  //Filter cards form left right arrow
  $(document).on(
    "click",
    ".sidebar-content .tabs-section .arrows-tab",
    function () {
      if ($(".sidebar-content li.active").hasClass("dropdown"))
        renderCards(
          $(".sidebar-content li.active")
            .find(".dropdown-list p:first")
            .attr("id")
        );
      else renderCards($(".sidebar-content li.active").attr("id"));
    }
  );

  //Filter and render reuired cards only
  function renderCards(filterId) {
    if (filterId == "all") {
      generateListItems(requestsData["requests"]);
    } else {
      let tempArray = [];
      for (let index = 0; index < requestsData["requests"].length; index++) {
        var element = requestsData["requests"][index];
        if (
          element["category"].toLowerCase() == filterId.toLowerCase() ||
          element["subcategory"].toLowerCase() == filterId.toLowerCase()
        ) {
          tempArray.push(element);
        }
      }
      generateListItems(tempArray);
    }
  }
});

function generateListItems(requestsData) {
  let htmlMostUsed = "",
    htmlCategory = "",
    mostUsedArray = [],
    categoryArray = [],
    sectionArray = [];

  for (let index = 0; index < requestsData.length; index++) {
    if (requestsData[index]["sectionTitle"].toLowerCase() == "most used") {
      mostUsedArray.push(requestsData[index]);
    } else {
      categoryArray.push(requestsData[index]);
    }
  }

  if (mostUsedArray.length > 0) {
    htmlMostUsed +=
      '<h5>Most Used</h5><div class="service-lists mostservice-list">';
    for (let index = 0; index < mostUsedArray.length; index++) {
      htmlMostUsed += generateHTML(mostUsedArray[index]["Title"]);
    }
    htmlMostUsed += "</div>";
  }

  if (categoryArray.length > 0) {
    categoryArray.sort(compare);
    for (let index = 0; index < categoryArray.length; index++) {
      var secTitle = categoryArray[index]["sectionTitle"];
      if (sectionArray.indexOf(secTitle) == -1) {
        sectionArray.push(secTitle);
        if (index == 0) {
          htmlCategory +=
            "<h5>" + secTitle + '</h5><div class="service-lists">';
        } else {
          htmlCategory +=
            "</div><h5>" + secTitle + '</h5><div class="service-lists">';
        }
      }
      htmlCategory += generateHTML(categoryArray[index]["Title"]);
    }
    htmlCategory += "</div>";
  }

  //Display result
  if (htmlMostUsed.length > 0) $("#requestMostWrapper").html(htmlMostUsed);
  else $("#requestMostWrapper").html("");

  if (htmlCategory.length > 0) $("#requestCategoryWrapper").html(htmlCategory);
  else $("#requestCategoryWrapper").html('<div class="no-result"></div>');
}

function generateHTML(cardTitle) {
  var html =
    '<div class="service-list"> <a href="#">' +
    cardTitle +
    '<span class="icon"></span></a></div>';
  return html;
}

function compare(a, b) {
  if (a.sectionTitle < b.sectionTitle) return -1;
  if (a.sectionTitle > b.sectionTitle) return 1;
  return 0;
}
