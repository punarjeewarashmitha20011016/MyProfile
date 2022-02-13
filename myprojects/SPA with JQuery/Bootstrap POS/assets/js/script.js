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
    if(validate(itemCodePattern,itemsArray,index,e)== true){
        itemCodeLbl.text("Code");
    }else{
        itemCodeLbl.text("Please use the given format (I-001)");
    }
});

itemDescriptionInItems.keyup(function(e){
    let index =1;
    let itemDescriptionLbl = $("#itemDescriptionLblInItems span");
    if(validate(itemDescriptionPattern,itemsArray,index,e)== true){
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
    if(validate(itemQtyPattern,itemsArray,index,e) == true){
        itemQtyLbl.text("Qty");
    }else{
        itemQtyLbl.text("Please use a whole number");
    }
    
})

itemBuyingPriceInItems.keyup(function(e){
    let index =3;
    let itemBuyingPriceLbl = $("#itemBuyingPriceLblInItems span")
    if(validate(itemBuyingPattern,itemsArray,index,e) == true){
        itemBuyingPriceLbl.text("Buying Price");
    }else{
        itemBuyingPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemUnitPriceInItems.keyup(function(e){
    let index =4;
    let itemUnitPriceLbl = $("#itemUnitPriceLblInItems span")
    if(validate(itemUnitPattern,itemsArray,index,e) == true){
        itemUnitPriceLbl.text("Unit Price");
    }else{
        itemUnitPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemDiscountInItems.keyup(function(e){
    let index =5;
    let itemDiscountLbl = $("#itemDiscountLblInItems span")
    if(validate(itemDiscountPattern,itemsArray,index,e) == true){
        itemDiscountLbl.text("Discount");
    }else{
        itemDiscountLbl.text("Please use the format (5.0 or 5)");
    }
})

function validate(pattern,items,index,e){
    if(pattern.test(items[index].val())){
        items[index].css("border","3px solid green");
        if(e.key==='Enter'){
            items[index+1].focus();
        }
        saveItemBtn.prop("disabled",false);
        return true;
    }
    else{
         items[index].css("border","3px solid red");
         saveItemBtn.prop("disabled",true);
         return false;
    }
    return false;
}

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
            $(this).append("<td>"+rowNoToUpdate+"</td><td>"+itemsList[searchItemIndex][0]+"</td><td>"+itemsList[searchItemIndex][1]+"</td><td>"+itemsList[searchItemIndex][2]+"</td><td>"+itemsList[searchItemIndex][3]+"</td><td>"+itemsList[searchItemIndex][4]+"</td><td>"+itemsList[searchItemIndex][5]+"</td>");
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
var cusId = $("#cusId");
var cusName = $("#cusName");
var cusContactNo = $("#cusContactNo");
var cusNic = $("#cusNic");
var cusAddress = $("#cusAddress");
var tblCus = $("#tblCus");
var tblCusBody = $("#tblCus tbody");
var cusTblRow=1;

cusId.keydown(function(e){
    if(e.key==='Enter'){
        cusName.focus();
        cusName.keydown(function(e){
            if(e.key==='Enter'){
                cusContactNo.focus();
                cusContactNo.keydown(function(e){
                    if(e.key==='Enter'){
                        cusNic.focus();
                        cusNic.keydown(function(e){
                            if(e.key==='Enter'){
                                cusAddress.focus();
                                cusAddress.keydown(function(e){
                                    if(e.key==='Enter'){
                                        saveCustomer.focus();
                                    }else{
                                        cusAddress.focus();
                                    }
                                })
                            }else{
                                cusNic.focus();
                            }
                        })
                    }else{
                        cusContactNo.focus();
                    }
                });
            }else{
                cusName.focus();
            }
        });
    }else{
        cusId.focus();
    }
});

saveCustomer.click(function(){
    tblCusBody.append(`<tr><td>${cusTblRow}</td><td>${cusId.val()}</td><td>${cusName.val()}</td><td>${cusContactNo.val()}</td><td>${cusNic.val()}</td><td>${cusAddress.val()}</td></tr>`);
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
    if(e.key==='Enter'){
        cusNameHome.focus();
        cusNameHome.keydown(function(e){
            if(e.key==='Enter'){
                cusAddressHome.focus();
                cusAddressHome.keydown(function(e){
                    if(e.key==='Enter'){
                        cusTelHome.focus();
                        cusTelHome.keydown(function(e){
                            if(e.key==='Enter'){
                                itemCodeHome.focus();
                                itemCodeHome.click(function(e){
                                    itemDescriptionHome.focus();
                                    itemDescriptionHome.keydown(function(e){
                                        if(e.key==='Enter'){
                                            itemQtyHome.focus();
                                            itemQtyHome.keydown(function(e){
                                                if(e.key==='Enter'){
                                                    itemUnitPriceHome.focus();
                                                    itemUnitPriceHome.keydown(function(e){
                                                        if(e.key==='Enter'){
                                                            itemQtyOnHandHome.focus();
                                                            itemQtyOnHandHome.keydown(function(e){
                                                                if(e.key==='Enter'){
                                                                    itemDiscountHome.focus();
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                });             
                            }
                        });
                    }
                });
            }
        });
    }
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
