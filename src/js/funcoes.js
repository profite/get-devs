//identar(sublime) seu JavaScript CTRL+SHIFT+P > format
$(function() {

	//############## SIDEBAR OCULTO
    $('.filter').click(function () {
        var MenuMobile = $('.sidebar_nav');
        if (!MenuMobile.hasClass('active')) {
            MenuMobile.animate({left: '0'}, 300, function () {
                MenuMobile.addClass('active');
            });
        } else {
            MenuMobile.animate({left: '-100%'}, 300, function () {
                MenuMobile.removeClass('active');
            });
        }
        return false;
    });
	
	//############## FILTRO ABERTO
    $(".title-menu").click(function() {
        $(this).toggleClass("active");
        $(this).next("ul").stop('true').slideToggle("slow");
    });

});