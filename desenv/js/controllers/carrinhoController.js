((app) => {
  let CarrinhoCTRL = ($scope, $rootScope) => {
      $scope.ListaCompras = $rootScope.listaCompra;
      $scope.total = () => {
        let t = 0;
        for(let i in $scope.ListaCompras){
          t += $scope.ListaCompras[i].pagamento.por;
        }
        return "R$ " + t.toFixed(2).replace(".", ",");
      }
  };

  app.controller('carrinhoController',["$scope", "$rootScope", CarrinhoCTRL]);
})(app);
