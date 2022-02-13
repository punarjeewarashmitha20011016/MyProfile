var loginBtn = $("#loginBtn");
var signupBtn = $("#signupBtn");
var logoutBtn = $("#logoutBtn");
var signupBtnInLogin = $("#signupBtnInLogin");
var logoutBtnInSignup = $("#logoutBtnInSignup");
var homeNav = $("#Home");
var ordersNav=$("#Orders");
var itemsNav=$("#Items");
var customerNav=$("#Customer");
var orderDetailsBtn=$("#viewOrderDetailsBtn");


var homeSection = $("#homeSection");
var ordersSection = $("#ordersSection");
var orderDetailsSection = $("#orderDetailsSection");
var itemsSection = $("#itemsSection");
var customerSection = $("#customerSection");
var loginSection = $("#loginSection");
var signupSection = $("#signupSection");
var headerNav = $("#headerNav");



loginBtn.click(function(){
    homeSection.css("display","block")
    ordersSection.css("display","none")
    orderDetailsSection.css("display","none")
    itemsSection.css("display","none")
    customerSection.css("display","none")
    loginSection.css("display","none")
    signupSection.css("display","none")
    headerNav.css("display","block")
});
signupBtnInLogin.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","block");
    headerNav.css("display","none");
});

logoutBtnInSignup.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","block");
    signupSection.css("display","none");
    headerNav.css("display","none");
});
logoutBtn.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","block");
    signupSection.css("display","none");
    headerNav.css("display","none");
});
signupBtn.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","block");
    headerNav.css("display","none");
});

homeNav.click(function(){
    homeSection.css("display","block");
    ordersSection.css("display","none");
    orderDetailsSetion.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});

ordersNav.click(function(){
    ordersSection.css("display","block");
    homeSection.css("display","none");
    orderDetailsSectio.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});
itemsNav.click(function(){
    itemsSection.css("display","block");
    ordersSection.css("display","none");
    homeSection.css("display","none");
    orderDetailsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});
customerNav.click(function(){
    customerSection.css("display","block");
    itemsSection.css("display","none");
    ordersSection.css("display","none");
    homeSection.css("display","none");
    orderDetailsSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});
orderDetailsBtn.click(function(){
    customerSection.css("display","none");
    itemsSection.css("display","none");
    ordersSection.css("display","none");
    homeSection.css("display","none");
    orderDetailsSection.css("display","block");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});







// -----------------mobilenav-----------",--------

var mobileNavHome = $("#mobileNavHome");
var mobileNavOrders =$("#mobileNavOrders");
var mobileNavItems = $("#mobileNavItems");
var mobileNavCustomer = $("#mobileNavCustomer");
var mobileNavSignup = $("#mobileNavSignup");
var mobileNavLogout = $("#mobileNavLogout");

mobileNavHome.click(function(){
    homeSection.css("display","block");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});
mobileNavOrders.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","block");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});

mobileNavItems.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","block");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});

mobileNavCustomer.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","block");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});
mobileNavSignup.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","block");
    headerNav.css("display","none");
});
mobileNavLogout.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSection.css("display","none");
    itemsSection.css("display","none");
    customerSection.css("display","none");
    loginSection.css("display","block");
    signupSection.css("display","none");
    headerNav.css("display","none");
});

function validate(pattern,array,index,e,saveBtn){
    if(pattern.test(array[index].val())){
        array[index].css("border","3px solid green");
        if(e.key==='Enter'){
            array[index+1].focus();
        }
        saveBtn.prop("disabled",false);
        return true;
    }
    else{
         array[index].css("border","3px solid red");
         saveBtn.prop("disabled",true);
         return false;
    }
    return false;
}

// --------------------Items Section ------------------------
var tBodyInItems = $(".Items .container-fluid div:nth-child(3) div table tbody");
var rowNo =1;

var itemCodeInItems = $("#itemCodeInItems");
var itemDescriptionInItems = $("#itemDescriptionInItems");
var itemQtyInItems = $("#itemQtyInItems");
var itemBuyingPriceInItems = $("#itemBuyingPriceInItems");
var itemUnitPriceInItems = $("#itemUnitPriceInItems");
var itemDiscountInItems = $("#itemDiscountInItems");
var saveItemBtn = $("#saveItems");
var updateItemBtn = $("#updateItemBtn");
var deleteItemBtn = $("#deleteItemBtn");

