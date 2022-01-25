var homeNav = document.getElementById("Home");
var ordersNav=document.getElementById("Orders");
var itemsNav=document.getElementById("Items");
var customerNav=document.getElementById("Customer");
var orderDetailsBtn=document.getElementById("viewOrderDetailsBtn");
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");
var logoutBtn = document.getElementById("logoutBtn");
var signupBtnInLogin = document.getElementById("signupBtnInLogin");
var logoutBtnInSignup = document.getElementById("logoutBtnInSignup");


var homeSection = document.getElementById("homeSection");
var ordersSection = document.getElementById("ordersSection");
var orderDetailsSection = document.getElementById("orderDetailsSection");
var itemsSection = document.getElementById("itemsSection");
var customerSection = document.getElementById("customerSection");
var loginSection = document.getElementById("loginSection");
var signupSection = document.getElementById("signupSection");
var headerNav = document.getElementById("headerNav");


homeNav.addEventListener("click", function(){
    homeSection.style.display="block";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});

ordersNav.addEventListener("click",function(){
    ordersSection.style.display="block";
    homeSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});
itemsNav.addEventListener("click",function(){
    itemsSection.style.display="block";
    ordersSection.style.display="none";
    homeSection.style.display="none";
    orderDetailsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});
customerNav.addEventListener("click",function(){
    customerSection.style.display="block";
    itemsSection.style.display="none";
    ordersSection.style.display="none";
    homeSection.style.display="none";
    orderDetailsSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});
orderDetailsBtn.addEventListener("click",function(){
    customerSection.style.display="none";
    itemsSection.style.display="none";
    ordersSection.style.display="none";
    homeSection.style.display="none";
    orderDetailsSection.style.display="block";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});

loginBtn.addEventListener("click",function(){
    homeSection.style.display="block";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});
logoutBtn.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="block";
    signupSection.style.display="none";
    headerNav.style.display="none";
});
signupBtn.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="block";
    headerNav.style.display="none";
});
signupBtnInLogin.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="block";
    headerNav.style.display="none";
});

logoutBtnInSignup.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="block";
    signupSection.style.display="none";
    headerNav.style.display="none";
});

// -----------------mobile nav--------------------

var mobileNavHome = document.getElementById("mobileNavHome");
var mobileNavOrders = document.getElementById("mobileNavOrders");
var mobileNavItems = document.getElementById("mobileNavItems");
var mobileNavCustomer = document.getElementById("mobileNavCustomer");
var mobileNavSignup = document.getElementById("mobileNavSignup");
var mobileNavLogout = document.getElementById("mobileNavLogout");

mobileNavHome.addEventListener("click",function(){
    homeSection.style.display="block";
    ordersSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});
mobileNavOrders.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="block";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});

mobileNavItems.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="block";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});

mobileNavCustomer.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="block";
    loginSection.style.display="none";
    signupSection.style.display="none";
    headerNav.style.display="block";
});
mobileNavSignup.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="none";
    signupSection.style.display="block";
    headerNav.style.display="none";
});
mobileNavLogout.addEventListener("click",function(){
    homeSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    loginSection.style.display="block";
    signupSection.style.display="none";
    headerNav.style.display="none";
});