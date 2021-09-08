$(document).ready(function () {
  //Json Content for Questions
  var itemBrandArray = [
    {
      brandIcon: 'assets/images/brandsnew/apple.png',
      title: 'Apple',
      offerCount: '10 Offers',
      url: "brand.html",
      popular:'yes',
    },
    {
      brandIcon: 'assets/images/brandsnew/binatone.png',
      title: 'Binatone',
      offerCount: '15 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/cellecor.png',
      title: 'Cellecor',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/dell.png',
      title: 'Dell',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'yes',
    },
    {
      brandIcon: 'assets/images/brandsnew/elephone.png',
      title: 'Elephone',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/fox.png',
      title: 'Fox',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/gamexy.png',
      title: 'Famexy',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/honor.png',
      title: 'Honor',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/htc.png',
      title: 'HTC',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'yes',
    },
    {
      brandIcon: 'assets/images/brandsnew/i-plus.png',
      title: 'I-Plus',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/iball.png',
      title: 'Iball',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'yes',
    },
    {
      brandIcon: 'assets/images/brandsnew/josh.png',
      title: 'Josh',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/karbon.png',
      title: 'Karbonn',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/lenevo.png',
      title: 'Lenovo',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/lg.png',
      title: 'LG',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/mtech.png',
      title: 'M-tech',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/mafe.png',
      title: 'Mafe',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/oppo.png',
      title: 'OPPO',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/oneplus.png',
      title: 'OnePlus',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'yes',
    },
    {
      brandIcon: 'assets/images/brandsnew/panasonic.png',
      title: 'Panasonic',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/qtel.png',
      title: 'Q-Tel',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/rage.png',
      title: 'Rage',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/skyshop.png',
      title: 'Skyshop',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/TCL.png',
      title: 'TCL',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/TYMES.png',
      title: 'TYMES',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Unifone.png',
      title: 'Unifone',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Vaku.png',
      title: 'Vaku',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Wizphone.png',
      title: 'Wizphone',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/xiaomi.png',
      title: 'xiaomi',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Yxtel.png',
      title: 'Yxtel',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Zen.png',
      title: 'Zen',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Acer.png',
      title: 'acer',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    },
    {
      brandIcon: 'assets/images/brandsnew/Blackberry.png',
      title: 'Blackberry',
      offerCount: '20 Offers',
      url: "brand.html",
      popular:'no',
    }
  ];
  generatePopupListItems(itemBrandArray);

  /* Search Start*/
  $('.sidebar-content .sb-brands .search-box-area input').focus(function(){
    $('.sidebar-content .sb-brands .brand-poupup').show();
    generatePopupListItems(itemBrandArray);
  });
  $(".sb-brands .more-link").click(function () {
    generatePopupListItems(itemBrandArray);
  });
  $('.sidebar-content .sb-brands .search-box-area input').keyup(function(){
    var inputText = $(this)[0].value;
    if (inputText.length > 0)
      generatePopupListItems(searchItems(itemBrandArray, 'title', inputText));
    else
      generatePopupListItems(itemBrandArray);
  });
});

function generatePopupListItems(requestsData) {
  let html = "", mostPopularArray = [], sectionArray = [];

  for (let index = 0; index < requestsData.length; index++)
  {
    const element = requestsData[index];
    if(element["popular"].toLowerCase() == 'yes')
    {
      mostPopularArray.push(element);
    }
  }

  /* 18/12/2020 code update */
  if(mostPopularArray.length > 0)
  {
    html += '<div class="list list-title"><h4>POPULAR</h4></div>';
    for (let index = 0; index < mostPopularArray.length; index++) {
      html += generateBrandHTML(mostPopularArray[index]["title"]);
    }
  }

  if(requestsData.length > 0)
  {
    requestsData.sort(compare);
    for (let index = 0; index < requestsData.length; index++) {
      var secTitle = requestsData[index]["title"].charAt(0).toUpperCase();
      if(sectionArray.indexOf(secTitle) == -1)
      {
        sectionArray.push(secTitle);
        html += '<div class="list list-title"><h4>'+secTitle+'</h4></div>';
      }
      html += generateBrandHTML(requestsData[index]["title"]);
    }
  }

  //Display result
  $('#brandListWrapper').html(html);

  $('.brand-poupup .brand-nav li').removeClass('ln-disabled');
  $.each($(".brand-poupup .brand-nav li"), function(){
    if(sectionArray.indexOf($(this).text().toUpperCase()) == -1)
    {
      $(this).addClass('ln-disabled');
    }
  });

  let timeout = null;
  // code change 18/12/2020
  $(document).on("click", ".brand-poupup .brand-nav li", function () {
    if(timeout != null){
      clearTimeout(timeout);
    }
    var selectedChar = $(this).text();
    var flag = false;
    $('.brand-poupup .brand-poupup-middle .list').addClass('ln-disabled');
    $('.brand-poupup .brand-poupup-middle .list h4').removeClass('ln-active');

    $.each($(".brand-poupup .brand-poupup-middle .list"), function(){
      if($(this).text().toUpperCase() == selectedChar)
      {
        flag = true;
      }
      if($(this).text().toUpperCase().charAt(0) == selectedChar.toUpperCase() && flag)
      {
        $(this).removeClass('ln-disabled');

        $(this).find('h4').addClass('ln-active');
      }
    });
    timeout = setTimeout(function(){
      $(".brand-poupup-middle").scrollCenterORI(".ln-active",500);
    }, 200)
  });
  //end code change 18/12/2020
}

// code change 14/12/2020
function generateBrandHTML(cardTitle) {
  var checkBoxValue = cardTitle.toLowerCase().replace(/\s/g, '');
  var html = '<div class="list"><label class="checkbox-list checkbox-popup-list">'+cardTitle+'<input type="checkbox" value="'+checkBoxValue+'"><span class="checkmark"></span></label></div>';
  return html;
}
// end code change 30-11-2020

function compare(a, b) {
  if (a.title.toUpperCase() < b.title.toUpperCase())
      return -1;
  if (a.title.toUpperCase() > b.title.toUpperCase())
      return 1;
  return 0;
}