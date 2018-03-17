(function(){
    'use strict';

    angular
        .module('profite')
        .config(routeConfig)

    /** @ngInject */
    function routeConfig($routeProvider, $locationProvider){

        $locationProvider.hashPrefix("");

        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controllerAs: 'vm',
            controller: 'homeCtrl'
        });
        $routeProvider.when('/carrinho', {
            templateUrl: 'view/carrinho.html',
            controllerAs: 'vm',
            controller: 'carrinhoCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    }

}());