(function(){
  angular.module("appProfite", ['ngRoute'])
         .config(["$routeProvider", configRoute]);

  let configRoute = ($routeProvider) => {
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .otherwise('/');
  };

})();
