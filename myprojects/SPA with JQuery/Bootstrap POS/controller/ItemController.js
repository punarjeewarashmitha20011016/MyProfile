var tBodyInItems = $(".ManageItems .container-fluid div:nth-child(3) div table tbody");
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

itemCodeInItems.val(generateItemCode());

$('#itemCodeInItems,#itemDescriptionInItems,#itemQtyInItems,#itemBuyingPriceInItems,#itemUnitPriceInItems,#itemDiscountInItems').off('keydown');
$('#itemCodeInItems,#itemDescriptionInItems,#itemQtyInItems,#itemBuyingPriceInItems,#itemUnitPriceInItems,#itemDiscountInItems').keydown(function(e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});

itemCodeInItems.keyup(function(e) {
    let index = 0;
    var itemCodeLbl = $("#itemCodeLblInItems span");
    if (validate(itemCodePattern, itemsArray, index, e, saveItemBtn, updateItemBtn, deleteItemBtn) == true) {
        itemCodeLbl.text("Code");
    } else {
        itemCodeLbl.text("Please use the given format (I-001)");
    }
});

itemDescriptionInItems.keyup(function(e) {
    let index = 1;
    let itemDescriptionLbl = $("#itemDescriptionLblInItems span");
    if (validate(itemDescriptionPattern, itemsArray, index, e, saveItemBtn, updateItemBtn, deleteItemBtn) == true) {
        itemDescriptionLbl.css('font-size', 'unset');
        itemDescriptionLbl.text("Description");
    } else {
        itemDescriptionLbl.css('font-size', '12px');
        itemDescriptionLbl.text("Please only use these special characters only (./()',&-)");
    }
})

itemQtyInItems.keyup(function(e) {
    let index = 2;
    let itemQtyLbl = $("#itemQtyLblInItems span")
    if (validate(itemQtyPattern, itemsArray, index, e, saveItemBtn, updateItemBtn, deleteItemBtn) == true) {
        itemQtyLbl.text("Qty");
    } else {
        itemQtyLbl.text("Please use a whole number");
    }

})

itemBuyingPriceInItems.keyup(function(e) {
    let index = 3;
    let itemBuyingPriceLbl = $("#itemBuyingPriceLblInItems span")
    if (validate(itemBuyingPattern, itemsArray, index, e, saveItemBtn, updateItemBtn, deleteItemBtn) == true) {
        itemBuyingPriceLbl.text("Buying Price");
    } else {
        itemBuyingPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemUnitPriceInItems.keyup(function(e) {
    let index = 4;
    let itemUnitPriceLbl = $("#itemUnitPriceLblInItems span")
    if (validate(itemUnitPattern, itemsArray, index, e, saveItemBtn, updateItemBtn, deleteItemBtn) == true) {
        itemUnitPriceLbl.text("Unit Price");
    } else {
        itemUnitPriceLbl.text("Please use the format (100.0 or 100)");
    }
})

itemDiscountInItems.keyup(function(e) {
    let index = 5;
    let itemDiscountLbl = $("#itemDiscountLblInItems span")
    if (validate(itemDiscountPattern, itemsArray, index, e, saveItemBtn, updateItemBtn, deleteItemBtn) == true) {
        itemDiscountLbl.text("Discount");
    } else {
        itemDiscountLbl.text("Please use the format (5.0 or 5)");
    }
})

saveItemBtn.off('click');
saveItemBtn.click(function() {
    var discountInItems = 0;
    if (itemDiscountInItems.length == 0) {
        discountInItems = 0;
    } else {
        discountInItems = itemDiscountInItems.val();
    }

    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].getItemCode() == itemCodeInItems.val()) {
            alert("This item id " + itemCodeInItems.val() + " already exists. Please try again with a different id");
            clearFieldsInItems();
            return;
        }
    }

    if (confirm("Do you want to add this Item.. If yes please enter Ok button") == true) {
        itemArray.push(new Item(itemCodeInItems.val(), itemDescriptionInItems.val(), itemQtyInItems.val(), itemBuyingPriceInItems.val(), itemUnitPriceInItems.val(), discountInItems));
        setDatToTheItemTable();
        deleteSelectedRowFromTheItemTable();
        setDataToItemComboBox();
        let code = generateItemCode();
        itemCodeInItems.val(code);
        setBorderToResetInItem();
    } else {
        alert('Item ' + itemCodeInItems.val() + ' adding is unsuccessful');
        clearFieldsInItems();
        let code = generateItemCode();
        itemCodeInItems.val(code);
        setBorderToResetInItem();
    }
});

function deleteSelectedRowFromTheItemTable() {
    var tableRow = $(".ManageItems .container-fluid div:nth-child(3) div .table tbody tr");
    tableRow.off("click")
    tableRow.click(function() {
        itemCodeInItems.val($(this).children("td:nth-child(2)").text());
        itemDescriptionInItems.val($(this).children("td:nth-child(3)").text());
        itemQtyInItems.val($(this).children("td:nth-child(4)").text());
        itemBuyingPriceInItems.val($(this).children("td:nth-child(5)").text());
        itemUnitPriceInItems.val($(this).children("td:nth-child(6)").text());
        itemDiscountInItems.val($(this).children("td:nth-child(7)").text());
    });
    clearFieldsInItems();
}

