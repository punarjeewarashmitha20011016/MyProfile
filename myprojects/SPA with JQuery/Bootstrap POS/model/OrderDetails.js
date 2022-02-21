function OrderDetails(orderId, itemCode, itemDescription, itemQty, itemPrice, itemDiscount, total) {
    var __orderId = orderId;
    var __itemCode = itemCode;
    var __itemDescription = itemDescription;
    var __itemQty = itemQty;
    var __itemPrice = itemPrice;
    var __itemDiscount = itemDiscount;
    var __total = total;

    this.setOrderDetailsOrderId = function(orderId) {
        __orderId = orderId;
    }
    this.setOrderDetailsItemCode = function(ItemCode) {
        __itemCode = itemCode;
    }
    this.setOrderDetailsItemDescription = function(description) {
        __itemDescription = description;
    }
    this.setOrderDetailsItemQty = function(qty) {
        __itemQty = qty;
    }
    this.setOrderDetailsItemPrice = function(itemPrice) {
        __itemPrice = itemPrice;
    }
    this.setOrderDetailsItemDiscount = function(itemDiscount) {
        __itemDiscount = itemDiscount;
    }
    this.setOrderDetailsItemTotal = function(itemTotal) {
        __total = itemTotal;
    }
    this.getOrderId = function() {
        return __orderId;
    }
    this.getItemCode = function() {
        return __itemCode;
    }
    this.getItemDescription = function() {
        return __itemDescription;
    }
    this.getItemQty = function() {
        return __itemDescription;
    }
    this.getItemPrice = function() {
        return __itemPrice;
    }
    this.getItemDiscount = function() {
        return __itemDiscount;
    }
    this.getItemTotalAmount = function() {
        return __total;
    }
}