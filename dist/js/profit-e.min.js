/*************************************************************************************************|
|   PROFIT-E - LUIGUI DELYER@S1X - luigui@s1x.com.br                                              |
|   GITHUB REPO = https://github.com/luiguild/get-devs.git                                        |
|   NPM DEPENDENCES: {                                                                            |
|     "gulp": "^3.9.0",                                                                           |
|     "gulp-jsvalidate": "^2.1.0",                                                                |
|     "gulp-rename": "^1.2.2",                                                                    |
|     "gulp-uglify": "^1.5.1",                                                                    |
|     "gulp-watch": "^4.3.5",                                                                     |
|   }                                                                                             |
|*************************************************************************************************/

//GLOBAL ELEMENTS
var prftNavMenu = $("nav"),
prftNavIcon = $(".logo-container"),
prftCarousel = $('.cut-carousel'),
prftImgCarousel = prftCarousel.find('.cut-img'),
prftCutCntCarousel = $('.cut-content'),
prftCntCarousel = prftCutCntCarousel.find('.content'),
prftMoveCarouselRight = $("#move-carousel-right"),
prftMoveCarouselLeft = $("#move-carousel-left"),
prftPointsCarousel = $('.points-carousel'),
prftCartCounter = $('#cart-counter'),
prftCartPrice = $('#cart-price'),
prftProductGroup = $('.product-group');

//GLOBAL VARS
var idCarousel = 1,
qtdCartItens = 0,
cartPrice = 0;


//ON READY
setTimeout(function () {moveCarousel(3);}, 5000);
getProducts();

//FUNCTION TO REPLACE STRINGS
String.prototype.replaceArray = function (find, replace) {
  var replaceString = this;
  for (var i = 0; i < find.length; i++) {
    var pos = replaceString.indexOf(find[i]);
    while (pos > -1) {
      replaceString = replaceString.replace(find[i], replace[i]);
      pos = replaceString.indexOf(find[i]);
    }
  }
  return replaceString;
};

//GET KEY ACTIONS TO CHANGE CAROUSEL DIRECTION
if(prftCarousel.length > 0) {
  $(document).on('keyup', function(event) {
    event.preventDefault();
    switch (event.which) {
      case 39:
      moveCarousel(1);
      break;

      case 37:
      moveCarousel(2);
      break;
    }
  });
}

//CHANGE DIRECTION OF CAROUSEL
$(prftMoveCarouselRight).on('click', function(event) {
  event.preventDefault();
  moveCarousel(1);
});

$(prftMoveCarouselLeft).on('click', function(event) {
  event.preventDefault();
  moveCarousel(2);
});

//CHANGE NAV STATUS
if (prftNavMenu.length > 0) {
  $(prftNavIcon).on('click', function(event) {
    event.preventDefault();
    toggleNav();
  });
}

function toggleNav() {
  $(prftNavMenu).toggleClass('nav--close nav--open');
}

//CAROUSEL FUNCTION
function moveCarousel(op){
  var leftCarousel = $(prftCarousel).css('left');
  var imgCarousel = $(prftImgCarousel).css("width");
  var cntCarousel = $(prftCntCarousel).css("width");
  var find = ["px"];
  var replace = [""];
  leftCarousel = leftCarousel.replaceArray(find, replace);
  imgCarousel = parseInt(imgCarousel.replaceArray(find, replace));
  cntCarousel = parseInt(cntCarousel.replaceArray(find, replace));

  if(op == 1){
    var limitCarousel = (imgCarousel * 8) * -1;

    if(leftCarousel >= limitCarousel){
      $(prftCarousel).css("left", ((imgCarousel * idCarousel) * -1));
      $(prftCutCntCarousel).css("left", ((cntCarousel * idCarousel) * -1));
      if(idCarousel==0){
        $('#pnt-1').toggleClass('fa-circle-o fa-circle');
      }else{
        $('#pnt-'+idCarousel).toggleClass('fa-circle-o fa-circle');
      }
      idCarousel++;

      $('#pnt-'+idCarousel).toggleClass('fa-circle-o fa-circle');
    }
  }
  else if(op == 2){
    var limitCarousel = (imgCarousel * -1);

    if(leftCarousel <= limitCarousel){
      $('#pnt-'+idCarousel).toggleClass('fa-circle-o fa-circle');
      idCarousel = idCarousel - 1;
      $(prftCarousel).css("left", imgCarousel * (idCarousel) * -1);
      $(prftCutCntCarousel).css("left", cntCarousel * (idCarousel) * -1);
      if(idCarousel==0){
        $('#pnt-1').toggleClass('fa-circle-o fa-circle');
      }else{
        $('#pnt-'+idCarousel).toggleClass('fa-circle-o fa-circle');
      }

    }
  }
  else if(op == 3){
    if(idCarousel <= 9){
      moveCarousel(1);
    }
    else if(idCarousel = 10){
      $('#pnt-'+idCarousel).toggleClass('fa-circle-o fa-circle');
      idCarousel = 1;
      $('#pnt-'+idCarousel).toggleClass('fa-circle-o fa-circle');
      moveCarousel(2);
    }

    setTimeout(function(){moveCarousel(3)}, 5000);
  }
}

