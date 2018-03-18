var app = angular.module('profite', ['ngRoute']);
        app.run(['$rootScope', function ($rootScope) {
            $rootScope.listaCompra = [];
        }]);
        app.config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);
        app.constant('OrdenarOpt', [
            {id: 1, label: "Mais Recentes"},
            {id: 2, label: "Menor Preço"},
            {id: 3, label: "Maior Preço"}
        ]);