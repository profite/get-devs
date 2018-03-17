(function () {
    'use strict';

    angular.module('profite', ['ngRoute'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.listaCompra = [];
        }])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }])
        .constant('OrdenarOpt', [
            {id: 1, label: "Mais Recentes"},
            {id: 2, label: "Menor Preço"},
            {id: 3, label: "Maior Preço"}
        ]);
})();