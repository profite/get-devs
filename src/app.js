(function(){
    
    var app = angular.module("app", ["ngRoute"]);  
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/produtos", {
                templateUrl: "templates/produtos.html",
                controller: "ProdutoController"
            }) 
            .otherwise({redirectTo:"/produtos"});
    });
    
}());

