$(document).ready(function () {
    //Json Content for Questions
    var offersBrandArray = {
      "OffersBrand":[
         {
            "OfferId":"ionwxbrm",
            "BrandTitle":"Amazon",
            "BrandLogoPath":"assets/images/brands/amazon.png",
            "BrandPageLink":"/offers/brands/amazon.page?"
         },
         {
            "OfferId":"ionwxdf9",
            "BrandTitle":"Make My Trip",
            "BrandLogoPath":"assets/images/brands/mmt.png",
            "BrandPageLink":"/offers/brands/makemytrip.page?"
         },
         {
            "OfferId":"ionwxeui",
            "BrandTitle":"Amazon Prime",
            "BrandLogoPath":"assets/images/brands/amazon-prime.png",
            "BrandPageLink":"/offers/brands/yatra.page?"
         },
         {
            "OfferId":"ionwxesf",
            "BrandTitle":"Zomato",
            "BrandLogoPath":"assets/images/brands/zomato.png",
            "BrandPageLink":"/offers/brands/bookmyshow.page?"
         },
         {
            "OfferId":"ionwxem2",
            "BrandTitle":"Vijay Sales",
            "BrandLogoPath":"assets/images/brands/vijay-sales.png",
            "BrandPageLink":"/offers/brands/jabong.page?"
         },
         {
            "OfferId":"iqjfbj2c",
            "BrandTitle":"Myntra",
            "BrandLogoPath":"assets/images/brands/myntra.png",
            "BrandPageLink":"/offers/brands/myntra.page?"
         },
         {
            "OfferId":"ionwxbrn",
            "BrandTitle":"Tata",
            "BrandLogoPath":"assets/images/brands/tata-cliq.png",
            "BrandPageLink":"/offers/brands/flipkart.page?"
         },
         {
            "OfferId":"ionwxesl",
            "BrandTitle":"Taj",
            "BrandLogoPath":"assets/images/brands/taj.png",
            "BrandPageLink":"/offers/brands/dominos.page?"
         },
         {
          "OfferId":"ionwxbrm",
          "BrandTitle":"Amazon",
          "BrandLogoPath":"assets/images/brands/amazon.png",
          "BrandPageLink":"/offers/brands/amazon.page?"
       },
       {
          "OfferId":"ionwxdf9",
          "BrandTitle":"Make My Trip",
          "BrandLogoPath":"assets/images/brands/mmt.png",
          "BrandPageLink":"/offers/brands/makemytrip.page?"
       },
       {
          "OfferId":"ionwxeui",
          "BrandTitle":"Amazon Prime",
          "BrandLogoPath":"assets/images/brands/amazon-prime.png",
          "BrandPageLink":"/offers/brands/yatra.page?"
       },
       {
          "OfferId":"ionwxesf",
          "BrandTitle":"Zomato",
          "BrandLogoPath":"assets/images/brands/zomato.png",
          "BrandPageLink":"/offers/brands/bookmyshow.page?"
       },
       {
          "OfferId":"ionwxem2",
          "BrandTitle":"Vijay Sales",
          "BrandLogoPath":"assets/images/brands/vijay-sales.png",
          "BrandPageLink":"/offers/brands/jabong.page?"
       },
       {
          "OfferId":"iqjfbj2c",
          "BrandTitle":"Myntra",
          "BrandLogoPath":"assets/images/brands/myntra.png",
          "BrandPageLink":"/offers/brands/myntra.page?"
       },
       {
          "OfferId":"ionwxbrn",
          "BrandTitle":"Tata",
          "BrandLogoPath":"assets/images/brands/tata-cliq.png",
          "BrandPageLink":"/offers/brands/flipkart.page?"
       },
       {
          "OfferId":"ionwxesl",
          "BrandTitle":"Taj",
          "BrandLogoPath":"assets/images/brands/taj.png",
          "BrandPageLink":"/offers/brands/flipkart.page?"
       }
      ]
    };
    var OffersBrand = offersBrandArray['OffersBrand'];

    var titleFirstChar='', brandSectionArray = []
    for (let index = 0; index < OffersBrand.length; index++) {
      var element = OffersBrand[index];
      titleFirstChar = element["BrandTitle"].charAt(0).toUpperCase();
      if(brandSectionArray.indexOf(titleFirstChar) == -1)
        brandSectionArray.push(titleFirstChar);
    }

    $('.brand-nav li').removeClass('ln-disabled');
    $.each($(".brand-nav li"), function(){
        if(brandSectionArray.indexOf($(this).text().toUpperCase()) == -1 && $(this).text().toUpperCase() != 'ALL')
        {
            $(this).addClass('ln-disabled');
        }
    });

    generateBrandCardstems(OffersBrand);

    /* Search Start*/
    $('.brand-top-content .search-box-area input').keyup(function(){
      var inputText = $(this)[0].value;
      if (inputText.length > 0)
        generateBrandCardstems(searchItems(OffersBrand, 'BrandTitle', inputText));
      else
        generateBrandCardstems(OffersBrand);
    });

    $(document).on("click", "ul.ln-letters li", function () {
        $(".ln-letters li").removeClass("ln-selected");
        let letter = $(this)[0].className;
        if (letter.toLowerCase() == 'all')
            generateBrandCardstems(OffersBrand);
        else
            generateBrandCardstems(searchItems(OffersBrand, 'BrandTitle', letter, true));

        $(this).addClass("ln-selected");
    });

    $(window).resize(function(){
        generateBrandCardstems(OffersBrand);
    })
});

function generateBrandCardstems(brandData) {
    console.log(brandData)
    let html = "", cardGroupCount;
    if($(window).width() <= 1200)
        cardGroupCount = 6;
    else
        cardGroupCount = 8;

    for (let index = 0; index < brandData.length; index++)
    {
      if (index % cardGroupCount == 0)
      {
        if (index >= cardGroupCount)
          html += '<div class="brand-list hidden-card">';
        else
          html += '<div class="brand-list">';
      }

      html += generateCardHTML( brandData[index]["BrandPageLink"], brandData[index]["BrandLogoPath"], brandData[index]["BrandTitle"]);

      if (index % cardGroupCount == cardGroupCount - 1)
      {
        html += "</div>";
      }
    }

    //Display result
    html.length > 0 ? $("#brandListWrapper").html(html) : $("#brandListWrapper").html('<div class="no-result"></div>');
}

function generateCardHTML(brandUrl, brandIconPath, brandTitle) {
    var cardHTML = "";

    cardHTML = '<div class="brand-card"><a href="'+brandUrl+'"><div class="media"><img src="'+brandIconPath+'" alt="" /></div><div class="content"><div class="title">'+brandTitle+'</div><div class="offer-text"><img src="assets/images/icons/offers-icon.png" alt="" /><span>20 Offers</span></div></div></a></div>';

    return cardHTML;
}