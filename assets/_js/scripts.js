jQuery(document).ready(function($) {
    $('.search-form').each(function() {
        $(this).find('input').keypress(function(e) {
            if (e.which == 10 || e.which == 13) {
                this.form.submit();
            }
        });
        $(this).find('input[type=submit]').hide();
    });
    $('#main-slider').cslider({
        current: 0,
        bgincrement: 50,
        autoplay: false,
        interval: 4000
    });
    $.getJSON('assets/js/products.json', function(data) {
        this.qtd = data.products.length;
        this.retorno = '';
        for (i = 0; i < this.qtd; i++) {
            this.retorno += '<div class="col col-4"><div class="item"><div class="frame">';
            this.retorno += (data.products[i].flagFreeshipping == true) ? '<span class="flag flag-frete"></span>' : ' ';
            this.retorno += (data.products[i].flagNovelty == true) ? '<span class="flag flag-novidade"></span>' : ' ';
            this.retorno += '<div class="item-image"><a href="' + data.products[i].url + '"><img src="' + data.products[i].imgUrl + '" alt="' + data.products[i].name + '"></a></div>';
            this.retorno += '<div class="item-ratings stars-' + data.products[i].rating + '"><ul class="list-inline"><li><label for="star1" title="1 Estrela"><input type="radio" id="star1" name="rating" value="1"/></label></li><li><label for="star2" title="2 Estrelas"><input type="radio" id="star2" name="rating" value="2"/></label></li><li><label for="star3" title="3 Estrelas"><input type="radio" id="star3" name="rating" value="3"/></label></li><li><label for="star4" title="4 Estrelas"><input type="radio" id="star4" name="rating" value="4"/></label></li><li><label for="star5" title="5 Estrelas"><input type="radio" id="star5" name="rating" value="5"/></label></li></ul></div>';
            this.retorno += '<div class="item-title"><p><a href="' + data.products[i].url + '">' + data.products[i].name + '</a></p></div>';
            this.retorno += '<div class="item-price">';
            this.retorno += (data.products[i].price == false) ? '<span class="item-old-price">R$<i>' + data.products[i].oldPrice + '</i></span><span class="item-special-price"> R$<i>' + data.products[i].specialPrice + '</i></span>' : '<span class="item-regular-price"> R$<i>' + data.products[i].price + '</i></span>';
            this.retorno += (data.products[i].qtyParcel < 1) ? '' : '<span class="item-parcel-price">ou <i>' + data.products[i].qtyParcel + ' x</i> de <i>R$' + data.products[i].priceParcel + '</i></span>';
            this.retorno += '</div></div>';
            this.retorno += '<button type="button" class="add-to-cart" id="' + data.products[i].sku + '">Adiconar ao Carrinho</button>';
            this.retorno += '</div></div>';
        }
        $('#item-products').html(this.retorno);
        var count = 0;
        var theTotal = 0;
        $(".item").each(function(index) {
            var getPrice = parseInt($(this).find('.item-regular-price i').text() || $(this).find('.item-special-price i').text());
            $(this).on("click", "button", function() {
                count++;
                theTotal += parseFloat(getPrice);
                $('.header-cart-qty').text(count);
                $('.header-cart-amount').text('R$' + theTotal + ',00');
                $('html, body').animate({
                    'scrollTop': $(".header-cart").position().top
                });
            });
        });
    });
    if ($(window).width() < 768) {
        $('.slider').remove();
    }
});