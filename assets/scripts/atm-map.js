$('.map-popup-content .service-list').mCustomScrollbar();

// updated 27/07/2021 : begin

//updated 03/08/2021
var infowindow;
let directionA = [], directionB = [];
let dirBankCopy = [];
var searchPlace, placeA;
var currentMarkers = [];
let bPickPlace = false;
var directionsDisplay;
const India = { lat: 24.1244487, lng: 80.9679848 };

function topRightControls(controlDiv, map, btnTxtArr, mapTypeArr) {
  const controlUI = document.createElement("div");
  controlUI.style.display = "flex";
  controlUI.style.cursor = "pointer";
  controlUI.style.margin = "20px 20px 0 0";
  controlUI.style.textAlign = "center";
  $(controlUI).addClass("map-type-btns");
  controlDiv.appendChild(controlUI);
  mapTypeArr.forEach((itm, i)=>{
    addMapTypeBtn(map, btnTxtArr[i], mapTypeArr[i], controlUI);
  });
}

function addMapTypeBtn(map, btnText, mapType, controlUI){
  const controlText = document.createElement("div");
  controlText.style.fontFamily = "Muli, sans-serif";
  controlText.style.fontSize = "11.285px";
  controlText.style.fontWeight = "700";
  controlText.style.lineHeight = "30px";
  controlText.style.paddingLeft = "10px";
  controlText.style.paddingRight = "10px";
  controlText.innerHTML = btnText;
  controlUI.appendChild(controlText);
  if(mapType === "ROADMAP"){
    $(controlText).addClass("active-map");
    controlText.style.paddingLeft = "15px";
    controlText.style.borderRadius = "50px 0 0 50px";
  }
  if(mapType === "HOME"){
    controlText.style.paddingRight = "15px";
    controlText.style.borderRadius = "0 50px 50px 0";
  }
  controlText.addEventListener("click", () => {
    $(controlUI).find(".active-map").removeClass("active-map");
    $(controlText).addClass("active-map");
    if(mapType === "HOME"){
      $(controlText).removeClass("active-map");
      $(controlUI).find("div").eq(0).addClass("active-map");
      map.setCenter(India);
      map.setZoom(5);
      map.setMapTypeId(google.maps.MapTypeId["ROADMAP"]);
      toHomePanel();//updated 03/08/2021
      return;
    }
    map.setMapTypeId(google.maps.MapTypeId[mapType]);
  });
}

