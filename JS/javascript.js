
window.addEventListener('load', yourFunction, false);
// ..... or
window.addEventListener('DOMContentLoaded', yourFunction, false);

   let image=document.getElementById('java1');
    let images1=['assets/images/java logo.png'];
    /*setInterval(function () {
        image.src=images[0];
    });*/
    function myFun(){
        image.src=images1[0];
    };
