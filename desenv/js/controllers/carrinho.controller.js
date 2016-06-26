((app) => {
  let CarrinhoCTRL = ($scope, Carrinho) => {
      $scope.ListaCompras = Carrinho.get();
      $scope.total = () => {
        let t = 0;
        for(let i in $scope.ListaCompras){
          t += $scope.ListaCompras[i].pagamento.por;
        }
        return "R$ " + t.toFixed(2).replace(".", ",");
      };

      $scope.remove = (item) => {
        let confirma = confirm("Você deseja relamente retirar este produto do carrinho?");
        if(confirma){
          Carrinho.remove(item);
          $scope.ListaCompras = Carrinho.get();
          $scope.$emit("ListaCompras");
        }
      };
  };

  app.controller('carrinhoController',["$scope", "Carrinho", CarrinhoCTRL]);
})(app);
