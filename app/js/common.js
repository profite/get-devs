/*
* format moeda
* @author  Willian Bruno & Van Neves
* @version AGOSTO 13, 2013
* @url  wbruno.com.br/expressao-regular/formatar-em-moeda-reais-expressao-regular-em-javascript/
*/
function formatReal(mixed) {
  var int = parseInt(mixed.toFixed(2).toString().replace(/[^\d]+/g, ''));
  var tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6)
  tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}

/**
* parse float
*/
function toFloat (number, precision){
    var prec = Math.pow(10 , precision);
    return Math.round(number * prec) / prec;
}
