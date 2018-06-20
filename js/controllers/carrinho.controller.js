angular.module('profite')
       .controller('carrinhoCtrl', function ($scope, Carrinho) {
           $scope.ListaCompras = Carrinho.get();

           $scope.total = function () {
               var t = 0;
               for(var i in $scope.ListaCompras){
                   t += $scope.ListaCompras[i].pagamento.por;
               }
               return "R$ " + t.toFixed(2).replace(".", ",");
           };

           $scope.remove = function (item) {
             Carrinho.remove(item);
             $scope.ListaCompras = Carrinho.get();
             $scope.$emit('ListaCompras');
           };
       });