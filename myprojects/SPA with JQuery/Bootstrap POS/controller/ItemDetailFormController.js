var itemDetailsSearchId = $('#itemDetailsSearchId');
var searchItemDetailsBtn = $('#searchItemDetailsBtn');
var itemDetailsTable = $('#itemDetailsTable');

itemDetailsSearchId.off('keyup');
itemDetailsSearchId.keyup(function() {
    let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    itemDetailsTable.children('tbody').children('tr').show().filter(function() {
        let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();

})