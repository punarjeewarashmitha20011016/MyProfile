var signUpAdminId = $('#signUpAdminId');
var signUpAdminName = $('#signUpAdminName');
var signUpAdminNic = $('#signUpAdminNic');
var signUpAdminContactNo = $('#signUpAdminContactNo');
var signUpAdminUserName = $('#signUpAdminUserName');
var signUpAdminPassword = $('#signUpAdminPassword');
var signUpAdminAddress = $('#signUpAdminAddress');

var signupAdminIdPattern = /^(A-)[0-9]{3}$/;
var signupAdminNamePattern = /^[A-z0-9]{3,}[ ]*[A-z]*$/;
var signupAdminNicPattern = /^([0-9]{9}[v])|([0-9]{12})$/;
var signupAdminContactNoPattern = /^[0-9]{10}$/;
var signupAdminUserNamePattern = /^([A-z]{3,}[.]*[A-z]*[0-9]*[@]?((gmail.com)|(yahoo.com)?))$/;
var signupAdminPasswordPattern = /^([A-z0-9]{3,}[.]*[A-z0-9]*[@]?)$/;
var signupAdminAddressPattern = /^[A-z0-9,/ ]*[.]?$/;

var addAdminSignUpDetailsBtn = $('#addAdminSignupDetailsBtn');
var updateAdminSignUpDetailsBtn = $('#updateAdminSignupDetailsBtn');
var deleteAdminSignUpDetailsBtn = $('#deleteAdminSignupDetailsBtn');

var signUpAdminIdLbl = $('#signUpAdminIdLbl span');
var signUpAdminNameLbl = $('#signUpAdminNameLbl span');
var signUpAdminNicLbl = $('#signUpAdminNicLbl span');
var signUpAdminContactNoLbl = $('#signUpAdminContactNoLbl span');
var signUpAdminUserNameLbl = $('#signUpAdminUserNameLbl span');
var signUpAdminPasswordLbl = $('#signUpAdminPasswordLbl span');
var signUpAdminAddressLbl = $('#signUpAdminAddressLbl span');


var fieldsArrayInAdmin = [signUpAdminId, signUpAdminName, signUpAdminNic, signUpAdminContactNo, signUpAdminUserName, signUpAdminPassword, signUpAdminAddress];

var adminId = generateAdminId();
signUpAdminId.val(adminId);

