$(document).ready(function() {
  // var value = window.devicePixelRatio;
  // var w = window.innerWidth;
  // var lWidth = window.screen.width;

  // clear values
  $('header .cart .total-value-cart').text('R$ 0,00');
  $('header .cart .qtd-cart').text('0');

  // view produtcs home
  viewProducts();

  // slider slick slider
  $('.single-item-banner').slick({
    dots: true,
    speed: 900,
    autoplay: true
  });
  // toggle class - bg banner
  $('.single-item-banner').on('afterChange', function(event, slick, currentSlide){
    $('.banners').attr('class','banners currentSlide'+currentSlide);
  });
});
