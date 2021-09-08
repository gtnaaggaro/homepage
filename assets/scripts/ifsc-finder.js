!(function () {
    //Json Content for Branch
    var branchArray = [ { "BranchName": "ICICI Bank Ltd,Melmalaiyanur", "IfscCodeNo": "ICIC0007705", "Address": "ICICI Bank Ltd., Vaishiyar Street, Melmalaiyanur Taluk, Villupuram Dist., Malaiyanur - 604204, Tamil Nadu ", "City": "Gingee", "State": "Tamil Nadu" }, { "BranchName": "ICICI Bank Ltd, Mysore - Saraswathipuram", "IfscCodeNo": "ICIC0007706", "Address": "ICICI Bank Ltd., 2912, CH-57, 1st Main, Kantharaj URS Road, Saraswathipuram, Mysore - 570009, Karnataka ", "City": "Mysore", "State": "Karnataka" }, { "BranchName": "ICICI Bank Ltd, Navi Mumbai - Belapur Sector15", "IfscCodeNo": "ICIC0007699", "Address": "ICICI Bank Ltd., Shop No.21,22,23, Mahavir Rachna, Near Airtel Showroom, Sector-15, CBD Belapur, Navi Mumbai, Maharashtra - 400614 ", "City": "Navi Mumbai", "State": "Maharashtra" }, { "BranchName": "ICICI Bank Ltd, Ahmedabad - Nikol II", "IfscCodeNo": "ICIC0007698", "Address": "ICICI Bank Ltd., Shop No. 5,6,7, Crystal ICON I, Nr. Sarthi Bunglows, Opp. Shalby Hospital, Nikol, Ahmedabad - 382330, Gujarat ", "City": "Ahmedabad", "State": "Gujarat" }, { "BranchName": "ICICI Bank Ltd, Akaloli - Vajreshwari", "IfscCodeNo": "ICIC0007707", "Address": "ICICI Bank Ltd., 5,6 &amp; 7, Jalaram Dham, Ram Dham, Sai Dham, C/O Anand Ashram, Vajreshwari Bhiwandi Road, Akaloli - 401204, Maharashtra ", "City": "Mumbai", "State": "Maharashtra" }, { "BranchName": "ICICI Bank Ltd,Alibag - Collector Office", "IfscCodeNo": "ICIC0007723", "Address": "ICICI Bank Ltd., Ground Floor, Near Additional Collector Office, Collector Office, Raigad, Alibag, Maharashtra - 402201 ", "City": "Mumbai", "State": "Maharashtra" }, { "BranchName": "ICICI Bank Ltd, Nellikuppam", "IfscCodeNo": "ICIC0007720", "Address": "ICICI Bank Ltd., No.17/125, Main Road, Vaidapakkam, Nellikuppam, Panruti Taluk, Dist: Cuddalore, Tamil Nadu - 607105 ", "City": "Cuddalore", "State": "Tamil Nadu" }, { "BranchName": "ICICI Bank Ltd, Hansalpur Becharaji - Suzuki", "IfscCodeNo": "ICIC0007630", "Address": "ICICI Bank Ltd., SMG Plant Block No. 334 335, Hansalpur Dist- Ahmedabad Nr. Near Bechraji Taluka -Mandal ", "City": "Hansalpur", "State": "Gujarat" }, { "BranchName": "ICICI Bank LTD, Kalpoondi", "IfscCodeNo": "ICIC0007695", "Address": "ICICI Bank Ltd., Survey No. 358, Thindivanam Main Road, Kilpennathur Taluk, Kalpoondi, Tiruvannamalai Dist, Tamil Nadu &acirc;&euro;&ldquo; 604601 ", "City": "Tiruvannamalai", "State": "Tamilnadu" }, { "BranchName": "ICICI Bank Ltd, Hyderabad - MREC Campus", "IfscCodeNo": "ICIC0007694", "Address": "ICICI Bank Ltd., Malla Reddy Engineering College Campus, Admin Block, Maisammaguda, Dulapally, Hyderabad, Telangana - 500043 ", "City": "Hyderabad", "State": "Telangana" }, { "BranchName": "ICICI Bank LTD, GreaterNoida-Sharda University", "IfscCodeNo": "ICIC0007692", "Address": "ICICI Bank Ltd., Near Gate No.2, Sharda Hospital, Plot No.32 &amp; 34, Knowledge Park-III, Greater Noida, Uttar Pradesh - 201306 ", "City": "Greater Noida", "State": "Uttar Pradesh" }, { "BranchName": "ICICI Bank Ltd,Hyderabad - My Home Bhooja", "IfscCodeNo": "ICIC0007689", "Address": "ICICI Bank Ltd., Plot No 22 to 24 &amp; 31 to 33, Sy No: 83/1, Next to Biodiversity Park, Raidurg, Serilingampally Mandal, Hyderabad - 500032, Telangana ", "City": "Hyderabad", "State": "Telangana" }, { "BranchName": "ICICI Bank Ltd,Gurgaon - JMd Pacific Square", "IfscCodeNo": "ICIC0007693", "Address": "ICICI Bank Ltd., GF-05 &amp; 06, JMD Pacific Square, Sector-15, Gurugram, Haryana - 122001 ", "City": "Gurugram", "State": "Harayana" }, { "BranchName": "ICICI Bank Ltd,Gurgaon - Tee Point, Sector-65", "IfscCodeNo": "ICIC0007242", "Address": "ICICI Bank Ltd., Unit No. 008 to 010, Ground Floor, Block-1, M3M Tee Point, Sector-65, Gurugram, Haryana - 122002 ", "City": "Gurugram", "State": "Harayana" } ];
    $(document).ready(function () {

        const $stateDrop = $('#state-dropdown');
        const $cityDrop = $('#city-dropdown');
        const $branchDrop = $('#branch-dropdown');
        const $branchTable = $('.branch-table');

        $("select").selectmenu(); // #state-dropdown, #city-dropdown, #branch-dropdown

        const defaultResHtml = $branchTable.html();
        
        const uniqueState = [];
        branchArray.forEach(function(itm) {
            !uniqueState.includes(itm.State) && 
            uniqueState.push(itm.State) && 
            $stateDrop.append($('<option>', {value:itm.State, text:itm.State}));//code update 23/07/2021
        });
        $stateDrop.selectmenu("refresh");//code update 23/07/2021

        $stateDrop.on( "selectmenuchange", function( event, state ) {
            let uniqueCity = [];
            const selectedState = state.item.value;
            $cityDrop.html($('<option>', {text:"- Select City -"})).selectmenu("refresh");
            $branchDrop.html($('<option>', {text:"- Select Branch -"})).selectmenu("refresh");
            $branchTable.html(defaultResHtml);
            branchArray.forEach(function(itm) {
                (itm.State === selectedState) && 
                !uniqueCity.includes(itm.City) && 
                uniqueCity.push(itm.City) && 
                $cityDrop.append($('<option>', {value:itm.City, text:itm.City}));//code update 23/07/2021
            });
            $cityDrop.selectmenu("refresh");//code update 23/07/2021
        });

        $cityDrop.on( "selectmenuchange", function( event, city ) {
            let uniqueBranch = [];
            const selectedCity = city.item.value; 
            $branchTable.html('') && 
            $branchDrop.html($('<option>', {text:"- Select Branch -"})).selectmenu("refresh");
            branchArray.forEach(function(itm) {
                (itm.City === selectedCity) && 
                !uniqueBranch.includes(itm.BranchName) && 
                uniqueBranch.push(itm.BranchName) 
                && $branchDrop.append($('<option>', {value:itm.BranchName, text:itm.BranchName})) && //code update 23/07/2021
                appendBranchTable(itm);
            });
            $branchDrop.selectmenu("refresh");//code update 23/07/2021
            !uniqueBranch.length && $branchTable.html(defaultResHtml);
        });

        $branchDrop.on( "selectmenuchange", function( event, branch ) {
            let selectedBranch = [];
            const selectedBranchVal = branch.item.value;
            $branchTable.html('')
            branchArray.forEach(function(itm) {
                (itm.BranchName === selectedBranchVal) &&
                selectedBranch.push(itm.BranchName) &&
                appendBranchTable(itm);
            });
            !selectedBranch.length && $branchTable.html(defaultResHtml);
        });

        autoCompleteBranch();

        function autoCompleteBranch() {
            var resultArr = [];

            $(".search-box-area input").off("focus");//code update 29/07/2021

            $(".search-box-area input").on("focus", () => {
                $(".search-box-area input").val("");//code update 29/07/2021
            });

            $(".search-box-area input").keyup(function () {

                var inputText = $(this)[0].value;
                if (inputText.length > 2) { //code update 23/07/2021
                    $(".search-container").addClass("active");
                    $(".search-listing ul").show();//code update 29/07/2021
                    $(".search-listing").addClass("active");
                    $(".quetion-list").html("");
                    var searchArray = searchItems(branchArray, 'BranchName', inputText);
                    resultArr = searchArray.slice(0, 50);//code update 29/07/2021
                    generateSearchResult(resultArr, inputText, 'BranchName', 'ul.quetion-list', false);
                    if(!resultArr.length){ //code update 29/07/2021
                        $(".search-listing ul").html("<span class='no-branch'>No Branch Found</span>");
                    }
                }
                else{
                    $('.quetion-list').html('');
                    resultArr = [];
                }

            });

            $(document).on("click", ".search-listing ul li", function () {
                const selectedBranch = resultArr.filter((obj) => (obj.BranchName === $(this).text()))[0];
                $stateDrop.val('- Select State -').selectmenu("refresh");
                $cityDrop.val('- Select City -').selectmenu("refresh");
                $branchDrop.val('- Select Branch -').selectmenu("refresh");
                $branchTable.html('');
                appendBranchTable(selectedBranch);
                $(".search-box-area input").val($(this).text());
                $(".search-listing ul").hide();
                $(".search-container").removeClass("active");
                $(".search-listing").removeClass("active");
            });


        }

        function appendBranchTable(branchObj){
            $(
                `<table>\n\
                <tbody>\n\
                   <tr>\n\
                      <td>Branch Name</td>\n\
                      <td>${branchObj.BranchName || "-----"}</td>\n\
                   </tr>\n\
                   <tr>\n\
                      <td>IFSC Code</td>\n\
                      <td>${branchObj.IfscCodeNo || "-----"}</td>\n\
                   </tr>\n\
                   <tr>\n\
                      <td>Address</td>\n\
                      <td>${branchObj.Address || "-----"}</td>\n\
                   </tr>\n\
                   <tr>\n\
                      <td>City</td>\n\
                      <td>${branchObj.City || "-----"}</td>\n\
                   </tr>\n\
                   <tr>\n\
                      <td>State</td>\n\
                      <td>${branchObj.State || "-----"}</td>\n\
                   </tr>\n\
                </tbody>\n\
             </table>`
            ).appendTo('.branch-table');
        }

        $("#branch-form").submit((e) => {
            e.preventDefault();
        });
    });

}());