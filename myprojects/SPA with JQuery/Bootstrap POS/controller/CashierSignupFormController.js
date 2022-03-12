var signUpId = $('#signUpId');
var signUpName = $('#signUpName');
var signUpNic = $('#signUpNic');
var signUpContactNo = $('#signUpContactNo');
var signUpUserName = $('#signUpUserName');
var signUpPassword = $('#signUpPassword');
var signUpAddress = $('#signUpAddress');

var signupIdPattern = /^(S-)[0-9]{3}$/;
var signupNamePattern = /^[A-z0-9]{3,}[ ]*[A-z]*$/;
var signupNicPattern = /^([0-9]{9}[v])|([0-9]{12})$/;
var signupContactNoPattern = /^[0-9]{10}$/;
var signupUserNamePattern = /^([A-z]{3,}[.]*[A-z]*[0-9]*[@]?((gmail.com)|(yahoo.com)?))$/;
var signupPasswordPattern = /^([A-z0-9]{3,}[.]*[A-z0-9]*[@]?)$/;
var signupAddressPattern = /^[A-z0-9,/ ]*[.]?$/;

var addSignUpDetailsBtn = $('#addSignupDetailsBtn');
var updateSignUpDetailsBtn = $('#updateSignupDetailsBtn');
var deleteSignUpDetailsBtn = $('#deleteSignupDetailsBtn');

var signUpIdLbl = $('#signUpIdLbl span');
var signUpNameLbl = $('#signUpNameLbl span');
var signUpNicLbl = $('#signUpNicLbl span');
var signUpContactNoLbl = $('#signUpContactNoLbl span');
var signUpUserNameLbl = $('#signUpUserNameLbl span');
var signUpPasswordLbl = $('#signUpPasswordLbl span');
var signUpAddressLbl = $('#signUpAddressLbl span');

var cashierDetailsTable = $('#cashierDetailsTable');


var fieldsArray = [signUpId, signUpName, signUpNic, signUpContactNo, signUpUserName, signUpPassword, signUpAddress];

$('#signUpId,#signUpName,#signUpNic,#signUpContactNo,#signUpUserName,#signUpPassword,#signUpAddress').off('keydown');
$('#signUpId,#signUpName,#signUpNic,#signUpContactNo,#signUpUserName,#signUpPassword,#signUpAddress').keydown(function(e) {
    if (e.key == 'Tab') {
        e.preventDefault();
    }
});

let id = generateId();
signUpId.val(id);

