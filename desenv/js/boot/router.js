((app) => {

  let configRoute = ($routeProvider) => {
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .otherwise('/');
  };

  app.config(["$routeProvider", configRoute]);
})(app);
