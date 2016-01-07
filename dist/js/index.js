$(document).ready(function() {

  //  Precious photo.
  $(document).on('click', 'img#previous', function(e){
    e.preventDefault;
    $e = $('img#previous');
    var current_img_url = $e.data('current-img');
    var next_img_url    = (current_img_url-1 === 0) ? 3 : current_img_url-1;

    $current_img    = $('img.slider-img[data-url="' + current_img_url + '"]');
    $next_img       = $('img.slider-img[data-url="' + next_img_url + '"]');
    $inactive_circle = $('[class*="fa-circle"][data-url="' + current_img_url + '"]');
    $active_circle   = $('[class*="fa-circle"][data-url="' + next_img_url + '"]');

    if (next_img_url !== 0) {
      $($inactive_circle).removeClass('fa-circle').addClass('fa-circle-o');
      $($active_circle).removeClass('fa-circle-o').addClass('fa-circle');
      $($e).data('current-img', next_img_url);
      $('img#next').data('current-img', next_img_url);
      $($current_img).fadeToggle();
      $($next_img).fadeToggle();
    }
  });

  // Next photo.
  $(document).on('click', 'img#next', function(e){
    e.preventDefault;
    $e = $('img#next');
    var current_img_url = $e.data('current-img');
    var next_img_url    = (current_img_url+1 === 4) ? 1 : current_img_url+1;

    $current_img    = $('img.slider-img[data-url="' + current_img_url + '"]');
    $next_img       = $('img.slider-img[data-url="' + next_img_url + '"]');
    $inactive_circle = $('[class*="fa-circle"][data-url="' + current_img_url + '"]');
    $active_circle   = $('[class*="fa-circle"][data-url="' + next_img_url + '"]');

    if (next_img_url !== 4) {
      $($inactive_circle).removeClass('fa-circle').addClass('fa-circle-o');
      $($active_circle).removeClass('fa-circle-o').addClass('fa-circle');
      $($e).data('current-img', next_img_url);
      $('img#previous').data('current-img', next_img_url);
      $($current_img).fadeToggle();
      $($next_img).fadeToggle();
    }
  });

  // Add in cart.
  $(document).on('click', '.product-box', function(e) {
    e.preventDefault();
    var price = $(e.currentTarget).data('price');
    addTotalPrice(price);
  });

  var addTotalPrice = function(price) {
    $totalPrice = $('#price-integer');
    $cart       = $('#products-in-cart');

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
