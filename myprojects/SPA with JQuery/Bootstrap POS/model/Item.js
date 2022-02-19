function Item(code, description, qty, buyingPrice, unitPrice, discount) {
    var __itemCode = code;
    var __itemDescription = description;
    var __itemQty = qty;
    var __itemBuyingPrice = buyingPrice;
    var __itemUnitPrice = unitPrice;
    var __itemDiscount = discount;

    this.setItemCode = function (code) {
        __itemCode = code;
    }

    this.setItemDescription = function (description) {
        __itemDescription = description;
    }

    this.setItemQty = function (qty) {
        __itemQty = qty;
    }

    this.setItemBuyingPrice = function (buyingPrice) {
        __itemBuyingPrice = buyingPrice;
    }

    this.setItemUnitPrice = function (unitPrice) {
        __itemUnitPrice = unitPrice;
    }

    this.setItemDiscount = function (discount) {
        __itemDiscount = discount;
    }

    this.getItemCode = function () {
        return __itemCode;
    }

    this.getItemDescription = function () {
        return __itemDescription;
    }

    this.getItemQty = function () {
        return __itemQty;
    }

    this.getItemBuyingPrice = function () {
        return __itemBuyingPrice;
    }

    this.getItemUnitPrice = function () {
        return __itemUnitPrice;
    }

    this.getItemDiscount = function () {
        return __itemDiscount;
    }
}