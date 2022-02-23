var loginBtn = $("#loginBtn");
var signupBtn = $("#signupBtn");
var logoutBtn = $("#logoutBtn");
var signupBtnInLogin = $("#signupBtnInLogin");
var logoutBtnInSignup = $("#logoutBtnInSignup");
var homeNav = $("#Home");
var ordersNav = $("#Orders");
var itemsNav = $("#Items");
var customerNav = $("#Customer");
var orderDetailsBtn = $("#viewOrderDetailsBtn");


var homeSection = $("#homeSection");
var ordersSection = $("#ordersSection");
var orderDetailsSection = $("#orderDetailsSection");
var itemsSection = $("#itemsSection");
var customerSection = $("#customerSection");
var loginSection = $("#loginSection");
var signupSection = $("#signupSection");
var headerNav = $("#headerNav");
var signUpAdmin = $('.adminSignup');
var signupForAdminBtn = $('#signupForAdminBtn');
var logoutBtnInAdminSignup = $('#logoutBtnInAdminSignup');



loginBtn.click(function() {
    homeSection.css("display", "block")
    ordersSection.css("display", "none")
    orderDetailsSection.css("display", "none")
    itemsSection.css("display", "none")
    customerSection.css("display", "none")
    loginSection.css("display", "none")
    signupSection.css("display", "none")
    headerNav.css("display", "block")
    signUpAdmin.css("display", "none")
});
signupBtnInLogin.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "block");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
});
signupForAdminBtn.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "block")
});

logoutBtnInAdminSignup.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "block");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
})

logoutBtnInSignup.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "block");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
});
logoutBtn.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "block");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
});
signupBtn.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "block");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
});

homeNav.click(function() {
    homeSection.css("display", "block");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
    signUpAdmin.css("display", "none")
});

ordersNav.click(function() {
    ordersSection.css("display", "block");
    homeSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
    signUpAdmin.css("display", "none")
});
itemsNav.click(function() {
    itemsSection.css("display", "block");
    ordersSection.css("display", "none");
    homeSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
    signUpAdmin.css("display", "none")
});
customerNav.click(function() {
    customerSection.css("display", "block");
    itemsSection.css("display", "none");
    ordersSection.css("display", "none");
    homeSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
    signUpAdmin.css("display", "none")
});
orderDetailsBtn.dblclick(function() {
    customerSection.css("display", "none");
    itemsSection.css("display", "none");
    ordersSection.css("display", "none");
    homeSection.css("display", "none");
    orderDetailsSection.css("display", "block");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
    signUpAdmin.css("display", "none")
});







// -----------------mobilenav-----------",--------

var mobileNavHome = $("#mobileNavHome");
var mobileNavOrders = $("#mobileNavOrders");
var mobileNavItems = $("#mobileNavItems");
var mobileNavCustomer = $("#mobileNavCustomer");
var mobileNavSignup = $("#mobileNavSignup");
var mobileNavLogout = $("#mobileNavLogout");

mobileNavHome.click(function() {
    homeSection.css("display", "block");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
});
mobileNavOrders.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "block");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
});

mobileNavItems.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "block");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
});

mobileNavCustomer.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "block");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "block");
});
mobileNavSignup.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "block");
    headerNav.css("display", "none");
});
mobileNavLogout.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "block");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
});