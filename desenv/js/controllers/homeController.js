((app) => {
  let HomeCTRL = ($scope, OrdenarOpt, $rootScope, Model) => {
    let itensCollapseCor = 5;
    let collapseClose = false;
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

    let getProdutos = skip => {
      Model.Produtos.get(skip).then( res => {
        for(let i in res){
          res[i].produto.addCart = false;
          $scope.Produtos.push(res[i]);
          $scope.produtosCopia.push(res[i]);
        }
      });
    };

    let collapse = (list) => {
      let boxcores = document.querySelector("#lista-cores");
      angular.element(boxcores).ready(function() {
          let listaCores = boxcores.querySelectorAll("li");
          if(listaCores.length){
            for(let i = 0; i < listaCores.length; i++){
              if(i > itensCollapseCor && listaCores[i].className.indexOf("colapse") < 0){
                angular.element(listaCores[i]).addClass('colapse hide');
              }
            }
          }
      });
    };

    $scope.troggleColapse = () => {
      let lista = document.querySelectorAll(".colapse");
        for(let i = 0; i < lista.length; i++){
          if(lista[i].className.indexOf("hide") < 0){
            angular.element(lista[i]).addClass('hide');
            $scope.txtExpandCores = "Ver todas as cores";
          }else if(lista[i].className.indexOf("hide") > 0){
            let el = angular.element(lista[i]);
            el.removeClass('hide');
            $scope.txtExpandCores = "Ocultar as cores";
          }
        }
        $scope.coresOpen = !$scope.coresOpen;
        trataClasseBtn( $scope.coresOpen );
    };

    let trataClasseBtn = (ocasiao) => {
      let bt = document.querySelector("#btnCores");
      let seta = bt.querySelector('.arrow');
      let classeSeta = seta.className;
      if(!ocasiao){
        classeSeta = classeSeta.split(" ");
        classeSeta.splice(1, classeSeta.indexOf('open'));
        seta.className =  classeSeta.join(" ");
      }else{
        seta.className += " open";
      }
    };

    Model.Cores.get().then( res => {$scope.Cores = res; collapse();}, err => {console.log(err);} );
    Model.Preco.get().then( res => {$scope.Precos = res}, err => {console.error(err);} );
    Model.Tamanhos.get().then( res => {$scope.Tamanhos = res}, err => {console.error(err);} );


    $scope.selecionaCor = cor => {$scope.corSelecionada = cor;};
    $scope.selecionaPreco = preco => {$scope.precoSelecionado = preco;};
    $scope.selecionaTamanho = tamanho => {$scope.tamanhoSelecionado = tamanho;};
    $scope.replaceValor = valor => valor.toFixed(2).replace(".", ",");
    $scope.addCarrinho = item => {
      item.produto.addCart = true;
      $rootScope.listaCompra.push(item);
    };

    $scope.filtro = () => {
      if($scope.corSelecionada.id > 0){
        $scope.Produtos = [];
        $scope.produtosCopia;
      }else{
        $scope.Produtos = angular.copy($scope.produtosCopia);
      }
    }


    getProdutos($scope.pagina);
  };

  app.controller('homeController',["$scope", "OrdenarOpt", "$rootScope", "Model", HomeCTRL]);
})(app);
