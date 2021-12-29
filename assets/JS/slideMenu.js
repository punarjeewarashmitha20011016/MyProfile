let condition = false;
$('#btnMenu').click(function () {
    let slide_menu_container = $('#slide-menu-container');
    let slide_menu = $('#slide-menu');
    let body = $('body');

    if (condition === false) {
        condition = true;
        slide_menu_container.css("display", "block");
        slide_menu.css("display", "block");
        slide_menu.animate({
            "right": "-100px"
        }, 100, 'linear');
        body.css("overflow", "hidden");
    } else {
        condition = false;
        slide_menu_container.css("display", "none");
        slide_menu.animate({
            right: "-340px"
        }, 100, 'linear', function () {
            slide_menu.css("display", "none");
        });
        body.css("overflow", "auto");
    }
});

$('#slide-menu > #menu-icon > li').click(function () {
    let slide_menu_container = $('#slide-menu-container');
    let slide_menu = $('#slide-menu');
    let body = $('body');
    condition = false;
    slide_menu_container.css("display", "none");
    slide_menu.animate({
        right: "-340px"
    }, 100, 'linear', function () {
        slide_menu.hide(100);
    });
    body.css("overflow", "auto");
});
$(function () {
    $('main').click(function () {
        /*let slide_menu_container = $('#slide-menu-container');
        let slide_menu = $('#slide-menu');
        slide_menu_container.css("display", "none");
        slide_menu.animate({
            right: "-340px"
        }, 100, 'linear', function () {
            slide_menu.css("display", "none");
        });
        body.css("overflow", "auto");*/
    });
});