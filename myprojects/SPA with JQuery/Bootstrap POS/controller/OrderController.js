var orderTableTbody = $('orderTable tbody')

function setDataToOrderTable() {
    for (let i = 0; i < orderArray.length; i++) {
        let row = '<tr><td>' + (i + 1) + '</td><td>' + orderArray[i].getOrderId() + '</td><td>' + orderArray[i].getOrderCustomerId() + '</td><td>' + orderArray[i].getOrderDate() + '</td><td>' + orderArray[i].getOrderTime() + '</td><td>' + orderArray[i].getOrderDiscount() + '</td><td>' + orderArray[i].getOrderTotalAmount() + '</td></tr>';
        orderTableTbody.append(row);
    }
}