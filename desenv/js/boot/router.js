((app) => {

  let configRoute = ($routeProvider) => {
    $routeProvider
    .when('/home',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/carrinho',{
      templateUrl: 'views/carrinho-compras.html',
      controller: 'carrinhoController'
    })
    .otherwise('/home');
  };

  app.config(["$routeProvider", configRoute]);
})(app);
