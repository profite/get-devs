((app) => {
  let MainCTRL = ($scope, Carrinho) => {
    $scope.qtdCompra = 0;
    $scope.$on("ListaCompras", () => {
      $scope.qtdCompra = Carrinho.count();
    });
  };

  app.controller('mainController',["$scope", "Carrinho", MainCTRL]);
})(app);