//FUNCTION TO GET AND ADD THE PRODUCTS
function getProducts() {
  $.ajax({
    url: 'api/produtos.json',
    global: false,
    cache: false,
    processData: false,
    contentType: false,
    type: "GET",
    success: function(data){
      var jsonPic,
      jsonName,
      jsonOldPrice,
      jsonActualPrice,
      jsonCurrency,
      jsonRating,
      jsonExtra,
      jsonPayment,
      jsonPartialPrice;

      for (var i = 0; i < data.length; i++) {
        jsonPic = data[i]['pic'];
        jsonName = data[i]['name'];
        jsonOldPrice = data[i]['old-price'];
        jsonActualPrice = data[i]['actual-price'];
        jsonCurrency = data[i]['currency'];
        jsonRating = data[i]['rating'];
        jsonExtra = data[i]['extra'],
        jsonPayment = data[i]['payment'],
        jsonPartialPrice = data[i]['partial-price'];

        $(prftProductGroup).append("<span id=prd-" + i + " class=product></span>");
        if (jsonExtra.length > 0) {
          $("<div class=product-note></div>").appendTo("#prd-" + i);
          for (var iex = 0; iex < jsonExtra.length; iex++) {
            $("<div class=note>" + jsonExtra[iex] + "</div>").appendTo("#prd-" + i + " > .product-note");
          }
        }

        $("<div class=product-img><img src=" + jsonPic + " alt=" + jsonName + " /></div>").appendTo("#prd-" + i);

        $("<div class=product-rating></div>").appendTo("#prd-" + i);
        for (var irt = 1; irt <= 5; irt++) {
          if (irt <= jsonRating) {
            $("<i class='fa fa-star yellow-star'></i>").appendTo("#prd-" + i + " > .product-rating");
          }
          else {
            $("<i class='fa fa-star'></i>").appendTo("#prd-" + i + " > .product-rating");
          }
        }

        $("<div class=product-spec><div class=product-name>" + jsonName + "</div></div>").appendTo("#prd-" + i);
        if (jsonOldPrice != "") {
          $("<div class=product-price data-actual-price=" + jsonActualPrice + "><b><span class='pass-price'>" + jsonCurrency + jsonOldPrice + "</span></b> | " + jsonCurrency + jsonActualPrice + "</div>").appendTo("#prd-" + i + " > .product-spec");
        }
        else {
          $("<div class=product-price data-actual-price=" + jsonActualPrice + ">" + jsonCurrency + jsonActualPrice + "</div>").appendTo("#prd-" + i + " > .product-spec");
        }

        if (jsonPayment != "") {
          $("<br><b>ou</b> " + jsonPayment + "x <b>de</b> " + jsonCurrency + jsonPartialPrice + "</b>").appendTo("#prd-" + i + " > .product-spec > .product-price");
        }

        $("<div class=product-add-to-cart><span>ADICIOINAR AO CARRINHO</span><i class='fa fa-shopping-cart'></i></div>").appendTo("#prd-" + i);
      }

      //GET ALL PRODUCTS
      var prftProduct = $('.product');

      //ADD CART ITEM
      $(prftProduct).on('click', function(event) {
        event.preventDefault();
        var getActualPrice = $($(this)[0].querySelector('.product-price')).attr('data-actual-price');
        console.log(getActualPrice);
        cartPrice = (parseFloat(cartPrice) + parseFloat(getActualPrice)).toFixed(2);
        $(prftCartPrice).text(jsonCurrency + cartPrice);
        qtdCartItens++;
        $(prftCartCounter).text(qtdCartItens);
      });

    }
  });
}
