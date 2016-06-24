((app) => {
  let HomeCTRL = ($scope, OrdenarOpt, $rootScope, Model) => {
    $scope.ordernarList = OrdenarOpt;
    $scope.ordenarTipo = null;
    $scope.Cores =
    $scope.Precos =
    $scope.Tamanhos = [];
    $scope.corSelecionada =
    $scope.precoSelecionado =
    $scope.tamanhoSelecionado = {id:0};

    Model.Cores.get().then( res => $scope.Cores = res, err => console.log(err) );
    Model.Preco.get().then( res => $scope.Precos = res, err => console.error(err) );
    Model.Tamanhos.get().then( res => $scope.Tamanhos = res, err => console.error(err) );

    $scope.selecionaCor = cor => $scope.corSelecionada = cor;
    $scope.selecionaPreco = preco => $scope.precoSelecionado = preco;
    $scope.selecionaTamanho = tamanho => $scope.tamanhoSelecionado = tamanho;
    $scope.replaceValor = valor => valor.toFixed(2).replace(".", ",");
  };

  app.controller('homeController',["$scope", "OrdenarOpt", "$rootScope", "Model", HomeCTRL]);
})(app);
