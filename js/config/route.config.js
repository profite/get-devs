angular
        .module('profite')
        .config(routeConfig);

    function routeConfig($routeProvider, $locationProvider){

        $locationProvider.hashPrefix("");

        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'
        });
        $routeProvider.when('/carrinho', {
            templateUrl: 'view/carrinho.html',
            controller: 'carrinhoCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    }