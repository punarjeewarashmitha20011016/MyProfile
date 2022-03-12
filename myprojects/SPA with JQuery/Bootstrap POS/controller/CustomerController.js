var saveCustomer = $("#saveCustomer");
var updateCustomer = $('#cusUpdateBtn');
var deleteCustomer = $('#cusDeleteBtn');

var customerSearchBtn = $('#customerSearchBtn');
var cusId = $("#cusId");
var cusName = $("#cusName");
var cusContactNo = $("#cusContactNo");
var cusNic = $("#cusNic");
var cusAddress = $("#cusAddress");
var tblCus = $("#tblCus");
var tblCusBody = $("#tblCus tbody");
var cusTblRow = 1;

var cusIdPattern = /^(C-)[0-9]{3}$/;
var cusNamePattern = /^[A-z ]+$/;
var cusContactPattern = /^[0-9]{10}$/;
var cusNicPattern = /^(([0-9]{9}[v]{1})|([0-9]{12}))$/;
var cusAddressPattern = /^[A-z0-9.,/ ]*$/

var cusInputsArr = [cusId, cusName, cusContactNo, cusNic, cusAddress];

cusId.val(generateCustomerId());


$('#cusId,#cusName,#cusContactNo,#cusNic,#cusAddress').off('keydown');
$('#cusId,#cusName,#cusContactNo,#cusNic,#cusAddress').keydown(function(e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});

cusId.keyup(function(e) {
    let index = 0;
    var cusIdLbl = $("#cusIdLabelInCustomers span");
    if (validate(cusIdPattern, cusInputsArr, index, e, saveCustomer, updateCustomer, deleteCustomer) == true) {
        cusIdLbl.text("Id");
    } else {
        cusIdLbl.text("Please use the given format (C-001)");
    }
})

cusName.keyup(function(e) {
    let index = 1;
    var cusNameLbl = $("#cusNameLabelInCustomers span");
    if (validate(cusNamePattern, cusInputsArr, index, e, saveCustomer, updateCustomer, deleteCustomer) == true) {
        cusNameLbl.css('font-size', 'unset');
        cusNameLbl.text("Name");
    } else {
        cusNameLbl.css('font-size', '12px');
        cusNameLbl.text("Please use the given format (Kamal Bandara)");
    }
})

cusContactNo.keyup(function(e) {
    let index = 2;
    var cusContactLbl = $("#cusContactLabelInCustomers span");
    if (validate(cusContactPattern, cusInputsArr, index, e, saveCustomer, updateCustomer, deleteCustomer) == true) {
        cusContactLbl.text("Contact No");
    } else {
        cusContactLbl.text("Please use only 10 digits");
    }
})

cusNic.keyup(function(e) {
    let index = 3;
    var cusNicLbl = $("#cusNicLabelInCustomers span");
    if (validate(cusNicPattern, cusInputsArr, index, e, saveCustomer, updateCustomer, deleteCustomer) == true) {
        cusNicLbl.text("Nic");
    } else {
        cusNicLbl.text("Please use only valid Nic numbers");
    }
})

cusAddress.keyup(function(e) {
    let index = 4;
    var cusAddressLbl = $("#cusAddressLabelInCustomers span");
    if (validate(cusAddressPattern, cusInputsArr, index, e, saveCustomer, updateCustomer, deleteCustomer) == true) {
        cusAddressLbl.text("Address");
    } else {
        cusAddressLbl.text("Please use only these special characters (.,/)");
    }
})

saveCustomer.off('click');
saveCustomer.click(function() {
    for (let i = 0; i < customerArray.length; i++) {
        if (customerArray[i].getCustomerId() == cusId.val()) {
            alert('This customer Id exists. Please enter a different Id');
            clearFieldsInItems();
            setCustomerBordersReset();
            return;
        }
    }

    if (confirm('Do you want to add this customer details.. If yes please enter Ok button.') == true) {
        customerArray.push(new Customer(cusId.val(), cusName.val(), cusContactNo.val(), cusNic.val(), cusAddress.val()));
        setDataToCustomerTable();
        clearFieldsInCustomer();
        let code = generateCustomerId();
        cusId.val(code);
        setCustomerBordersReset();
    } else {
        alert('Adding customer details is unsuccessful');
        clearFieldsInCustomer();
        let code = generateCustomerId();
        cusId.val(code);
        setCustomerBordersReset();
    }
});

