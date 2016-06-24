((app) => {

  let configRoute = ($routeProvider) => {
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/carrinho',{
      templateUrl: 'views/carrinho-compras.html',
      controller: 'carrinhoController'
    })
    .otherwise('/');
  };

  app.config(["$routeProvider", configRoute]);
})(app);
