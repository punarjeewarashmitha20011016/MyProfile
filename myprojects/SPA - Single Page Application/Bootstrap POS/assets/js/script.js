var homeNav = document.getElementById("Home");
var ordersNav=document.getElementById("Orders");
var itemsNav=document.getElementById("Items");
var customerNav=document.getElementById("Customer");
var orderDetailsBtn=document.getElementById("viewOrderDetailsBtn");
var loginBtn = document.getElementById("loginBtn");

var homeSection = document.getElementById("homeSection");
var ordersSection = document.getElementById("ordersSection");
var orderDetailsSection = document.getElementById("orderDetailsSection");
var itemsSection = document.getElementById("itemsSection");
var customerSection = document.getElementById("customerSection");


homeNav.addEventListener("click", function(){
    homeSection.style.display="block";
    ordersSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
    
});

ordersNav.addEventListener("click",function(){
    ordersSection.style.display="block";
    homeSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
});
itemsNav.addEventListener("click",function(){
    itemsSection.style.display="block";
    ordersSection.style.display="none";
    homeSection.style.display="none";
    orderDetailsSection.style.display="none";
    customerSection.style.display="none";
});
customerNav.addEventListener("click",function(){
    customerSection.style.display="block";
    itemsSection.style.display="none";
    ordersSection.style.display="none";
    homeSection.style.display="none";
    orderDetailsSection.style.display="none";
});
orderDetailsBtn.addEventListener("click",function(){
    customerSection.style.display="none";
    itemsSection.style.display="none";
    ordersSection.style.display="none";
    homeSection.style.display="none";
    orderDetailsSection.style.display="block";
});

loginBtn.addEventListener("click",function(){
    homeSection.style.display="block";
    ordersSection.style.display="none";
    ordersSection.style.display="none";
    orderDetailsSection.style.display="none";
    itemsSection.style.display="none";
    customerSection.style.display="none";
});
