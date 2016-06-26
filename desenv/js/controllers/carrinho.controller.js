((app) => {
  let CarrinhoCTRL = ($scope, Carrinho) => {
      $scope.ListaCompras = Carrinho.get();
      $scope.total = () => {
        let t = 0;
        for(let i in $scope.ListaCompras){
          t += $scope.ListaCompras[i].pagamento.por;
        }
        return "R$ " + t.toFixed(2).replace(".", ",");
      }
  };

  app.controller('carrinhoController',["$scope", "Carrinho", CarrinhoCTRL]);
})(app);
