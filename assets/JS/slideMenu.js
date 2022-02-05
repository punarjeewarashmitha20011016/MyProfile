var condition = false;
var closeBtn = $("#closeBtn");
$('#btnMenu').click(function () {
    let slide_menu_container = $('#slide-menu-container');
    let slide_menu = $('#slide-menu');
    let body = $('body');

    if (condition === false) {
        slide_menu_container.css("display", "block");
        slide_menu.css("display", "block");
        slide_menu.animate({
            "left": "35vw"
        }, 100, 'linear');
        body.css("overflow", "hidden");
        condition = true;
    } 
    closeBtn.click(function(){
        slide_menu.animate({
            "left": "-35vw"
        }, 100, 'linear');
        body.css("overflow", "auto");
        condition = false;
        slide_menu_container.css("display", "none");
    })
});


