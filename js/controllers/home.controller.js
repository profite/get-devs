angular.module('Profite')
       .controller('homeCtrl', function ($scope, $rootScope, OrdenarOpt, Model, $timeout, Util) {
           var itensCollapseCor = 5;
           $scope.ordernarList = OrdenarOpt;
           $scope.ordenarTipo = null;
           $scope.Cores = [];
           $scope.Precos = [];
           $scope.Tamanhos = [];
           $scope.Produtos = [];
           $scope.produtosCopia = [];
           $scope.corSelecionada = { id: 0 };
           $scope.precoSelecionado = { id: 0 };
           $scope.tamanhoSelecionado = { id: 0 };
           $scope.pagina = 1;
           $scope.txtExpandCores = "Ver todas as cores";
           $scope.coresOpen = false;
           $scope.mensagemErro = null;

           Model.Cores.get().then(function (res) {
               $scope.Cores = res;Util.collapse(itensCollapseCor);
           }, function (err) {
               console.log(err);
           });
           Model.Preco.get().then(function (res) {
               $scope.Precos = res;
           }, function (err) {
               console.error(err);
           });
           Model.Tamanhos.get().then(function (res) {
               $scope.Tamanhos = res;
           }, function (err) {
               console.error(err);
           });

           $scope.selecionaCor = function (cor) {
               $scope.corSelecionada = cor;Util.filtro($scope);
           };
           $scope.selecionaPreco = function (preco) {
               $scope.precoSelecionado = preco;Util.filtro($scope);
           };
           $scope.selecionaTamanho = function (tamanho) {
               $scope.tamanhoSelecionado = tamanho;Util.filtro($scope);
           };
           $scope.replaceValor = function (valor) {
               return valor.toFixed(2).replace(".", ",");
           };
           $scope.addCarrinho = function (item) {
               item.produto.addCart = true;
               Model.Carrinho.set(item);
           };

           $scope.troggleColapse = function () {
               Util.troggleColapse($scope, Util);
           };

           $scope.carregarMaisProdutos = function () {
               Util.getProdutos($scope.pagina, $scope, Util, Model, $timeout);
           };

           $scope.ordenarChange = function (id) {
               $scope.ordenarTipo = id;
               Util.filtro($scope);
           };

           $scope.expandOptions = function ($event) {
               Util.abreFiltroMobile($event);
           };

           $scope.fecharFiltro = function ($event) {
               Util.fechaFiltroMobile($event);
           };

           $scope.troggleCategoriaFiltroMobile = function ($event) {
               Util.troggleCategoriaFiltroMobile($event);
           };

           $scope.carregarMaisProdutos();

           $rootScope.$on('$routeChangeStart', function (event, next, current) {
               Util.carregaCarrinho(next, Util);
           });

           $scope.showLimpaFiltros = function () {
               return Util.showBtnLimpa($scope);
           };

           $scope.limpaFiltros = function () {
               Util.limpaFiltros($scope, Util);
           };
       });