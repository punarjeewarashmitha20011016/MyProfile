var cusIdHome = $("#customerIdHome");
var cusIdLblHome = $('#customerIdHomeLbl')
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
addToCartBtn.prop('disabled', true);
var clearCartBtn = $('#clearCartBtn');
clearCartBtn.prop('disabled', true);
var purchaseBtn = $('#purchaseBtn');
purchaseBtn.prop('disabled', true)
var discardBtn = $('#discardBtn');
discardBtn.prop('disabled', true)

var addToCartTable = $("#addToCartTable");
var orderIdHome = $("#orderIdHome")
var orderDiscount = $("#orderDiscount")
var orderCashReceived = $("#orderCashReceived")
var orderCashBalance = $("#orderCashBalance")
var orderSubTotal = $("#orderSubTotal")
var orderTotal = $("#orderTotal")

var cusIdPattern = /^(C-)[0-9]{3}$/;
var qtyOnHandPattern = /^[0-9]+[.]?[0-9]*$/;

let rowNoCart = 1;

var placeOrderTextFieldsToValidate = [cusIdHome, itemQtyOnHandHome, itemDiscountHome, orderDiscount, orderCashReceived];

var orderId = undefined;

orderId = getOrderId();

$('#customerIdHome,#customerNameHome,#customerAddressHome,#customerTelHome,#itemCodeHome,#itemDescriptionHome,#itemQtyHome,#itemUnitPriceHome,#itemQtyOnHandHome,#itemDiscountHome').off('keydown');
$('#customerIdHome,#customerNameHome,#customerAddressHome,#customerTelHome,#itemCodeHome,#itemDescriptionHome,#itemQtyHome,#itemUnitPriceHome,#itemQtyOnHandHome,#itemDiscountHome').keydown(function(e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});

cusNameHome.prop("disabled", true);
cusTelHome.prop("disabled", true);
cusAddressHome.prop("disabled", true);
cusNameHome.prop("disabled", true);
itemDescriptionHome.prop("disabled", true);
itemQtyHome.prop("disabled", true);
itemUnitPriceHome.prop("disabled", true);
orderIdHome.prop("disabled", true);
itemDiscountHome.prop("disabled", true);
orderCashBalance.prop("disabled", true);
orderSubTotal.prop("disabled", true);
orderTotal.prop("disabled", true);

var itemCodeInHome;

cusIdHome.keyup(function(e) {
    let index = 0;
    if (validate(cusIdPattern, placeOrderTextFieldsToValidate, index, e, addToCartBtn, purchaseBtn, discardBtn) == true) {
        for (let i = 0; i < customerArray.length; i++) {
            if (customerArray[i].getCustomerId() == cusIdHome.val()) {
                cusNameHome.val(customerArray[i].getCustomerName());
                cusAddressHome.val(customerArray[i].getCustomerAddress());
                cusTelHome.val(customerArray[i].getCustomerContactNo());
            }
        }
        cusIdLblHome.text('Id')
    } else {
        cusIdLblHome.text('Use this format (C-001)')
    }
});

itemQtyOnHandHome.keyup(function(e) {
    let qtyOnHandLbl = $('#qtyOnHandLbl');
    let index = 1;
    if (validate(qtyOnHandPattern, placeOrderTextFieldsToValidate, index, e, addToCartBtn, purchaseBtn, discardBtn) == true) {
        qtyOnHandLbl.text('Qty On Hand')
    } else {
        qtyOnHandLbl.text('Use this format (10 or 10.0)')
    }
});

itemCodeHome.off('click')
itemCodeHome.click(function() {
    for (let i = 0; i < itemArray.length; i++) {
        let checkItemCodeInCombo = itemCodeHome.children('option:selected').text();
        if (itemArray[i].getItemCode() == checkItemCodeInCombo) {
            itemCodeInHome = itemArray[i].getItemCode()
            itemDescriptionHome.val(itemArray[i].getItemDescription());
            itemQtyHome.val(itemArray[i].getItemQty());
            itemUnitPriceHome.val(itemArray[i].getItemUnitPrice());
            itemDiscountHome.val(itemArray[i].getItemDiscount())
            return;
        }
    }
})