function setDataToCustomerTable() {
    $("#tblCus tbody tr").remove();
    for (let i = 0; i < customerArray.length; i++) {
        tblCusBody.append("<tr><td>" + (i + 1) + "</td><td>" + customerArray[i].getCustomerId() + "</td><td>" + customerArray[i].getCustomerName() + "</td><td>" + customerArray[i].getCustomerNic() + "</td><td>" + customerArray[i].getCustomerContactNo() + "</td><td>" + customerArray[i].getCustomerAddress() + "</td></tr>");
    };
}
updateCustomer.off('click');
updateCustomer.click(function() {
    if (confirm('Do you want to update ' + cusId.val() + ' details....If yes please enter Ok button...') == true) {
        for (let i = 0; i < customerArray.length; i++) {
            if (customerArray[i].getCustomerId() == cusId.val()) {
                customerArray[i].setCustomerName(cusName.val());
                customerArray[i].setCustomerContactNo(cusContactNo.val());
                customerArray[i].setCustomerNic(cusNic.val());
                customerArray[i].setCustomerAddress(cusAddress.val());
                $("#tblCus tbody tr").filter(function() {
                    rowNoToUpdate = $(this).children("td:nth-child(1)").text();
                    if ($(this).children("td:nth-child(2)").text() == customerArray[i].getCustomerId()) {
                        $(this).replaceWith("<tr><td>" + (i + 1) + "</td><td>" + customerArray[i].getCustomerId() + "</td><td>" + customerArray[i].getCustomerName() + "</td><td>" + customerArray[i].getCustomerNic() + "</td><td>" + customerArray[i].getCustomerContactNo() + "</td><td>" + customerArray[i].getCustomerAddress() + "</td></tr>");
                    }
                })
                clearFieldsInCustomer();
                let code = generateCustomerId();
                cusId.val(code);
                setCustomerBordersReset();
            }
        }
    } else {
        alert('Updating ' + cusId.val() + ' Customer details is unsuccessful');
        clearFieldsInCustomer();
        let code = generateCustomerId();
        cusId.val(code);
        setCustomerBordersReset();
    }
});

deleteCustomer.off('click');
deleteCustomer.click(function() {
    if (confirm('Do you want to delete ' + cusId.val() + ' details...If yes please enter Ok button..') == true) {
        for (let i = 0; i < customerArray.length; i++) {
            if (customerArray[i].getCustomerId() == cusId.val()) {
                customerArray.splice(i, 1);
                clearFieldsInCustomer();
                let code = generateCustomerId();
                cusId.val(code);
                setCustomerBordersReset();
            }
        }
    } else {
        alert('Deleting ' + cusId.val() + ' details is unsuccessful');
        clearFieldsInCustomer();
        let code = generateCustomerId();
        cusId.val(code);
        setCustomerBordersReset();
    }
});

cusId.keydown(function(e) {
    if (e.key == 'Enter') {
        searchCustomer();
    }
})
customerSearchBtn.off('click')
customerSearchBtn.click(function() {
    searchCustomer();
});

function searchCustomer() {
    let cusID = cusId.val();
    for (let i = 0; i < customerArray.length; i++) {
        if (customerArray[i].getCustomerId() == cusID) {
            cusName.val(customerArray[i].getCustomerName())
            cusContactNo.val(customerArray[i].getCustomerContactNo())
            cusNic.val(customerArray[i].getCustomerNic())
            cusAddress.val(customerArray[i].getCustomerAddress())
        }
    }
}

function clearFieldsInCustomer() {
    cusId.val("");
    cusName.val("");
    cusContactNo.val("");
    cusNic.val("");
    cusAddress.val("");
}

function generateCustomerId() {
    if (customerArray[0] != undefined) {
        for (let i = 0; i < customerArray.length; i++) {
            if (i == (customerArray.length - 1)) {
                let temp = parseInt(customerArray[i].getCustomerId().split('-')[1]);
                temp = temp + 1;
                if (temp <= 9) {
                    return "C-00" + temp;
                } else if (temp <= 99) {
                    return "C-0" + temp;
                } else {
                    return "C-" + temp;
                }
            }
        }
    } else {
        return "C-001";
    }
}

function setCustomerBordersReset() {
    setBorderToDefault(cusInputsArr);
}