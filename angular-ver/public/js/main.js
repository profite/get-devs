angular.module('geekiebooks', ['ngRoute'])
    .config(function ($routeProvider) {
        
        $routeProvider.when('/livros', {
            templateUrl: 'partials/home.html',
            controller: 'LivrosController'
        });

        $routeProvider.when('/livros/generos/fantasia', {
            templateUrl: 'partials/home.html',
            controller: 'FiltroFantasiaController'
        });

        $routeProvider.when('/livros/generos/policial', {
            templateUrl: 'partials/home.html',
            controller: 'FiltroPolicialController'
        });

        $routeProvider.when('/cadastro', {
            templateUrl: 'partials/cadastro.html',
            controller: 'CadastroController'
        });

        $routeProvider.otherwise({ redirectTo: '/livros' });
    });
