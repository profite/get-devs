var app = angular.module("appProfite", ['ngRoute']);

((app) => {
   app
   .run(["$rootScope", ($rootScope) => {
      $rootScope.listaCompra = [];
   }])
   .constant("OrdenarOpt",[
      {id: 0, label: "Mais Recentes"},
      {id: 1, label: "Menor Preço"},
      {id: 2, label: "Maior Preço"}
   ]);
})(app);
