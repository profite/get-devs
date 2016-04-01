/*
* session save itens cart
*/
// function saveItems(idProduct) {
//   var saveProducts = '';
//   saveProducts += ' idProduct=' + idProduct + '/';
//   document.cookie += saveProducts;
// }

/*
* get products
*/
function viewProducts(){
  $.ajax({
    url: "../products.json",
    dataType: "json",
    success: function(products){
      $(products).each(function(index, product){
        // html content blocks
        var contentProduct = '';
        // init block product
        contentProduct += '<div class="block full product four">\n';
        // product url image
        contentProduct += ' <img '+'src="' + product.image + '" alt="Photo Product" />\n';
        // frete
        if(product.frete){
          contentProduct += ' <span class="frete-gratis">Frete Grátis</span>\n';
        }
        // new
        if(product.new){
          contentProduct += ' <span class="new">Novidade</span>\n';
        }
        // product rating
        contentProduct += ' <span class="rating"></span>\n';
        // product name
        contentProduct += ' <span class="name" data-getdevs-name="'+product.name+'">' + product.name + '</span>\n';
        // product price tag
        contentProduct += ' <div class="price">\n';
        // product old price
        var productOldPrice = '';
        if(product.oldprice != '' && product.oldprice != 'null'){
          productOldPrice = formatReal(product.oldprice);
          contentProduct += ' <span class="old-price">R$ '+ productOldPrice + ' | </span>\n';
        }
        // product price
        var formatProductPrice = formatReal(product.price);
        contentProduct += ' <span class="current-price" data-getdevs-price="'+formatProductPrice+'">R$ '+formatProductPrice+'</span>';
        // end block price
        contentProduct += ' </div>';
        // button add product
        contentProduct += ' <button type="button" class="add-cart" data-getdevs-pid="'+product.id+'">Adicionar ao carrinho</button>';

        // product price monthly
        var amountOfInstallments = '';
        var priceMonthly = '';
        if(product.amount_installments != '' && product.amount_installments != 'null'){
          contentProduct += ' <div class="price-monthly">\n';
          // product amount of installments
          priceMonthly = formatReal(product.price_monthly);
          contentProduct += ' <span>ou </span><strong>'+ product.amount_installments +' x </strong><span>de </span><strong>R$ '+ priceMonthly +'</strong>';
          // end block price monthly
          contentProduct += ' </div>';
        }
        // end block product
        contentProduct += '</div>';

        $(".container-products").append(contentProduct);
      });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      $(".container-products").append('<div class="block full twenty">Desculpe, não foi possível localizar os produtos.</p>');
    },
    complete: function(){
      // total value
      var totalValueTmp = 0;
      var sumTotal = 0;

      // account added itens
      var accountItens = 0;

      $('.add-cart').on('click',function(){
        // save info of added product
        var idProduct = $(this).attr('data-getdevs-pid');
        var nameProduct = $(this).parents('.block.product').find('.name').attr('data-getdevs-name');
        var priceProduct = $(this).parents('.block.product').find('.current-price').attr('data-getdevs-price');

        // sum to cart
        var parseFloatPrice = toFloat(priceProduct.replace(',', '.') , 2);

        // sum total
        sumTotal += totalValueTmp + parseFloatPrice;

        var formatTotal = formatReal(sumTotal);

        // add html itens in cart
        $('header .cart .total-value-cart').text('R$ '+formatTotal);

        accountItens = accountItens+1;
        $('header .cart .qtd-cart').text(accountItens);

      });
    }
  });
}
