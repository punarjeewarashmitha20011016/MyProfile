var signUpBtn = document.getElementById("signupBtn");
var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("mouseover", function( event ) {
    signUpBtn.style.right='150px';
},false)

logoutBtn.addEventListener("mouseleave", function( event ) {
    signUpBtn.style.right='70px';
},false)