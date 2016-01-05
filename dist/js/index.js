$(document).ready(function() {

  $(document).on('click', '.product-box', function(e) {
    e.preventDefault();
    var price = $(e.currentTarget).data('price');
    addTotalPrice(price);
  });

  var addTotalPrice = function(price) {
    $totalPrice = $('#total-price span');
    $cart = $('#products-cart');

    var current_value = parseInt($totalPrice.text(), 10);
    var current_cart  = parseInt($cart.text(), 10);
    var total_price   = current_value + price;
    var total_cart    = current_cart + 1;

    $totalPrice.text( total_price );
    $cart.text( total_cart );
  };

  var buildPopuparProductsList = function() {
    $productsContainer = $('#product-conainer');
    var popuparProductsUrl = $productsContainer.data('url');
    $productTemplate = $('#product-template');

    $.ajax({
      dataType: "json",
      url: popuparProductsUrl,

      success: function(productList) {
        $productsContainer.empty();

        $.each(productList, function(index, product) {
          $product = $($productTemplate.html());

          // Free shipping?
          if (!product.free_shipping) {
            $product.find('.free-shipping').remove();
          }

          // New product?
          if (!product.new) {
            $product.find('.news').remove();
          }

          // Imgs.
          $product.find('img').attr('src', product.img_url);

          // Stars.
          for (var starIndex = 1; starIndex <= product.stars; starIndex++) {
            $product.find('.star-' + starIndex).addClass('marked');
          }

          // Name.
          $product.find('.name-prod').text(product.name);

          // Old Price.
          if (product.old_price > 0) {
            $product.find('.old-price').text('R$ ' + product.old_price + ',00');
          } else {
            $product.find('.price-prod span:nth-child(1)').remove();
          }

          // Price.
          $product.attr('data-price', product.price);
          $product.find('.price').text('R$ ' + product.price + ',00');

          // Instalments and Instalments Price
          if (product.instalments > 0) {
            $product.find('.spread-price strong:nth-child(1)').text(product.instalments + 'x');
            $product.find('.spread-price strong:nth-child(2)').text('R$ ' + product.instalment_price + ',00');
          } else {
            $product.find('.spread-price').remove();
          }

          // Apeend product to container.
          $productsContainer.append($product);
        });
      }
    });
  };

  buildPopuparProductsList();

});
