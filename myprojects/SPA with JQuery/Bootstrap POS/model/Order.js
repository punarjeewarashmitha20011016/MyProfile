function Order(orderId, customerId, orderDate, orderTime, discount, totalAmount) {
    var __orderId = orderId;
    var __customerId = customerId;
    var __orderDate = orderDate;
    var __orderTime = orderTime;
    var __discount = discount;
    var __totalAmount = totalAmount;
    var __orderDetails = new Array();

    this.setOrderId = function(orderId) {
        __orderId = orderId;
    }

    this.setOrderCustomerId = function(customerId) {
        __customerId = customerId;
    }

    this.setOrderDate = function(orderDate) {
        __orderDate = orderDate;
    }

    this.setOrderTime = function(orderTime) {
        __orderTime = orderTime;
    }

    this.setOrderDiscount = function(discount) {
        __discount = discount;
    }

    this.setOrderTotalAmount = function(totalAmount) {
        __orderTotalAmount = totalAmount;
    }

    this.setOrderDetails = function(orderDetails) {
        __orderDetails = orderDetails;
    }

    this.getOrderId = function() {
        return __orderId;
    }

    this.getOrderCustomerId = function() {
        return __customerId;
    }

    this.getOrderDate = function() {
        return __orderDate;
    }

    this.getOrderTime = function() {
        return __orderTime;
    }

    this.getOrderDiscount = function() {
        return __discount;
    }

    this.getOrderTotalAmount = function() {
        return __totalAmount;
    }

    this.getOrderDetails = function() {
        return __orderDetails;
    }
}