// meniul

$(document).ready(function(){

    // meniul (cel mai impottant)
    $("#menu-icon").on("click", function() {

        $(this).toggleClass('open');

        $(this)[0].src = ($(this).hasClass("open") ? "../_img/icon_menu_close_grey.png" : "../_img/icon_menu_white.png");
        
        $("nav").toggleClass("open");
    })
})