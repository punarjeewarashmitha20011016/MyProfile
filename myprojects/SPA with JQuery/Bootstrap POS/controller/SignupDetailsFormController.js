var searchAdminDetails = $('#searchAdminDetails');
var searchAdminDetailsBtn = $('#searchAdminDetailsBtn');
var adminDetailsTable = $('#adminDetailsTable');
var searchCashierDetails = $('#searchCashierDetails');
var searchCashierDetailsBtn = $('#searchCashierDetailsBtn');
var cashierDetailsTable = $('#cashierDetailsTable');

searchAdminDetails.off('keyup');
searchAdminDetails.keyup(function() {
    let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    adminDetailsTable.children('tbody').children('tr').show().filter(function() {
        let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
})

searchCashierDetails.off('keyup');
searchCashierDetails.keyup(function() {
    let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    cashierDetailsTable.children('tbody').children('tr').show().filter(function() {
        let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
})