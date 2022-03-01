var loginBtn = $("#loginBtn");
var signupBtn = $("#signupBtn");
var logoutBtn = $("#logoutBtn");
var signupBtnInLogin = $("#signupBtnInLogin");
var logoutBtnInSignup = $("#logoutBtnInSignup");
var homeNav = $("#Home");
var ordersNav = $("#Orders");
var itemsNav = $("#Items");
var customerNav = $("#Customer");
var orderDetailsBtn = $("#viewOrderDetailsBtn");


var homeSection = $("#homeSection");
var ordersSection = $("#ordersSection");
var orderDetailsSection = $("#orderDetailsSection");
var itemsSection = $("#itemDetailsSection");
var customerSection = $("#customerSection");
var loginSection = $("#loginSection");
var signupSection = $("#signupSection");
var dashboardAdmin = $('.dashboardAdmin');
var headerNav = $("#headerNav");
var signUpAdmin = $('.adminSignup');
var signupForAdminBtn = $('#signupForAdminBtn');
var logoutBtnInAdminSignup = $('#logoutBtnInAdminSignup');

var manageItemsSection = $('#manageItemsSection');
var signupDetailsSection = $('#signupDetailsSection');

var userNameLoginId = $('#userNameLoginId');
var passwordLoginId = $('#passwordLoginId');

// -----------------mobilenav-----------",--------

var mobileNavHome = $("#mobileNavHome");
var mobileNavOrders = $("#mobileNavOrders");
var mobileNavItems = $("#mobileNavItems");
var mobileNavCustomer = $("#mobileNavCustomer");
var mobileNavSignup = $("#mobileNavSignup");
var mobileNavLogout = $("#mobileNavLogout");

signupBtnInLogin.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "block");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
    manageItemsSection.css("display", "none")
    dashboardAdmin.css("display", "none")
});
signupForAdminBtn.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "none");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "block")
    manageItemsSection.css("display", "none")
    dashboardAdmin.css("display", "none")
});

logoutBtnInAdminSignup.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "block");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
    manageItemsSection.css("display", "none")
    dashboardAdmin.css("display", "none")
    signupDetailsSection.css("display", "none")
})

logoutBtnInSignup.click(function() {
    homeSection.css("display", "none");
    ordersSection.css("display", "none");
    orderDetailsSection.css("display", "none");
    itemsSection.css("display", "none");
    customerSection.css("display", "none");
    loginSection.css("display", "block");
    signupSection.css("display", "none");
    headerNav.css("display", "none");
    signUpAdmin.css("display", "none")
    manageItemsSection.css("display", "none")
    dashboardAdmin.css("display", "none")
    signupDetailsSection.css("display", "none")
});


var userNameLoginPattern = /^([A-z]{3,}[.]*[A-z]*[0-9]*[@]?((gmail.com)|(yahoo.com)?))$/;
var passwordLoginPattern = /^([A-z0-9]{3,}[.]*[A-z0-9]*[@]?)$/;
loginBtn.prop('disabled', true);
passwordLoginId.prop('disabled', true);

var homeAdminDashboardNavBtn = $('#homeAdminDashboardNavBtn');
var userDetailsAdminDashboardNavBtn = $('#userDetailsAdminDashboardNavBtn');
var itemsAdminDashboardNavBtn = $('#itemsAdminDashboardNavBtn');
var logoutAdminDashboardNavBtn = $('#logoutAdminDashboardNavBtn');

userNameLoginId.keyup(function() {
    if (userNameLoginPattern.test(userNameLoginId.val())) {
        userNameLoginId.css('border', '1px solid green');
        passwordLoginId.prop('disabled', false);
        loginBtn.prop('disabled', true);
    } else {
        userNameLoginId.css('border', '1px solid red');
        loginBtn.prop('disabled', true);
        passwordLoginId.prop('disabled', true);
    }
})

passwordLoginId.keyup(function() {
    if (passwordLoginPattern.test(passwordLoginId.val())) {
        passwordLoginId.css('border', '1px solid green');
        passwordLoginId.prop('disabled', false);
        loginBtn.prop('disabled', false);
    } else {
        passwordLoginId.css('border', '1px solid red');
        loginBtn.prop('disabled', true);
    }
})