function setDataToItemComboBox() {
    $("#itemCodeHome option").remove();
    for (let i = 0; i < itemArray.length; i++) {
        var newOption = $('<option>');
        newOption.attr('value', (i + 1)).text(itemArray[i].getItemCode());
        itemCodeHome.append(newOption);
    }
}

function getOrderId() {
    if (orderId != undefined) {
        for (let i = 0; i < orderArray.length; i++) {
            if (i == (orderArray.length - 1)) {
                let temp = parseInt(orderArray[i].getOrderId().split("-")[1]);
                temp = temp + 1;
                if (temp <= 9) {
                    orderId = 'O-00' + temp;
                    orderIdHome.val(orderId);
                    return orderId;
                } else if (temp <= 99) {
                    orderId = 'O-0' + temp;
                    orderIdHome.val(orderId);
                    return orderId;
                } else {
                    orderId = 'O-' + temp;
                    orderIdHome.val(orderId);
                    return orderId;
                }
            }
        }
    } else {
        orderId = "O-001";
        orderIdHome.val(orderId);
        return orderId;
    }
}

var addToCartList = new Array();
addToCartBtn.off('click')
addToCartBtn.click(function() {
    let tbody = $("#addToCartTable > tbody");
    let discountInAddToCart = undefined;
    if (itemDiscountHome.val() === "") {
        discountInAddToCart = 0;
        itemDiscountHome.val(discountInAddToCart);
    }
    let totalItemAmount = calculateSingleItemPrice(itemCodeInHome, itemQtyOnHandHome.val());

    if (ifItemIsExistsInCart(itemCodeInHome) == true) {
        for (let i = 0; i < addToCartList.length; i++) {
            if (addToCartList[i].getItemCode() == itemCodeInHome) {
                let itemAddToCartQty = parseInt(addToCartList[i].getItemQty());
                let increasedQty = itemAddToCartQty + parseInt(itemQtyOnHandHome.val());
                let totalAmount = parseFloat(addToCartList[i].getTotalAmount());
                let calcIncreasedAmount = parseInt(itemQtyOnHandHome.val()) * parseFloat(itemUnitPriceHome.val());
                let increasedAmount = totalAmount + calcIncreasedAmount;
                console.log("increasedAmount" + increasedAmount);
                addToCartList[i].setItemQty(increasedQty);
                addToCartList[i].setItemTotalAmount(increasedAmount);

                $("#addToCartTable > tbody tr").filter(function() {
                    if ($(this).children("td:nth-child(3)").text() == addToCartList[i].getItemCode()) {
                        $(this).replaceWith("<tr><td>" + (i + 1) + "</td><td>" + addToCartList[i].getCustomerId() + "</td><td>" + addToCartList[i].getItemCode() + "</td><td>" + addToCartList[i].getItemDescription() + "</td><td>" + addToCartList[i].getItemQty() + "</td><td>" + addToCartList[i].getItemPrice() + "</td><td>" + addToCartList[i].getItemDiscount() + "</td><td>" + addToCartList[i].getTotalAmount() + "</td></tr>");
                    }
                })
            }
        }

    } else {
        let checkItemCodeInCombo = itemCodeHome.children('option:selected').text();
        addToCartList.push(new AddToCart(cusIdHome.val(), checkItemCodeInCombo, itemDescriptionHome.val(), itemQtyOnHandHome.val(), itemUnitPriceHome.val(), itemDiscountHome.val(), totalItemAmount));
        let row = (`<tr><td>${rowNoCart}</td><td>${cusIdHome.val()}</td><td>${itemCodeInHome}</td><td>${itemDescriptionHome.val()}</td><td>${itemQtyOnHandHome.val()}</td><td>${itemUnitPriceHome.val()}</td><td>${itemDiscountHome.val()}</td><td>${totalItemAmount}</td></tr>`)
        tbody.append(row);
        rowNoCart++;
    }

    let totalArr = $("#addToCartTable tbody tr").children("td:nth-child(8)");
    var subtotal = 0.0;
    for (let index = 0; index < totalArr.length; index++) {
        subtotal += parseFloat(totalArr.eq(index).text());
        console.log("Sub total" + subtotal)
    }
    orderSubTotal.val(subtotal);

    let orderDisc = 0;
    orderDiscount.off("keydown")
    orderDiscount.keydown(function(e) {
        if (e.key === 'Enter') {
            orderDisc = ((parseFloat(orderDiscount.val()) / 100) * subtotal);
            orderTotal.val(subtotal - orderDisc);

            orderCashReceived.keydown(function(e) {
                if (e.key === 'Enter') {
                    orderCashBalance.val(parseFloat(orderCashReceived.val()) - parseFloat(orderTotal.val()));
                }
            });
        }
    })
    console.log("Order Discount : " + orderDisc)
    if (orderDiscount.val() == "") {
        orderDisc = 0;
    }
    orderTotal.val(subtotal - orderDisc);

    orderCashReceived.keydown(function(e) {
        if (e.key === 'Enter') {
            orderCashBalance.val(parseFloat(orderCashReceived.val()) - parseFloat(orderTotal.val()));
        }
    });

    let dt = new Date();
    let date = dt.getDate() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear();
    let time = dt.getHours() + "." + dt.getMinutes() + "." + dt.getSeconds();

    var order = new Order(orderId, cusIdHome.val(), date, time, orderDiscount.val(), orderTotal.val());

    if (order != null) {
        console.log("Not null")
        purchaseBtn.off('click');
        purchaseBtn.click(function() {

            for (let check = 0; check < orderArray.length; check++) {
                if (orderArray[check].getOrderId() == orderIdHome.val()) {
                    alert('This order Id already exists.. Please try again with a different Id');
                    return;
                }
            }

            if (confirm('Do you want to place this order = ' + orderIdHome.val() + ' .. If yes please enter Ok button...') == true) {
                orderArray.push(order);
                for (let i = 0; i < addToCartList.length; i++) {
                    for (let j = 0; j < orderArray.length; j++)
                        if (orderId == orderArray[j].getOrderId()) {
                            orderArray[j].getOrderDetails().push(new OrderDetails(orderId, addToCartList[i].getItemCode(), addToCartList[i].getItemDescription(), addToCartList[i].getItemQty(), addToCartList[i].getItemPrice(), addToCartList[i].getItemDiscount(), addToCartList[i].getTotalAmount()));
                        }
                }

                deducatQuantityOfItemsOfPurchased(addToCartList)
                clearFieldsInHomeAfterPurchase();
                orderId = getOrderId();
                orderIdHome.val(orderId);
                setDatToTheItemTable();
                clearCart()
                setDataToOrderTable();
                setPlaceOrderFormBordersReset();
            } else {
                alert('Placing order = ' + orderIdHome.val() + ' is unsuccessful');
                clearFieldsInHomeAfterPurchase();
                setPlaceOrderFormBordersReset();
            }
        });
    } else {
        return;
    }

    clearSelectedRowFromTheCart();
    discardOrder();
});