function setDatToTheItemTable() {
    $(".ManageItems .container-fluid div:nth-child(3) div table tbody tr").remove();
    itemDetailsTable.children('tbody').children('tr').remove();
    for (let i = 0; i < itemArray.length; i++) {
        tBodyInItems.append("<tr><td>" + (i + 1) + "</td><td>" + itemArray[i].getItemCode() + "</td><td>" + itemArray[i].getItemDescription() + "</td><td>" + itemArray[i].getItemQty() + "</td><td>" + itemArray[i].getItemBuyingPrice() + "</td><td>" + itemArray[i].getItemUnitPrice() + "</td><td>" + itemArray[i].getItemDiscount() + "</td></tr>");
        itemDetailsTable.children('tbody').append("<tr><td>" + (i + 1) + "</td><td>" + itemArray[i].getItemCode() + "</td><td>" + itemArray[i].getItemDescription() + "</td><td>" + itemArray[i].getItemQty() + "</td><td>" + itemArray[i].getItemBuyingPrice() + "</td><td>" + itemArray[i].getItemUnitPrice() + "</td><td>" + itemArray[i].getItemDiscount() + "</td></tr>");
    }
}

itemCodeInItems.keydown(function(e) {
    if (e.key == 'Enter') {
        searchItemDetails();
    }
})
searchItemBtn.off('click')
searchItemBtn.click(function() {
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

updateItemBtn.off('click');
updateItemBtn.click(function() {

    if (confirm('Do you want to update ' + itemCodeInItems.val() + ' item...If yes please enter Ok button..') == true) {
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].getItemCode() == itemCodeInItems.val()) {
                itemArray[i].setItemDescription(itemDescriptionInItems.val());
                itemArray[i].setItemQty(itemQtyInItems.val());
                itemArray[i].setItemBuyingPrice(itemBuyingPriceInItems.val());
                itemArray[i].setItemUnitPrice(itemUnitPriceInItems.val());
                itemArray[i].setItemDiscount(itemDiscountInItems.val());

                $(".ManageItems .container-fluid div:nth-child(3) div table tbody tr").filter(function() {
                    if ($(this).children("td:nth-child(2)").text() == itemArray[i].getItemCode()) {
                        $(this).replaceWith("<tr><td>" + (i + 1) + "</td><td>" + itemArray[i].getItemCode() + "</td><td>" + itemArray[i].getItemDescription() + "</td><td>" + itemArray[i].getItemQty() + "</td><td>" + itemArray[i].getItemBuyingPrice() + "</td><td>" + itemArray[i].getItemUnitPrice() + "</td><td>" + itemArray[i].getItemDiscount() + "</td></tr>");
                    }
                })

                itemDetailsTable.children('tbody').children('tr').filter(function() {
                    if ($(this).children("td:nth-child(2)").text() == itemArray[i].getItemCode()) {
                        $(this).replaceWith("<tr><td>" + (i + 1) + "</td><td>" + itemArray[i].getItemCode() + "</td><td>" + itemArray[i].getItemDescription() + "</td><td>" + itemArray[i].getItemQty() + "</td><td>" + itemArray[i].getItemBuyingPrice() + "</td><td>" + itemArray[i].getItemUnitPrice() + "</td><td>" + itemArray[i].getItemDiscount() + "</td></tr>");
                    }
                })
                clearFieldsInItems();
                let code = generateItemCode();
                itemCodeInItems.val(code);
                setBorderToResetInItem();
            }
        }
    } else {
        alert('Updating ' + itemCodeInItems.val() + ' is unsuccessful');
        clearFieldsInItems();
        let code = generateItemCode();
        itemCodeInItems.val(code);
        setBorderToResetInItem();
    }
});

deleteItemBtn.off('click');
deleteItemBtn.click(function() {
    if (confirm('Do you want to delete ' + itemCodeInItems.val() + ' details... If yes please enter Ok button..') == true) {
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].getItemCode() == itemCodeInItems.val()) {
                itemArray.splice(i, 1);
                $(".ManageItems .container-fluid div:nth-child(3) div table tbody tr").filter(function() {
                    if ($(this).children("td:nth-child(2)").text() == itemArray[i].getItemCode()) {
                        $(this).remove();
                    }
                })

                itemDetailsTable.children('tbody').children('tr').filter(function() {
                    if ($(this).children("td:nth-child(2)").text() == itemArray[i].getItemCode()) {
                        $(this).remove();
                    }
                })
                clearFieldsInItems();
                let code = generateItemCode();
                itemCodeInItems.val(code);
                setBorderToResetInItem();
            }
        }
    } else {
        alert('Deleting ' + itemCodeInItems.val() + ' item is unsuccessful');
        clearFieldsInItems();
        let code = generateItemCode();
        itemCodeInItems.val(code);
        setBorderToResetInItem();
    }
})

function clearFieldsInItems() {
    itemCodeInItems.val("");
    itemDescriptionInItems.val("");
    itemQtyInItems.val("");
    itemBuyingPriceInItems.val("");
    itemUnitPriceInItems.val("");
    itemDiscountInItems.val("");
}

function generateItemCode() {
    if (itemArray[0] != undefined) {
        for (let i = 0; i < itemArray.length; i++) {
            if (i == (itemArray.length - 1)) {
                let temp = parseInt(itemArray[i].getItemCode().split('-')[1]);
                temp = temp + 1;
                if (temp <= 9) {
                    return "I-00" + temp;
                } else if (temp <= 99) {
                    return "I-0" + temp;
                } else {
                    return "I-" + temp;
                }
            }
        }
    } else {
        return 'I-001';
    }
}

function setBorderToResetInItem() {
    setBorderToDefault(itemsArray);
}