loginBtn.off('click');
loginBtn.click(function() {
    for (let i = 0; i < signupArray.length; i++) {
        if ((signupArray[i].getUserName() == userNameLoginId.val() & (signupArray[i].getPassword() == passwordLoginId.val()))) {
            ordersNav.children('span').text('Orders');
            customerNav.css('display', 'block')
            homeSection.css("display", "block")
            ordersSection.css("display", "none")
            orderDetailsSection.css("display", "none")
            itemsSection.css("display", "none")
            customerSection.css("display", "none")
            loginSection.css("display", "none")
            signupSection.css("display", "none")
            headerNav.css("display", "block")
            signUpAdmin.css("display", "none")
            manageItemsSection.css("display", "none")
            signupDetailsSection.css("display", "none")
            dashboardAdmin.css("display", "none")

            logoutBtn.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "block");
                signupSection.css("display", "none");
                headerNav.css("display", "none");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            signupBtn.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "block");
                headerNav.css("display", "none");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });

            homeNav.click(function() {
                homeSection.css("display", "block");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });

            ordersNav.click(function() {
                ordersSection.css("display", "block");
                homeSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            itemsNav.click(function() {
                itemsSection.css("display", "block");
                ordersSection.css("display", "none");
                homeSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            customerNav.click(function() {
                customerSection.css("display", "block");
                itemsSection.css("display", "none");
                ordersSection.css("display", "none");
                homeSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            orderDetailsBtn.dblclick(function() {
                customerSection.css("display", "none");
                itemsSection.css("display", "none");
                ordersSection.css("display", "none");
                homeSection.css("display", "none");
                orderDetailsSection.css("display", "block");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            });

            mobileNavHome.click(function() {
                homeSection.css("display", "block");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            mobileNavOrders.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "block");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
            });

            mobileNavItems.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "block");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
            });

            mobileNavCustomer.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "block");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            mobileNavSignup.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "block");
                headerNav.css("display", "none");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
            mobileNavLogout.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "block");
                signupSection.css("display", "none");
                headerNav.css("display", "none");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
            });
        }
    }

    for (let j = 0; j < adminSignUpArray.length; j++) {
        if ((adminSignUpArray[j].getUserName() == userNameLoginId.val()) & (adminSignUpArray[j].getPassword() == passwordLoginId.val())) {
            userNameLoginId.val("");
            passwordLoginId.val("");
            ordersNav.css('width', '120%')
            itemsNav.css('left', '20%');
            customerNav.css('left', '20%');
            ordersNav.children('span').css('top', '0');
            ordersNav.children('span').css('bottom', '0');
            ordersNav.children('span').css('margin', 'auto');
            ordersNav.children('span').css('height', 'max-content');
            customerNav.css('display', 'none')

            ordersNav.children('span').text('Login Details');
            dashboardAdmin.css("display", "block")
            homeSection.css("display", "none")
            ordersSection.css("display", "none")
            orderDetailsSection.css("display", "none")
            itemsSection.css("display", "none")
            customerSection.css("display", "none")
            loginSection.css("display", "none")
            signupSection.css("display", "none")
            headerNav.css("display", "none")
            signUpAdmin.css("display", "none")
            manageItemsSection.css("display", "none")
            signupDetailsSection.css("display", "none")

            homeAdminDashboardNavBtn.off('click');
            homeAdminDashboardNavBtn.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "none")
                headerNav.css("display", "none")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "block")
            })
            userDetailsAdminDashboardNavBtn.off('click');
            userDetailsAdminDashboardNavBtn.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "none")
                headerNav.css("display", "block")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "block")
                dashboardAdmin.css("display", "none")
            })
            itemsAdminDashboardNavBtn.off('click');
            itemsAdminDashboardNavBtn.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "none")
                headerNav.css("display", "block")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "block")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            })
            logoutAdminDashboardNavBtn.off('click');
            logoutAdminDashboardNavBtn.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "block")
                signupSection.css("display", "none")
                headerNav.css("display", "none")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            })

            itemsNav.off('click');
            itemsNav.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "none")
                headerNav.css("display", "block")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "block")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            })
            ordersNav.off('click');
            ordersNav.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "none")
                headerNav.css("display", "block")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "block")
                dashboardAdmin.css("display", "none")
            })

            logoutBtn.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "block")
                signupSection.css("display", "none")
                headerNav.css("display", "none")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            })

            signupBtn.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "block")
                headerNav.css("display", "none")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "none")
            })
            homeNav.click(function() {
                ordersSection.css("display", "none")
                orderDetailsSection.css("display", "none")
                itemsSection.css("display", "none")
                customerSection.css("display", "none")
                loginSection.css("display", "none")
                signupSection.css("display", "none")
                headerNav.css("display", "none")
                signUpAdmin.css("display", "none")
                manageItemsSection.css("display", "none")
                signupDetailsSection.css("display", "none")
                dashboardAdmin.css("display", "block")
            })

            mobileNavOrders.children('span').text('Login Details');
            mobileNavCustomer.css('display', 'none');

            mobileNavHome.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "block")
                signupDetailsSection.css("display", "none")
                manageItemsSection.css("display", "none")
            });
            mobileNavOrders.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
                signupDetailsSection.css("display", "block")
                manageItemsSection.css("display", "none")
            });

            mobileNavItems.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "block");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
                signupDetailsSection.css("display", "none")
                manageItemsSection.css("display", "block")
            });

            mobileNavCustomer.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "block");
                loginSection.css("display", "none");
                signupSection.css("display", "none");
                headerNav.css("display", "block");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
                signupDetailsSection.css("display", "none")
                manageItemsSection.css("display", "none")
            });
            mobileNavSignup.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "none");
                signupSection.css("display", "block");
                headerNav.css("display", "none");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "none")
                signupDetailsSection.css("display", "none")
                manageItemsSection.css("display", "none")
            });
            mobileNavLogout.click(function() {
                homeSection.css("display", "none");
                ordersSection.css("display", "none");
                orderDetailsSection.css("display", "none");
                itemsSection.css("display", "none");
                customerSection.css("display", "none");
                loginSection.css("display", "block");
                signupSection.css("display", "none");
                headerNav.css("display", "none");
                signUpAdmin.css("display", "none")
                dashboardAdmin.css("display", "block")
                signupDetailsSection.css("display", "none")
                manageItemsSection.css("display", "none")
            });
        }
    }

})