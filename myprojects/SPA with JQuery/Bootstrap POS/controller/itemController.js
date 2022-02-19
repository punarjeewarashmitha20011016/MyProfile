var tBodyInItems = $(".Items .container-fluid div:nth-child(3) div table tbody");
var rowNo = 1;

var itemCodeInItems = $("#itemCodeInItems");
var itemDescriptionInItems = $("#itemDescriptionInItems");
var itemQtyInItems = $("#itemQtyInItems");
var itemBuyingPriceInItems = $("#itemBuyingPriceInItems");
var itemUnitPriceInItems = $("#itemUnitPriceInItems");
var itemDiscountInItems = $("#itemDiscountInItems");
var saveItemBtn = $("#saveItems");
var updateItemBtn = $("#updateItemBtn");
var deleteItemBtn = $("#deleteItemBtn");
var searchItemBtn = $("#searchItemBtn");

var itemCodePattern = /^(I-)[0-9]{3}$/;
var itemDescriptionPattern = /^[0-9A-z ]+[.]*[/]*[(]*[)]*[']*[,]*[&]*[-]*$/;
var itemQtyPattern = /^[0-9]+$/;
var itemBuyingPattern = /^[0-9.]{1,}$/;
var itemUnitPattern = /^[0-9.]{1,}$/;
var itemDiscountPattern = /^[0-9.]{1,}$/;

var itemsArray = [itemCodeInItems, itemDescriptionInItems, itemQtyInItems, itemBuyingPriceInItems, itemUnitPriceInItems, itemDiscountInItems];

itemCodeInItems.keyup(function (e) {
    let index = 0;
    var itemCodeLbl = $("#itemCodeLblInItems span");
    if (validate(itemCodePattern, itemsArray, index, e, saveItemBtn,updateItemBtn,deleteItemBtn) == true) {
        itemCodeLbl.text("Code");
    } else {
        itemCodeLbl.text("Please use the given format (I-001)");
    }
});

itemDescriptionInItems.keyup(function (e) {
    let index = 1;
    let itemDescriptionLbl = $("#itemDescriptionLblInItems span");
    if (validate(itemDescriptionPattern, itemsArray, index, e, saveItemBtn,updateItemBtn,deleteItemBtn) == true) {
        itemDescriptionLbl.css('font-size', 'unset');
        itemDescriptionLbl.text("Description");
    } else {
        itemDescriptionLbl.css('font-size', '12px');
        itemDescriptionLbl.text("Please only use these special characters only (./()',&-)");
    }
})

itemQtyInItems.keyup(function (e) {
    let index = 2;
    let itemQtyLbl = $("#itemQtyLblInItems span")
    if (validate(itemQtyPattern, itemsArray, index, e, saveItemBtn,updateItemBtn,deleteItemBtn) == true) {
        itemQtyLbl.text("Qty");
    } else {
        itemQtyLbl.text("Please use a whole number");
    }

})

itemBuyingPriceInItems.keyup(function (e) {
    let index = 3;
    let itemBuyingPriceLbl = $("#itemBuyingPriceLblInItems span")
    if (validate(itemBuyingPattern, itemsArray, index, e, saveItemBtn,updateItemBtn,deleteItemBtn) == true) {
        itemBuyingPriceLbl.text("Buying Price");
    } else {
        itemBuyingPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemUnitPriceInItems.keyup(function (e) {
    let index = 4;
    let itemUnitPriceLbl = $("#itemUnitPriceLblInItems span")
    if (validate(itemUnitPattern, itemsArray, index, e, saveItemBtn,updateItemBtn,deleteItemBtn) == true) {
        itemUnitPriceLbl.text("Unit Price");
    } else {
        itemUnitPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemDiscountInItems.keyup(function (e) {
    let index = 5;
    let itemDiscountLbl = $("#itemDiscountLblInItems span")
    if (validate(itemDiscountPattern, itemsArray, index, e, saveItemBtn,updateItemBtn,deleteItemBtn) == true) {
        itemDiscountLbl.text("Discount");
    } else {
        itemDiscountLbl.text("Please use the format (5.0 or 5)");
    }
})

saveItemBtn.click(function () {
    var discountInItems = 0;
    if(itemDiscountInItems.length == 0){
        discountInItems = 0;
    }else{
        discountInItems = itemDiscountInItems.val();
    }
    itemArray.push(new Item(itemCodeInItems.val(), itemDescriptionInItems.val(), itemQtyInItems.val(), itemBuyingPriceInItems.val(), itemUnitPriceInItems.val(), discountInItems));
    setDatToTheItemTble();
    deleteSelectedRowFromTheItemTable();
});

function deleteSelectedRowFromTheItemTable() {
    var tableRow = $(".Items .container-fluid div:nth-child(3) div .table tbody tr");
    tableRow.off("click")
    tableRow.click(function () {
        itemCodeInItems.val($(this).children("td:nth-child(2)").text());
        itemDescriptionInItems.val($(this).children("td:nth-child(3)").text());
        itemQtyInItems.val($(this).children("td:nth-child(4)")[0].text());
        itemBuyingPriceInItems.val($(this).children("td:nth-child(5)").text());
        itemUnitPriceInItems.val($(this).children("td:nth-child(6)").text());
        itemDiscountInItems.val($(this).children("td:nth-child(7)").text());
    });
    clearFieldsInItems();
}

function setDatToTheItemTble() {
    $(".Items .container-fluid div:nth-child(3) div table tbody tr").remove();
    for (let i = 0; i < itemArray.length; i++) {
        tBodyInItems.append("<tr><td>" + (i + 1) + "</td><td>" + itemArray[i].getItemCode() + "</td><td>" + itemArray[i].getItemDescription() + "</td><td>" + itemArray[i].getItemQty() + "</td><td>" + itemArray[i].getItemBuyingPrice() + "</td><td>" + itemArray[i].getItemUnitPrice() + "</td><td>" + itemArray[i].getItemDiscount() + "</td></tr>");
    }
}

itemCodeInItems.keydown(function (e) {
    if (e.key == 'Enter') {
        searchItemDetails();
    }
})

searchItemBtn.click(function(){
    searchItemDetails();
})

function searchItemDetails() {
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].getItemCode() == itemCodeInItems.val()) {
            itemDescriptionInItems.val(itemArray[i].getItemDescription())
            itemQtyInItems.val(itemArray[i].getItemQty())
            itemBuyingPriceInItems.val(itemArray[i].getItemBuyingPrice())
            itemUnitPriceInItems.val(itemArray[i].getItemUnitPrice())
            itemDiscountInItems.val(itemArray[i].getItemDiscount())
        }
    }
}

updateItemBtn.click(function () {
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].getItemCode() == itemCodeInItems.val()) {
            itemArray[i].setItemDescription(itemDescriptionInItems.val());
            itemArray[i].setItemQty(itemQtyInItems.val());
            itemArray[i].setItemBuyingPrice(itemBuyingPriceInItems.val());
            itemArray[i].setItemUnitPrice(itemUnitPriceInItems.val());
            itemArray[i].setItemDiscount(itemDiscountInItems.val());

            $(".Items .container-fluid div:nth-child(3) div table tbody tr").filter(function () {
                rowNoToUpdate = $(this).children("td:nth-child(1)").text();
                if ($(this).children("td:nth-child(2)").text() == itemArray[i].getItemCode()) {
                    $(this).replaceWith("<tr><td>" + (i+1) + "</td><td>" + itemArray[i].getItemCode() + "</td><td>" + itemArray[i].getItemDescription() + "</td><td>" + itemArray[i].getItemQty() + "</td><td>" + itemArray[i].getItemBuyingPrice() + "</td><td>" + itemArray[i].getItemUnitPrice() + "</td><td>" + itemArray[i].getItemDiscount() + "</td></tr>");
                }
            })
            clearFieldsInItems();
        }
    }
});

// deleteItemBtn.click(function () {
//     let itemCode = itemCodeInItems.val();
//     for (let i = 0; i < itemsList.length; i++) {
//         let temp = itemsList[i + 1];
//         for (let j = 0; j < itemsList[i].length; j++) {
//             if (itemsList[i][j] == itemCode) {
//                 itemsList[i] = itemsList[i + 1];
//             }
//         }
//         if (temp == i) {
//             temp--;
//         }
//     }
// })

function clearFieldsInItems() {
    itemCodeInItems.val("");
    itemDescriptionInItems.val("");
    itemQtyInItems.val("");
    itemBuyingPriceInItems.val("");
    itemUnitPriceInItems.val("");
    itemDiscountInItems.val("");
}