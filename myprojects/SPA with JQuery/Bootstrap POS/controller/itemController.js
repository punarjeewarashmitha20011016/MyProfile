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