function initMap() {
  let map;
  var service;
  var _markers = [];
  var CustomOp = {
    center: India,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  };

  map = new google.maps.Map(
    document.getElementById("map-content"),
    CustomOp
  );

  const topRightControlDiv = document.createElement("div");
  topRightControls(topRightControlDiv, map, ["MAP VIEW", "SATELLITE VIEW", "HYBRID", "HOME"], ["ROADMAP", "SATELLITE", "HYBRID", "HOME"]);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(topRightControlDiv);


  //adding show all button
  // const controlUI = document.createElement("div");
  // controlUI.style.cursor = "pointer";
  // controlUI.style.margin = "8px 10px 15px 0";
  // controlUI.style.textAlign = "center";
  // controlUI.style.background = "rgb(248 248 255 / 50%)";
  // $(controlUI).addClass("show-all");
  // const controlText = document.createElement("div");
  // controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  // controlText.style.fontSize = "10px";
  // controlText.style.fontWeight = "700";
  // controlText.style.lineHeight = "15px";
  // controlText.style.paddingLeft = "3px";
  // controlText.style.paddingRight = "3px";
  // controlText.innerHTML = "Show All";
  // controlUI.appendChild(controlText);
  // controlText.addEventListener("click", (e) => {
  // });
  // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlUI);

  // updated 27/07/2021: end

  //direction between route: begin 03/08/2021
  var directionsService = new google.maps.DirectionsService();

  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  google.maps.event.addDomListener(document.getElementById('get-dir-submit'), 'click', calcRoute);

  function calcRoute() {
    if(directionA && directionA.length){
      var start = new google.maps.LatLng(directionA[0], directionA[1]);
      var end = new google.maps.LatLng(directionB[0], directionB[1]);
      var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap(map);
          let routeNode = directionsDisplay.directions.routes[0].legs[0];
          let routeStatHtml = `${routeNode.distance.text}, ${routeNode.duration.text}`;
          $(".df-search-instruction .total-distance").html(routeStatHtml);
          let routeDetailsHtml = `<ul>`;
          routeNode.steps && routeNode.steps.length && routeNode.steps.forEach((item, index) => {
            routeDetailsHtml += `<li>
                <p class="number">${index+1}. </p>
                <div class="direction-block">
                    <p class="directions">${item.instructions}</p>
                    <p class="distance">${item.distance.text}, ${item.duration.text}</p>
                </div>
            </li>`;
          });
          routeDetailsHtml += `</ul>`;
          $(".df-search-instruction .instruction-box").html(routeDetailsHtml);
        } else {
          console.error("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
        }
      });
    }else{
      resetDirectionPanel();
    }
  }
  //direction between route: end

  var atmMapsData = [{ "SITEID": "C1263", "LANDMARK": "ICICI BANK ATM", "POI_ID": "SCCNQ980", "ADDRESS1": "ATM ID- SCCNQ980,ICICI Bank ATM, NO.1, GANDHI ROAD, HASTHAMPATTI, SALEM, TAMIL NADU 636007", "CITY": "Salem", "DISTRICT": "Salem", "STATE": "Tamil Nadu", "PINCODE": "636007", "LONGITUDE": "78.13506317", "LATITUDE": "11.67381191", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No", "PH_NO": "0", "FLAG": "1", "STATUS": "Approved", "Current Status": "Live" }, { "SITEID": "C1377", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CPN298", "ADDRESS1": "ATM ID- S1CPN298,ICICI Bank ATM, Gate no 6, Shipra Suncity Phase 2 Indrapuram , Ghaziabad 201014", "CITY": "Ghaziabad", "DISTRICT": "Ghaziabad", "STATE": "Uttar Pradesh", "PINCODE": "201014", "LONGITUDE": "77.29260254", "LATITUDE": "28.61020088", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No", "PH_NO": "0", "FLAG": "1", "STATUS": "Approved", "Current Status": "Live" }, { "SITEID": "C1376", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CWK207", "ADDRESS1": "ATM ID- S1CWK207,ICICI Bank ATM, Chand Kheda, Sarathy Complex, Near Visad Petrol Pump, Ahmedabad", "CITY": "Ahmedabad", "DISTRICT": "Ahmedabad", "STATE": "Gujarat", "PINCODE": "380005", "LONGITUDE": "72.59609222", "LATITUDE": "23.02770615", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1375", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CWI473", "ADDRESS1": "ATM ID- S1CWI473,ICICI Bank ATM, Shree Khodal Krupa mobile, Beside Navdeep provision store, Garbi chowk, Veraval main road, Shapar-36", "ADDRESS2": "Garbi chowk, Veraval main road, Shapar", "CITY": "KHERDI", "DISTRICT": "Rajkot", "STATE": "Gujarat", "PINCODE": "360002", "LONGITUDE": "70.79881287", "LATITUDE": "22.27799988", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1374", "LANDMARK": "ICICI BANK ATM", "POI_ID": "SPCNG396", "ADDRESS1": "ATM ID- SPCNG396,ICICI Bank ATM, ThyssenKrupp Industries India Pvt ltd, Ambedkar Chowk Pimpri Pune, 411018", "CITY": "Pune", "DISTRICT": "Pune", "STATE": "Maharashtra", "PINCODE": "411018", "LONGITUDE": "73.80460358", "LATITUDE": "18.62479973", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1372", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CPS478", "ADDRESS1": "ATM ID- S1CPS478,ICICI Bank ATM, A M Naik Tower, Krishna Nagar, Powai, Mumbai, Maharashtra", "CITY": "Mumbai", "DISTRICT": "Mumbai", "STATE": "Maharashtra", "PINCODE": "400072", "LONGITUDE": "72.89109802", "LATITUDE": "19.12657738", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1371", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CNQ344", "ADDRESS1": "ATM ID- S1CNQ344,ICICI Bank ATM Rain Tree Palace G 3 No 7 Mc Nichols Road Chetpet Chennai 600031", "CITY": "Chennai", "DISTRICT": "Chennai", "STATE": "Tamil Nadu", "PINCODE": "600031", "LONGITUDE": "80.24133301", "LATITUDE": "13.0706234", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1370", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CNP058", "ADDRESS1": "ATM ID- S1CNP058,ICICI Bank ATM, NO.10, KALIAMMAN KOIL STREET, SREE SAYEE NAGAR, CHINMAYA NAGAR, VIRUGAMBAKKAM, CHENNAI - 600092", "ADDRESS2": "CHINMAYA NAGAR, VIRUGAMBAKKAM,", "CITY": "Chennai", "DISTRICT": "Chennai", "STATE": "Tamil Nadu", "PINCODE": "600092", "LONGITUDE": "80.19512939", "LATITUDE": "13.05896664", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1369", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CWC352", "ADDRESS1": "ATM ID- S1CWC352,Icici Bank Atm Vellore Branch 70/1 Officers Line Vellore 632001", "CITY": "Vellore", "DISTRICT": "Vellore", "STATE": "Tamil Nadu", "PINCODE": "632001", "LONGITUDE": "79.13168335", "LATITUDE": "12.90170193", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1369", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CWK183", "ADDRESS1": "ATM ID- S1CWK183,Icici Bank Atm Vellore Branch 70/1 Officers Line Vellore 632001", "CITY": "Vellore", "DISTRICT": "Vellore", "STATE": "Tamil Nadu", "PINCODE": "632001", "LONGITUDE": "79.13168335", "LATITUDE": "12.90170193", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1368", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CPS124", "ADDRESS1": "ATM ID- S1CPS124,ICICI Bank ATM, C 11 Roshan Pura Extn New Delhi 110043", "CITY": "Delhi", "DISTRICT": "South West Delhi", "STATE": "Delhi", "PINCODE": "110043", "LONGITUDE": "76.98374176", "LATITUDE": "28.60411453", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1368", "LANDMARK": "ICICI BANK ATM", "POI_ID": "S1CPN568", "ADDRESS1": "ATM ID- S1CPN568,ICICI Bank ATM, C 11 Roshan Pura Extn New Delhi 110043", "CITY": "Delhi", "DISTRICT": "South West Delhi", "STATE": "Delhi", "PINCODE": "110043", "LONGITUDE": "76.98374176", "LATITUDE": "28.60411453", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1367", "LANDMARK": "ICICI BANK ATM", "POI_ID": "SPCNG979", "ADDRESS1": "ATM ID- SPCNG979,ICICI Bank ATM, ZONAL CENRAL JP AVENUS,SAGARBHANGE, DURGAPUR --713211", "CITY": "Durgapur", "DISTRICT": "Bardhaman", "STATE": "West Bengal", "PINCODE": "713211", "LONGITUDE": "87.32876587", "LATITUDE": "23.49710274", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }, { "SITEID": "C1366", "LANDMARK": "ICICI BANK ATM", "POI_ID": "SACWG483", "ADDRESS1": "ATM ID- SACWG483,ICICI Bank ATM, Shop no 1, Panvelkar Prestig, Roseberry, Morivali pada, Green City Ambernath East.", "ADDRESS2": "Green City Ambernath East", "CITY": "Thane", "DISTRICT": "Thane", "STATE": "Maharashtra", "PINCODE": "421506", "LONGITUDE": "73.20093536", "LATITUDE": "19.19362831", "Exclusive for the corporate": "No", "For all customer": "No", "Voice guidance": "No", "Ramp-Yes": "No", "Non-Metro ATM": "No", "Metro ATM": "No", "Cardless Cash Withdrawal": "No", "ALL ATM": "No" }];
  var branchMapsData = [{ "Branch Name": "ICICI Bank Ltd,Melmalaiyanur", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Gingee", "CITY": "Gingee", "STATE": "Tamil Nadu", "ADDRESS1": "ICICI Bank Ltd., Vaishiyar Street, Melmalaiyanur Taluk, Villupuram Dist., Malaiyanur - 604204, Tamil Nadu", "PIN Code": "604204", "Monday to Friday-Working Hrs": "9:30AM - 3:00PM", "Saturday-Working Hrs": "9:30AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007705", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "12.3402319", "LONGITUDE": "79.32659912", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Mysore - Saraswathipuram", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Mysore", "CITY": "Mysore", "STATE": "Karnataka", "ADDRESS1": "ICICI Bank Ltd., 2912, CH-57, 1st Main, Kantharaj URS Road, Saraswathipuram, Mysore - 570009, Karnataka", "PIN Code": "570009", "Monday to Friday-Working Hrs": "9:30AM - 3:00PM", "Saturday-Working Hrs": "9:30AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007706", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "12.30082512", "LONGITUDE": "76.63345337", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Navi Mumbai - Belapur Sector15", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Navi Mumbai", "CITY": "Navi Mumbai", "STATE": "Maharashtra", "ADDRESS1": "ICICI Bank Ltd., Shop No.21,22,23, Mahavir Rachna, Near Airtel Showroom, Sector-15, CBD Belapur, Navi Mumbai, Maharashtra - 400614", "PIN Code": "400614", "Monday to Friday-Working Hrs": "9:30AM - 3:00PM", "Saturday-Working Hrs": "9:30AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007699", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "19.01062393", "LONGITUDE": "73.03338623", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Ahmedabad - Nikol II", "Branch Type": "Retail -RIB", "Asset Linked Branch": "No", "DISTRICT": "Ahmedabad", "CITY": "Ahmedabad", "STATE": "Gujarat", "ADDRESS1": "ICICI Bank Ltd., Shop No. 5,6,7, Crystal ICON I, Nr. Sarthi Bunglows, Opp. Shalby Hospital, Nikol, Ahmedabad - 382330, Gujarat", "PIN Code": "382330", "Monday to Friday-Working Hrs": "10:00AM - 2:00PM", "Saturday-Working Hrs": "10:00AM - 2:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007698", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "23.06968307", "LONGITUDE": "72.67719269", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Akaloli - Vajreshwari", "Branch Type": "Retail -RIB", "Asset Linked Branch": "No", "DISTRICT": "Mumbai", "CITY": "Mumbai", "STATE": "Maharashtra", "ADDRESS1": "ICICI Bank Ltd., 5,6 & 7, Jalaram Dham, Ram Dham, Sai Dham, C/O Anand Ashram, Vajreshwari Bhiwandi Road, Akaloli - 401204, Maharashtra", "PIN Code": "401204", "Monday to Friday-Working Hrs": "10:00AM - 2:00PM", "Saturday-Working Hrs": "10:00AM - 2:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007707", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "19.49342346", "LONGITUDE": "73.03476715", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd,Alibag - Collector Office", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Mumbai", "CITY": "Mumbai", "STATE": "Maharashtra", "ADDRESS1": "ICICI Bank Ltd., Ground Floor, Near Additional Collector Office, Collector Office, Raigad, Alibag, Maharashtra - 402201", "PIN Code": "402201", "Monday to Friday-Working Hrs": "9:30AM - 3:00PM", "Saturday-Working Hrs": "9:30AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007723", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "18.64923096", "LONGITUDE": "72.86746979", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Nellikuppam", "Branch Type": "Retail -RIB", "Asset Linked Branch": "No", "DISTRICT": "Cuddalore", "CITY": "Cuddalore", "STATE": "Tamil Nadu", "ADDRESS1": "ICICI Bank Ltd., No.17/125, Main Road, Vaidapakkam, Nellikuppam, Panruti Taluk, Dist: Cuddalore, Tamil Nadu - 607105", "PIN Code": "607105", "Monday to Friday-Working Hrs": "10:00AM - 2:00PM", "Saturday-Working Hrs": "10:00AM - 2:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007720", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "11.77591324", "LONGITUDE": "79.66300964", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Hansalpur Becharaji - Suzuki", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Hansalpur", "CITY": "Hansalpur", "STATE": "Gujarat", "ADDRESS1": "ICICI Bank Ltd., SMG Plant Block No. 334 335, Hansalpur Dist- Ahmedabad Nr. Near Bechraji Taluka -Mandal", "PIN Code": "382130", "Monday to Friday-Working Hrs": "9:00AM - 3:00PM", "Saturday-Working Hrs": "9:00AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007630", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "23.49207306", "LONGITUDE": "72.01209259", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank LTD, Kalpoondi", "Branch Type": "Retail - RIB", "Asset Linked Branch": "No", "DISTRICT": "Tiruvannamalai", "CITY": "Tiruvannamalai", "STATE": "Tamilnadu", "ADDRESS1": "ICICI Bank Ltd., Survey No. 358, Thindivanam Main Road, Kilpennathur Taluk, Kalpoondi, Tiruvannamalai Dist, Tamil Nadu â€“ 604601", "PIN Code": "604601", "Monday to Friday-Working Hrs": "10:00AM - 2:00PM", "Saturday-Working Hrs": "10:00AM - 2:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007695", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "12.24668312", "LONGITUDE": "79.23213959", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank Ltd, Hyderabad - MREC Campus", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Hyderabad", "CITY": "Hyderabad", "STATE": "Telangana", "ADDRESS1": "ICICI Bank Ltd., Malla Reddy Engineering College Campus, Admin Block, Maisammaguda, Dulapally, Hyderabad, Telangana - 500043", "PIN Code": "500043", "Monday to Friday-Working Hrs": "9:30AM - 3:00PM", "Saturday-Working Hrs": "9:30AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007694", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "17.55860138", "LONGITUDE": "78.45119476", "STATUS": "Approved", "Current Status": "Live" }, { "Branch Name": "ICICI Bank LTD, GreaterNoida-Sharda University", "Branch Type": "Retail - Non RIB", "Asset Linked Branch": "No", "DISTRICT": "Greater Noida", "CITY": "Greater Noida", "STATE": "Uttar Pradesh", "ADDRESS1": "ICICI Bank Ltd., Near Gate No.2, Sharda Hospital, Plot No.32 & 34, Knowledge Park-III, Greater Noida, Uttar Pradesh - 201306", "PIN Code": "201306", "Monday to Friday-Working Hrs": "9:30AM - 3:00PM", "Saturday-Working Hrs": "9:30AM - 3:00PM", "Sunday Banking Branch": "No", "IFSC Code": "ICIC0007692", "Ramp-Yes": "No", "ASBA Enabled Branch": "No", "RTGS Enabled Branch": "Yes", "Lockers Enabled Branch": "No", "Trade Enabled Branch": "No", "Gold Loan Branch": "No", "Forex Branch": "No", "Touch Banking Branch": "No", "Exchange of Mutilated Notes": "Yes", "Demat Desk Enabled Branch": "No", "aadhaar enrollment / update": "No", "Loan Servicing Branch": "No", "LATITUDE": "28.47286797", "LONGITUDE": "77.48203278", "STATUS": "Approved", "Current Status": "Live" }];
  let branchCardHtml = '';
  let atmCardHtml = '';
  currentMarkers = $("#category-branch").prop('checked') ? branchMapsData : currentMarkers;
  currentMarkers = $("#category-atm").prop('checked') ? atmMapsData : currentMarkers;
  currentMarkers = ($("#category-branch").prop('checked') && $("#category-branch").prop('checked')) ? [...atmMapsData, ...branchMapsData] : currentMarkers;
  currentMarkers.forEach((i, index) => { //updated 03/08/2021
    const isBranch = i.hasOwnProperty('Branch Name');
    infowindow = new google.maps.InfoWindow({ pixelOffset: new google.maps.Size(180, 150) });
    let marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(i.LATITUDE, i.LONGITUDE),
      icon: isBranch ? 'assets/images/branch_marker.png' : 'assets/images/atm_marker.png', // null = default icon
      title: isBranch ? i["Branch Name"] : i["LANDMARK"]
    });
    _markers.push(marker);
    google.maps.event.addListener(marker, 'click', openMarkerInfo);

    function openMarkerInfo() {
      infowindow.setContent(' <div class="map-popup-content"> <h5>' + (isBranch ? i["Branch Name"] : i["LANDMARK"]) + '</h5> <div class="address"> <span class="map-icon"> <img src="assets/images/icons/atm/map.svg" alt="" /> </span> <p> ' + i["ADDRESS1"] + ' </p> </div>' + (isBranch ? '<div class="address"> <span class="map-icon"> <img src="assets/images/icons/atm/time.svg" alt="" /> </span> <p>'  + 'Mon-Fri: '+ i["Monday to Friday-Working Hrs"] + '<br/> Sat: ' + i["Saturday-Working Hrs"] + '<br/> (Closed on 2nd and 4th Saturday)' + '</p> </div>' : '') + '<h5>Services</h5>' + (isBranch ? '<ul class="service-list"> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/Ramp-blue.svg" alt="" /> </div>Ramp- Yes </li> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/asba-blue.svg" alt="" /> </div>ASBA enabled Branch</li> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/rtgs-blue.svg" alt="" /> </div>Rtgs Enabled Branch</li> </ul>' : '<ul class="service-list"> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/cardless-blue.svg" alt="" /> </div>Cardless Withdrawal </li> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/metroATM-blue.svg" alt="" /> </div>Metro ATM </li> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/mic-blue.svg" alt="" /> </div>Voice Guidance </li> <li> <div class="ser-icon"> <img src="assets/images/icons/atm/profile-blue.svg" alt="" /> </div>For All Customers </li> </ul>') + '<div class="button-group"> <a class="ic-btn ' + (isBranch ? "get-dir-branch" : "get-dir-atm") + '" href="#" onclick="openGetDirSidebar(event, '+ index +')">Get Directions</a> <a class="ic-more" href="#">Know More</a> </div> </div>');
      infowindow.open(map, marker);
      setTimeout(() => {
        $('.map-popup-content .service-list').mCustomScrollbar();
      }, 100);
    }


    //adding cards related to marker: begin //updated 03/08/2021
    if(isBranch){
      branchCardHtml += `
      <div class="deal-card location-card">
          <div class="card-heading">
              <h5>${i["Branch Name"]}</h5>
              <div class="open-status">
                  <div class="status">Open </div>
                  <div class="time">Closes <strong>5:00 <span>pm</span></strong></div>
              </div>
              <div class="phone">0832 336 6777</div>
          </div>
          <div class="card-body">
              <div class="address">
                  ${i["ADDRESS1"]}
              </div>
              <div class="button-group">
                  <a href="#" class="ic-btn get-dir-branch" onclick="openGetDirSidebar(event, ${index})">Get Directions</a>
                  <a href="#" class="ic-more">know more</a>
              </div>
          </div>
      </div>
      `;
    }else{
      atmCardHtml += `
        <div class="deal-card location-card">
          <div class="card-heading">
              <h5>${i["LANDMARK"]}, ${i["CITY"]}</h5>
              <div class="open-status">
                  <div class="status">Open </div>
                  <div class="time">24/7 - 365 Days</div>
              </div>
          </div>
          <div class="card-body">
              <div class="address">
                  ${i["ADDRESS1"]}
              </div>
              <div class="button-group">
                  <a href="#" class="ic-btn get-dir-atm" onclick="openGetDirSidebar(event, ${index})">Get Directions</a>
                  <a href="#" class="ic-more">know more</a>
              </div>
          </div>
      </div>
    `;
    }
    //adding cards related to marker: end
  });
  $("#branch .trending-deals-slider").html(branchCardHtml);
  $("#atm .trending-deals-slider").html(atmCardHtml);
  $(".trending-deals-slider").slick('unslick');
  $(".trending-deals-slider").not('.slick-initialized').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '15px',
        infinite: true,
      }
    }
    ]
  });
  //updated 03/08/2021 :end

    // updated 27/07/2021 : begin

  //places search: begin
  function initialize() {
    searchPlace = new google.maps.places.Autocomplete(document.getElementById('searchPlaces'),
                  {types: ['geocode'], componentRestrictions: {country: 'in'}});
    placeA = new google.maps.places.Autocomplete(document.getElementById('searchDirectionA'),
              {types: ['geocode'], componentRestrictions: {country: 'in'}});
    placeA.addListener('place_changed', function() {
      var place = placeA.getPlace();
      if (!place.geometry) {
        console.log('Place Not Found, You Entered: ' + place.name);
        directionA = [];
        return;
      }
      directionA = [place.geometry.location.lat(), place.geometry.location.lng(), place.formatted_address];
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
  //places search: end

  //geolocation functionality : begin//updated 03/08/2021
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        infoByGeocode(lat, lng);
      }, function(){ // fail cb
        
      });
    }else{
      document.getElementById("searchDirectionA").value = "Geolocation is not supported by this browser.";
    }
  }

  function infoByGeocode(lat, lng) {
    var google_map_pos = new google.maps.LatLng( lat, lng );
    var google_maps_geocoder = new google.maps.Geocoder();
    google_maps_geocoder.geocode(
        { 'latLng': google_map_pos },
        function( results, status ) {
            if ( status == google.maps.GeocoderStatus.OK && results[0] ) {
              const address = results[0].formatted_address;
              document.getElementById("searchDirectionA").value = address;
              directionA = [lat, lng, address];
            }
        }
    );
  }

  document.getElementById("get-geo-loc").addEventListener("click", geolocate);
  //geolocation functionality : end

  //pick point A for map: begin//updated 03/08/2021
  function pickPlace(){
    bPickPlace = !bPickPlace;
    if(bPickPlace){
      map.setOptions({draggableCursor:'crosshair'});
      document.getElementById("pick-point-a").style.filter = "grayscale(1)";
      map.addListener("click", (mapsMouseEvent) => {
          infoByGeocode(mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
          setTimeout(calcRoute, 1000);
          (bPickPlace = true) && pickPlace();
      });
    }else{
      document.getElementById("pick-point-a").style.filter = "grayscale(0)";
      map.setOptions({draggableCursor:'grab'});
      google.maps.event.clearListeners(map, 'click');
    }
  }

  document.getElementById("pick-point-a").addEventListener("click", pickPlace);
  //pick point A for map: end

  // updated 27/07/2021 : end
}

