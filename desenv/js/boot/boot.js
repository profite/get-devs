var app = angular.module("appProfite", ['ngRoute']);

((app) => {
   app
   .run(["$rootScope", ($rootScope) => {
      $rootScope.listaCompra = [];
   }])
   .config(["$compileProvider", ($compileProvider) => {
      $compileProvider.debugInfoEnabled(false);
   }])
   .constant("OrdenarOpt",[
      {id: 1, label: "Mais Recentes"},
      {id: 2, label: "Menor Preço"},
      {id: 3, label: "Maior Preço"}
   ]);
})(app);
