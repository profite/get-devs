angular.module('produtosDiretivas', [])
    .directive('painelProdutos', function () {

        return {
            scope: {},
            restrict: 'AE',
            templateUrl: 'produtos.html',
            controller: 'VestidoController',
            controllerAs: 'vm' //!Important! Utilize este apenas se você utilizar controllerAs syntax no seu projeto, se não utilize apenas a opção de cima
        };
    })