((app) => {
  let HomeCTRL = ($scope, OrdenarOpt, $rootScope, Model, $timeout, Util) => {
    let itensCollapseCor = 5;
    $scope.ordernarList = OrdenarOpt;
    $scope.ordenarTipo = null;
    $scope.Cores = [];
    $scope.Precos = [];
    $scope.Tamanhos = [];
    $scope.Produtos = [];
    $scope.produtosCopia = [];
    $scope.corSelecionada = {id:0};
    $scope.precoSelecionado = {id:0};
    $scope.tamanhoSelecionado = {id:0};
    $scope.pagina = 1;
    $scope.txtExpandCores = "Ver todas as cores";
    $scope.coresOpen = false;
    $scope.mensagemErro = null;

    Model.Cores.get().then( res => {$scope.Cores = res; Util.collapse(itensCollapseCor);}, err => {console.log(err);} );
    Model.Preco.get().then( res => {$scope.Precos = res}, err => {console.error(err);} );
    Model.Tamanhos.get().then( res => {$scope.Tamanhos = res}, err => {console.error(err);} );

    $scope.selecionaCor = cor => {$scope.corSelecionada = cor; Util.filtro(Util, $scope)};
    $scope.selecionaPreco = preco => {$scope.precoSelecionado = preco; Util.filtro(Util, $scope)};
    $scope.selecionaTamanho = tamanho => {$scope.tamanhoSelecionado = tamanho; Util.filtro(Util, $scope)};
    $scope.replaceValor = valor => valor.toFixed(2).replace(".", ",");
    $scope.addCarrinho = item => {
      item.produto.addCart = true;
      $rootScope.listaCompra.push(item);
    };

    $scope.troggleColapse = () => {
      Util.troggleColapse($scope, Util);
    };

    $scope.carregarMaisProdutos = () => {
      Util.getProdutos($scope.pagina, $scope, Util, Model, $timeout);
    };

    $scope.ordenarChange = () => {
      Util.filtro(Util, $scope)
    };

    $scope.carregarMaisProdutos();

  };

  app.controller('homeController',["$scope", "OrdenarOpt", "$rootScope", "Model", "$timeout", "Util", HomeCTRL]);
})(app);