// global functions : begin//updated 03/08/2021

function gm_authFailure() { //update 29/07/2021
  $('#map-error').removeClass('hide');
  $('#map-content').addClass('hide');
  $('.result-num').addClass('hide');
};

function toHomePanel(){
  $(".direction-filter").addClass("hide");
  $(".listing-filter").removeClass("hide");
}

function resetDirectionPanel(){
  $("#get-dir-form").get(0).reset();
  directionA = [];
  directionB = dirBankCopy;
  $("#directionB").html(directionB[2]);
  $(".df-search-instruction .total-distance, .df-search-instruction .instruction-box").html('');
  directionsDisplay.setMap(null);

  (bPickPlace = true) && (document.getElementById("pick-point-a").click());
}

function openGetDirSidebar(e, markerIndex){
  const markerObj = currentMarkers[markerIndex];
  e.preventDefault();
  $(".direction-filter").removeClass("hide");
  $(".listing-filter").addClass("hide");
  infowindow && infowindow.close();

  const isBranch = markerObj.hasOwnProperty('Branch Name');
  const dirBhtml = `${(isBranch ? markerObj["Branch Name"] : markerObj["LANDMARK"])} : ${markerObj["ADDRESS1"]}`;
  $("#directionB").html(dirBhtml);

  dirBankCopy = directionB = [markerObj["LATITUDE"], markerObj["LONGITUDE"], dirBhtml];

  resetDirectionPanel();

  $('html, body').animate({
    scrollTop: $(".map-section").offset().top
  }, 1000);
}

// global functions : end

//update 03/08/2021 : Begin
!(function(){ //updated 03/08/2021
  $("#get-dir-form").on("submit", (e)=>{
    e.preventDefault();
  });

  $("#get-dir-reset").on("click", (e)=>{
    resetDirectionPanel();
  });

  $(".df-toggle #swap-dir").on("click", (e)=>{
    if(directionA && directionA.length){
      $("#directionB").html(directionA[2]);
      $("#searchDirectionA").val(directionB[2]);
      let temp = directionA;
      directionA = directionB;
      directionB = temp;

    }
  });
  
  $(".direction-filter .close").click(()=>{
    toHomePanel();
    resetDirectionPanel();
  });
    
}());