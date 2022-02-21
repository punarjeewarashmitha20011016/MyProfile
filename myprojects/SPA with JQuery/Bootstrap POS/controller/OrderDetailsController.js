var orderDetailsTableTbody = $('#orderDetailsTable tbody');

function setDataToOrderDetailsTable(orderDetailsArray) {
    $('#orderDetailsTable tbody tr').remove();
    for (let i = 0; i < orderDetailsArray.length; i++) {
        let row = '<tr><td>' + (i + 1) + '</td><td>' + orderDetailsArray[i].getOrderId() + '</td><td>' + orderDetailsArray[i].getItemCode() + '</td><td>' + orderDetailsArray[i].getItemDescription() + '</td><td>' + orderDetailsArray[i].getItemQty() + '</td><td>' + orderDetailsArray[i].getItemPrice() + '</td><td>' + orderDetailsArray[i].getItemDiscount() + '</td><td>' + orderDetailsArray[i].getItemTotalAmount() + '</td></tr>';
        orderDetailsTableTbody.append(row);
    }
}