signUpId.off('keyup');
signUpId.keyup(function(e) {
    let index = 0;
    if (validate(signupIdPattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpIdLbl.text('Id')
        if (e.key == 'Enter') {
            searchSignupDetails();
        }
    } else {
        signUpIdLbl.text('Please enter a valid Id. Hint (S-001)');
        signUpIdLbl.css('font-size', '80%');
    }
})

signUpName.off('keyup');
signUpName.keyup(function(e) {
    let index = 1;
    if (validate(signupNamePattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpNameLbl.text('Name')
    } else {
        signUpNameLbl.text('Please enter a valid Name.');
        signUpNameLbl.css('font-size', '80%');
    }
})

signUpNic.off('keyup');
signUpNic.keyup(function(e) {
    let index = 2;
    if (validate(signupNicPattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpNicLbl.text('Nic')
    } else {
        signUpNicLbl.text('Please enter a valid Nic no');
        signUpNicLbl.css('font-size', '80%');
    }
})

signUpContactNo.off('keyup');
signUpContactNo.keyup(function(e) {
    let index = 3;
    if (validate(signupContactNoPattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpContactNoLbl.text('Contact No')
    } else {
        signUpContactNoLbl.text('Please enter a valid contact number.');
        signUpContactNoLbl.css('font-size', '80%');
    }
})

signUpUserName.off('keyup');
signUpUserName.keyup(function(e) {
    let index = 4;
    if (validate(signupUserNamePattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpUserNameLbl.text('User Name')
    } else {
        signUpUserNameLbl.text('Please enter a valid User Name.');
        signUpUserNameLbl.css('font-size', '80%');
    }
})

signUpPassword.off('keyup');
signUpPassword.keyup(function(e) {
    let index = 5;
    if (validate(signupPasswordPattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpPasswordLbl.text('Password')
    } else {
        signUpPasswordLbl.text('Please enter a valid Password.');
        signUpPasswordLbl.css('font-size', '80%');
    }
})

signUpAddress.off('keyup');
signUpAddress.keyup(function(e) {
    let index = 6;
    if (validate(signupAddressPattern, fieldsArray, index, e, addSignUpDetailsBtn, updateSignUpDetailsBtn, deleteSignUpDetailsBtn) == true) {
        signUpAddressLbl.text('Address')
    } else {
        signUpAddressLbl.text('Please enter a valid Address.');
        signUpAddressLbl.css('font-size', '80%');
    }
})

addSignUpDetailsBtn.off('click');
addSignUpDetailsBtn.click(function() {
    if (searchSignupDetails() == true) {
        alert('This ' + signUpId.val() + ' already exists');
        clearFieldsInSignup();
        setCashierInputBordersReset();
        return;
    }

    var signupDetails = new Signup(signUpId.val(), signUpName.val(), signUpNic.val(), signUpContactNo.val(), signUpUserName.val(), signUpPassword.val(), signUpAddress.val());
    if (confirm("Do you want to add this details. If yes please enter Ok button") == true) {
        signupArray.push(signupDetails);
        setDataToTheCashierTable();
        clearFieldsInSignup();
        let id = generateId();
        signUpId.val(id);
        setCashierInputBordersReset();

    } else {
        alert('Adding signup details for signup Id ' + signUpId.val() + ' is unsuccessful.');
        clearFieldsInSignup()
        let id = generateId();
        signUpId.val(id);
        setCashierInputBordersReset();
    }
})

function searchSignupDetails() {
    for (let i = 0; i < signupArray.length; i++) {
        if (signupArray[i].getId() == signUpId.val()) {
            signUpName.val(signupArray[i].getName());
            signUpNic.val(signupArray[i].getNic());
            signUpContactNo.val(signupArray[i].getContactNo());
            signUpUserName.val(signupArray[i].getUserName());
            signUpPassword.val(signupArray[i].getPassword());
            signUpAddress.val(signupArray[i].getAddress());
            return true;
        }
    }
}

function clearFieldsInSignup() {
    signUpId.val("");
    signUpName.val("");
    signUpNic.val("");
    signUpContactNo.val("");
    signUpUserName.val("");
    signUpPassword.val("");
    signUpAddress.val("");
}

updateSignUpDetailsBtn.off('click');
updateSignUpDetailsBtn.click(function() {
    let check = ifSignupDetailsExists();
    if (check == true) {
        if (confirm('Do you want to update the signup details relevant to id - ' + signUpAdminId.val() + '') == true) {
            for (let i = 0; i < signupArray.length; i++) {
                if (signupArray[i].getId() == signUpId.val()) {
                    console.log(signUpName.val())
                    signupArray[i].setName(signUpName.val());
                    signupArray[i].setNic(signUpNic.val());
                    signupArray[i].setContactNo(signUpContactNo.val());
                    signupArray[i].setUserName(signUpUserName.val());
                    signupArray[i].setPassword(signUpPassword.val());
                    signupArray[i].setAddress(signUpAddress.val());

                    cashierDetailsTable.children('tbody > tr').filter(function() {
                        if ($(this).children('td:nth-child(2)').text() == signupArray[i].getId()) {
                            $(this).replaceWith('<tr><td>' + (i + 1) + '</td><td>' + signupArray[i].getId() + '</td><td>' + signupArray[i].getName() + '</td><td>' + signupArray[i].getNic() + '</td><td>' + signupArray[i].getContactNo() + '</td><td>' + signupArray[i].getUserName() + '</td><td>' + signupArray[i].getPassword() + '</td><td>' + signupArray[i].getAddress() + '</td></tr>');
                        }
                    })

                    clearFieldsInSignup();
                    let id = generateId();
                    signUpId.val(id);
                    setCashierInputBordersReset();
                }
            }
        } else {
            alert('Updating id ' + signUpId.val() + ' is unsuccessful');
            clearFieldsInSignup();
            let id = generateId();
            signUpId.val(id);
            setCashierInputBordersReset();
            return;
        }
    } else {
        alert('Updating id ' + signUpId.val() + ' is unsuccessful');
        clearFieldsInSignup();
        let id = generateId();
        signUpId.val(id);
        setCashierInputBordersReset();
        return;
    }
})

deleteSignUpDetailsBtn.off('click');
deleteSignUpDetailsBtn.click(function() {
    let check = ifSignupDetailsExists();
    if (check == true) {
        if (confirm('Do you want to remove this signup details relevant to id = ' + signUpId.val() + '') == true) {
            for (let i = 0; i < signupArray.length; i++) {
                if (signupArray[i].getId() == signUpId.val()) {
                    signupArray.splice(i, 1);

                    cashierDetailsTable.children('tbody > tr').filter(function() {
                        if ($(this).children('td:nth-child(2)').text() == signupArray[i].getId()) {
                            $(this).remove();
                        }
                    })

                    clearFieldsInSignup();
                    let id = generateId();
                    signUpId.val(id);
                    setCashierInputBordersReset();
                }
            }
        } else {
            alert('Deleting id = ' + signUpId.val() + ' is unsuccessful');
            clearFieldsInSignup();
            let id = generateId();
            signUpId.val(id);
            setCashierInputBordersReset();
            return;
        }
    }
})

function ifSignupDetailsExists() {
    for (let i = 0; i < signupArray.length; i++) {
        if (signupArray[i].getId() == signUpId.val()) {
            return true;
        }
    }
    return false;
}

function generateId() {
    if (signupArray.length == 0) {
        return "S-001";
    } else {
        for (let i = 0; i < signupArray.length; i++) {
            if (i == (signupArray.length - 1)) {
                let temp = parseInt(signupArray[i].getId().split('-')[1]);
                temp = temp + 1;
                if (temp <= 9) {
                    return 'S-00' + temp;
                } else if (temp <= 99) {
                    return 'S-0' + temp;
                } else {
                    return 'S-' + temp;
                }
            }
        }
    }
}

function setDataToTheCashierTable() {
    cashierDetailsTable.children('tbody').children('tr').remove();
    for (let i = 0; i < signupArray.length; i++) {
        cashierDetailsTable.children('tbody').append('<tr><td>' + (i + 1) + '</td><td>' + signupArray[i].getId() + '</td><td>' + signupArray[i].getName() + '</td><td>' + signupArray[i].getNic() + '</td><td>' + signupArray[i].getContactNo() + '</td><td>' + signupArray[i].getUserName() + '</td><td>' + signupArray[i].getPassword() + '</td><td>' + signupArray[i].getAddress() + '</td></tr>');
    }
}

function setBorderToDefault() {
    signUpId.css("border", "1px solid #ced4da");
    signUpName.css("border", "1px solid #ced4da");
    signUpNic.css("border", "1px solid #ced4da");
    signUpContactNo.css("border", "1px solid #ced4da");
    signUpUserName.css("border", "1px solid #ced4da");
    signUpPassword.css("border", "1px solid #ced4da");
    signUpAddress.css("border", "1px solid #ced4da");
}

function setCashierInputBordersReset() {
    setBorderToDefault(fieldsArray);
}