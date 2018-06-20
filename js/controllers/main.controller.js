angular.module('profite')
       .controller('mainCtrl', function ($scope, $routeParams, Carrinho) {
            $scope.qtdCompra = 0;
            $scope.$on('ListaCompras', function () {
                $scope.qtdCompra = Carrinho.count();
            });
       });