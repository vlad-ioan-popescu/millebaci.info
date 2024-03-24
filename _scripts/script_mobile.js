// meniul

$(document).ready(function () {
    // meniul (cel mai impottant)
    $('#menu-icon').on('click', function () {
        $(this).toggleClass('open');

        $(this)[0].src = $(this).hasClass('open')
            ? '../_img/icon_menu_close_grey.webp'
            : '../_img/icon_menu_white.webp';

        $('nav').toggleClass('open');
    });

    // click la pozele de meniu
    $('.menu-item').on('click', function () {
        if ($(this).hasClass('show')) {
            const link = $(this).children().first('a');
            link.attr('href', link[0].dataset.link);
            link.click();
        }
        // document.querySelectorAll('.menu-item').forEach(el => el.classList.remove("show"));
        $('.menu-item').removeClass('show');
        $('.menu-item a').attr('href', 'javascript:;');
        $(this).addClass('show');
    });
});
