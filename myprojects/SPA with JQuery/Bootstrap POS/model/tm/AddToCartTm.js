function AddToCart(customerId, itemCode, itemDescription, itemQty, itemPrice, itemDiscount, totalAmount) {
    var __customerId = customerId;
    var __itemCode = itemCode;
    var __itemDescription = itemDescription;
    var __itemQty = itemQty;
    var __itemPrice = itemPrice;
    var __itemDiscount = itemDiscount;
    var __totalAmount = totalAmount;

    this.setCustomerId = function(customerId) {
        __customerId = customerId;
    }

    this.setItemCode = function(itemCode) {
        __itemCode = itemCode;
    }

    this.setItemDescription = function(itemDescription) {
        __itemDescription = itemDescription;
    }

    this.setItemQty = function(itemQty) {
        __itemQty = itemQty;
    }

    this.setItemPrice = function(itemPrice) {
        __itemPrice = itemPrice;
    }

    this.setItemDiscount = function(itemDiscount) {
        __itemDiscount = itemDiscount;
    }

    this.setItemTotalAmount = function(totalAmount) {
        __totalAmount = totalAmount;
    }

    this.getCustomerId = function() {
        return __customerId;
    }

    this.getItemCode = function() {
        return __itemCode;
    }

    this.getItemDescription = function() {
        return __itemDescription;
    }

    this.getItemQty = function() {
        return __itemQty;
    }

    this.getItemPrice = function() {
        return __itemPrice;
    }

    this.getItemDiscount = function() {
        return __itemDiscount;
    }

    this.getTotalAmount = function() {
        return __totalAmount;
    }
}