var data={"produtos":[
        {   
            "idproduto":11,
            "pimage": "images/ecb5dece.produto12.jpg",
            "prating":2,
            "nome":"Suede Chelsea Boots",
            "preco":350,
            "precoespecial":"",
            "parcela": "",
            "valorparcela":"",
            "fretegratis":true,
            "flagnew":"",
            "precofinal": 350,
            
        },
        {   
            "idproduto":12,
            "pimage": "images/d3a88fc8.produto2.jpg",
            "prating":2,
            "nome":"Nike Air Max 90 Galaxy",
            "preco":699,
            "precoespecial":499,
            "parcela": "",
            "valorparcela":"",
            "fretegratis":false,
            "flagnew":"",
            "precofinal": 499,
            
        },
        {   
            "idproduto":13,
            "pimage": "images/b8312983.produto3.jpg",
            "prating":2,
            "nome":"Nike Air Max Tava Gradient",
            "preco":599,
            "precoespecial": "",
            "parcela": "",
            "valorparcela":"",
            "fretegratis":false,
            "flagnew":"",
            "precofinal": 599,
            
        },
        {   
            "idproduto":14,
            "pimage": "images/ee8ae01b.produto4.jpg",
            "prating":2,
            "nome":"Timberland Yellow Boot",
            "preco":699,
            "precoespecial":499,
            "parcela": 10,
            "valorparcela":49.99,
            "fretegratis":true,
            "flagnew":"",
            "precofinal": 499,

            
        },
        {   
            "idproduto":15,
            "pimage": "images/48628517.produto55.jpg",
            "prating":2,
            "nome":"Vans SK8 Hi Preto",
            "preco":320,
            "precoespecial":240,
            "parcela": "",
            "valorparcela":"",
            "fretegratis":true,
            "flagnew":"",
            "precofinal": 240,
            
        }
]};

var output="<ul class='listaprod'>";

for (var i in data.produtos) {

output+="<li class='prod column-fifth'><p class='flagnew2'>Novidade " + data.produtos[i].flagnew + "</p><p class='flagnew'>Frete Grátis " + data.produtos[i].flagnew + "</p>  <p class='prodimage'><img src= " + data.produtos[i].pimage + " /></p><p class='rating'> <strong class='rating-demonstrativo avaliacao20'> " + data.produtos[i].prating + " </strong></p><p class='pnome'> " + data.produtos[i].nome + "</p> <span class='pregular'>R$ " + data.produtos[i].preco + ",00</span> <span id='pespecial'> <span classe='linhapreco'>|</span> R$ " + data.produtos[i].precoespecial + ",00 </span> <p class='parcela'> <span class='cordif'>ou</span> " + data.produtos[i].parcela + "x <span class='cordif'>de</span> R$ " + data.produtos[i].valorparcela + "</p><button class='botao btn'  data-produtoId='"+ data.produtos[i].idproduto +"'><a href='#' data-produtoId='"+ data.produtos[i].idproduto +"'>Adicionar ao carrinho</a></button></li>";




}





output+="</ul>";




document.getElementById("mais_comprados").innerHTML=output;



function setaImagem(){
    var settings = {
        primeiraImg: function(){
            elemento = document.querySelector("#slider a:first-child");
            elemento.classList.add("ativo");
            this.legenda(elemento);
        },
 
        slide: function(){
            elemento = document.querySelector(".ativo");
 
            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
 
        },
 
        proximo: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");
 
            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
            intervalo = setInterval(settings.slide,10000);
        },
 
        anterior: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");
 
            if(elemento.previousElementSibling){
                elemento.previousElementSibling.classList.add("ativo");
                settings.legenda(elemento.previousElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");                     
                elemento = document.querySelector("a:last-child");
                elemento.classList.add("ativo");
                this.legenda(elemento);
            }
            intervalo = setInterval(settings.slide,10000);
        },
 
        legenda: function(obj){
            var legenda = obj.querySelector("img").getAttribute("alt");
            document.querySelector("figcaption").innerHTML = legenda;
        }
 
    };
 
    //chama o slide
    settings.primeiraImg();
 
    //chama a legenda
    settings.legenda(elemento);
 
    //chama o slide à um determinado tempo
    var intervalo = setInterval(settings.slide,5000);
    document.querySelector(".next").addEventListener("click",settings.proximo,false);
    document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}
 
window.addEventListener("load",setaImagem,false);

var valor = 0;
var totalcarrinho = 0;
$('.botao').on('click', function (recalcular) {
    valor++;
    $(this).data('order', + valor);
    $('#resultado p').html( $(this).data('order') );

    
    var produtoID = $(this).data('produtoid');
    console.log(produtoID);
    totalcarrinho += findProduto(produtoID).precofinal;
    
    console.log("aqui:", totalcarrinho);
    
    $(this).data('calc', + totalcarrinho);


    $('.price span').html( $(this).data('calc') );

  
    
 
    
});



$('.search').on('click', function () {
   $('.btnsearch').addClass('transbtnsearch');
    
    
});
  
$( "li.prod:nth-child(1)" )
  .mouseover(function() {
    $('li.prod:nth-child(1) .botao.btn').addClass('displayb');
    
  })
  .mouseout(function() {
    $('li.prod:nth-child(1) .botao.btn').removeClass('displayb');
  });

$( "li.prod:nth-child(2)" )
  .mouseover(function() {
    $('li.prod:nth-child(2) .botao.btn').addClass('displayb');
    
  })
  .mouseout(function() {
    $('li.prod:nth-child(2) .botao.btn').removeClass('displayb');
  });
$( "li.prod:nth-child(3)" )
  .mouseover(function() {
    $('li.prod:nth-child(3) .botao.btn').addClass('displayb');
    
  })
  .mouseout(function() {
    $('li.prod:nth-child(3) .botao.btn').removeClass('displayb');
  });

  $( "li.prod:nth-child(4)" )
  .mouseover(function() {
    $('li.prod:nth-child(4) .botao.btn').addClass('displayb');
    
  })
  .mouseout(function() {
    $('li.prod:nth-child(4) .botao.btn').removeClass('displayb');
  });
  $( "li.prod:nth-child(5)" )
  .mouseover(function() {
    $('li.prod:nth-child(5) .botao.btn').addClass('displayb');
    
  })
  .mouseout(function() {
    $('li.prod:nth-child(5) .botao.btn').removeClass('displayb');
  });
$('.nav').click(function(){
  $('.menu, .nav').toggleClass('active');
});

function findProduto(idProduto){
    var produtoFinal;
    console.log(idProduto)
    for (var i in data.produtos) {
        var produto = data.produtos[i];
        if(produto.idproduto == idProduto){
            produtoFinal = produto;
            break;
        }
        
    }
    return produto;
}