function clearSelectedRowFromTheCart() {
    let addToCartTbody = $('#addToCartTable > tbody');
    let tr = $('#addToCartTable > tbody > tr');
    tr.off('click');
    tr.click(function() {
        clearCartBtn.prop('disabled', false);
        let trItemCode = $(this).children('td:nth-child(3)').text();
        for (let i = 0; i < addToCartList.length; i++) {
            if (addToCartList[i].getItemCode() == trItemCode) {
                clearCartBtn.off('click');
                clearCartBtn.click(function() {
                    addToCartList.splice(i, 1);
                    addToCartTbody.children('tr').eq(i).remove();
                })
            }
        }
    })
}

function clearCart() {
    for (let i = 0; i < addToCartList.length; i++) {
        addToCartList.splice(i, addToCartList.length);
    }
}

function ifItemIsExistsInCart(itemCode) {
    for (let i = 0; i < addToCartList.length; i++) {
        if (addToCartList[i].getItemCode() == itemCode) {
            return true;
        }
    }
    return false;
}

function ifDiscountIsExistsForAnItem(itemCode) {
    let check = undefined;
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].getItemCode() == itemCode) {
            if (itemArray[i].getItemDiscount() != 0) {
                check = true;
                return check;
            } else {
                check = false;
                return check;
            }
        }
    }
}

