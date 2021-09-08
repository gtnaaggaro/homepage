var data_gl = {};
var showItemsQtyGl = 1;

function validateFormAndCalculateGoldLoan() {
  const tenure_gl = document.querySelector('input[name="tenure_gold"]:checked')
    .value;

  var caret = new Array();
  var weight_grams = new Array();
  var totalAmount = 0;

  for (i = 1; i <= showItemsQtyGl; i++) {
    caret.push(document.getElementById("caret" + i).value);
    weight_grams.push(document.getElementById("weight-grams" + i).value);
  }

  for (var i = 0; i < weight_grams.length; i++) {
    validateData_gl(weight_grams[i], "error-weight" + (i + 1));

    const eliLoanAmt = document.getElementById("eliLoanAmt" + (i + 1));
    var itemAmount =
      data_gl[caret[i]][tenure_gl].rate_per_gram * weight_grams[i];
    totalAmount += itemAmount;
    eliLoanAmt.innerHTML = "&#8377; " + numWithCommas(itemAmount);
  }

  const eligible_loan_amt_gl = document.getElementById("eligible_loan_amt_gl");
  eligible_loan_amt_gl.innerHTML = "&#8377; " + numWithCommas(totalAmount);
}

function validateData_gl(weight_grams, error_weight) {
  if (weight_grams == "") {
    document.getElementsByClassName(error_weight)[0].innerHTML =
      "Enter valid weight in grams";
  } else {
    document.getElementsByClassName(error_weight)[0].innerHTML = "";
  }
}

function showHideItems(showItemsQtyGl) {
  $(".article-disclaimer").hide();
  $(".list-item").hide();
  $(".list-item").slice(0, showItemsQtyGl).show();
  if (showItemsQtyGl == 7) {
    $(".article-disclaimer").show();
  }
}

$(document).ready(function () {
  $("select").selectmenu();
  showHideItems(showItemsQtyGl);
  /*$.getJSON('../gold-loan/goldloan.json', function(res) {
        data = res;
        validateFormAndCalculateGoldLoan()
    });*/
  data_gl = {
    "24": {
      "12": {
        concatenate: 2412,
        rate_per_gram: 3273,
      },
      "6": {
        concatenate: 246,
        rate_per_gram: 3273,
      },
    },
    "22": {
      "12": {
        concatenate: 2212,
        rate_per_gram: 3000,
      },
      "6": {
        concatenate: 226,
        rate_per_gram: 3000,
      },
    },
    "21": {
      "12": {
        concatenate: 2112,
        rate_per_gram: 2864,
      },
      "6": {
        concatenate: 216,
        rate_per_gram: 2864,
      },
    },
    "20": {
      "12": {
        concatenate: 2012,
        rate_per_gram: 2727,
      },
      "6": {
        concatenate: 206,
        rate_per_gram: 2727,
      },
    },
    "18": {
      "12": {
        concatenate: 1912,
        rate_per_gram: 2591,
      },
      "6": {
        concatenate: 196,
        rate_per_gram: 2591,
      },
    },
    "19": {
      "12": {
        concatenate: 1812,
        rate_per_gram: 2455,
      },
      "6": {
        concatenate: 186,
        rate_per_gram: 2455,
      },
    },
  };

  $("#no-of-ornaments").selectmenu({
    change: function (event, ui) {
      showItemsQtyGl = parseInt($(this).val());
      showHideItems(showItemsQtyGl);
      validateFormAndCalculateGoldLoan();
    },
  });

  $(".list-item select").selectmenu({
    change: function (event, ui) {
      validateFormAndCalculateGoldLoan();
    },
  });
  validateFormAndCalculateGoldLoan();
});