var itemCodePattern = /^(I-)[0-9]{3}$/;
var itemDescriptionPattern = /^[0-9A-z ]+[.]*[/]*[(]*[)]*[']*[,]*[&]*[-]*$/;
var itemQtyPattern = /^[0-9]+$/;
var itemBuyingPattern = /^[0-9.]{1,}$/;
var itemUnitPattern = /^[0-9.]{1,}$/;
var itemDiscountPattern = /^[0-9.]{1,}$/;

var itemsArray=[itemCodeInItems,itemDescriptionInItems,itemQtyInItems,itemBuyingPriceInItems,itemUnitPriceInItems,itemDiscountInItems];
var itemsListIndex = 0;
var itemsList=[];


itemCodeInItems.keyup(function(e){
    let index =0;
    var itemCodeLbl = $("#itemCodeLblInItems span");
    if(validate(itemCodePattern,itemsArray,index,e,saveItemBtn)== true){
        itemCodeLbl.text("Code");
    }else{
        itemCodeLbl.text("Please use the given format (I-001)");
    }
});

itemDescriptionInItems.keyup(function(e){
    let index =1;
    let itemDescriptionLbl = $("#itemDescriptionLblInItems span");
    if(validate(itemDescriptionPattern,itemsArray,index,e,saveItemBtn)== true){
        itemDescriptionLbl.css('font-size','unset');
        itemDescriptionLbl.text("Description");
    }else{
        itemDescriptionLbl.css('font-size','12px');
        itemDescriptionLbl.text("Please only use these special characters only (./()',&-)");
    }
})

itemQtyInItems.keyup(function(e){
    let index =2;
    let itemQtyLbl = $("#itemQtyLblInItems span")
    if(validate(itemQtyPattern,itemsArray,index,e,saveItemBtn) == true){
        itemQtyLbl.text("Qty");
    }else{
        itemQtyLbl.text("Please use a whole number");
    }
    
})

itemBuyingPriceInItems.keyup(function(e){
    let index =3;
    let itemBuyingPriceLbl = $("#itemBuyingPriceLblInItems span")
    if(validate(itemBuyingPattern,itemsArray,index,e,saveItemBtn) == true){
        itemBuyingPriceLbl.text("Buying Price");
    }else{
        itemBuyingPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemUnitPriceInItems.keyup(function(e){
    let index =4;
    let itemUnitPriceLbl = $("#itemUnitPriceLblInItems span")
    if(validate(itemUnitPattern,itemsArray,index,e,saveItemBtn) == true){
        itemUnitPriceLbl.text("Unit Price");
    }else{
        itemUnitPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemDiscountInItems.keyup(function(e){
    let index =5;
    let itemDiscountLbl = $("#itemDiscountLblInItems span")
    if(validate(itemDiscountPattern,itemsArray,index,e,saveItemBtn) == true){
        itemDiscountLbl.text("Discount");
    }else{
        itemDiscountLbl.text("Please use the format (5.0 or 5)");
    }
})

saveItemBtn.click(function(){
    let arr = [itemCodeInItems.val(),itemDescriptionInItems.val(),itemQtyInItems.val(),itemBuyingPriceInItems.val(),itemUnitPriceInItems.val(),itemDiscountInItems.val()];
    for(let i = itemsListIndex;i<itemsListIndex+1;i++){
        itemsList[i]=[];
        for(let j=0;j<arr.length;j++){
            if(itemsList[i][j]!=arr[i]){
                itemsList[i][j] = arr[j];
            }
        }
    }
    tBodyInItems.append("<tr><td>"+rowNo+"</td><td>"+itemsList[itemsListIndex][0]+"</td><td>"+itemsList[itemsListIndex][1]+"</td><td>"+itemsList[itemsListIndex][2]+"</td><td>"+itemsList[itemsListIndex][3]+"</td><td>"+itemsList[itemsListIndex][4]+"</td><td>"+itemsList[itemsListIndex][5]+"</td></tr>");
    rowNo++;
    itemsListIndex++;

    var tableRow = $(".Items .container-fluid div:nth-child(3) div .table tbody tr");
    tableRow.off("click")
    tableRow.click(function(){
        itemCodeInItems.val($(this).children("td:nth-child(2)").text());
        itemDescriptionInItems.val($(this).children("td:nth-child(3)").text());
        itemQtyInItems.val($(this).children("td:nth-child(4)")[0].text());
        itemBuyingPriceInItems.val($(this).children("td:nth-child(5)").text());
        itemUnitPriceInItems.val($(this).children("td:nth-child(6)").text());
        itemDiscountInItems.val($(this).children("td:nth-child(7)").text());
    });
    clearFieldsInItems();
});

var searchItemIndex = 0;
itemCodeInItems.keydown(function(e){
    if(e.key=='Enter'){
        let itemCode = itemCodeInItems.val();
        for(let i = 0;i<itemsList.length;i++){
            for (let j = 0; j < itemsList[i].length; j++) {
                if(itemsList[i][j]==itemCode){
                    itemDescriptionInItems.val(itemsList[i][1])
                    itemQtyInItems.val(itemsList[i][2])
                    itemBuyingPriceInItems.val(itemsList[i][3])
                    itemUnitPriceInItems.val(itemsList[i][4])
                    itemDiscountInItems.val(itemsList[i][5])
                    searchItemIndex = i;
                }
            }
        }
    }
})

updateItemBtn.click(function(){
    itemsList[searchItemIndex] = null;
    itemsList[searchItemIndex] = [itemCodeInItems.val(),itemDescriptionInItems.val(),itemQtyInItems.val(),itemBuyingPriceInItems.val(),itemUnitPriceInItems.val(),itemDiscountInItems.val()];
    let rowNoToUpdate = 0;
    $(".Items .container-fluid div:nth-child(3) div table tbody tr").filter(function(){
        rowNoToUpdate = $(this).children("td:nth-child(1)").text();
        if($(this).children("td:nth-child(2)").text() == itemsList[searchItemIndex][0]){
            $(this).replaceWith("<tr><td>"+rowNoToUpdate+"</td><td>"+itemsList[searchItemIndex][0]+"</td><td>"+itemsList[searchItemIndex][1]+"</td><td>"+itemsList[searchItemIndex][2]+"</td><td>"+itemsList[searchItemIndex][3]+"</td><td>"+itemsList[searchItemIndex][4]+"</td><td>"+itemsList[searchItemIndex][5]+"</td></tr>");
        }
    })
    clearFieldsInItems();
});

deleteItemBtn.click(function(){
    let itemCode = itemCodeInItems.val();
    for(let i = 0;i<itemsList.length;i++){
        let temp = itemsList[i+1];
        for (let j = 0; j < itemsList[i].length; j++) {
            if(itemsList[i][j]==itemCode){
                itemsList[i] = itemsList[i+1];
            }
        }
        if(temp == i){
            temp--;
        }
    }
})

function clearFieldsInItems(){
    itemCodeInItems.val("");
    itemDescriptionInItems.val("");
    itemQtyInItems.val("");
    itemBuyingPriceInItems.val("");
    itemUnitPriceInItems.val("");
    itemDiscountInItems.val("");
}

// --------------------Customer Section ------------------------

var saveCustomer = $("#saveCustomer");
var cusUpdateBtn = $('#cusUpdateBtn');
var cusId = $("#cusId");
var cusName = $("#cusName");
var cusContactNo = $("#cusContactNo");
var cusNic = $("#cusNic");
var cusAddress = $("#cusAddress");
var tblCus = $("#tblCus");
var tblCusBody = $("#tblCus tbody");
var cusTblRow=1;
var cusArray = [];
var cusArrayIndex = 0;
var searchCusIndex = 0;

var cusIdPattern = /^(C-)[0-9]{3}$/;
var cusNamePattern = /^[A-z ]+$/;
var cusContactPattern = /^[0-9]{10}$/;
var cusNicPattern = /^(([0-9]{9}[v]{1})|([0-9]{12}))$/;
var cusAddressPattern = /^[A-z0-9.,/ ]*$/

var cusInputsArr = [cusId,cusName,cusContactNo,cusNic,cusAddress];

cusId.keyup(function(e){
    let index =0;
    var cusIdLbl = $("#cusIdLabelInCustomers span");
    if(validate(cusIdPattern,cusInputsArr,index,e,saveCustomer)== true){
        cusIdLbl.text("Id");
    }else{
        cusIdLbl.text("Please use the given format (C-001)");
    }
})

cusName.keyup(function(e){
    let index =1;
    var cusNameLbl = $("#cusNameLabelInCustomers span");
    if(validate(cusNamePattern,cusInputsArr,index,e,saveCustomer)== true){
        cusNameLbl.css('font-size','unset');
        cusNameLbl.text("Name");
    }else{
        cusNameLbl.css('font-size','12px');
        cusNameLbl.text("Please use the given format (Kamal Bandara)");
    }
})

cusContactNo.keyup(function(e){
    let index =2;
    var cusContactLbl = $("#cusContactLabelInCustomers span");
    if(validate(cusContactPattern,cusInputsArr,index,e,saveCustomer)== true){
        cusContactLbl.text("Contact No");
    }else{
        cusContactLbl.text("Please use only 10 digits");
    }
})

cusNic.keyup(function(e){
    let index =3;
    var cusNicLbl = $("#cusNicLabelInCustomers span");
    if(validate(cusNicPattern,cusInputsArr,index,e,saveCustomer)== true){
        cusNicLbl.text("Nic");
    }else{
        cusNicLbl.text("Please use only valid Nic numbers");
    }
})

cusAddress.keyup(function(e){
    let index =4;
    var cusAddressLbl = $("#cusAddressLabelInCustomers span");
    if(validate(cusAddressPattern,cusInputsArr,index,e,saveCustomer)== true){
        cusAddressLbl.text("Address");
    }else{
        cusAddressLbl.text("Please use only these special characters (.,/)");
    }
})

saveCustomer.click(function(){
    let cusArrayList = [cusId.val(),cusName.val(),cusContactNo.val(),cusNic.val(),cusAddress.val()];
    for(let i =cusArrayIndex;i< cusArrayIndex+1;i++){
        cusArray[i]=[];
        for(let j =0;j<cusArrayList.length;j++){
            cusArray[i][j] = cusArrayList[j];
        }
    }

    tblCusBody.append("<tr><td>"+cusTblRow+"</td><td>"+cusArray[cusArrayIndex][0]+"</td><td>"+cusArray[cusArrayIndex][1]+"</td><td>"+cusArray[cusArrayIndex][2]+"</td><td>"+cusArray[cusArrayIndex][3]+"</td><td>"+cusArray[cusArrayIndex][4]+"</td></tr>");
    cusArrayIndex++;
    cusTblRow++;

    var tblCusRow = $("#tblCus tbody tr");
    tblCusRow.off("click");
    tblCusRow.click(function(){
        console.log("a")
        cusId.val($(this).children("td:nth-child(2)").text())
        cusName.val($(this).children("td:nth-child(3)").text())
        cusContactNo.val($(this).children("td:nth-child(4)").text())
        cusNic.val($(this).children("td:nth-child(5)").text())
        cusAddress.val($(this).children("td:nth-child(6)").text())
    });
});

cusId.keydown(function(e){
    if(e.key=='Enter'){
        let cusID = cusId.val();
        for(let i = 0;i<cusArray.length;i++){
            for (let j = 0; j < cusArray[i].length; j++) {
                if(cusArray[i][j]==cusID){
                    cusName.val(cusArray[i][1])
                    cusContactNo.val(cusArray[i][2])
                    cusNic.val(cusArray[i][3])
                    cusAddress.val(cusArray[i][4])
                    searchCusIndex = i;
                }
            }
        }
    }
})

cusUpdateBtn.click(function(){
    cusArray[searchCusIndex] = null;
    cusArray[searchCusIndex] = [cusId.val(),cusName.val(),cusContactNo.val(),cusNic.val(),cusAddress.val()];
    let rowNoToUpdate = 0;
    $("#tblCus tbody tr").filter(function(){
        rowNoToUpdate = $(this).children("td:nth-child(1)").text();
        if($(this).children("td:nth-child(2)").text() == cusArray[searchCusIndex][0]){
            $(this).replaceWith("<tr><td>"+rowNoToUpdate+"</td><td>"+cusArray[searchCusIndex][0]+"</td><td>"+cusArray[searchCusIndex][1]+"</td><td>"+cusArray[searchCusIndex][2]+"</td><td>"+cusArray[searchCusIndex][3]+"</td><td>"+cusArray[searchCusIndex][4]+"</td></tr>");
        }
    })
});

// --------------------Orders Section ------------------------
var cusIdHome = $("#customerIdHome");
var cusNameHome = $("#customerNameHome");
var cusAddressHome = $("#customerAddressHome");
var cusTelHome = $("#customerTelHome");
var itemCodeHome = $("#itemCodeHome");
var itemDescriptionHome = $("#itemDescriptionHome");
var itemQtyHome = $("#itemQtyHome");
var itemUnitPriceHome = $("#itemUnitPriceHome");
var itemQtyOnHandHome = $("#itemQtyOnHandHome");
var itemDiscountHome = $("#itemDiscountHome");
var addToCartBtn = $("#addToCartBtn");
var addToCartTable = $("#addToCartTable");
var orderIdHome = $("#orderIdHome")
var orderDiscount = $("#orderDiscount")
var orderCashReceived = $("#orderCashReceived")
var orderCashBalance = $("#orderCashBalance")
var orderSubTotal = $("#orderSubTotal")
var orderTotal = $("#orderTotal")

let rowNoCart = 1;

cusIdHome.keydown(function(e){
    
});

addToCartBtn.click(function(){
    let tbody = $("#addToCartTable > tbody");
    let totalPriceWithoutDiscount=parseFloat(itemQtyOnHandHome.val())*parseFloat(itemUnitPriceHome.val());
    let discount = ((parseFloat(itemDiscountHome.val()))/100)*totalPriceWithoutDiscount;
    if(itemDiscountHome.val()===""){
        discount=0;
        itemDiscountHome.val("0%");
    }

    let deductedDiscountedPrice=totalPriceWithoutDiscount-discount;

    let row = (`<tr><td>${rowNoCart}</td><td>${cusIdHome.val()}</td><td>${itemCodeHome.val()}</td><td>${itemDescriptionHome.val()}</td><td>${itemQtyHome.val()}</td><td>${itemUnitPriceHome.val()}</td><td>${itemDiscountHome.val()}</td><td>${deductedDiscountedPrice}</td></tr>`)
    tbody.append(row);
    rowNoCart++;

    let totalArr = $("#addToCartTable tbody tr").children("td:nth-child(8)");
    var subtotal=0.0;
    for( let index = 0; index < totalArr.length; index++) {
        subtotal+=parseFloat(totalArr.eq(index).text());
        console.log("Sub total"+subtotal)
    }
    orderSubTotal.val(subtotal);

    let orderDisc=0;
    orderDiscount.off("keydown")
    orderDiscount.keydown(function(e){
        if(e.key==='Enter'){
            orderDisc=((parseFloat(orderDiscount.val())/100)*subtotal);
            orderTotal.val(subtotal-orderDisc);

            orderCashReceived.keydown(function(e){
                if(e.key==='Enter'){
                    orderCashBalance.val(parseFloat(orderCashReceived.val())-parseFloat(orderTotal.val()));
                }
            });
        }
    })
    console.log("Order Discount : "+orderDisc)
    if(orderDiscount.val()==""){
        orderDisc=0;
    }
    orderTotal.val(subtotal-orderDisc);

    orderCashReceived.keydown(function(e){
        if(e.key==='Enter'){
            orderCashBalance.val(parseFloat(orderCashReceived.val())-parseFloat(orderTotal.val()));
        }
    });
    
});