function checkIfAddToCartListHasExistingItem(itemCode) {
    for (let i = 0; i < addToCartList.length; i++) {
        if (addToCartList[i].getItemCode() == itemCode) {
            return i;
        }
    }
    return -1;
}

function calculateSingleItemPrice(itemCode, qtyOnHand) {
    let ifDiscountAddedForAnExistingAddedItem = ifDiscountIsExistsForAnItem(itemCode);
    let discount = undefined;
    let total = undefined;
    let qtyOnHandOnCalc = parseInt(qtyOnHand);
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].getItemCode() == itemCode) {
            let unitPrice = parseFloat(itemArray[i].getItemUnitPrice());
            let indexOfItemCodeExistsInAddToCart = checkIfAddToCartListHasExistingItem(itemCode);
            if (indexOfItemCodeExistsInAddToCart == -1) {
                if (ifDiscountAddedForAnExistingAddedItem == true) {
                    for (let j = 0; j < itemArray.length; j++) {
                        if (itemArray[i].getItemCode() == itemCode) {
                            let discountInPercentageForGivenItemCode = parseFloat(itemArray[i].getItemDiscount());
                            let itemUnitPriceForItemCode = parseFloat(itemArray[i].getItemUnitPrice());
                            let discountedPrice = (discountInPercentageForGivenItemCode / 100) * (parseFloat(itemUnitPriceForItemCode * qtyOnHandOnCalc));
                            total = itemUnitPriceForItemCode - discountedPrice;
                        }
                    }
                    return total;
                } else {
                    total = unitPrice * qtyOnHandOnCalc;
                    return total;
                }
            } else {
                for (let j = 0; j < addToCartList.length; j++) {
                    if (addToCartList[i].getItemCode() == itemCode) {
                        let alreadyAddedDiscountedPrice = parseFloat(addToCartList[i].getTotalAmount());
                        let discountedPrice = (discount / 100) * (parseFloat(addToCartList[i].getItemPrice() * (parseInt(addToCartList[i].getItemQty()))));
                        let removedDiscountOfPreviouslyAdded = alreadyAddedDiscountedPrice + discountedPrice
                        let reCalculatedDiscount = (discount / 100) * (removedDiscountOfPreviouslyAdded * qtyOnHandOnCalc);
                        total = itemArray[i].getItemUnitPrice() - reCalculatedDiscount;
                    }
                }
                return total;
            }
        }
    }
}

function clearFieldsInHomeAfterPurchase() {
    $('#itemCodeHome option').prop('selected', false);
    cusIdHome.val("")
    cusNameHome.val("")
    cusAddressHome.val("");
    cusTelHome.val("");
    itemDescriptionHome.val("");
    itemQtyHome.val("");
    itemUnitPriceHome.val("")
    itemQtyOnHandHome.val("");
    itemDiscountHome.val("");
    orderDiscount.val("")
    orderCashBalance.val("")
    orderTotal.val("");
    orderSubTotal.val("");
    orderCashReceived.val("")

    $("#addToCartTable tbody tr").remove();
}

function deducatQuantityOfItemsOfPurchased(addToCartList) {
    for (let i = 0; i < itemArray.length; i++) {
        for (let j = 0; j < addToCartList.length; j++) {
            if (itemArray[i].getItemCode() == addToCartList[j].getItemCode()) {
                itemArray[i].setItemQty(itemArray[i].getItemQty() - addToCartList[j].getItemQty());
            }
        }
    }
}

function disableAllBtns() {
    addToCartBtn.prop('disabled', true);
    clearCartBtn.prop('disabled', true);
    purchaseBtn.prop('disabled', true);
    discardBtn.prop('disabled', true);
}

function discardOrder() {
    discardBtn.off('click');
    discardBtn.click(function() {
        clearCart();
        let addToCartTbody = $('#addToCartTable > tbody');
        for (let i = 0; i < addToCartList.length; i++) {
            addToCartTbody.children('tr').eq(i).remove();
        }
    })
}

function setPlaceOrderFormBordersReset() {
    setBorderToDefault(placeOrderTextFieldsToValidate);
}