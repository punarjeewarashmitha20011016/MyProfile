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

var mobileNavHome = $("#moileNavHome");
var mobileNavOrders =$("#mobileNavOrders");
var mobileNavItems = $("#mobileNavItems");
var mobileNavCustomer = $("#mobileNavCustomer");
var mobileNavSignup = $("#mobileNavSignup");
var mobileNavLogout = $("#mobileNavLogout");

mobileNavHome.click(function(){
    homeSection.css("display","block");
    ordersSection.css("display","none");
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
    orderDetailsSectio.css("display","none");
    itemsSection.css("display","block");
    customerSection.css("display","none");
    loginSection.css("display","none");
    signupSection.css("display","none");
    headerNav.css("display","block");
});

mobileNavCustomer.click(function(){
    homeSection.css("display","none");
    ordersSection.css("display","none");
    orderDetailsSectio.css("display","none");
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

var tBody = $(".Items .container-fluid div:nth-child(3) div table tbody");
var code = $(".Items .container-fluid div:nth-child(3) div table tbody tr td:nth-child(2)");
var rowNo =1;

var itemCodeInItems = $("#itemCodeInItems");
var itemDescriptionInItems = $("#itemDescriptionInItems");
var itemQtyInItems = $("#itemQtyInItems");
var itemBuyingPriceInItems = $("#itemBuyingPriceInItems");
var itemUnitPriceInItems = $("#itemUnitPriceInItems");
var itemDiscountInItems = $("#itemDiscountInItems");
var saveItemBtn = $("#saveItems");

saveItemBtn.click(function(){
    tBody.append("<tr><td>"+rowNo+"</td><td>"+itemCodeInItems.val()+"</td><td>"+itemDescriptionInItems.val()+"</td><td>"+itemQtyInItems.val()+"</td><td>"+itemBuyingPriceInItems.val()+"</td><td>"+itemUnitPriceInItems.val()+"</td><td>"+itemDiscountInItems.val()+"</td></tr>");
    rowNo++;

    var tableRow = $(".Items .container-fluid div:nth-child(3) div .table tbody tr");
    tableRow.click(function(){
        itemCodeInItems.val($(this).children("td:nth-child(2)")[0].innerText);
        itemDescriptionInItems.val($(this).children("td:nth-child(3)")[0].innerText);
        itemQtyInItems.val($(this).children("td:nth-child(4)")[0].innerText);
        itemBuyingPriceInItems.val($(this).children("td:nth-child(5)")[0].innerText);
        itemUnitPriceInItems.val($(this).children("td:nth-child(6)")[0].innerText);
        itemDiscountInItems.val($(this).children("td:nth-child(7)")[0].innerText);
    });
});


var saveCustomer = $("#saveCustomer");
var cusId = $("#cusId");
var cusName = $("#cusName");
var cusContactNo = $("#cusContactNo");
var cusNic = $("#cusNic");
var cusAddress = $("#cusAddress");
var tblCus = $("#tblCus");
var tblCusBody = $("#tblCus tbody");
var cusTblRow=1;

saveCustomer.click(function(){
    tblCusBody.append(`<tr><td>${cusTblRow}</td><td>${cusId.val()}</td><td>${cusName.val()}</td><td>${cusContactNo.val()}</td><td>${cusNic.val()}</td><td>${cusAddress.val()}</td></tr>`);
    cusTblRow++;
    var tblCusRow = $("#tblCus tbody tr");
    tblCusRow.click(function(){
        cusId.val($(this).children("td:nth-child(2)")[0].innerText)
        cusName.val($(this).children("td:nth-child(3)")[0].innerText)
        cusContactNo.val($(this).children("td:nth-child(4)")[0].innerText)
        cusNic.val($(this).children("td:nth-child(5)")[0].innerText)
        cusAddress.val($(this).children("td:nth-child(6)")[0].innerText)
    });
});