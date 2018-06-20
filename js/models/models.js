angular.module('profite')
       .factory('Model', function (Cores, Tamanhos, Preco, Produtos, Carrinho) {
           return {
               Cores: Cores,
               Tamanhos: Tamanhos,
               Preco: Preco,
               Produtos: Produtos,
               Carrinho: Carrinho
           }
       });