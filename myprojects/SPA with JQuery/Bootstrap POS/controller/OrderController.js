var orderTableTbody = $('#orderTable tbody');
var searchOrderId = $("#searchOrderId");
var searchIdPattern = /^((O-)[0-9]{3})|((C-)[0-9]{3})$/
var viewOrderDetailsBtn = $('#viewOrderDetailsBtn');
viewOrderDetailsBtn.prop('disabled', true);

searchOrderId.off('keyup');
searchOrderId.keyup(function() {
    if (searchIdPattern.test(searchOrderId.val())) {
        viewOrderDetailsBtn.prop('disabled', false);
        searchOrderId.css('border', '1px solid green');
        viewOrderDetailsBtn.off('click');
        viewOrderDetailsBtn.click(function() {
            searchOrders();
            // viewOrderDetailsBtn.prop('disabled', true);
        })
    } else {
        searchOrderId.css('border', '1px solid red');
        viewOrderDetailsBtn.prop('disabled', true);
    }
});

function setDataToOrderTable() {
    $('#orderTable tbody tr').remove();
    for (let i = 0; i < orderArray.length; i++) {
        let row = '<tr><td>' + (i + 1) + '</td><td>' + orderArray[i].getOrderId() + '</td><td>' + orderArray[i].getOrderCustomerId() + '</td><td>' + orderArray[i].getOrderDate() + '</td><td>' + orderArray[i].getOrderTime() + '</td><td>' + orderArray[i].getOrderDiscount() + '</td><td>' + orderArray[i].getOrderTotalAmount() + '</td></tr>';
        orderTableTbody.append(row);
    }
}

function searchOrders() {
    for (let i = 0; i < orderArray.length; i++) {
        if ((searchOrderId.val() == orderArray[i].getOrderId()) | (searchOrderId.val() == orderArray[i].getOrderCustomerId())) {
            setDataToOrderDetailsTable(orderArray[i].getOrderDetails());
        }
    }
}