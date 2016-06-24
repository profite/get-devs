((app) => {
  let CarrinhoCTRL = ($scope, $rootScope) => {
      $scope.ListaCompras = $rootScope.listaCompra;
  };

  app.controller('carrinhoController',["$scope", "$rootScope", CarrinhoCTRL]);
})(app); 
