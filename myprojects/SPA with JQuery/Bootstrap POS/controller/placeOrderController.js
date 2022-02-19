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
