((app) => {
  let HomeCTRL = ($scope, $rootScope, OrdenarOpt, Model, $timeout, Util) => {
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

    $scope.selecionaCor = cor => {$scope.corSelecionada = cor; Util.filtro($scope)};
    $scope.selecionaPreco = preco => {$scope.precoSelecionado = preco; Util.filtro($scope)};
    $scope.selecionaTamanho = tamanho => {$scope.tamanhoSelecionado = tamanho; Util.filtro($scope)};
    $scope.replaceValor = valor => valor.toFixed(2).replace(".", ",");
    $scope.addCarrinho = item => {
      item.produto.addCart = true;
      Model.Carrinho.set(item);
    };

    $scope.troggleColapse = () => {
      Util.troggleColapse($scope, Util);
    };

    $scope.carregarMaisProdutos = () => {
      Util.getProdutos($scope.pagina, $scope, Util, Model, $timeout);
    };

    $scope.ordenarChange = (id) => {
      $scope.ordenarTipo = id;
      Util.filtro($scope);
    };

    $scope.expandOptions = ($event) => {
      Util.abreFiltroMobile($event);
    };

    $scope.fecharFiltro = ($event) =>{
      Util.fechaFiltroMobile($event);
    };

    $scope.troggleCategoriaFiltroMobile = ($event) =>{
      Util.troggleCategoriaFiltroMobile($event);
    };

    $scope.carregarMaisProdutos();

    $rootScope.$on('$routeChangeStart', (event, next, current) => {
      Util.carregaCarrinho(next, Util);
    });

    $scope.showLimpaFiltros = () => {
      return Util.showBtnLimpa($scope);
    };

    $scope.limpaFiltros = () => {
      Util.limpaFiltros($scope, Util);
    }
  };

  app.controller('homeController',["$scope", "$rootScope", "OrdenarOpt", "Model", "$timeout", "Util", HomeCTRL]);
})(app);
