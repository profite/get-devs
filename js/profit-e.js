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
prftPointsCarousel = $('.points-carousel');

//GLOBAL VARS
var idCarousel = 1;

//ON READY
setTimeout(function () {moveCarousel(3);}, 5000);

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

$(prftMoveCarouselRight).on('click', function(event) {
  event.preventDefault();
  moveCarousel(1);
});

$(prftMoveCarouselLeft).on('click', function(event) {
  event.preventDefault();
  moveCarousel(2);
});

if (prftNavMenu.length > 0) {
  $(prftNavIcon).on('click', function(event) {
    event.preventDefault();
    toggleNav();
  });
}

function verifyNav() {
  if(prftNavMenu.hasClass('nav--open')){
    toggleNav();
  }
}

function toggleNav() {
  $(prftNavMenu).toggleClass('nav--close nav--open');
}

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
      console.log(idCarousel);
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