signUpAdminId.off('keyup');
signUpAdminId.keyup(function(e) {
    let index = 0;
    if (validate(signupAdminIdPattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminIdLbl.text('Id')
        if (e.key == 'Enter') {
            searchAdminSignupDetails();
        }
    } else {
        signUpAdminIdLbl.text('Please enter a valid Id. Hint (A-001)');
        signUpAdminIdLbl.css('font-size', '80%');
    }
})

signUpAdminName.off('keyup');
signUpAdminName.keyup(function(e) {
    let index = 1;
    if (validate(signupAdminNamePattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminNameLbl.text('Name')
    } else {
        signUpAdminNameLbl.text('Please enter a valid Name.');
        signUpAdminNameLbl.css('font-size', '80%');
    }
})

signUpAdminNic.off('keyup');
signUpAdminNic.keyup(function(e) {
    let index = 2;
    if (validate(signupAdminNicPattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminNicLbl.text('Nic')
    } else {
        signUpAdminNicLbl.text('Please enter a valid Nic no');
        signUpAdminNicLbl.css('font-size', '80%');
    }
})

signUpAdminContactNo.off('keyup');
signUpAdminContactNo.keyup(function(e) {
    let index = 3;
    if (validate(signupAdminContactNoPattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminContactNoLbl.text('Contact No')
    } else {
        signUpAdminContactNoLbl.text('Please enter a valid contact number.');
        signUpAdminContactNoLbl.css('font-size', '80%');
    }
})

signUpAdminUserName.off('keyup');
signUpAdminUserName.keyup(function(e) {
    let index = 4;
    if (validate(signupAdminUserNamePattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminUserNameLbl.text('User Name')
    } else {
        signUpAdminUserNameLbl.text('Please enter a valid User Name.');
        signUpAdminUserNameLbl.css('font-size', '80%');
    }
})

signUpAdminPassword.off('keyup');
signUpAdminPassword.keyup(function(e) {
    let index = 5;
    if (validate(signupAdminPasswordPattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminPasswordLbl.text('Password')
    } else {
        signUpAdminPasswordLbl.text('Please enter a valid Password.');
        signUpAdminPasswordLbl.css('font-size', '80%');
    }
})

signUpAdminAddress.off('keyup');
signUpAdminAddress.keyup(function(e) {
    let index = 6;
    if (validate(signupAdminAddressPattern, fieldsArrayInAdmin, index, e, addAdminSignUpDetailsBtn, updateAdminSignUpDetailsBtn, deleteAdminSignUpDetailsBtn) == true) {
        signUpAdminAddressLbl.text('Address')
    } else {
        signUpAdminAddressLbl.text('Please enter a valid Address.');
        signUpAdminAddressLbl.css('font-size', '80%');
    }
})

addAdminSignUpDetailsBtn.off('click');
addAdminSignUpDetailsBtn.click(function() {

    if (searchAdminSignupDetails() == true) {
        alert('This ' + signUpAdminId.val() + ' already exists');
        clearFieldsInAdminSignup();
        let id = generateAdminId();
        signUpAdminId.val(id);
        return;
    }

    let signupDetails = new AdminSignup(signUpAdminId.val(), signUpAdminName.val(), signUpAdminNic.val(), signUpAdminContactNo.val(), signUpAdminUserName.val(), signUpAdminPassword.val(), signUpAdminAddress.val());
    if (confirm("Do you want to add this details. If yes please enter Ok button") == true) {
        adminSignUpArray.push(signupDetails);
        setDataToTheAdminTable();
        clearFieldsInAdminSignup();
        let id = generateAdminId();
        signUpAdminId.val(id);

    } else {
        alert('Adding signup details for signup Id ' + signUpAdminId.val() + ' is unsuccessful.');
        clearFieldsInAdminSignup();
        return;
    }
})
updateAdminSignUpDetailsBtn.off('click');
updateAdminSignUpDetailsBtn.click(function() {
    let check = ifAdminExists();
    if (check == true) {
        if (confirm('Do you want to update the admin details relevant to admin id - ' + signUpAdminId.val() + '') == true) {
            for (let i = 0; i < adminSignUpArray.length; i++) {
                if (adminSignUpArray[i].getId() == signUpAdminId.val()) {
                    adminSignUpArray[i].setName(signUpAdminName.val());
                    adminSignUpArray[i].setNic(signUpAdminNic.val());
                    adminSignUpArray[i].setContactNo(signUpAdminContactNo.val());
                    adminSignUpArray[i].setUserName(signUpAdminUserName.val());
                    adminSignUpArray[i].setPassword(signUpAdminPassword.val());
                    adminSignUpArray[i].setAddress(signUpAdminAddress.val());

                    adminDetailsTable.children('tbody > tr').filter(function() {
                        if ($(this).eq(1).text() == adminSignUpArray[i].getId()) {
                            $(this).replaceWith('<tr><td>' + (i + 1) + '</td><td>' + adminSignUpArray[i].getId() + '</td><td>' + adminSignUpArray[i].getName() + '</td><td>' + adminSignUpArray[i].getNic() + '</td><td>' + adminSignUpArray[i].getContactNo() + '</td><td>' + adminSignUpArray[i].getUserName() + '</td><td>' + adminSignUpArray[i].getPassword() + '</td><td>' + adminSignUpArray[i].getAddress() + '</td></tr>');
                        }
                    })
                    clearFieldsInAdminSignup();
                    let id = generateAdminId();
                    signUpAdminId.val(id);
                }
            }
        } else {
            alert('Updating admin ' + signUpAdminId.val() + ' is unsuccessful');
            clearFieldsInAdminSignup();
            let id = generateAdminId();
            signUpAdminId.val(id);
            return;
        }
    } else {
        alert('Updating admin ' + signUpAdminId.val() + ' is unsuccessful');
        clearFieldsInAdminSignup();
        let id = generateAdminId();
        signUpAdminId.val(id);
        return;
    }
})

deleteAdminSignUpDetailsBtn.off('click');
deleteAdminSignUpDetailsBtn.click(function() {
    let check = ifAdminExists();
    if (check == true) {
        if (confirm('Do you want to remove this admin details relevant to admin id = ' + signUpAdminId.val() + '') == true) {
            for (let i = 0; i < adminSignUpArray.length; i++) {
                if (adminSignUpArray[i].getId() == signUpAdminId.val()) {
                    adminSignUpArray.splice(i, 1);

                    adminDetailsTable.children('tbody > tr').filter(function() {
                        $(this).remove();
                    })

                    clearFieldsInAdminSignup();
                    let id = generateAdminId();
                    signUpAdminId.val(id);
                }
            }
        } else {
            alert('Deleting admin id = ' + signUpAdminId.val() + ' is unsuccessful');
            clearFieldsInAdminSignup();
            let id = generateAdminId();
            signUpAdminId.val(id);
            return;
        }
    }
})

function ifAdminExists() {
    for (let i = 0; i < adminSignUpArray.length; i++) {
        if (adminSignUpArray[i].getId() == signUpAdminId.val()) {
            return true;
        }
    }
    return false;
}

function searchAdminSignupDetails() {
    for (let i = 0; i < adminSignUpArray.length; i++) {
        if (adminSignUpArray[i].getId() == signUpAdminId.val()) {
            signUpAdminName.val(adminSignUpArray[i].getName());
            signUpAdminNic.val(adminSignUpArray[i].getNic());
            signUpAdminContactNo.val(adminSignUpArray[i].getContactNo());
            signUpAdminUserName.val(adminSignUpArray[i].getUserName());
            signUpAdminPassword.val(adminSignUpArray[i].getPassword());
            signUpAdminAddress.val(adminSignUpArray[i].getAddress());
            return true;
        }
    }
}

function clearFieldsInAdminSignup() {
    signUpAdminId.val("");
    signUpAdminName.val("");
    signUpAdminNic.val("");
    signUpAdminContactNo.val("");
    signUpAdminUserName.val("");
    signUpAdminPassword.val("");
    signUpAdminAddress.val("");
}

function generateAdminId() {
    if (adminSignUpArray.length == 0) {
        return "A-001";
    } else {
        for (let i = 0; i < adminSignUpArray.length; i++) {
            if (i == (adminSignUpArray.length - 1)) {
                let temp = parseInt(adminSignUpArray[i].getId().split('-')[1]);
                temp = temp + 1;
                if (temp <= 9) {
                    return 'A-00' + temp;
                } else if (temp <= 99) {
                    return 'A-0' + temp;
                } else {
                    return 'A-' + temp;
                }
            }
        }
    }
}

function setDataToTheAdminTable() {
    adminDetailsTable.children('tbody').children('tr').remove();
    for (let i = 0; i < adminSignUpArray.length; i++) {
        adminDetailsTable.children('tbody').append('<tr><td>' + (i + 1) + '</td><td>' + adminSignUpArray[i].getId() + '</td><td>' + adminSignUpArray[i].getName() + '</td><td>' + adminSignUpArray[i].getNic() + '</td><td>' + adminSignUpArray[i].getContactNo() + '</td><td>' + adminSignUpArray[i].getUserName() + '</td><td>' + adminSignUpArray[i].getPassword() + '</td><td>' + adminSignUpArray[i].getAddress() + '</td></tr>');
    }
}